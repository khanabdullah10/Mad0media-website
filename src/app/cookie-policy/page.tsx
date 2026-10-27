import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Cookie, ShieldAlert, CheckCircle, Settings, Mail, Info, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy | MAD O MEDIA - Cookie Usage & Consent Guide",
  description:
    "Learn how MAD O MEDIA uses cookies, tracking technologies, and Google Consent Mode v2 to respect your privacy while optimizing campaign experiences.",
  alternates: {
    canonical: "https://mad0media.com/cookie-policy",
  },
  openGraph: {
    title: "Cookie Policy | MAD O MEDIA",
    description:
      "Detailed breakdown of essential, analytical, functional, and marketing cookies utilized across mad0media.com.",
    url: "https://mad0media.com/cookie-policy",
    images: [
      {
        url: "/images/mad-o-media-logo.png",
        width: 1200,
        height: 630,
        alt: "MAD O MEDIA Cookie Policy",
      },
    ],
  },
};

const cookieInventory = [
  {
    name: "mom_consent",
    provider: "MAD O MEDIA",
    category: "Strictly Necessary",
    purpose: "Stores user cookie consent preferences across sessions",
    duration: "12 Months",
  },
  {
    name: "__cf_bm",
    provider: "Cloudflare",
    category: "Strictly Necessary",
    purpose: "Detects and mitigates malicious bot traffic and DDoS attacks",
    duration: "30 Minutes",
  },
  {
    name: "_ga",
    provider: "Google Analytics 4",
    category: "Analytics & Telemetry",
    purpose: "Distinguishes unique users and measures overall page engagement anonymously",
    duration: "24 Months",
  },
  {
    name: "_ga_*",
    provider: "Google Analytics 4",
    category: "Analytics & Telemetry",
    purpose: "Maintains session state and campaign navigation metrics",
    duration: "24 Months",
  },
  {
    name: "_fbp",
    provider: "Meta Platforms",
    category: "Marketing & Attribution",
    purpose: "Measures influencer campaign attribution and social ad conversions",
    duration: "90 Days",
  },
  {
    name: "li_sugr",
    provider: "LinkedIn Corporation",
    category: "Marketing & Attribution",
    purpose: "Used to match B2B browser identifiers for marketing campaign attribution",
    duration: "90 Days",
  },
];

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header Hero */}
        <div className="space-y-6 border-b border-neutral-900 pb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FE3EB4]/10 border border-[#FE3EB4]/30 text-[#FE3EB4] text-xs font-bold uppercase tracking-widest">
            <Cookie className="w-4 h-4" />
            <span>Tracking & Consent Framework</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            Cookie Policy
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-neutral-400 font-mono">
            <span>Effective Date: October 27, 2026</span>
            <span>•</span>
            <span>Framework: Google Consent Mode v2</span>
            <span>•</span>
            <span className="text-[#FE3EB4]">ePrivacy & GDPR Aligned</span>
          </div>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl">
            This Cookie Policy explains how MAD O MEDIA (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) uses cookies, local storage, pixel tags, and similar technologies on <span className="text-white font-medium">mad0media.com</span>. We provide transparent information on what cookies do, why we deploy them, and how you can exercise full granular control over your preferences at any moment.
          </p>
        </div>

        {/* Section 1: What Are Cookies */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
            <span className="text-[#FE3EB4]">01.</span> What Are Cookies and Local Tracking Technologies?
          </h2>
          <p className="text-neutral-300 leading-relaxed">
            Cookies are small alphanumeric text files placed onto your computer, smartphone, or tablet when you visit websites. They are widely utilized by online services to make web experiences function efficiently, remember preferences, measure digital marketing efficacy, and provide analytical reporting to website operators.
          </p>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Alongside HTTP cookies, we may utilize HTML5 local storage, server session logs, and transparent image pixels (web beacons). Throughout this policy, all such technologies are collectively designated as &ldquo;Cookies&rdquo;.
          </p>
        </section>

        {/* Section 2: Cookie Categories Breakdown */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
              <span className="text-[#FE3EB4]">02.</span> Categories of Cookies We Use
            </h2>
            <p className="text-neutral-400 text-sm">
              We classify cookies into four distinct operational tiers:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Category 1 */}
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-bold text-[#FE3EB4]">Tier 1</span>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono">
                  Always Active
                </span>
              </div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                Strictly Necessary Cookies
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Essential for basic web navigation, security against CSRF attacks, load balancing, and remembering your privacy consent preferences. The website cannot function correctly without these cookies.
              </p>
            </div>

            {/* Category 2 */}
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-bold text-[#FE3EB4]">Tier 2</span>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-neutral-800 text-neutral-300 font-mono">
                  User Configurable
                </span>
              </div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Info className="w-5 h-5 text-[#FE3EB4]" />
                Performance & Analytics Cookies
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Allow us to understand aggregate visitor traffic, popular case studies, viewport benchmarks, and bounce rates. These cookies collect anonymous telemetry without identifying you personally.
              </p>
            </div>

            {/* Category 3 */}
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-bold text-[#FE3EB4]">Tier 3</span>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-neutral-800 text-neutral-300 font-mono">
                  User Configurable
                </span>
              </div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Settings className="w-5 h-5 text-amber-400" />
                Functional & Preference Cookies
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Enable advanced convenience features, such as preserving your contact drawer draft state, remembering muted audio states on video reels, and responsive interface personalization.
              </p>
            </div>

            {/* Category 4 */}
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-bold text-[#FE3EB4]">Tier 4</span>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-neutral-800 text-neutral-300 font-mono">
                  User Configurable
                </span>
              </div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-purple-400" />
                Targeting & Marketing Pixels
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Deployed in collaboration with advertising platforms (LinkedIn, Meta) to evaluate creator campaign conversions, prevent redundant ad impressions, and measure ROI for agency partners.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Google Consent Mode v2 */}
        <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-neutral-950/70 border border-neutral-800">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
            <ShieldAlert className="w-6 h-6 text-[#FE3EB4]" />
            Google Consent Mode v2 Compliance
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            In compliance with EU/EEA privacy mandates and Digital Markets Act (DMA) regulations, our website is configured to support Google Consent Mode v2. By default, all non-essential analytics and advertising storage signals (<code className="text-[#FE3EB4] font-mono text-xs">analytics_storage</code>, <code className="text-[#FE3EB4] font-mono text-xs">ad_storage</code>, <code className="text-[#FE3EB4] font-mono text-xs">ad_user_data</code>, <code className="text-[#FE3EB4] font-mono text-xs">ad_personalization</code>) remain set to <span className="font-semibold text-white">&apos;denied&apos;</span> until explicit opt-in is granted.
          </p>
        </section>

        {/* Section 4: Detailed Cookie Inventory Table */}
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
              <span className="text-[#FE3EB4]">03.</span> Active Cookies & Technical Inventory
            </h2>
            <p className="text-neutral-400 text-sm">
              The following audit table provides complete transparency into the primary cookies deployed across our services:
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-800 bg-neutral-950">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-neutral-900/80 text-white font-mono uppercase tracking-wider text-[11px] border-b border-neutral-800">
                <tr>
                  <th className="py-3.5 px-4 sm:px-6">Cookie Identifier</th>
                  <th className="py-3.5 px-4 sm:px-6">Provider</th>
                  <th className="py-3.5 px-4 sm:px-6">Category</th>
                  <th className="py-3.5 px-4 sm:px-6">Purpose</th>
                  <th className="py-3.5 px-4 sm:px-6">Expiry</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-900 text-neutral-300">
                {cookieInventory.map((c, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-mono text-[#FE3EB4] font-semibold whitespace-nowrap">
                      {c.name}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 whitespace-nowrap text-white font-medium">
                      {c.provider}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 whitespace-nowrap text-xs text-neutral-400">
                      {c.category}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-xs text-neutral-400 max-w-xs sm:max-w-md">
                      {c.purpose}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 whitespace-nowrap font-mono text-xs text-neutral-400">
                      {c.duration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Browser Management */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
            <span className="text-[#FE3EB4]">04.</span> Managing & Disabling Cookies in Your Browser
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Most modern web browsers allow you to control cookie storage directly via their application settings. You can configure your browser to reject all cookies, notify you whenever a cookie is created, or purge existing cookies upon closing your browser window:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-2">
            {[
              { browser: "Google Chrome", path: "Settings → Privacy and security → Third-party cookies" },
              { browser: "Apple Safari", path: "Settings → Safari → Advanced → Block All Cookies" },
              { browser: "Mozilla Firefox", path: "Settings → Privacy & Security → Enhanced Tracking Protection" },
              { browser: "Microsoft Edge", path: "Settings → Cookies and site permissions → Manage cookies" },
            ].map((b, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-900 space-y-1">
                <span className="font-bold text-white block">{b.browser}</span>
                <span className="text-neutral-500 text-[11px] leading-tight block">{b.path}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Contact & Inquiries */}
        <section className="space-y-4 pt-4 border-t border-neutral-900">
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
            <span className="text-[#FE3EB4]">05.</span> Questions & Contact
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            If you have questions regarding our cookie practices, technical implementations, or data protection policies, please contact our compliance desk:
          </p>
          <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold block">
                Compliance Desk
              </span>
              <a
                href="mailto:info@mad0media.com"
                className="text-white font-medium hover:text-[#FE3EB4] transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#FE3EB4]" />
                info@mad0media.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/privacy-policy"
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white hover:text-black text-xs font-semibold transition-all"
              >
                View Privacy Policy
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 rounded-full bg-[#FE3EB4] text-black text-xs font-bold hover:bg-white transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Footer Quick Links Navigation */}
        <div className="pt-12 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-xs text-neutral-500">
            © {new Date().getFullYear()} MAD O MEDIA. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-xs text-neutral-400">
            <Link href="/privacy-policy" className="hover:text-[#FE3EB4] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="text-[#FE3EB4] font-medium transition-colors">
              Cookie Policy
            </Link>
            <Link href="/contact" className="hover:text-[#FE3EB4] transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
