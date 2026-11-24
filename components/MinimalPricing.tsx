"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle, AlertCircle, Send, Loader2 } from "lucide-react";

interface MinimalPricingProps {
  onSelectCohort: (cohort: "batch_1" | "batch_2") => void;
}

export default function MinimalPricing({ onSelectCohort }: MinimalPricingProps) {
  const [selectedCohort, setSelectedCohort] = useState<"batch_1" | "batch_2">("batch_1");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    company: "",
    room: "double",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [submittedData, setSubmittedData] = useState<{
    leadId?: string;
    userWhatsAppLink?: string;
    coordinatorWhatsAppAlert?: string;
  } | null>(null);

  useEffect(() => {
    onSelectCohort(selectedCohort);
  }, [selectedCohort, onSelectCohort]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.name,
          whatsappPhone: formData.whatsapp,
          workEmail: formData.email,
          companyName: formData.company,
          bookingType: "individual",
          teamSize: 1,
          preferredCohort: selectedCohort,
          roomPreference: formData.room,
          utmSource: "web_direct",
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Submission failed");
      }

      setSubmittedData(data);
      setSuccess(true);

      // Open WhatsApp directly for instant notification
      if (data.userWhatsAppLink) {
        window.open(data.userWhatsAppLink, "_blank");
      }
    } catch (err: any) {
      setError(err.message || "Please try again or WhatsApp us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="apply" className="py-20 bg-canvas text-forest-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-gold font-sans">
            Investment
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            All-Inclusive Packages
          </h2>
          <p className="text-ink-secondary mt-4 max-w-2xl mx-auto">
            Select your preferred cohort and room type. All prices include accommodation,
            nourishing Himalayan meals, and all retreat sessions.
            Travel to and from the resort is separate.
          </p>
        </div>

        {/* Cohort Selector */}
        <div className="max-w-md mx-auto p-1 rounded-2xl bg-canvas-warm border border-gold-border flex mb-10">
          <button
            onClick={() => setSelectedCohort("batch_1")}
            className={`flex-1 py-3 rounded-xl text-center transition-all ${
              selectedCohort === "batch_1"
                ? "bg-forest-dark text-canvas"
                : "text-forest-dark hover:bg-canvas-subtle"
            }`}
          >
            <span className="block text-xs font-bold uppercase text-gold">Batch 01</span>
            <span className="block font-serif">11 – 13 Dec</span>
          </button>
          <button
            onClick={() => setSelectedCohort("batch_2")}
            className={`flex-1 py-3 rounded-xl text-center transition-all ${
              selectedCohort === "batch_2"
                ? "bg-forest-dark text-canvas"
                : "text-forest-dark hover:bg-canvas-subtle"
            }`}
          >
            <span className="block text-xs font-bold uppercase text-gold">Batch 02</span>
            <span className="block font-serif">25 – 27 Dec</span>
          </button>
        </div>

        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-light text-forest text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-gold" />
            {selectedCohort === "batch_1" ? "11 – 13 December 2026" : "25 – 27 December 2026"}{" "}
            · 38 Seats
          </span>
        </div>

        {showForm ? (
          <div className="max-w-2xl mx-auto rounded-3xl bg-white border border-gold-border shadow-sm p-8">
            {success ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-forest-light text-forest mx-auto flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-forest-dark mb-2">
                  Application Received!
                </h3>
                <p className="text-ink-secondary mb-6">
                  Our Retreat Coordinator will connect with you shortly via WhatsApp.
                </p>

                {submittedData?.userWhatsAppLink && (
                  <div className="mb-6">
                    <a
                      href={submittedData.userWhatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-waGreen text-white font-semibold text-sm hover:bg-waGreen-hover shadow-md transition-all"
                    >
                      <span>Open WhatsApp Chat Directly</span>
                    </a>
                  </div>
                )}
                <button
                  onClick={() => {
                    setShowForm(false);
                    setSuccess(false);
                    setFormData({ name: "", whatsapp: "", email: "", company: "", room: "double" });
                  }}
                  className="text-sm text-gold hover:underline"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="text-center mb-6">
                  <h3 className="font-serif text-xl font-bold text-forest-dark">
                    Apply for {selectedCohort === "batch_1" ? "Batch 01" : "Batch 02"}
                  </h3>
                  <p className="text-xs text-ink-muted">Secure your seat with this quick form</p>
                </div>

                {error && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-forest-dark mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gold-border bg-canvas-warm/50 focus:outline-none focus:ring-2 focus:ring-gold/50"
                    placeholder="e.g. Rajesh Sharma"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-forest-dark mb-1.5">
                    WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gold-border bg-canvas-warm/50 focus:outline-none focus:ring-2 focus:ring-gold/50"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-forest-dark mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gold-border bg-canvas-warm/50 focus:outline-none focus:ring-2 focus:ring-gold/50"
                    placeholder="rajesh@company.com"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-forest-dark mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gold-border bg-canvas-warm/50 focus:outline-none focus:ring-2 focus:ring-gold/50"
                      placeholder="e.g. Acme Corp"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-forest-dark mb-1.5">
                      Room Preference
                    </label>
                    <select
                      value={formData.room}
                      onChange={(e) => setFormData({ ...formData, room: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gold-border bg-canvas-warm/50 focus:outline-none focus:ring-2 focus:ring-gold/50"
                    >
                      <option value="double">Double Sharing (₹24,000)</option>
                      <option value="triple">Triple Sharing (₹22,000)</option>
                      <option value="quad">Quad Sharing (₹20,000)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl font-semibold text-forest-dark bg-gold hover:bg-gold-hover transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Application</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-ink-muted text-center">
                  Your details are securely stored in our cloud database.
                </p>
              </form>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: "double", title: "Double Sharing", price: "₹24,000", features: ["2 Nights accommodation", "All Himalayan meals included", "Breathwork & focus sessions", "All retreat activities"] },
              { id: "triple", title: "Triple Sharing", price: "₹22,000", features: ["2 Nights accommodation", "All Himalayan meals included", "Breathwork & focus sessions", "All retreat activities"] },
              { id: "quad", title: "Quad Sharing", price: "₹20,000", features: ["2 Nights accommodation", "All Himalayan meals included", "Breathwork & focus sessions", "All retreat activities"] },
            ].map((pkg) => (
              <div key={pkg.id} className="rounded-3xl p-6 bg-white border border-gold-border shadow-sm hover:border-gold transition-all">
                <h3 className="font-serif text-2xl font-bold text-forest-dark mb-2">{pkg.title}</h3>
                <p className="text-ink-secondary text-sm mb-6 font-light">{pkg.price} / person</p>
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <span className="font-serif text-3xl font-bold text-forest-dark">{pkg.price}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-ink-secondary">
                      <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setShowForm(true)}
                  className="w-full py-3 rounded-xl font-semibold text-white bg-forest-dark hover:bg-forest-elevated transition-all"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <p className="text-sm text-ink-muted mb-4">Prefer to chat first?</p>
          <a
            href="https://wa.me/919650102777?text=Hi%2C%20I%20am%20interested%20in%20The%20CEO%20Within%20Retreat%20(Dec%202026)."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-waGreen hover:bg-waGreen-hover"
          >
            <span className="w-5 h-5 rounded-full bg-white text-waGreen flex items-center justify-center text-xs font-bold">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            </span>
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </section>
  );
}
