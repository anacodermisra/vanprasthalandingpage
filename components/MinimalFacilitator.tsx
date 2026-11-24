"use client";

import React from "react";
import Image from "next/image";

export default function MinimalFacilitator() {
  return (
    <section id="facilitator" className="py-20 bg-canvas-subtle text-forest-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 relative rounded-2xl overflow-hidden aspect-[9/16] max-h-[580px] shadow-2xl bg-forest-dark ring-1 ring-forest-dark/10 mx-auto w-full max-w-[360px]">
            <Image
              src="/assets/images/alok-misra-direct.png?v=2"
              alt="CA (Dr.) Alok Misra — Lead Facilitator, Vanprastha Corporate Retreat"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-forest-dark/20 to-transparent flex items-end p-5">
              <div className="text-canvas">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gold font-sans">
                  Lead Facilitator
                </span>
                <p className="font-serif text-xl font-bold mt-0.5 text-cream">
                  CA (Dr.) Alok Misra
                </p>
                <p className="text-[11px] text-cream/75 mt-0.5 font-sans leading-tight">
                  FCA, FCS, Ph.D. • Corporate Advisor &amp; Himalayan Practitioner
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
              CA (Dr.) Alok Misra
            </h2>
            <p className="text-ink-secondary leading-relaxed mb-6">
              Dr. Alok Misra has spent over 25 years advising corporate boards and
              complex organizations, while maintaining a dedicated personal practice
              in the Himalayas. He guides leaders not through theory, but through
              experience—offering space for clarity to emerge when the nervous system
              is calm.
            </p>
            <p className="text-ink-secondary leading-relaxed">
              His work is grounded in practical wisdom: helping leaders return to
              their seats with quieter minds, sharper focus, and deeper integrity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
