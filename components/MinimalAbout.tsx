"use client";

import React from "react";
import Image from "next/image";

export default function MinimalAbout() {
  return (
    <section id="about" className="py-20 bg-canvas text-forest-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
              The CEO Within
            </h2>
            <p className="text-ink-secondary leading-relaxed mb-6">
              A 60-hour Himalayan retreat designed for business leaders who need to
              step away from the noise and reconnect with what matters most.
            </p>
            <p className="text-ink-secondary leading-relaxed">
              Nestled at 7,500 feet in Dunagiri, Almora, the retreat offers a rare
              combination of mountain serenity, thoughtful design, and meaningful
              peer dialogue. It is not a workshop or seminar—it is space for clarity
              to emerge naturally when the mind is quiet.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image
              src="/assets/images/wooden-cottages.jpg"
              alt="Vanprastha Resorts Cottages"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
