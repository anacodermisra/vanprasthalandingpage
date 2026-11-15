"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function MinimalFAQ() {
  const waLink = buildWhatsAppLink();

  return (
    <section id="faq" className="py-20 bg-forest-dark text-canvas">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
          Have Questions?
        </h2>
        <p className="text-ink-onDarkMuted mb-8 leading-relaxed">
          Our retreat team is on WhatsApp to help with any questions about the program,
          property, or travel logistics.
        </p>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-waGreen hover:bg-waGreen-hover"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </section>
  );
}
