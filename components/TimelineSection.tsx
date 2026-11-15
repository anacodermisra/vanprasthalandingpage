"use client";

import React, { useState } from "react";
import { Clock, Calendar, CheckCircle2 } from "lucide-react";

export default function TimelineSection() {
  const [activeDay, setActiveDay] = useState<1 | 2 | 3>(1);

  const itinerary = {
    1: {
      day: "Friday",
      theme: "The Arrival & Surrendering Control",
      hours: "Hours 0 – 10",
      description:
        "Leaving the frantic velocity of the city behind, ascending to 7,500 ft in Dunagiri, and breaking the compulsive digital loop.",
      events: [
        {
          time: "02:00 PM",
          badge: "Hour 0",
          title: "Check-in & The Wooden Box Ceremony",
          desc: "Warm Pahadi herbal tea welcome. Leaders place smartphones inside the hand-carved deodar chest. Antique brass latch clicks firmly shut.",
        },
        {
          time: "04:30 PM",
          badge: "Hour 2.5",
          title: "Alpine Ridge Walk & Phantom Vibrations",
          desc: "Gentle walk along the pine ridges. Feeling the cold mountain breeze and letting the subconscious urge to reach for an empty pocket dissolve.",
        },
        {
          time: "07:30 PM",
          badge: "Hour 5.5",
          title: "Healthy Himalayan Welcome Feast",
          desc: "Traditional Kumaoni brass thali dinner prepared with local organic grains, mountain herbs, and warm cow ghee.",
        },
        {
          time: "09:00 PM",
          badge: "Hour 7",
          title: "Opening Hearthside Orientation",
          desc: "Setting private personal intentions with CA (Dr.) Alok Misra. Early sleep in pine wood cottages under silent starry skies.",
        },
      ],
    },
    2: {
      day: "Saturday",
      theme: "Inner Architecture & The Sacred Ridge",
      hours: "Hours 16 – 32",
      description:
        "A full day of deep physiological reset, high-altitude breathwork, and the pilgrimage to Babaji's Cave.",
      events: [
        {
          time: "06:30 AM",
          badge: "Hour 16.5",
          title: "Dawn Meditation Hall Breathwork",
          desc: "Practical balancing and focus breathwork facing snow-capped Himalayan peaks. Expanding lung capacity, balancing cortisol, and building executive presence.",
        },
        {
          time: "08:30 AM",
          badge: "Hour 18.5",
          title: "Nourishing Himalayan Breakfast",
          desc: "Warm Mandua porridge, fresh mountain fruits, and spiced Pahadi herbal decoctions.",
        },
        {
          time: "10:00 AM",
          badge: "Hour 20",
          title: "Pilgrimage to Mahavatar Babaji's Cave (8,000 ft)",
          desc: "Silent walking meditation through centuries-old deodar forests up to the historic 1861 birthplace of Kriya Yoga. Deep meditation inside the cave.",
        },
        {
          time: "02:00 PM",
          badge: "Hour 24",
          title: "Organic Lunch & Unstructured Reflection",
          desc: "Relaxing on the cottage veranda. Gazing at the mountain ridges with journal in hand—unhurried mental whitespace.",
        },
        {
          time: "05:00 PM",
          badge: "Hour 27",
          title: "Executive Cognitive Architecture Workshop",
          desc: "Dr. Alok Misra unpacks decision frameworks, stress modulation, and non-reactive leadership tools for complex boardrooms.",
        },
        {
          time: "08:00 PM",
          badge: "Hour 30",
          title: "The Fireplace Dialogue Circle",
          desc: "Unmasked conversations around glowing deodar logs. Raw executive vulnerability, peer wisdom, and deep mutual respect.",
        },
      ],
    },
    3: {
      day: "Sunday",
      theme: "Integration & Returning Reborn",
      hours: "Hours 40 – 48",
      description:
        "Synthesizing personal breakthroughs, establishing daily micro-practices, and reclaiming the phone with sovereign mental clarity.",
      events: [
        {
          time: "07:00 AM",
          badge: "Hour 41",
          title: "Sunrise Grounding Breathwork & Focus Routine",
          desc: "Consolidating practical balancing and relaxation breathwork into a repeatable 7-minute morning routine you can sustain anywhere in the world.",
        },
        {
          time: "08:45 AM",
          badge: "Hour 42.5",
          title: "Farewell Himalayan Breakfast",
          desc: "Final nourishing meal together overlooking the sunrise over Trishul and Nanda Devi ridges.",
        },
        {
          time: "10:30 AM",
          badge: "Hour 44.5",
          title: "Unlocking the Wooden Box",
          desc: "Reopening the deodar box. Observing how your nervous system responds to notifications with newly reclaimed distance and calm.",
        },
        {
          time: "12:30 PM",
          badge: "Hour 46.5",
          title: "Departures to Kathgodam / Delhi",
          desc: "Dedicated cabs depart for Kathgodam railway station. Returning home with restored cognitive clarity.",
        },
      ],
    },
  };

  const currentDayData = itinerary[activeDay];

  return (
    <section id="journey" className="py-24 bg-canvas-subtle border-b border-gold-border/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-[0.22em] uppercase text-gold block mb-2 font-sans">
            The 60-Hour Transformation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-forest-dark leading-tight mb-4">
            Hour-by-Hour Itinerary
          </h2>
          <p className="text-ink-secondary text-base font-light">
            An intentionally calibrated rhythm designed to take you from digital exhaustion to complete
            physiological and cognitive renewal.
          </p>
        </div>

        {/* Day Tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {[1, 2, 3].map((dayNum) => {
            const d = itinerary[dayNum as 1 | 2 | 3];
            const isActive = activeDay === dayNum;
            return (
              <button
                key={dayNum}
                onClick={() => setActiveDay(dayNum as 1 | 2 | 3)}
                className={`px-6 py-3 rounded-xl text-left border transition-all ${
                  isActive
                    ? "bg-forest-dark text-canvas border-gold shadow-md"
                    : "bg-white text-ink-secondary border-gold-border/40 hover:border-gold"
                }`}
              >
                <span className={`block text-[10px] font-bold tracking-wider uppercase font-sans ${isActive ? "text-gold" : "text-ink-muted"}`}>
                  Day 0{dayNum}
                </span>
                <span className="font-serif text-base sm:text-lg font-bold block">
                  {d.day}
                </span>
              </button>
            );
          })}
        </div>

        {/* Day Banner */}
        <div className="mb-10 p-5 rounded-2xl bg-canvas-warm border border-gold-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold mb-1 font-sans">
              <Calendar className="w-3.5 h-3.5" />
              <span>{currentDayData.day} · {currentDayData.hours}</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-dark">
              {currentDayData.theme}
            </h3>
            <p className="text-xs sm:text-sm text-ink-secondary mt-1 max-w-2xl font-light">
              {currentDayData.description}
            </p>
          </div>
        </div>

        {/* Events Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-gold-border/60 space-y-7">
          {currentDayData.events.map((evt, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-canvas border-2 border-gold group-hover:bg-gold transition-colors" />

              <div className="bg-white p-5 rounded-2xl border border-gold-border/40 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-forest bg-forest-light px-2.5 py-0.5 rounded-full font-sans">
                      <Clock className="w-3 h-3 text-forest" />
                      <span>{evt.time}</span>
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-ink-muted px-2 py-0.5 rounded bg-gray-50 border border-gray-100">
                      {evt.badge}
                    </span>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-gold/60" />
                </div>
                <h4 className="font-serif text-lg font-bold text-forest-dark mb-1">
                  {evt.title}
                </h4>
                <p className="text-xs sm:text-sm text-ink-secondary font-light leading-relaxed">
                  {evt.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
