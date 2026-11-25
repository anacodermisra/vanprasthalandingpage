import type { Metadata } from "next";
import { Lora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The CEO Within | Corporate Rejuvenation Retreat | Vanprastha Dunagiri (7,500 ft)",
  description:
    "A 60-Hour Himalayan Rejuvenation for Business Leaders & Leadership Teams at Vanprastha Resorts, Dunagiri (Almora). Digital detox, practical balancing & relaxation breathwork, nourishing Himalayan meals, and strategic clarity at the feet of Babaji's Cave.",
  keywords: [
    "Vanprastha Resorts",
    "The CEO Within Retreat",
    "Corporate Retreat Himalayas",
    "Dunagiri Almora Retreat",
    "Executive Breathwork Retreat",
    "Executive Digital Detox",
    "Leadership Rejuvenation December 2026",
  ],
  openGraph: {
    title: "The CEO Within | Corporate Rejuvenation Retreat | Vanprastha",
    description:
      "Escape cognitive burnout at 7,500 ft. Strictly 38 seats per cohort. December 11-13 & 25-27, 2026 at Vanprastha Resorts, Dunagiri.",
    url: "https://vanprastharesorts.com",
    siteName: "Vanprastha Resorts Dunagiri",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen bg-canvas text-ink antialiased selection:bg-gold-light selection:text-forest-dark">
        {children}
      </body>
    </html>
  );
}
