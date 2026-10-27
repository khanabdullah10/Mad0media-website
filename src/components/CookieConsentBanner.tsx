"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("mom_cookie_consent");
      if (!consent) {
        // Small delay so it animates in smoothly after initial render
        const timer = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // LocalStorage not available (e.g. strict incognito)
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("mom_cookie_consent", "accepted");
    } catch {}
    setVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem("mom_cookie_consent", "declined");
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 p-5 rounded-2xl bg-neutral-950/95 backdrop-blur-md border border-neutral-800 shadow-2xl text-white transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
    >
      <div className="flex items-start justify-between gap-3 mb-2.5">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-[#FE3EB4]/10 text-[#FE3EB4]">
            <Cookie className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-300 font-mono">
            Privacy & Cookies
          </span>
        </div>
        <button
          onClick={handleDecline}
          aria-label="Close cookie banner"
          className="p-1 rounded-md text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-xs text-neutral-300 leading-relaxed mb-3">
        We use cookies and telemetry to optimize your browsing experience, analyze site engagement, and support creative campaigns in full compliance with GDPR & Google Consent Mode v2.
      </p>

      {/* Direct policy links */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-neutral-400 mb-4 pb-3 border-b border-neutral-900">
        <Link href="/privacy-policy" className="hover:text-[#FE3EB4] transition-colors underline underline-offset-2">
          Privacy Policy
        </Link>
        <span>•</span>
        <Link href="/cookie-policy" className="hover:text-[#FE3EB4] transition-colors underline underline-offset-2">
          Cookie Policy
        </Link>
        <span>•</span>
        <Link href="/contact" className="hover:text-[#FE3EB4] transition-colors underline underline-offset-2">
          Contact Us
        </Link>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-2.5">
        <button
          onClick={handleAccept}
          className="flex-1 py-2 px-3 rounded-lg bg-[#FE3EB4] text-black text-xs font-bold transition-all hover:bg-white cursor-pointer"
        >
          Accept All
        </button>
        <button
          onClick={handleDecline}
          className="py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 text-xs font-medium border border-neutral-800 transition-colors cursor-pointer"
        >
          Reject Non-Essential
        </button>
      </div>
    </aside>
  );
}
