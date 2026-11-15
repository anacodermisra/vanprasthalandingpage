"use client";

import React from "react";
import Image from "next/image";
import { Mountain, Compass, Heart, ShieldAlert, Sparkles } from "lucide-react";

export default function HeritageSection() {
  return (
    <section id="sanctuary" className="py-24 bg-canvas texture-khadi border-b border-gold-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sanskrit Root & Philosophy Box */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold tracking-[0.22em] uppercase text-gold block mb-2 font-sans">
            The Ancient Tradition
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-forest-dark leading-tight mb-4">
            &ldquo;Vanaprastha&rdquo; — Retiring to the Forest
          </h2>
          <p className="text-ink-secondary text-base sm:text-lg font-light leading-relaxed">
            In Vedic wisdom, <em>Vanaprastha</em> is the sacred composite of <strong>Vana</strong> (&ldquo;forest, distant sanctuary&rdquo;)
            and <strong>Prastha</strong> (&ldquo;journey to, abiding in&rdquo;). It was never an abandonment of leadership,
            but a conscious pause—stepping away from worldly friction to meditate on things far more enduring.
          </p>
        </div>

        {/* 2-Column Story: Estate Geography & Sacred Cave */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Real Photo of Wooden Cottages / Vedic Block */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-heritage border-2 border-gold-border/60 group">
              <Image
                src="/assets/images/wooden-cottages.jpg"
                alt="Vanprastha Resorts Handcrafted Pine Wood Cottages at Dunagiri"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-canvas">
                  <span className="text-[11px] font-mono tracking-widest uppercase text-gold">
                    Vedic &amp; Ashtanga Blocks
                  </span>
                  <h4 className="font-serif text-xl font-bold">
                    Handcrafted Pine Wood Cottages
                  </h4>
                  <p className="text-xs text-ink-onDarkMuted mt-1">
                    Cottages named after the four Vedas and eight Ashtanga limbs, furnished with high-thread-count natural linens, stone courtyards, and veranda views.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Distance Badge */}
            <div className="absolute -bottom-4 right-6 bg-forest-dark text-canvas p-3.5 rounded-2xl border border-gold/40 shadow-xl flex items-center gap-3">
              <Compass className="w-5 h-5 text-gold" />
              <div>
                <p className="text-xs font-bold">1.5 km to Babaji&apos;s Cave</p>
                <p className="text-[10px] text-ink-onDarkMuted">Ratkhal, Dunagiri 7,500 ft</p>
              </div>
            </div>
          </div>

          {/* Right Column: Sacred Lineage & Living Principles */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-gold uppercase block mb-1">
                Sacred Himalayan Geography
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-forest-dark leading-snug">
                Where Kriya Yoga Was Reawakened in 1861
              </h3>
            </div>

            <p className="text-ink-secondary text-sm sm:text-base leading-relaxed font-light">
              Vanprastha Resorts is situated at the lotus feet of Mahavatar Babaji’s Cave in the quiet,
              introverted mountain hamlet of Ratkhal. It is just 1.5 kilometres from the sacred stone
              ledge where Mahavatar Babaji initiated Lahiri Mahasaya into Kriya Yoga in 1861, reviving
              the science of breath for the modern age.
            </p>

            {/* 3 Heritage Pillars */}
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-canvas-warm border border-gold-border/50 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-forest-light text-forest flex items-center justify-center shrink-0">
                  <Mountain className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-forest-dark">
                    3,025 Sq. M Terraced Mountain Habitat
                  </h5>
                  <p className="text-xs text-ink-secondary mt-0.5 leading-relaxed font-light">
                    Meandering 100 feet down the terraced ridge, built entirely with fragrant pine wood
                    and local mountain stone to leave the ecology undisturbed.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-canvas-warm border border-gold-border/50 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-forest-light text-forest flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-forest-dark">
                    The Dhyan Mandir (Meditation Chapel)
                  </h5>
                  <p className="text-xs text-ink-secondary mt-0.5 leading-relaxed font-light">
                    A private pine sanctuary on the premises holding unbroken meditative presence,
                    overlooking snow-capped Himalayan ridges.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-canvas-warm border border-gold-border/50 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-forest-light text-forest flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-forest-dark">
                    Nourishing Himalayan Food &amp; Pure Sanctuary
                  </h5>
                  <p className="text-xs text-ink-secondary mt-0.5 leading-relaxed font-light">
                    100% vegetarian, alcohol-free, and tobacco-free. Fresh, healthy Himalayan meals prepared from local organic grains, mountain herbs, and cow ghee, served with warmth in traditional brass thalis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
