"use client";

import React from "react";
import { MessageCircle, Sparkles, Calendar } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function MobileStickyBar() {
  const waLink = buildWhatsAppLink();

  const handleApplyClick = () => {
    const applySection = document.getElementById("apply");
    if (applySection) {
      applySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-forest-dark/95 backdrop-blur-md border-t border-forest-border p-3 px-4 shadow-2xl safe-area-pb">
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        {/* Direct WhatsApp Action */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-waGreen hover:bg-waGreen-hover text-white text-xs font-bold transition-all shadow-md active:scale-95"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Chat</span>
        </a>

        {/* Apply for Seat Button */}
        <button
          onClick={handleApplyClick}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-gold hover:bg-gold-hover text-forest-dark text-xs font-bold transition-all shadow-goldGlow active:scale-95"
        >
          <Calendar className="w-4 h-4 text-forest-dark" />
          <span>Apply (38 Seats)</span>
        </button>
      </div>
    </div>
  );
}
