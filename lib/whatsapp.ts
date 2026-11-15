/**
 * WhatsApp Helper for Vanprastha Retreat Team
 * Allows direct conversation with the retreat team at Vanprastha Resorts, Dunagiri.
 */

// Official Vanprastha Retreat Desk WhatsApp Number
export const RETREAT_WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "919650102777";

/**
 * Builds a direct WhatsApp chat link with pre-filled message
 */
export function buildWhatsAppLink(options?: {
  cohort?: string;
  fullName?: string;
  companyName?: string;
}): string {
  let message = "Namaste Vanprastha Team, I am interested in The CEO Within Corporate Retreat (Dec 2026).";

  if (options?.cohort) {
    message += ` Inquiring for: ${options.cohort}.`;
  }
  if (options?.fullName) {
    message += ` My name is ${options.fullName}.`;
  }
  if (options?.companyName) {
    message += ` Organization: ${options.companyName}.`;
  }
  message += " Please share the cohort details, room availability, and travel guidance.";

  return `https://wa.me/${RETREAT_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}

/**
 * Sends an automated notification to the Retreat Coordinator's WhatsApp
 */
export async function sendLeadWhatsAppNotification(lead: {
  fullName: string;
  phone: string;
  email: string;
  company?: string;
  cohort: string;
  bookingType: string;
  teamSize?: number;
}): Promise<boolean> {
  const webhookUrl = process.env.WHATSAPP_ALERT_WEBHOOK_URL;
  const cloudApiToken = process.env.WHATSAPP_CLOUD_API_TOKEN;
  const phoneId = process.env.WHATSAPP_PHONE_NUMBER_ID;

  const alertText = `🚨 *New Corporate Retreat Application!*\n\n` +
    `👤 *Name:* ${lead.fullName}\n` +
    `📞 *Phone:* ${lead.phone}\n` +
    `📧 *Email:* ${lead.email}\n` +
    `🏢 *Company:* ${lead.company || "Individual Leader"}\n` +
    `🗓️ *Cohort:* ${lead.cohort}\n` +
    `👥 *Type:* ${lead.bookingType} (Size: ${lead.teamSize || 1})\n\n` +
    `👉 *Chat with Applicant:* https://wa.me/${lead.phone.replace(/[^0-9]/g, "")}`;

  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: alertText, lead }),
      });
      return true;
    } catch (err) {
      console.error("WhatsApp webhook failed:", err);
    }
  }

  if (cloudApiToken && phoneId && RETREAT_WHATSAPP_NUMBER) {
    try {
      await fetch(
        `https://graph.facebook.com/v19.0/${phoneId}/messages`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${cloudApiToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messaging_product: "whatsapp",
            to: RETREAT_WHATSAPP_NUMBER,
            type: "text",
            text: { body: alertText },
          }),
        }
      );
      return true;
    } catch (err) {
      console.error("WhatsApp Cloud API dispatch failed:", err);
    }
  }

  return false;
}
