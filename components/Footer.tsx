"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, MessageCircle, Heart, Shield, ArrowUp } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function Footer() {
  const waLink = buildWhatsAppLink();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-forest-dark text-canvas border-t border-forest-border">
      {/* Upper Footer: Heritage Summary & Quick Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                <Image
                  src="/assets/logo/vanprastha-logo.png"
                  alt="Vanprastha Resorts Logo"
                  width={52}
                  height={52}
                  className="object-contain"
                />
              </div>
              <div className="border-l border-gold/40 pl-3">
                <span className="block font-serif text-xl font-bold tracking-tight text-canvas">
                  VANPRASTHA RESORTS
                </span>
                <span className="block text-[10px] tracking-[0.2em] uppercase text-gold font-sans font-semibold">
                  Dunagiri · Almora (7,500 ft)
                </span>
              </div>
            </div>

            <p className="text-ink-onDarkMuted text-xs sm:text-sm font-light leading-relaxed max-w-md">
              A 3,025 sq. m terraced Himalayan sanctuary at the lotus feet of
              Mahavatar Babaji’s Cave. Handcrafted pine wood cottages, high-thread-count natural linens, Dhyan Mandir,
              and nourishing Himalayan food for executive restoration and quietude.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-gold font-medium font-sans">
              <Shield className="w-4 h-4 text-gold shrink-0" />
              <span>100% Pure Vegetarian · Alcohol &amp; Tobacco-Free Mountain Sanctuary</span>
            </div>
          </div>

          {/* Retreat Cohorts Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold font-sans">
              December 2026 Cohorts
            </h4>
            <div className="space-y-3 text-xs text-ink-onDarkMuted">
              <div className="p-3 rounded-xl bg-forest-card border border-white/5">
                <span className="block font-serif text-sm font-bold text-canvas">
                  Batch 01: 11 – 13 Dec 2026
                </span>
                <span className="block text-[11px] text-gold mt-0.5 font-sans">
                  Friday 2 PM to Sunday 2 PM · 38 Seats
                </span>
              </div>

              <div className="p-3 rounded-xl bg-forest-card border border-white/5">
                <span className="block font-serif text-sm font-bold text-canvas">
                  Batch 02: 25 – 27 Dec 2026
                </span>
                <span className="block text-[11px] text-gold mt-0.5 font-sans">
                  Christmas Long Weekend · 38 Seats
                </span>
              </div>
            </div>
          </div>

          {/* Contact & Location Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold font-sans">
              Sanctuary Desk &amp; Address
            </h4>

            <ul className="space-y-2.5 text-xs text-ink-onDarkMuted font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>
                  Village Ratkhal, Tehsil Dwarahat / Dunagiri, District Almora, Uttarakhand 263656 (1.5 km to Babaji&apos;s Cave)
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919650102777" className="hover:text-gold transition-colors">
                    +91 9650102777
                  </a>
                  <a href="tel:+919458968627" className="hover:text-gold transition-colors text-[11px] text-ink-onDarkMuted/80">
                    +91 9458968627 (Resort Desk)
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:info@vanprastharesorts.com" className="hover:text-gold transition-colors">
                  info@vanprastharesorts.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 pt-1">
                <MessageCircle className="w-4 h-4 text-waGreen shrink-0" />
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-waGreen hover:underline font-semibold font-sans"
                >
                  Direct WhatsApp: +91 9650102777
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Back to Top */}
      <div className="border-t border-forest-border/60 py-6 bg-forest-dark/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-onDarkMuted">
          <p className="font-light text-center sm:text-left">
            © 2026 Vanprastha Resorts, Dunagiri. All rights reserved. Managed with reverence by our mountain team.
          </p>

          <div className="flex items-center gap-4">
            <a href="#sanctuary" className="hover:text-gold transition-colors">
              The Sanctuary
            </a>
            <span>·</span>
            <a href="#pricing" className="hover:text-gold transition-colors">
              Cohorts &amp; Pricing
            </a>
            <span>·</span>
            <a href="#faq" className="hover:text-gold transition-colors">
              FAQ
            </a>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-gold transition-colors ml-2 font-medium"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-gold" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
