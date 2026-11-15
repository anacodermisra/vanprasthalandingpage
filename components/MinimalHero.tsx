"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, Calendar, MapPin } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function MinimalHero() {
  const waLink = buildWhatsAppLink();

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-forest-dark text-canvas">
      {/* Background Photography */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/resort-panoramic.jpg"
          alt="Vanprastha Resorts Dunagiri Valley"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/80 to-forest-dark/50" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-elevated/80 border border-gold/40 text-gold text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md">
          <MapPin className="w-3.5 h-3.5 text-gold" />
          <span>DUNAGIRI, ALMORA (7,500 FT)</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-canvas leading-[1.08] mb-6">
          The CEO Within
          <span className="block font-serif text-2xl sm:text-3xl md:text-4xl font-normal italic text-gold mt-2">
            Corporate Rejuvenation Retreat
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-ink-onDarkMuted font-light leading-relaxed mb-8">
          A 60-hour Himalayan retreat for business leaders seeking clarity,
          calm, and connection in the quiet mountains.
        </p>

        <div className="max-w-2xl mx-auto mb-10 p-6 rounded-2xl bg-forest-elevated/70 border border-gold/30 backdrop-blur-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gold font-sans">
                December 2026
              </span>
              <p className="font-serif text-xl font-bold text-canvas mt-1">11 – 13 Dec</p>
              <p className="text-xs text-ink-onDarkMuted">Batch 01</p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gold font-sans">
                December 2026
              </span>
              <p className="font-serif text-xl font-bold text-canvas mt-1">25 – 27 Dec</p>
              <p className="text-xs text-ink-onDarkMuted">Batch 02</p>
            </div>
          </div>
          <p className="text-center text-xs text-ink-onDarkMuted mt-3">Strictly 38 seats per batch</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#apply"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-forest-dark bg-gold hover:bg-gold-hover transition-all"
          >
            <Calendar className="w-4 h-4 text-forest-dark" />
            <span>Apply for Seat</span>
          </a>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-white bg-waGreen hover:bg-waGreen-hover transition-all"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
