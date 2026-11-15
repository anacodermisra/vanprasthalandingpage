"use client";

import React, { useState } from "react";
import { MessageCircle, CheckCircle, ShieldCheck, Send, Loader2, AlertCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

interface LeadFormProps {
  initialTier?: string;
  initialCohort?: string;
}

export default function LeadForm({ initialTier = "double", initialCohort = "batch_1" }: LeadFormProps) {
  const [fullName, setFullName] = useState("");
  const [whatsappPhone, setWhatsappPhone] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [designation, setDesignation] = useState("");
  const [bookingType, setBookingType] = useState<"individual" | "corporate_team">("individual");
  const [teamSize, setTeamSize] = useState<number>(1);
  const [preferredCohort, setPreferredCohort] = useState<string>(initialCohort);
  const [roomPreference, setRoomPreference] = useState<string>(initialTier);
  const [notes, setNotes] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{
    leadId: string;
    message: string;
    userWhatsAppLink: string;
  } | null>(null);

  const directWaLink = buildWhatsAppLink({
    cohort: preferredCohort === "batch_1" ? "Batch 1 (11–13 Dec)" : "Batch 2 (25–27 Dec)",
    fullName: fullName || undefined,
    companyName: companyName || undefined,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!fullName.trim() || fullName.trim().length < 2) {
      setErrorMsg("Please enter your full name.");
      return;
    }
    if (!whatsappPhone.trim() || whatsappPhone.trim().length < 8) {
      setErrorMsg("Please enter your WhatsApp contact number.");
      return;
    }
    if (!workEmail.trim() || !workEmail.includes("@")) {
      setErrorMsg("Please enter a valid work or personal email address.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          whatsappPhone,
          workEmail,
          companyName,
          designation,
          bookingType,
          teamSize: bookingType === "corporate_team" ? teamSize : 1,
          preferredCohort,
          roomPreference,
          notes,
          utmSource: "web_direct",
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit. Please message us on WhatsApp.");
      }

      setSuccessData({
        leadId: data.leadId,
        message: data.message,
        userWhatsAppLink: data.userWhatsAppLink,
      });
    } catch (err: any) {
      setErrorMsg(err.message || "An unexpected error occurred. Please chat with us on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="apply" className="py-24 bg-canvas-subtle relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-[0.22em] uppercase text-gold block mb-2 font-sans">
            Strictly 38 Leaders per Cohort
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-forest-dark leading-tight mb-4">
            Apply for Your Cohort Seat
          </h2>
          <p className="text-ink-secondary text-base font-light max-w-xl mx-auto">
            A frictionless, discreet onboarding process. Leave your contact details below or message
            our Retreat Coordinator directly on WhatsApp for immediate confirmation.
          </p>
        </div>

        {/* The Frictionless 3-Step Onboarding Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="p-4 rounded-2xl bg-white border border-gold-border/50 shadow-sm text-left">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-gold block font-sans">
              Step 01
            </span>
            <h4 className="font-serif text-base font-bold text-forest-dark mt-0.5">
              60-Second Application
            </h4>
            <p className="text-xs text-ink-secondary mt-1 font-light leading-relaxed">
              Submit your room preference below or start a 1-tap WhatsApp chat with our coordinator.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-gold-border/50 shadow-sm text-left">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-gold block font-sans">
              Step 02
            </span>
            <h4 className="font-serif text-base font-bold text-forest-dark mt-0.5">
              10-Minute Fit &amp; Logistics Call
            </h4>
            <p className="text-xs text-ink-secondary mt-1 font-light leading-relaxed">
              A brief, warm conversation to confirm cottage availability, dietary needs, and Shatabdi timings.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-gold-border/50 shadow-sm text-left">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-gold block font-sans">
              Step 03
            </span>
            <h4 className="font-serif text-base font-bold text-forest-dark mt-0.5">
              Confirmed Spot &amp; Welcome Kit
            </h4>
            <p className="text-xs text-ink-secondary mt-1 font-light leading-relaxed">
              Receive your confirmed cottage booking, emergency desk contact, and Kathgodam cab pickup details.
            </p>
          </div>
        </div>

        {/* Success Confirmation Card */}
        {successData ? (
          <div className="p-8 sm:p-12 rounded-3xl bg-white border-2 border-gold shadow-2xl text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-forest-light text-forest mx-auto flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-gold uppercase block font-sans">
                Application Received · ID #{successData.leadId.slice(0, 8)}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-dark">
                Thank You, {fullName}.
              </h3>
              <p className="text-sm sm:text-base text-ink-secondary max-w-lg mx-auto font-light leading-relaxed">
                Your application has been securely recorded. Our Retreat Coordinator will message you
                on WhatsApp to review your cottage choice and Kathgodam travel arrangements.
              </p>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="pt-4 p-6 rounded-2xl bg-canvas-warm border border-gold-border/60 max-w-md mx-auto space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-ink-muted font-sans">
                Want Instant Confirmation?
              </p>
              <a
                href={successData.userWhatsAppLink || directWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-waGreen hover:bg-waGreen-hover transition-all shadow-lg font-sans"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Retreat Team on WhatsApp Now</span>
              </a>
              <span className="text-[11px] text-ink-muted block font-light">
                Average reply time: Under 15 minutes
              </span>
            </div>

            <button
              onClick={() => {
                setSuccessData(null);
                setFullName("");
                setWhatsappPhone("");
                setWorkEmail("");
                setNotes("");
              }}
              className="text-xs text-ink-muted hover:text-forest-dark underline pt-4"
            >
              Submit another inquiry or register another team member
            </button>
          </div>
        ) : (
          /* Form Card */
          <div className="p-6 sm:p-10 rounded-3xl bg-white border border-gold-border/50 shadow-heritage">
            {/* Quick WhatsApp Action Banner */}
            <div className="mb-8 p-4 rounded-2xl bg-waGreen/10 border border-waGreen/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-waGreen text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-forest-dark">
                    Prefer to chat directly on WhatsApp?
                  </h4>
                  <p className="text-xs text-ink-secondary font-light">
                    Skip the form and message our Retreat Coordinator right away.
                  </p>
                </div>
              </div>
              <a
                href={directWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center shrink-0 px-4 py-2 rounded-xl text-xs font-bold bg-waGreen text-white hover:bg-waGreen-hover transition-colors shadow-sm font-sans"
              >
                Open WhatsApp Chat
              </a>
            </div>

            {errorMsg && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name and WhatsApp Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-dark mb-1.5 font-sans">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full px-4 py-3 rounded-xl border border-gold-border/50 bg-canvas-warm/50 text-ink text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-dark mb-1.5 font-sans">
                    WhatsApp Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={whatsappPhone}
                    onChange={(e) => setWhatsappPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-gold-border/50 bg-canvas-warm/50 text-ink text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                  />
                  <span className="text-[11px] text-ink-muted mt-1 block font-light">
                    We will send cohort details &amp; confirmation here.
                  </span>
                </div>
              </div>

              {/* Row 2: Work Email and Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-dark mb-1.5 font-sans">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    placeholder="e.g. rajesh@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-gold-border/50 bg-canvas-warm/50 text-ink text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-dark mb-1.5 font-sans">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Acme Tech Ventures / Self"
                    className="w-full px-4 py-3 rounded-xl border border-gold-border/50 bg-canvas-warm/50 text-ink text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                  />
                </div>
              </div>

              {/* Row 3: Designation and Booking Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-dark mb-1.5 font-sans">
                    Designation / Role
                  </label>
                  <input
                    type="text"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                    placeholder="e.g. Founder, CEO, VP Operations"
                    className="w-full px-4 py-3 rounded-xl border border-gold-border/50 bg-canvas-warm/50 text-ink text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-dark mb-1.5 font-sans">
                    Registration Type
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setBookingType("individual")}
                      className={`py-3 px-3 rounded-xl text-xs font-semibold border transition-all text-center font-sans ${
                        bookingType === "individual"
                          ? "bg-forest-dark text-canvas border-gold"
                          : "bg-canvas-warm/60 text-forest-dark border-gold-border/40"
                      }`}
                    >
                      Individual Leader
                    </button>
                    <button
                      type="button"
                      onClick={() => setBookingType("corporate_team")}
                      className={`py-3 px-3 rounded-xl text-xs font-semibold border transition-all text-center font-sans ${
                        bookingType === "corporate_team"
                          ? "bg-forest-dark text-canvas border-gold"
                          : "bg-canvas-warm/60 text-forest-dark border-gold-border/40"
                      }`}
                    >
                      Corporate Team (2+)
                    </button>
                  </div>
                </div>
              </div>

              {/* Team Size if Corporate */}
              {bookingType === "corporate_team" && (
                <div className="p-4 rounded-xl bg-canvas-warm border border-gold-border/60">
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-dark mb-1.5 font-sans">
                    Estimated Team Size
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      min={2}
                      max={38}
                      value={teamSize}
                      onChange={(e) => setTeamSize(Number(e.target.value))}
                      className="w-24 px-3 py-2 rounded-lg border border-gold-border bg-white text-forest-dark text-sm text-center font-bold"
                    />
                    <span className="text-xs text-ink-secondary font-light">
                      Members (We will provide custom group pricing &amp; GST billing)
                    </span>
                  </div>
                </div>
              )}

              {/* Row 4: Preferred Cohort & Room Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-dark mb-1.5 font-sans">
                    Preferred Cohort
                  </label>
                  <select
                    value={preferredCohort}
                    onChange={(e) => setPreferredCohort(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gold-border/50 bg-canvas-warm/50 text-forest-dark text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                  >
                    <option value="batch_1">Batch 01: 11 – 13 December 2026</option>
                    <option value="batch_2">Batch 02: 25 – 27 December 2026 (Christmas)</option>
                    <option value="flexible">Flexible / Either Cohort</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-dark mb-1.5 font-sans">
                    Room Preference
                  </label>
                  <select
                    value={roomPreference}
                    onChange={(e) => setRoomPreference(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gold-border/50 bg-canvas-warm/50 text-forest-dark text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                  >
                    <option value="double">Double Sharing (₹24,000 / seat)</option>
                    <option value="triple">Triple Sharing (₹22,000 / seat)</option>
                    <option value="quad">Quad Sharing (₹20,000 / seat)</option>
                    <option value="corporate">Corporate Team / Custom</option>
                  </select>
                </div>
              </div>

              {/* Row 5: Notes / Questions */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-forest-dark mb-1.5 font-sans">
                  Specific Objectives or Travel Questions
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Arriving by Kathgodam Shatabdi, bringing co-founders, dietary preferences..."
                  className="w-full px-4 py-3 rounded-xl border border-gold-border/50 bg-canvas-warm/50 text-forest-dark text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all resize-none font-light"
                />
              </div>

              {/* Submit Action */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-xl text-base font-semibold text-forest-dark bg-gold hover:bg-gold-hover transition-all shadow-goldGlow flex items-center justify-center gap-2 hover:-translate-y-0.5 disabled:opacity-60 disabled:pointer-events-none font-sans"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting Secure Application...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Application for Screening</span>
                    </>
                  )}
                </button>
              </div>

              {/* Security Footnote */}
              <div className="flex items-center justify-center gap-2 text-xs text-ink-muted text-center pt-1 font-light">
                <ShieldCheck className="w-4 h-4 text-forest" />
                <span>24/7 Encrypted Cloud Database · Your details are confidential and never shared.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
