"use client";

import React, { useState } from "react";
import { Check, Calendar, Users, Building, MessageCircle, ArrowRight } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

interface PricingSectionProps {
  onSelectTier?: (tier: string, cohort: string) => void;
}

export default function PricingSection({ onSelectTier }: PricingSectionProps) {
  const [selectedCohort, setSelectedCohort] = useState<"batch_1" | "batch_2">("batch_1");

  const cohorts = {
    batch_1: {
      name: "Batch 01 · December 2026",
      dates: "11 – 13 December 2026",
      subtext: "Friday 2:00 PM – Sunday 2:00 PM",
    },
    batch_2: {
      name: "Batch 02 · Christmas Cohort",
      dates: "25 – 27 December 2026",
      subtext: "Holiday Long Weekend (Fri–Sun)",
    },
  };

  const currentCohort = cohorts[selectedCohort];

  const packages = [
    {
      id: "double",
      title: "Double Sharing",
      price: "₹24,000",
      perText: "per person (all-inclusive)",
      badge: "Most Selected by Leaders",
      isPopular: true,
      description: "Spacious pine wood cottage shared with one fellow executive or founder.",
      features: [
        "2 Nights luxury mountain cottage stay",
        "Twin executive single beds with warm down bedding",
        "All handcrafted healthy Himalayan meals & organic teas",
        "All practical breathwork & clarity sessions with CA (Dr.) Alok Misra",
        "Guided trek to Mahavatar Babaji's Cave (8,000 ft)",
        "The Wooden Box Digital Detox protocol",
        "Evening fireplace leadership dialogue circles",
        "Kathgodam railway station transfer coordination",
      ],
    },
    {
      id: "triple",
      title: "Triple Sharing",
      price: "₹22,000",
      perText: "per person (all-inclusive)",
      badge: "Ideal for Small Teams",
      isPopular: false,
      description: "Comfortable spacious cottage suite accommodating three leaders in dedicated single beds.",
      features: [
        "2 Nights luxury mountain cottage stay",
        "Three dedicated executive beds with warm linens",
        "All handcrafted healthy Himalayan meals & organic teas",
        "All practical breathwork & clarity sessions with CA (Dr.) Alok Misra",
        "Guided trek to Mahavatar Babaji's Cave (8,000 ft)",
        "The Wooden Box Digital Detox protocol",
        "Evening fireplace leadership dialogue circles",
        "Kathgodam railway station transfer coordination",
      ],
    },
    {
      id: "quad",
      title: "Quad Sharing",
      price: "₹20,000",
      perText: "per person (all-inclusive)",
      badge: "Best Value for Groups",
      isPopular: false,
      description: "Large suite for four colleagues or founder friends seeking group renewal.",
      features: [
        "2 Nights large cottage suite stay",
        "Four dedicated executive beds & spacious veranda lounge",
        "All handcrafted healthy Himalayan meals & organic teas",
        "All practical breathwork & clarity sessions with CA (Dr.) Alok Misra",
        "Guided trek to Mahavatar Babaji's Cave (8,000 ft)",
        "The Wooden Box Digital Detox protocol",
        "Evening fireplace leadership dialogue circles",
        "Kathgodam railway station transfer coordination",
      ],
    },
  ];

  const waLink = buildWhatsAppLink({
    cohort: currentCohort.dates,
  });

  const handleSelect = (tierId: string) => {
    if (onSelectTier) {
      onSelectTier(tierId, selectedCohort);
    }
    const formElement = document.getElementById("apply");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-canvas border-b border-gold-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-bold tracking-[0.22em] uppercase text-gold block mb-2 font-sans">
            Transparent Investment
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-forest-dark leading-tight mb-4">
            Cohorts &amp; All-Inclusive Packages
          </h2>
          <p className="text-ink-secondary text-base sm:text-lg font-light leading-relaxed">
            Strictly limited to 38 leaders per cohort to ensure personal attention and meaningful peer dialogue.
            All prices include luxury accommodation, organic meals, guided sessions, and taxes.
          </p>
        </div>

        {/* Cohort Selector Switch */}
        <div className="max-w-xl mx-auto p-1.5 rounded-2xl bg-canvas-warm border border-gold-border/80 flex gap-2 mb-12 shadow-sm">
          <button
            onClick={() => setSelectedCohort("batch_1")}
            className={`flex-1 py-3 px-4 rounded-xl text-center transition-all ${
              selectedCohort === "batch_1"
                ? "bg-forest-dark text-canvas shadow-md border border-gold/30"
                : "text-forest-dark hover:text-gold"
            }`}
          >
            <span className="block text-[10px] font-bold uppercase tracking-wider text-gold font-sans">
              Batch 01
            </span>
            <span className="block font-serif text-base sm:text-lg font-bold">
              11 – 13 December
            </span>
            <span className="block text-[11px] text-ink-muted">Friday to Sunday</span>
          </button>

          <button
            onClick={() => setSelectedCohort("batch_2")}
            className={`flex-1 py-3 px-4 rounded-xl text-center transition-all ${
              selectedCohort === "batch_2"
                ? "bg-forest-dark text-canvas shadow-md border border-gold/30"
                : "text-forest-dark hover:text-gold"
            }`}
          >
            <span className="block text-[10px] font-bold uppercase tracking-wider text-gold font-sans">
              Batch 02 · Holiday Cohort
            </span>
            <span className="block font-serif text-base sm:text-lg font-bold">
              25 – 27 December
            </span>
            <span className="block text-[11px] text-ink-muted">Christmas Weekend</span>
          </button>
        </div>

        {/* Selected Cohort Indicator Banner */}
        <div className="max-w-md mx-auto text-center mb-10 -mt-6">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-forest-light text-forest border border-forest/20 font-sans">
            <Calendar className="w-3.5 h-3.5 text-forest" />
            <span>Viewing: {currentCohort.dates} · Strictly 38 Seats</span>
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-8 transition-all relative flex flex-col justify-between ${
                pkg.isPopular
                  ? "bg-white border-2 border-gold shadow-heritageHover scale-102"
                  : "bg-white border border-gold-border/50 shadow-heritage hover:border-gold"
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold text-forest-dark text-[11px] font-bold uppercase tracking-wider shadow-sm font-sans">
                  {pkg.badge}
                </div>
              )}

              <div>
                <div className="mb-4">
                  <h3 className="font-serif text-2xl font-bold text-forest-dark">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-ink-secondary mt-1 leading-relaxed font-light">
                    {pkg.description}
                  </p>
                </div>

                <div className="mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-4xl font-bold text-forest-dark">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-ink-muted font-normal">
                      + GST
                    </span>
                  </div>
                  <span className="block text-xs text-gold font-semibold mt-0.5 font-sans">
                    {pkg.perText}
                  </span>
                </div>

                <div className="space-y-3 mb-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-ink-muted font-sans">
                    What&apos;s Included:
                  </p>
                  {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-ink-secondary leading-relaxed font-light">
                      <Check className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={() => handleSelect(pkg.id)}
                  className={`w-full py-3.5 px-4 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 font-sans ${
                    pkg.isPopular
                      ? "bg-gold text-forest-dark hover:bg-gold-hover shadow-goldGlow"
                      : "bg-forest-dark text-canvas hover:bg-forest-elevated"
                  }`}
                >
                  <span>Select {pkg.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Team Booking Card */}
        <div className="rounded-3xl bg-forest-dark text-canvas p-8 sm:p-10 border border-gold/40 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-elevated border border-gold/40 text-gold text-xs font-semibold font-sans">
                <Building className="w-3.5 h-3.5" />
                <span>Corporate Sponsorship &amp; Team Booking</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-canvas">
                Sponsoring Your Leadership Team or Executive Board?
              </h3>
              <p className="text-ink-onDarkMuted text-sm sm:text-base font-light leading-relaxed max-w-2xl">
                We offer custom corporate packages for organizations sending 4 or more leaders.
                Includes customized team alignment sessions with Dr. Alok Misra, corporate invoicing (GST input credit),
                and dedicated Kathgodam transfers.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-gold pt-2">
                <span>✓ Corporate GST Invoicing</span>
                <span>✓ Private team breakout session</span>
                <span>✓ Dedicated Kathgodam station transfers</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-waGreen hover:bg-waGreen-hover transition-all shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss Corporate Team on WhatsApp</span>
              </a>

              <a
                href="#apply"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-canvas bg-forest-elevated border border-gold/40 hover:bg-forest-elevated/80 transition-all text-center"
              >
                <Users className="w-4 h-4 text-gold" />
                <span>Apply as a Corporate Team</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
