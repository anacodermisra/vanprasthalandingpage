"use client";

import React from "react";
import Image from "next/image";
import { Mountain, Trees, Compass, Sparkles, MapPin } from "lucide-react";

export default function PropertyShowcase() {
  return (
    <section className="py-24 bg-forest-dark text-canvas relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest mb-2 font-sans">
            <MapPin className="w-3.5 h-3.5" />
            <span>The Mountain Sanctuary</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-canvas leading-tight mb-4">
            Vanprastha Resorts, Dunagiri (7,500 ft)
          </h2>
          <p className="text-ink-onDarkMuted text-base sm:text-lg font-light leading-relaxed">
            Perched amidst ancient deodar forests and terraced hillsides in Almora, Uttarakhand.
            A rare sanctuary where absolute stillness is the true luxury.
          </p>
        </div>

        {/* Real Property Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
          {/* Main Large Visual */}
          <div className="md:col-span-7 rounded-3xl overflow-hidden aspect-[16/10] relative shadow-2xl border border-white/10 group">
            <Image
              src="/assets/images/resort-panoramic.jpg"
              alt="Panoramic View of Dunagiri Mountains from Vanprastha Resorts"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="text-[11px] font-mono tracking-widest uppercase text-gold">
                  Dunagiri Ridge
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-canvas">
                  Unbroken Views of Rolling Himalayan Peaks
                </h4>
                <p className="text-xs text-ink-onDarkMuted mt-1 font-light">
                  Terraced 3,025 sq. m habitat built with local pine wood and mountain stone.
                </p>
              </div>
            </div>
          </div>

          {/* Secondary Visual: Vedic Block */}
          <div className="md:col-span-5 rounded-3xl overflow-hidden aspect-[16/10] md:aspect-auto relative shadow-2xl border border-white/10 group">
            <Image
              src="/assets/images/wooden-cottages.jpg"
              alt="Handcrafted Wooden Cottages at Vanprastha Resorts"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="text-[11px] font-mono tracking-widest uppercase text-gold">
                  Vedic Cottages
                </span>
                <h4 className="font-serif text-lg sm:text-xl font-bold text-canvas">
                  Rig, Yajur, Sama &amp; Atharva Suites
                </h4>
                <p className="text-xs text-ink-onDarkMuted mt-1 font-light">
                  Spacious wooden verandas overlooking pine-covered valleys.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sanctuary Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-forest-card border border-white/10">
            <Mountain className="w-6 h-6 text-gold mb-3" />
            <h5 className="font-serif text-lg font-bold text-canvas mb-1">7,500 ft Elevation</h5>
            <p className="text-xs text-ink-onDarkMuted font-light leading-relaxed">
              High mountain altitude that expands lung volume and provides crisp, pollution-free Himalayan air.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-forest-card border border-white/10">
            <Trees className="w-6 h-6 text-gold mb-3" />
            <h5 className="font-serif text-lg font-bold text-canvas mb-1">Deodar Pine Forests</h5>
            <p className="text-xs text-ink-onDarkMuted font-light leading-relaxed">
              Surrounded by therapeutic natural pine aerosols (phytoncides) that lower cortisol and reduce stress.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-forest-card border border-white/10">
            <Compass className="w-6 h-6 text-gold mb-3" />
            <h5 className="font-serif text-lg font-bold text-canvas mb-1">Babaji&apos;s Cave Ridge</h5>
            <p className="text-xs text-ink-onDarkMuted font-light leading-relaxed">
              Direct access to the sacred trail of Mahavatar Babaji, where meditative silence has been held unbroken since 1861.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-forest-card border border-white/10">
            <Sparkles className="w-6 h-6 text-gold mb-3" />
            <h5 className="font-serif text-lg font-bold text-canvas mb-1">Dhyan Mandir</h5>
            <p className="text-xs text-ink-onDarkMuted font-light leading-relaxed">
              Private pine meditation chapel on site for dawn and dusk balancing and relaxation breathwork facing snow-covered ridges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
