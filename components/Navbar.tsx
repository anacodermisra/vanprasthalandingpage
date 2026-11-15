"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MessageCircle, Menu, X, Calendar, Phone } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "The Sanctuary", href: "#sanctuary" },
    { label: "The Facilitator", href: "#facilitator" },
    { label: "Cohorts & Pricing", href: "#apply" },
    { label: "FAQ", href: "#faq" },
  ];

  const waLink = buildWhatsAppLink();

  return (
    <>
      {/* Top Heritage Notice Bar */}
      <div className="bg-forest-dark text-canvas text-xs py-2 px-4 border-b border-forest-border">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center sm:text-left">
          <div className="flex items-center gap-2 font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-canvas/90">
              December 2026 Executive Cohorts · Batch 1: 11–13 Dec · Batch 2: 25–27 Dec
            </span>
          </div>

          <div className="flex items-center gap-4 text-ink-onDarkMuted">
            <span className="hidden md:inline text-gold/90 font-mono text-[11px]">
              Strictly 38 Seats per Batch
            </span>
            <a
              href="tel:+919650102777"
              className="hidden lg:flex items-center gap-1 hover:text-gold transition-colors text-[11px]"
            >
              <Phone className="w-3 h-3 text-gold" />
              <span>+91 9650102777</span>
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-gold hover:text-gold-hover font-semibold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-waGreen" />
              <span>WhatsApp Us Directly</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "glass-card-light shadow-heritage py-2.5"
            : "bg-canvas/95 backdrop-blur-md py-3.5 border-b border-gold-border/40"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Official Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0">
              <Image
                src="/assets/logo/vanprastha-logo.png"
                alt="Vanprastha Resorts Logo"
                width={56}
                height={56}
                className="object-contain transition-transform group-hover:scale-105"
                priority
              />
            </div>
            <div className="border-l border-gold/40 pl-3">
              <span className="block font-serif text-lg sm:text-xl font-bold tracking-tight text-forest-dark leading-none">
                VANPRASTHA
              </span>
              <span className="block text-[10px] tracking-[0.22em] uppercase text-gold font-sans font-semibold mt-0.5">
                Resorts · Dunagiri 7,500 ft
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-wider font-semibold text-ink-secondary hover:text-forest-dark transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Direct Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-forest-dark bg-white border border-gold-border rounded-lg hover:border-gold hover:shadow-sm transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-waGreen" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href="#apply"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-forest-dark hover:bg-forest-elevated transition-all rounded-lg shadow-sm hover:-translate-y-0.5 border border-forest-border"
            >
              <Calendar className="w-3.5 h-3.5 text-gold" />
              <span>Apply for Seat</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-forest-dark hover:bg-canvas-subtle transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-canvas border-b border-gold-border/40 px-4 pt-3 pb-6 space-y-3">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-forest-dark hover:bg-canvas-subtle"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-gold-border/30 flex flex-col gap-2">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-waGreen/10 text-forest-dark border border-waGreen/30"
              >
                <MessageCircle className="w-4 h-4 text-waGreen" />
                <span>WhatsApp Us Directly</span>
              </a>

              <a
                href="#apply"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-forest-dark text-canvas"
              >
                <Calendar className="w-4 h-4 text-gold" />
                <span>Apply for Cohort Seat</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
