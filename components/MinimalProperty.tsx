"use client";

import React from "react";
import Image from "next/image";

export default function MinimalProperty() {
  return (
    <section id="sanctuary" className="py-20 bg-forest-dark text-canvas">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-gold font-sans">
            The Sanctuary
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            Vanprastha Resorts, Dunagiri
          </h2>
          <p className="text-ink-onDarkMuted mt-4 max-w-2xl mx-auto">
            A 3,025 sq. m terraced mountain habitat at 7,500 feet, surrounded by
            ancient deodar forests and offering unbroken views of Himalayan peaks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
            <Image
              src="/assets/images/resort-panoramic.jpg"
              alt="Dunagiri View"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 to-transparent flex items-end p-5">
              <span className="font-serif text-lg font-bold">Terraced Habitat</span>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
            <Image
              src="/assets/images/wooden-cottages.jpg"
              alt="Handcrafted Cottages"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 to-transparent flex items-end p-5">
              <span className="font-serif text-lg font-bold">Wooden Cottages</span>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
            <Image
              src="/assets/images/himalayan-trail.jpg"
              alt="Himalayan Trail"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 to-transparent flex items-end p-5">
              <span className="font-serif text-lg font-bold">Sacred Trails</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
