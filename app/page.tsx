"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import MinimalHero from "@/components/MinimalHero";
import MinimalAbout from "@/components/MinimalAbout";
import MinimalProperty from "@/components/MinimalProperty";
import MinimalFacilitator from "@/components/MinimalFacilitator";
import MinimalPricing from "@/components/MinimalPricing";
import MinimalFAQ from "@/components/MinimalFAQ";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileStickyBar from "@/components/MobileStickyBar";

export default function Home() {
  const [selectedCohort, setSelectedCohort] = useState<"batch_1" | "batch_2">("batch_1");

  const handleSelectCohort = (cohort: "batch_1" | "batch_2") => {
    setSelectedCohort(cohort);
  };

  return (
    <main className="min-h-screen bg-canvas text-ink flex flex-col relative selection:bg-gold-light selection:text-forest-dark pb-16 md:pb-0">
      <Navbar />
      <MinimalHero />
      <MinimalAbout />
      <MinimalProperty />
      <MinimalFacilitator />
      <MinimalPricing onSelectCohort={handleSelectCohort} />
      <MinimalFAQ />
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyBar />
    </main>
  );
}
