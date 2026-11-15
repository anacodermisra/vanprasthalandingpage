"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, Calendar, Sparkles, MapPin, Shield, Users, Compass } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function Hero() {
  const waLink = buildWhatsAppLink();

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-forest-dark text-canvas">
      {/* Background Photography with Sacred Pine Mist Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/resort-panoramic.jpg"
          alt="Vanprastha Resorts Dunagiri Valley and Himalayan Peaks"
          fill
          priority
          className="object-cover object-center opacity-30 mix-blend-luminosity scale-105"
        />
        {/* Layered gradients for legibility & quiet majesty */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/85 to-forest-dark/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-forest/40 via-forest-dark/70 to-forest-dark" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
        {/* Eyebrow Location Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-elevated/80 border border-gold/40 text-gold text-xs sm:text-sm font-semibold tracking-wide mb-6 backdrop-blur-md shadow-sm">
          <MapPin className="w-3.5 h-3.5 text-gold" />
          <span>DUNAGIRI, ALMORA (7,500 FT) · 1.5 KM FROM BABAJI&apos;S CAVE</span>
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-canvas leading-[1.08] mb-6">
          The CEO Within
          <span className="block font-serif text-2xl sm:text-3xl md:text-4xl font-normal italic text-gold mt-2">
            Corporate Rejuvenation Retreat
          </span>
        </h1>

        {/* Narrative Subtitle */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-ink-onDarkMuted font-light leading-relaxed mb-8">
          Put your phone in the wooden box for 60 hours. Step away from endless Slack alerts,
          fragmented decisions, and chronic executive fatigue. Reclaim profound cognitive clarity
          through practical balancing and relaxation breathwork, nourishing Himalayan food,
          and unmasked leadership peer circles.
        </p>

        {/* Cohort Dates Highlight Card */}
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 p-3 rounded-2xl bg-forest-elevated/70 border border-gold/30 backdrop-blur-md shadow-2xl">
          <div className="p-4 rounded-xl bg-forest-card border border-white/5 text-left flex items-start justify-between">
            <div>
              <span className="block text-[11px] font-bold tracking-widest uppercase text-gold font-sans">
                Batch 01 · Dec 2026
              </span>
              <span className="block font-serif text-lg sm:text-xl font-bold text-canvas mt-0.5">
                11 – 13 December
              </span>
              <span className="text-xs text-ink-onDarkMuted">Friday 2 PM to Sunday 2 PM</span>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-gold/15 text-gold border border-gold/30">
              38 Seats
            </span>
          </div>

          <div className="p-4 rounded-xl bg-forest-card border border-white/5 text-left flex items-start justify-between">
            <div>
              <span className="block text-[11px] font-bold tracking-widest uppercase text-gold font-sans">
                Batch 02 · Christmas
              </span>
              <span className="block font-serif text-lg sm:text-xl font-bold text-canvas mt-0.5">
                25 – 27 December
              </span>
              <span className="text-xs text-ink-onDarkMuted">Holiday Long Weekend</span>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-gold/15 text-gold border border-gold/30">
              38 Seats
            </span>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#apply"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-forest-dark bg-gold hover:bg-gold-hover transition-all shadow-goldGlow hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4 text-forest-dark" />
            <span>Apply for Cohort Seat</span>
          </a>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold text-white bg-waGreen hover:bg-waGreen-hover transition-all shadow-lg hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            <span>Chat on WhatsApp Directly</span>
          </a>
        </div>

        {/* Trust Signals Strip */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-forest-card flex items-center justify-center text-gold border border-gold/30 shrink-0">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-canvas">Mahavatar Babaji&apos;s Cave</p>
              <p className="text-[11px] text-ink-onDarkMuted">Birthplace of Kriya Yoga (1861)</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-forest-card flex items-center justify-center text-gold border border-gold/30 shrink-0">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-canvas">CA (Dr.) Alok Misra</p>
              <p className="text-[11px] text-ink-onDarkMuted">25+ Yrs Corporate Advisor &amp; Yogi</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-forest-card flex items-center justify-center text-gold border border-gold/30 shrink-0">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-canvas">Capped at 38 Leaders</p>
              <p className="text-[11px] text-ink-onDarkMuted">Intimate Executive Peer Trust</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-forest-card flex items-center justify-center text-gold border border-gold/30 shrink-0">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-canvas">Nourishing Himalayan Food</p>
              <p className="text-[11px] text-ink-onDarkMuted">Healthy Meals &amp; Wooden Cottages</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
