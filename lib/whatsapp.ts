/**
 * WhatsApp Helper for Vanprastha Retreat Team
 * Allows direct conversation with the retreat team at Vanprastha Resorts, Dunagiri.
 */

// Official Vanprastha Retreat Desk WhatsApp Numbers for Leads
export const RETREAT_WHATSAPP_NUMBERS = [
  process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "919650102777",
  "919310312404", // Anand Misra
];

// Primary desk number for visitor direct chats
export const RETREAT_WHATSAPP_NUMBER = RETREAT_WHATSAPP_NUMBERS[0];

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

  if (cloudApiToken && phoneId) {
    try {
      const results = await Promise.allSettled(
        RETREAT_WHATSAPP_NUMBERS.map(async (recipientNumber) => {
          // 1. Try sending the official utility template first (bypasses 24-hr restriction for 24/7 delivery)
          try {
            const templateRes = await fetch(
              `https://graph.facebook.com/v22.0/${phoneId}/messages`,
              {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${cloudApiToken}`,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  messaging_product: "whatsapp",
                  to: recipientNumber,
                  type: "template",
                  template: {
                    name: "vanprastha_retreat_lead_alert",
                    language: { code: "en_US" },
                    components: [
                      {
                        type: "body",
                        parameters: [
                          { type: "text", text: lead.fullName || "Inquirer" },
                          { type: "text", text: lead.phone || "N/A" },
                          { type: "text", text: lead.email || "N/A" },
                          { type: "text", text: lead.company || "Individual Leader" },
                        ],
                      },
                    ],
                  },
                }),
              }
            );

            const templateData = await templateRes.json();
            if (templateRes.ok) {
              console.log(`✅ WhatsApp template dispatch to ${recipientNumber} succeeded:`, templateData?.messages?.[0]?.id);
              return templateData;
            }
          } catch (tErr) {
            console.warn("Template attempt error, falling back to text:", tErr);
          }

          // 2. Fallback to freeform text (works when 24-hour service window is open)
          const res = await fetch(
            `https://graph.facebook.com/v22.0/${phoneId}/messages`,
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${cloudApiToken}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                messaging_product: "whatsapp",
                to: recipientNumber,
                type: "text",
                text: { body: alertText },
              }),
            }
          );
          const data = await res.json();
          if (!res.ok) {
            console.warn(`WhatsApp dispatch to ${recipientNumber} returned ${res.status}:`, data);
          } else {
            console.log(`✅ WhatsApp dispatch to ${recipientNumber} succeeded:`, data?.messages?.[0]?.id);
          }
          return data;
        })
      );
      return results.some((r) => r.status === "fulfilled");
    } catch (err) {
      console.error("WhatsApp Cloud API dispatch failed:", err);
    }
  }

  return false;
}
