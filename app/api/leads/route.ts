import { NextRequest, NextResponse } from "next/server";
import { saveLead, getLeads, deleteLead, RetreatLead } from "@/lib/supabase";
import { sendLeadWhatsAppNotification, buildWhatsAppLink } from "@/lib/whatsapp";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const url = new URL(request.url);
  const key = url.searchParams.get("key") || authHeader?.replace("Bearer ", "");
  const masterKey = process.env.ADMIN_SECRET_KEY || "vanprastha2026";

  if (key !== masterKey) {
    return NextResponse.json(
      { error: "Unauthorized. Pass ?key=YOUR_SECRET_KEY" },
      { status: 401 }
    );
  }

  const leads = await getLeads();

  return NextResponse.json({
    success: true,
    count: leads.length,
    leads,
  });
}

export async function DELETE(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const url = new URL(request.url);
  const key = url.searchParams.get("key") || authHeader?.replace("Bearer ", "");
  const masterKey = process.env.ADMIN_SECRET_KEY || "vanprastha2026";

  if (key !== masterKey) {
    return NextResponse.json(
      { error: "Unauthorized. Pass ?key=YOUR_SECRET_KEY" },
      { status: 401 }
    );
  }

  const id = url.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing ?id= parameter" }, { status: 400 });
  }

  await deleteLead(id);
  return NextResponse.json({ success: true, deletedId: id });
}

export async function POST(request: NextRequest) {
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
      return NextResponse.json(
        { error: "Please provide your full name." },
        { status: 400 }
      );
    }

    if (
      !whatsappPhone ||
      typeof whatsappPhone !== "string" ||
      whatsappPhone.trim().length < 8
    ) {
      return NextResponse.json(
        { error: "Please provide your WhatsApp contact number." },
        { status: 400 }
      );
    }

    if (
      !workEmail ||
      typeof workEmail !== "string" ||
      !workEmail.includes("@") ||
      !workEmail.includes(".")
    ) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
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
      return NextResponse.json(
        { error: "Could not record registration. Please connect via WhatsApp directly." },
        { status: 500 }
      );
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

    return NextResponse.json({
      success: true,
      leadId: result.leadId,
      source: result.source,
      message: "Application received. Our Retreat Coordinator will connect with you shortly.",
      userWhatsAppLink,
      coordinatorWhatsAppAlert: coordinatorNotificationLink,
    });
  } catch (error: any) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please chat with us directly on WhatsApp." },
      { status: 500 }
    );
  }
}
