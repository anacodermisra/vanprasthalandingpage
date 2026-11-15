"use client";

import React, { useState } from "react";
import { ChevronDown, MessageCircle, HelpCircle, MapPin, Phone } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do I reach Vanprastha Resorts in Dunagiri (Almora)?",
      a: "The most comfortable and reliable journey from Delhi/NCR is via train to Kathgodam Railway Station (New Delhi–Kathgodam Shatabdi Express #12040 arrives at ~11:40 AM). From Kathgodam, it is a scenic 4 to 4.5-hour private cab drive through Ranikhet up into the Dunagiri hills (7,500 ft). Our retreat coordinator arranges dedicated, trusted mountain cab pickups directly from Kathgodam station to the resort gates for all participants.",
    },
    {
      q: "What if there is a genuine work or family emergency while my phone is in the Wooden Box?",
      a: "Your peace of mind is paramount. Prior to depositing your smartphone, you are given our dedicated 24/7 Resort Desk Emergency WhatsApp and hotline numbers to share with your executive assistant, co-founders, and family. Should a genuine emergency occur, our on-site team is alerted instantly and will notify you in person. You remain reachable for real emergencies without being trapped in constant digital vigilance.",
    },
    {
      q: "What is the weather and temperature like in Dunagiri in December?",
      a: "December in Dunagiri (7,500 ft elevation) is crisp, sunny, and clear during the day (14°C to 18°C) with glorious unbroken views of snow-clad peaks like Trishul and Nanda Devi. Evenings and nights are cold (2°C to 6°C). Our wooden cottages are equipped with heavy thermal bedding, warm down duvets, hot water, and tea/coffee warmers. We recommend packing layered woollens, thermal base layers, a warm fleece/down jacket, and sturdy walking shoes.",
    },
    {
      q: "Is the trek to Mahavatar Babaji's Cave physically demanding?",
      a: "The trail to Babaji’s Cave is a gentle, scenic mountain walk of approximately 1.5 km each way through fragrant pine forest with stone steps. It is accessible for anyone with normal executive fitness. We take an unhurried, mindful walking pace with pauses to breathe and take in the forest air. Trekking poles are available at the resort if desired.",
    },
    {
      q: "Do I need prior yoga or meditation experience? What techniques are taught?",
      a: "No previous experience is needed. We strictly do not teach monastic or esoteric systems like Kriya Yoga to attendees. CA (Dr.) Alok Misra guides practical balancing, focusing, and relaxation breathwork techniques designed specifically for leaders. These are simple, science-backed breathing protocols calibrated to down-regulate the nervous system, improve heart rate variability, and restore sharp mental clarity for complex decision-making.",
    },
    {
      q: "What kind of food is served? Can dietary preferences be accommodated?",
      a: "Vanprastha Resorts is a 100% vegetarian, alcohol-free, and tobacco-free mountain sanctuary. We serve wholesome, nourishing Himalayan meals prepared fresh daily in our kitchen using local organic grains (Mandua/finger millet, Jhangora/barnyard millet), pahadi lentils, forest herbs, and pure cow ghee, served in handcrafted brass thalis. We happily cater to Jain, vegan, gluten-sensitive, or specific dietary requests with advance notice.",
    },
    {
      q: "Why is each cohort strictly capped at 38 participants?",
      a: "True executive renewal and deep peer conversation cannot happen in crowded banquets with 100+ attendees. By capping each batch strictly at 38 leaders, we ensure intimate fireside peer circles, direct one-on-one access to Dr. Alok Misra during masterclasses, and an environment of trust where participants can speak openly without social posturing.",
    },
    {
      q: "Can our corporate organization book a full wing or sponsor a leadership team?",
      a: "Yes. Many founders and organizations sponsor their core leadership team (3 to 8 executives) as a high-impact alignment and burnout prevention initiative. We provide corporate GST invoicing for input tax credit, customized breakout discussions, and private Kathgodam transfers for corporate groups.",
    },
    {
      q: "What is the cancellation and rescheduling policy?",
      a: "If your corporate commitments change unexpectedly, you can transfer your seat to a co-founder/colleague at zero extra charge, or reschedule your registration to another upcoming cohort with 14 days' advance notice. Cancellations made 21 days prior to the cohort start date receive a 90% refund.",
    },
  ];

  const waLink = buildWhatsAppLink({
    cohort: "Questions about Travel & Accommodation",
  });

  return (
    <section id="faq" className="py-24 bg-canvas-subtle border-b border-gold-border/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.22em] uppercase text-gold block mb-2 font-sans">
            Clarity &amp; Travel Guidance
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-forest-dark leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-ink-secondary text-base font-light max-w-xl mx-auto">
            Everything you need to know about travel to Dunagiri, the deodar wooden box protocol,
            and your 60-hour retreat stay.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-14">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-gold-border/40 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-canvas-warm/40 transition-colors"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-forest-dark">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-canvas-warm flex items-center justify-center shrink-0 border border-gold-border transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-forest-dark text-gold" : "text-forest-dark"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-ink-secondary font-light leading-relaxed border-t border-gray-100">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="p-8 rounded-3xl bg-canvas-warm border border-gold-border/70 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-forest-dark text-gold mx-auto flex items-center justify-center">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-forest-dark">
              Have a specific question regarding dates or transfers?
            </h4>
            <p className="text-xs sm:text-sm text-ink-secondary mt-1 font-light max-w-lg mx-auto">
              Our retreat team is on hand on WhatsApp to share train recommendations, route maps,
              and coordinate your Himalayan arrival.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-waGreen hover:bg-waGreen-hover transition-all shadow-md font-sans"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat with Retreat Team on WhatsApp</span>
            </a>

            <a
              href="tel:+919650102777"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-forest-dark bg-white border border-gold-border hover:border-gold transition-all font-sans"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>Call +91 9650102777</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
