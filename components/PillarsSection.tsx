"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Lock, Wind, Mountain, Utensils, Flame, Check, ArrowRight } from "lucide-react";

export default function PillarsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const pillars = [
    {
      id: "box",
      number: "01",
      title: "The Wooden Box Experiment",
      subtitle: "Unbroken Digital Stillness",
      icon: Lock,
      imageSrc: "/assets/images/vedic-block.jpg",
      tagline: "Hour 0 to Hour 60",
      description:
        "Leaders surrender their smartphones into a hand-carved deodar chest upon arrival. An antique brass latch clicks shut. No Slack, no emails, no news cycles. An emergency desk line is shared with your executive assistant and family, allowing your subconscious mind to release its continuous alertness.",
      outcomes: [
        "Immediate cessation of cognitive fragmentation",
        "Deep, restorative sleep within the first 24 hours",
        "Reactivation of long-arc strategic thinking",
      ],
    },
    {
      id: "breath",
      number: "02",
      title: "Breath as Strategy",
      subtitle: "Balancing & Relaxation Breathwork",
      icon: Wind,
      imageSrc: "/assets/images/resort-panoramic.jpg",
      tagline: "Cognitive Regulation, Not Escapism",
      description:
        "Conducted in our pine-wood Dhyan Mandir facing snow-capped Himalayan peaks. Guided by CA (Dr.) Alok Misra, you learn practical balancing, focusing, and relaxation breathwork techniques designed specifically for leaders. We strictly do not teach monastic or esoteric systems—these are actionable physiological protocols for steady, non-reactive decision making in high-pressure boardrooms.",
      outcomes: [
        "Measurable down-regulation of the sympathetic nervous system",
        "Enhanced heart rate variability (HRV) under acute stress",
        "A repeatable 7-minute morning grounding protocol for daily life",
      ],
    },
    {
      id: "trail",
      number: "03",
      title: "The Sacred Ridge Pilgrimage",
      subtitle: "Mahavatar Babaji's Cave (8,000 ft)",
      icon: Mountain,
      imageSrc: "/assets/images/himalayan-trail.jpg",
      tagline: "The Birthplace of Kriya Yoga (1861)",
      description:
        "A silent walking meditation along the ancient pine-scented ridges of Dunagiri up to Babaji’s Cave. Here, Lahiri Mahasaya was initiated in 1861. In this untouched high-altitude sanctuary, meditative silence has been held unbroken for over a century.",
      outcomes: [
        "Contemplative moving meditation through centuries-old deodar forests",
        "Deep sensory stillness inside the mountain cave sanctum",
        "Profound clarity on long-term personal and organizational purpose",
      ],
    },
    {
      id: "food",
      number: "04",
      title: "Nourishing Himalayan Food",
      subtitle: "Farm-to-Table Mountain Nourishment",
      icon: Utensils,
      imageSrc: "/assets/images/wooden-cottages.jpg",
      tagline: "Nourishment That Restores, Not Exhausts",
      description:
        "Served in traditional handcrafted brass thalis, every meal is prepared with organic mountain grains (Mandua, Jhangora), local forest herbs, and pure cow ghee. Wholesome, healthy Himalayan meals prepared with warmth by our mountain team that revitalize without digestive fatigue.",
      outcomes: [
        "Zero processed sugars, refined seed oils, or chemical additives",
        "Digestive ease and metabolic revitalization",
        "Fresh mountain herbal infusions and pahadi teas",
      ],
    },
    {
      id: "circle",
      number: "05",
      title: "Unmasked Leadership Circles",
      subtitle: "Evening Hearthside Dialogues",
      icon: Flame,
      imageSrc: "/assets/images/vedic-block.jpg",
      tagline: "Strictly 38 Leaders · No Posturing",
      description:
        "No banquet halls, no crowd scrums, no sponsored lanyards. As mountain twilight falls and temperatures dip, strictly 38 leaders gather around the cedar fireplace with warm brass mugs of herbal tea. No pitch decks, no LinkedIn masks, no posturing. Just candid, unhurried reflections on organizational solitude, decision dilemmas, and stewardship.",
      outcomes: [
        "A confidential safe space among accomplished corporate peers",
        "Shared perspectives on board dynamics, scaling, and personal resilience",
        "Lifelong professional bonds formed in high Himalayan stillness",
      ],
    },
  ];

  const current = pillars[activeIdx];

  return (
    <section id="pillars" className="py-24 bg-canvas border-b border-gold-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold tracking-[0.22em] uppercase text-gold block mb-2 font-sans">
            The 5 Signature Pillars
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-forest-dark leading-tight mb-4">
            Designed for the Executive Mind
          </h2>
          <p className="text-ink-secondary text-base sm:text-lg font-light leading-relaxed">
            Every element of the 60-hour retreat is calibrated with purpose—integrating ancient
            Himalayan contemplative discipline with modern cognitive science and leadership responsibility.
          </p>
        </div>

        {/* Pillar Switch Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-10 gap-2 sm:gap-3 scrollbar-none justify-start lg:justify-center">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            const isActive = idx === activeIdx;
            return (
              <button
                key={p.id}
                onClick={() => setActiveIdx(idx)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border ${
                  isActive
                    ? "bg-forest-dark text-gold border-gold/50 shadow-md scale-102"
                    : "bg-white text-ink-secondary border-gold-border/40 hover:border-gold hover:text-forest-dark"
                }`}
              >
                <span className={`text-[11px] font-mono ${isActive ? "text-gold" : "text-ink-muted"}`}>
                  {p.number}
                </span>
                <Icon className={`w-4 h-4 ${isActive ? "text-gold" : "text-ink-secondary"}`} />
                <span>{p.title}</span>
              </button>
            );
          })}
        </div>

        {/* Large Active Pillar Card */}
        <div className="rounded-3xl bg-white border border-gold-border/60 shadow-heritage overflow-hidden p-6 sm:p-10 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Photo */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[16/11] shadow-md border border-gold-border/40">
              <Image
                src={current.imageSrc}
                alt={current.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent flex items-end p-5">
                <span className="text-xs font-semibold text-canvas tracking-wide font-sans">
                  {current.tagline}
                </span>
              </div>
            </div>

            {/* Content & Outcomes */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold font-mono tracking-widest text-gold uppercase block mb-1">
                  Pillar {current.number} · {current.subtitle}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-forest-dark leading-tight">
                  {current.title}
                </h3>
              </div>

              <p className="text-ink-secondary text-sm sm:text-base leading-relaxed font-light">
                {current.description}
              </p>

              <div className="pt-2 border-t border-gray-100">
                <p className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-3 font-sans">
                  Observable Benefits:
                </p>
                <ul className="space-y-2.5">
                  {current.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-forest-dark font-medium">
                      <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href="#apply"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest hover:text-gold transition-colors group"
                >
                  <span>Experience this in December</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
