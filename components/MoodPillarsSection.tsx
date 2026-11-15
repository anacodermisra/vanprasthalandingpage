"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Wind, Users, Check } from "lucide-react";

export default function MoodPillarsSection() {
  const moodPillars = [
    {
      number: "01",
      title: "Understated Luxury",
      tagline: "Editorial Warmth, Not Gimmicks",
      icon: Sparkles,
      imageSrc: "/assets/images/wooden-cottages.jpg",
      quote:
        "“Aman or Six Senses meets an ancient Himalayan sanctuary. It does not boast; its luxury is felt in the grain of hand-carved deodar wood, the crisp silence of the valley, and the dignity of the space.”",
      details: [
        "Hand-carved deodar pine architecture and traditional Kumaoni stone masonry",
        "High-thread-count natural linens and plush thermal down bedding",
        "Farm-to-table nourishing Himalayan food served in traditional handcrafted brass thalis",
        "Spacious private verandas overlooking unbroken views of Himalayan ridges",
      ],
    },
    {
      number: "02",
      title: "Visceral Calmness",
      tagline: "The Nervous System Reset",
      icon: Wind,
      imageSrc: "/assets/images/resort-panoramic.jpg",
      quote:
        "“An immediate cognitive exhale. A founder closing their eyes on the cottage veranda as morning fog lifts, phone locked inside the deodar box, and the profound relief of having nothing to reply to.”",
      details: [
        "The Hour 0 Deodar Box protocol—suspending the compulsive reflex to react",
        "Practical balancing, focusing, and relaxation breathwork designed for high-stress executives",
        "Crisp 7,500 ft Himalayan oxygenation and natural forest phytoncides that lower cortisol",
        "Unhurried mental whitespace with zero performance pressure or forced agendas",
      ],
    },
    {
      number: "03",
      title: "Sovereign Exclusivity",
      tagline: "Strictly 38 Curated Leaders",
      icon: Users,
      imageSrc: "/assets/images/vedic-block.jpg",
      quote:
        "“No banquet halls, no crowd scrums, no sponsored lanyards. Just an intimate circle of 38 leaders seated around glowing deodar embers, sharing unvarnished reflections with genuine peers.”",
      details: [
        "Strictly capped at 38 participants per cohort to preserve deep executive trust",
        "Unmasked fireside dialogue circles on boardroom dilemmas and personal resilience",
        "Direct personal access to CA (Dr.) Alok Misra throughout the 60 hours",
        "A private, rare, and protected haven for true founders, directors, and CXOs",
      ],
    },
  ];

  return (
    <section className="py-24 bg-canvas-warm border-b border-gold-border/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-gold block mb-2 font-sans">
            The Living Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-forest-dark leading-tight mb-4">
            The Three Mood Pillars
          </h2>
          <p className="text-ink-secondary text-base sm:text-lg font-light leading-relaxed">
            The retreat is shaped around an uncompromising aesthetic of restraint:
            understated editorial luxury, visceral nervous system restoration, and an intimate circle of 38 peers.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {moodPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="rounded-3xl bg-white border border-gold-border/60 shadow-heritage overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-heritageHover hover:border-gold"
              >
                <div>
                  {/* Photo Banner */}
                  <div className="relative aspect-[16/10] overflow-hidden group">
                    <Image
                      src={pillar.imageSrc}
                      alt={pillar.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-forest-dark/30 to-transparent flex items-end p-5">
                      <div>
                        <span className="text-[11px] font-mono tracking-widest text-gold uppercase block font-sans">
                          Pillar {pillar.number}
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-canvas">
                          {pillar.title}
                        </h3>
                        <p className="text-xs text-ink-onDarkMuted font-sans">
                          {pillar.tagline}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Editorial Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <blockquote className="text-xs sm:text-sm italic font-serif text-forest-dark leading-relaxed pl-3 border-l-2 border-gold">
                      {pillar.quote}
                    </blockquote>

                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-ink-muted mb-2.5 font-sans">
                        What You Will Experience:
                      </p>
                      <ul className="space-y-2">
                        {pillar.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs text-ink-secondary font-light leading-relaxed"
                          >
                            <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="h-0.5 w-full bg-gold-border/30 rounded-full" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
