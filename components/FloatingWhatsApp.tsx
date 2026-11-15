"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);
  const waLink = buildWhatsAppLink();

  return (
    <div className="fixed bottom-20 md:bottom-6 right-5 z-40 flex items-end flex-col gap-2">
      {/* Floating Prompt Bubble for Desktop */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white text-forest-dark border border-gold-border shadow-heritage text-xs font-medium animate-bounce duration-1000">
          <span className="w-2 h-2 rounded-full bg-waGreen shrink-0" />
          <span>Have questions about the retreat? Chat on WhatsApp</span>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="text-ink-muted hover:text-forest-dark p-0.5 ml-1"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-waGreen hover:bg-waGreen-hover text-white shadow-xl hover:scale-105 transition-all duration-200"
        aria-label="Chat directly on WhatsApp with Vanprastha Retreat Team"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-gold" />
        </span>
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
