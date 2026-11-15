"use client";

import React from "react";
import { Lock, XCircle, CheckCircle, ShieldAlert, Sparkles, PhoneCall } from "lucide-react";

export default function BurnoutSection() {
  return (
    <section className="py-24 bg-canvas-subtle border-b border-gold-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold tracking-[0.22em] uppercase text-gold block mb-2 font-sans">
            The Executive Dilemma
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-forest-dark leading-tight mb-4">
            Why Weekend Hotel Breaks Fail to Restore Leaders
          </h2>
          <p className="text-ink-secondary text-base sm:text-lg font-light leading-relaxed">
            Most corporate leaders operate with fully booked calendars and depleted cognitive reserves.
            When you visit a typical luxury hotel, Wi-Fi follows you to the poolside and your nervous
            system remains locked in perpetual responsiveness.
          </p>
        </div>

        {/* The Wooden Box Intervention Feature Card */}
        <div className="mb-16 rounded-3xl bg-forest-dark text-canvas p-6 sm:p-10 border border-gold/40 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: The Protocol */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-wider font-sans">
                <Lock className="w-3.5 h-3.5" />
                <span>Hour 0 Protocol · The Wooden Box</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-canvas leading-snug">
                An intentional pause from the urge to react.
              </h3>
              <p className="text-ink-onDarkMuted text-sm sm:text-base leading-relaxed font-light">
                Upon arrival at 7,500 ft, every participant places their smartphone inside a hand-carved
                deodar wooden chest. An antique brass latch clicks firmly shut. For the next 60 hours,
                the compulsive reflex to refresh email, monitor market fluctuations, and triage Slack alerts
                is suspended. It is an immediate cognitive exhale: a founder closing their eyes on the cottage veranda
                as morning fog lifts, with nothing to reply to, nowhere to rush, and no performance required.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-gold">
                <span className="flex items-center gap-1.5">
                  ✓ Dedicated 24/7 resort emergency desk provided to your family &amp; team
                </span>
                <span className="flex items-center gap-1.5">
                  ✓ High-altitude clean oxygenation
                </span>
                <span className="flex items-center gap-1.5">
                  ✓ Parasympathetic nervous system reset
                </span>
              </div>
            </div>

            {/* Right: Emergency Line Guarantee Callout */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-forest-elevated border border-gold/30 space-y-3">
              <div className="w-10 h-10 rounded-full bg-forest-card text-gold flex items-center justify-center border border-gold/40">
                <PhoneCall className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-canvas">
                The Emergency Protocol
              </h4>
              <p className="text-xs text-ink-onDarkMuted font-light leading-relaxed">
                Before surrendering your phone, you receive our dedicated resort desk number to share with
                your co-founder, board, or family. If a genuine critical matter arises, our team alerts you
                in person. Your mind can release its vigilance knowing real emergencies remain reachable.
              </p>
            </div>
          </div>
        </div>

        {/* Side-by-Side Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Column A: Standard City Hotel */}
          <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold text-forest-dark">The Usual Hotel Weekend</h4>
                <p className="text-xs text-ink-muted">Surface rest with constant connectivity</p>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-ink-secondary font-light">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Constant digital tether:</strong> Checking emails between spa sessions, scanning Slack during dinner.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Phantom notifications:</strong> Instinctively reaching into pockets and feeling anxious over unseen updates.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Heavy buffet meals:</strong> Rich, sluggish food that taxes digestion rather than restoring clarity.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Monday rebound:</strong> Returning to the boardroom just as mentally fatigued as when you left.
                </span>
              </li>
            </ul>
          </div>

          {/* Column B: Vanprastha 60-Hour Reset */}
          <div className="p-8 rounded-2xl bg-canvas-warm border-2 border-gold-border shadow-heritage">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gold-border/40">
              <div className="w-10 h-10 rounded-full bg-forest-dark text-gold flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold text-forest-dark">The 7,500 ft Himalayan Reset</h4>
                <p className="text-xs text-gold font-semibold">Genuine nervous system &amp; cognitive recovery</p>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-ink-secondary font-light">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                <span>
                  <strong>Deliberate digital silence:</strong> The deodar wooden box removes the compulsive loop of reactivity.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                <span>
                  <strong>Breath as cognitive leverage:</strong> Practical balancing, focusing, and relaxation breathwork that regulates heart rate variability and clears mental fog.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                <span>
                  <strong>Nourishing Himalayan Food:</strong> Fresh, healthy meals made from organic mountain grains (Mandua, Jhangora) and pure cow ghee served in traditional brass thalis.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                <span>
                  <strong>Enduring mental stillness:</strong> Returning to your leadership seat with calm focus and strategic depth.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
