"use client";

import React from "react";
import Image from "next/image";
import { Award, BookOpen, HeartHandshake, ShieldCheck } from "lucide-react";

export default function FacilitatorSection() {
  return (
    <section id="facilitator" className="py-24 bg-canvas border-b border-gold-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual / Portrait Styling */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-forest-dark border-2 border-gold-border shadow-heritage group">
              <Image
                src="/assets/images/vedic-block.jpg"
                alt="CA Dr. Alok Misra Facilitator at Vanprastha"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/40 to-transparent opacity-90" />

              {/* Bottom Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl glass-card-dark text-canvas">
                <span className="text-[11px] font-mono tracking-widest text-gold uppercase block font-sans">
                  Lead Facilitator
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-canvas">
                  CA (Dr.) Alok Misra
                </h4>
                <p className="text-xs text-ink-onDarkMuted mt-0.5">
                  FCA, FCS, Ph.D. · Corporate Board Advisor &amp; Breathwork Mentor
                </p>
              </div>
            </div>

            {/* Antique Brass Seal */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gold text-forest-dark flex flex-col items-center justify-center text-center p-2 shadow-goldGlow border-2 border-white/60 rotate-6">
              <span className="text-[10px] font-bold uppercase tracking-wider leading-tight font-sans">
                25+ Yrs
              </span>
              <span className="text-[9px] font-medium leading-none mt-0.5">
                Executive Advisory
              </span>
            </div>
          </div>

          {/* Right Column: Bio & Pedigree */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold tracking-[0.22em] uppercase text-gold block mb-2 font-sans">
                The Guide
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-forest-dark leading-tight mb-2">
                CA (Dr.) Alok Misra
              </h2>
              <p className="text-sm font-semibold text-gold font-sans">
                FCA · FCS · Ph.D. · Corporate Board Advisor · Himalayan Practitioner since 2002
              </p>
            </div>

            <p className="text-ink-secondary text-base sm:text-lg font-light leading-relaxed">
              Dr. Alok Misra brings a rare synthesis to executive renewal: he has spent over 25 years
              in the corridors of corporate governance, boardrooms, and complex financial advisory, while
              maintaining a dedicated personal meditative practice in the Himalayas since 2002.
            </p>

            <p className="text-xs sm:text-sm text-forest-dark font-medium bg-canvas-warm p-3.5 rounded-xl border border-gold-border/60">
              <strong>Retreat Focus:</strong> At this retreat, Dr. Misra strictly guides practical balancing, focusing, and relaxation breathwork calibrated for senior executives. Attendees are not taught monastic systems; every session delivers direct physiological down-regulation and mental sharpness for boardrooms.
            </p>

            <blockquote className="p-4 rounded-xl bg-canvas-warm border-l-4 border-gold text-sm sm:text-base italic text-forest-dark font-serif leading-relaxed">
              &ldquo;Modern leaders are not fatigued because of hard work; they are fatigued because their minds
              never experience genuine stillness. When the nervous system is quieted, strategic clarity is not
              something you chase—it is what naturally remains.&rdquo;
            </blockquote>

            {/* Credentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-gold-border/50 shadow-sm flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-forest-light text-forest flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-forest-dark font-sans">
                    Dual Fellowship (FCA, FCS)
                  </h5>
                  <p className="text-xs text-ink-secondary mt-0.5 font-light">
                    Decades of firsthand understanding of corporate accountability &amp; fiduciary stress.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gold-border/50 shadow-sm flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-forest-light text-forest flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-forest-dark font-sans">
                    Practical Breathwork Guide
                  </h5>
                  <p className="text-xs text-ink-secondary mt-0.5 font-light">
                    24 years of personal Himalayan discipline; guiding practical balancing and focus breathing for non-reactive leadership.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gold-border/50 shadow-sm flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-forest-light text-forest flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-forest-dark font-sans">
                    Published Author &amp; Speaker
                  </h5>
                  <p className="text-xs text-ink-secondary mt-0.5 font-light">
                    Doctoral research in organizational ethics, mindfulness, and cognitive resilience.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gold-border/50 shadow-sm flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-forest-light text-forest flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-forest-dark font-sans">
                    Confidential Peer Circles
                  </h5>
                  <p className="text-xs text-ink-secondary mt-0.5 font-light">
                    Safe, unhurried space for senior founders and directors to speak openly without judgment.
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
