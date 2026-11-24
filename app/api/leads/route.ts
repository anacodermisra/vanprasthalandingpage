import { NextRequest, NextResponse } from "next/server";
import { saveLead, getLeads, deleteLead, RetreatLead } from "@/lib/supabase";
import { sendLeadWhatsAppNotification, buildWhatsAppLink } from "@/lib/whatsapp";

// ─── Security helpers ────────────────────────────────────────────────────────

/** Shared security headers applied to every response */
const SECURITY_HEADERS = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Cache-Control": "no-store, max-age=0",
};

function withSecurity(res: NextResponse): NextResponse {
  Object.entries(SECURITY_HEADERS).forEach(([k, v]) => res.headers.set(k, v));
  return res;
}

function verifyAdminKey(request: NextRequest): boolean {
  const authHeader = request.headers.get("authorization");
  const url = new URL(request.url);
  const key = url.searchParams.get("key") || authHeader?.replace("Bearer ", "");
  const masterKey = process.env.ADMIN_SECRET_KEY;
  // Require the key to come from env — never fall back to a hard-coded default in production
  if (!masterKey) return false;
  return key === masterKey;
}

/** Simple in-memory rate limiter for the public POST endpoint */
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5; // max 5 submissions per IP per minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  if (entry.count > RATE_LIMIT_MAX) return true;
  return false;
}

// ─── GET — admin only ────────────────────────────────────────────────────────

export async function GET(request: NextRequest) {
  if (!verifyAdminKey(request)) {
    return withSecurity(
      NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    );
  }

  const leads = await getLeads();

  return withSecurity(
    NextResponse.json({ success: true, count: leads.length, leads })
  );
}

// ─── DELETE — admin only ─────────────────────────────────────────────────────

export async function DELETE(request: NextRequest) {
  if (!verifyAdminKey(request)) {
    return withSecurity(
      NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    );
  }

  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  if (!id || typeof id !== "string" || id.trim().length === 0) {
    return withSecurity(
      NextResponse.json({ error: "Missing ?id= parameter" }, { status: 400 })
    );
  }

  await deleteLead(id.trim());
  return withSecurity(
    NextResponse.json({ success: true, deletedId: id })
  );
}

// ─── POST — public lead submission ──────────────────────────────────────────

export async function POST(request: NextRequest) {
  // Rate limiting by IP
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  if (isRateLimited(ip)) {
    return withSecurity(
      NextResponse.json(
        { error: "Too many requests. Please wait a moment and try again." },
        { status: 429 }
      )
    );
  }

  // Enforce JSON content-type
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return withSecurity(
      NextResponse.json({ error: "Invalid request format." }, { status: 415 })
    );
  }

  try {
    const body = await request.json();

    const {
      fullName,
      whatsappPhone,
      workEmail,
      companyName,
      designation,
      bookingType,
      teamSize,
      preferredCohort,
      roomPreference,
      notes,
      utmSource,
    } = body;

    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return withSecurity(NextResponse.json(
        { error: "Please provide your full name." },
        { status: 400 }
      ));
    }

    if (
      !whatsappPhone ||
      typeof whatsappPhone !== "string" ||
      whatsappPhone.trim().length < 8
    ) {
      return withSecurity(NextResponse.json(
        { error: "Please provide your WhatsApp contact number." },
        { status: 400 }
      ));
    }

    if (
      !workEmail ||
      typeof workEmail !== "string" ||
      !workEmail.includes("@") ||
      !workEmail.includes(".")
    ) {
      return withSecurity(NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      ));
    }

    const leadRecord: RetreatLead = {
      full_name: fullName.trim(),
      whatsapp_phone: whatsappPhone.trim(),
      work_email: workEmail.trim().toLowerCase(),
      company_name: companyName?.trim() || "",
      designation: designation?.trim() || "",
      booking_type: bookingType === "corporate_team" ? "corporate_team" : "individual",
      team_size: Number(teamSize) > 0 ? Number(teamSize) : 1,
      preferred_cohort:
        preferredCohort === "batch_1" ||
        preferredCohort === "batch_2" ||
        preferredCohort === "flexible"
          ? preferredCohort
          : "flexible",
      room_preference:
        roomPreference === "double" ||
        roomPreference === "triple" ||
        roomPreference === "quad" ||
        roomPreference === "corporate"
          ? roomPreference
          : "double",
      notes: notes?.trim() || "",
      utm_source: utmSource || "meta_ads",
    };

    // Save to 24/7 cloud database
    const result = await saveLead(leadRecord);

    if (!result.success) {
      return withSecurity(NextResponse.json(
        { error: "Could not record registration. Please connect via WhatsApp directly." },
        { status: 500 }
      ));
    }

    // Trigger WhatsApp notification asynchronously
    sendLeadWhatsAppNotification({
      fullName: leadRecord.full_name,
      phone: leadRecord.whatsapp_phone,
      email: leadRecord.work_email,
      company: leadRecord.company_name,
      cohort:
        leadRecord.preferred_cohort === "batch_1"
          ? "Batch 1 (11–13 Dec 2026)"
          : leadRecord.preferred_cohort === "batch_2"
          ? "Batch 2 (25–27 Dec 2026)"
          : "Flexible Cohort",
      bookingType: leadRecord.booking_type,
      teamSize: leadRecord.team_size,
    }).catch((err) => console.error("Notification trigger error:", err));

    // Personalized WhatsApp link
    const userWhatsAppLink = buildWhatsAppLink({
      cohort:
        leadRecord.preferred_cohort === "batch_1"
          ? "Batch 1 (11–13 Dec)"
          : leadRecord.preferred_cohort === "batch_2"
          ? "Batch 2 (25–27 Dec)"
          : "December 2026 Cohort",
      fullName: leadRecord.full_name,
      companyName: leadRecord.company_name,
    });

    const coordinatorNotificationLink = `https://wa.me/919310312404?text=${encodeURIComponent(
      `🚨 New Lead Received:\nName: ${leadRecord.full_name}\nPhone: ${leadRecord.whatsapp_phone}\nEmail: ${leadRecord.work_email}\nCompany: ${leadRecord.company_name || 'N/A'}\nCohort: ${leadRecord.preferred_cohort}\nRoom: ${leadRecord.room_preference}`
    )}`;

    return withSecurity(NextResponse.json({
      success: true,
      leadId: result.leadId,
      source: result.source,
      message: "Application received. Our Retreat Coordinator will connect with you shortly.",
      userWhatsAppLink,
      coordinatorWhatsAppAlert: coordinatorNotificationLink,
    }));
  } catch (error: any) {
    console.error("API error:", error);
    return withSecurity(NextResponse.json(
      { error: "An unexpected error occurred. Please chat with us directly on WhatsApp." },
      { status: 500 }
    ));
  }
}
