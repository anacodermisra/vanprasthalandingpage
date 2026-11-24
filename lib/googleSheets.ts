/**
 * Google Sheets Lead Sync for Vanprastha Retreats
 * Automatically logs leads to Google Sheets and triggers email alerts.
 */

export const DEFAULT_GOOGLE_SHEET_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbzyg-Ld11NY-txRzifp393VF7QoIZXpo5D-eStTWgBHzXmx2gAXTeL1f79pw3glzilNPg/exec";

export interface GoogleSheetLeadPayload {
  fullName: string;
  whatsappPhone: string;
  workEmail: string;
  companyName?: string;
  designation?: string;
  bookingType: string;
  teamSize?: number;
  preferredCohort: string;
  roomPreference: string;
  notes?: string;
  utmSource?: string;
  leadId?: string;
}

export async function saveLeadToGoogleSheet(lead: GoogleSheetLeadPayload): Promise<boolean> {
  const webhookUrl =
    process.env.GOOGLE_SHEET_WEBHOOK_URL || DEFAULT_GOOGLE_SHEET_WEBHOOK_URL;

  if (!webhookUrl) {
    return false;
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lead),
      redirect: "follow",
    });

    if (!res.ok) {
      console.error(`[GoogleSheetSync] HTTP error: ${res.status}`);
      return false;
    }

    const data = await res.json().catch(() => null);
    console.log("[GoogleSheetSync] Synced successfully to Google Sheets:", data);
    return true;
  } catch (err: any) {
    console.error("[GoogleSheetSync] Failed to sync lead to Google Sheet:", err.message);
    return false;
  }
}
