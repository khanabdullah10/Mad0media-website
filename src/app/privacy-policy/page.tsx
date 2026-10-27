import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, Eye, FileText, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | MAD O MEDIA - Data Protection & Compliance",
  description:
    "Review the MAD O MEDIA Privacy Policy. Learn how we collect, protect, process, and respect your personal data across our digital marketing, creator, and branding services.",
  alternates: {
    canonical: "https://mad0media.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | MAD O MEDIA",
    description:
      "Our commitment to privacy, data protection, and transparency under GDPR, CCPA, and Indian DPDP Act standards.",
    url: "https://mad0media.com/privacy-policy",
    images: [
      {
        url: "/images/mad-o-media-logo.png",
        width: 1200,
        height: 630,
        alt: "MAD O MEDIA Privacy Policy",
      },
    ],
  },
};

const sections = [
  { id: "intro", title: "1. Introduction & Data Controller" },
  { id: "data-collected", title: "2. Personal Data We Collect" },
  { id: "collection-methods", title: "3. How We Collect Data" },
  { id: "legal-basis", title: "4. Legal Basis & Purposes for Processing" },
  { id: "sharing", title: "5. Third-Party Sharing & Processors" },
  { id: "international-transfers", title: "6. International Data Transfers" },
  { id: "retention", title: "7. Data Retention Schedules" },
  { id: "user-rights", title: "8. Your Statutory Privacy Rights" },
  { id: "security", title: "9. Information Security & Storage" },
  { id: "children", title: "10. Children's Privacy" },
  { id: "contact-dpo", title: "11. Contact Our Data Protection Team" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header Hero */}
        <div className="space-y-6 border-b border-neutral-900 pb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FE3EB4]/10 border border-[#FE3EB4]/30 text-[#FE3EB4] text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            <span>Legal & Privacy Compliance</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            Privacy Policy
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-neutral-400 font-mono">
            <span>Effective Date: October 27, 2026</span>
            <span>•</span>
            <span>Version: 3.2</span>
            <span>•</span>
            <span className="text-[#FE3EB4]">GDPR • CCPA • DPDP Compliant</span>
          </div>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl">
            At MAD O MEDIA, we believe that world-class creative campaigns must be built on a foundation of absolute transparency, trust, and uncompromising privacy standards. This policy outlines how we handle personal information collected through our website (<span className="text-white font-medium">mad0media.com</span>), client briefs, creator discovery pipelines, and digital campaigns.
          </p>
        </div>

        {/* Quick Navigation & Table of Contents */}
        <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800">
          <h2 className="text-xs uppercase tracking-widest font-bold text-neutral-400 mb-4 flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#FE3EB4]" />
            Table of Contents
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xs sm:text-sm">
            {sections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="text-neutral-400 hover:text-[#FE3EB4] transition-colors py-1 flex items-center gap-1.5 group"
              >
                <span className="text-neutral-600 group-hover:text-[#FE3EB4]">→</span>
                <span>{sec.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Content Body */}
        <div className="space-y-14 text-neutral-300 text-sm sm:text-base leading-relaxed">
          {/* Section 1 */}
          <section id="intro" className="space-y-4 pt-4 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
              <span className="text-[#FE3EB4]">01.</span> Introduction & Data Controller
            </h2>
            <p>
              This Privacy Notice applies to all personal information collected, processed, and held by <strong className="text-white">MAD O MEDIA</strong> (&ldquo;Mad O Media&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), an integrated branding, creator marketing, and digital agency headquartered in Mumbai, India, servicing enterprise brands globally.
            </p>
            <p>
              For the purposes of the General Data Protection Regulation (EU GDPR), the UK GDPR, and the Digital Personal Data Protection Act 2023 (DPDP Act, India), the primary Data Controller is MAD O MEDIA. If you have questions regarding data governance, you may reach our appointed Data Protection Officer at <a href="mailto:info@mad0media.com" className="text-[#FE3EB4] hover:underline font-medium">info@mad0media.com</a>.
            </p>
          </section>

          {/* Section 2 */}
          <section id="data-collected" className="space-y-4 pt-4 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
              <span className="text-[#FE3EB4]">02.</span> Personal Data We Collect
            </h2>
            <p>
              Depending on how you engage with our agency platforms, we may collect and process the following categories of information:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-xl bg-neutral-950 border border-neutral-900 space-y-2">
                <h3 className="font-bold text-white text-sm flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#FE3EB4]" />
                  A. Directly Provided Information
                </h3>
                <ul className="text-xs sm:text-sm text-neutral-400 space-y-1.5 list-disc pl-4">
                  <li>Full name, corporate email address, and telephone number</li>
                  <li>Company name, brand jurisdiction, job title, and project brief parameters</li>
                  <li>WhatsApp communication transcripts and inquiry message content</li>
                  <li>Creator handles, audience demographics, and campaign portfolio submissions</li>
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-neutral-950 border border-neutral-900 space-y-2">
                <h3 className="font-bold text-white text-sm flex items-center gap-2">
                  <Eye className="w-4 h-4 text-[#FE3EB4]" />
                  B. Automatically Collected Telemetry
                </h3>
                <ul className="text-xs sm:text-sm text-neutral-400 space-y-1.5 list-disc pl-4">
                  <li>Internet Protocol (IP) address and approximate geographic location (city level)</li>
                  <li>Browser type, operating system, device viewport dimensions, and language</li>
                  <li>Navigation paths, page dwell time, referral URLs, and interaction patterns</li>
                  <li>Technical telemetry collected under Google Consent Mode v2</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="collection-methods" className="space-y-4 pt-4 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
              <span className="text-[#FE3EB4]">03.</span> How We Collect Data
            </h2>
            <p>
              We gather information through several distinct channels:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-400">
              <li><strong className="text-white">Direct Interaction:</strong> When you complete our project inquiry forms, contact drawer, email us at <span className="text-[#FE3EB4]">info@mad0media.com</span>, or chat with our strategists via our direct WhatsApp channel.</li>
              <li><strong className="text-white">Automated Technologies:</strong> When you visit our website, cookies, web beacons, and server log files automatically capture anonymous usage metrics.</li>
              <li><strong className="text-white">Publicly Available Sources:</strong> For creator talent vetting and brand competitive benchmarking, we analyze publicly available social profiles across Instagram, TikTok, LinkedIn, and YouTube.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="legal-basis" className="space-y-4 pt-4 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
              <span className="text-[#FE3EB4]">04.</span> Legal Basis & Purposes for Processing
            </h2>
            <p>
              We process personal information under the following statutory legal bases:
            </p>
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-900">
                <h3 className="font-bold text-white text-sm text-[#FE3EB4]">1. Performance of a Contract</h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                  To respond to creative requests for proposals (RFPs), draft master service agreements (MSAs), execute influencer marketing contracts, and deliver digital campaigns.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-900">
                <h3 className="font-bold text-white text-sm text-[#FE3EB4]">2. Legitimate Business Interests</h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                  To optimize our digital infrastructure, protect against fraudulent activity, monitor site performance, conduct B2B relationship outreach, and refine our service offerings.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-900">
                <h3 className="font-bold text-white text-sm text-[#FE3EB4]">3. Explicit Consent</h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                  Where you opt in to receive industry briefings, creative trends analysis, or grant permission for non-essential analytical cookies via our cookie preference controls.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="sharing" className="space-y-4 pt-4 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
              <span className="text-[#FE3EB4]">05.</span> Third-Party Sharing & Processors
            </h2>
            <p>
              <strong className="text-white">We never sell, rent, monetize, or trade your personal data.</strong> We disclose personal data only to vetted third-party service providers bound by strict confidentiality and data processing agreements:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-400">
              <li><strong className="text-white">Cloud & Hosting Infrastructure:</strong> Global cloud hosting (e.g. Vercel, AWS) utilizing SOC-2 Type II certified data centers.</li>
              <li><strong className="text-white">Communication & CRM Systems:</strong> Enterprise email and messaging infrastructure to coordinate campaign deliverables.</li>
              <li><strong className="text-white">Legal & Regulatory Authorities:</strong> Where mandatory compliance with judicial subpoenas, statutory court orders, or applicable regulations is strictly required by law.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section id="international-transfers" className="space-y-4 pt-4 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
              <span className="text-[#FE3EB4]">06.</span> International Data Transfers
            </h2>
            <p>
              As a global digital agency, data collected by MAD O MEDIA may be stored and processed across servers located in India, the European Union, the United Kingdom, or the United States. Whenever personal information is transferred across international boundaries, we ensure adequate protective mechanisms are deployed, including Standard Contractual Clauses (SCCs) approved by the European Commission and industry-standard encryption protocols.
            </p>
          </section>

          {/* Section 7 */}
          <section id="retention" className="space-y-4 pt-4 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
              <span className="text-[#FE3EB4]">07.</span> Data Retention Schedules
            </h2>
            <p>
              We retain personal data only for as long as necessary to fulfill the purposes for which it was originally collected, including the satisfaction of legal, accounting, contractual, and reporting obligations. Inquiry form submissions are retained for up to 24 months, while active client engagement contracts are retained for 7 years in compliance with standard commercial auditing practices.
            </p>
          </section>

          {/* Section 8 */}
          <section id="user-rights" className="space-y-4 pt-4 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
              <span className="text-[#FE3EB4]">08.</span> Your Statutory Privacy Rights
            </h2>
            <p>
              Depending on your jurisdiction (such as under GDPR, UK GDPR, CCPA, or DPDP Act), you possess the following legal rights regarding your personal records:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                { title: "Right of Access", desc: "Request a copy of the personal information we maintain regarding you." },
                { title: "Right to Rectification", desc: "Request correction of incomplete or inaccurate data." },
                { title: "Right to Erasure", desc: "Request permanent deletion of your data when retention is no longer justified." },
                { title: "Right to Restrict Processing", desc: "Suspend processing of your information under specific scenarios." },
                { title: "Right to Data Portability", desc: "Obtain your data in a structured, machine-readable format." },
                { title: "Right to Withdraw Consent", desc: "Withdraw previously granted consent at any time without penalty." },
              ].map((r, i) => (
                <div key={i} className="p-4 rounded-xl bg-neutral-950 border border-neutral-900">
                  <h3 className="font-bold text-white text-xs sm:text-sm text-[#FE3EB4]">{r.title}</h3>
                  <p className="text-xs text-neutral-400 mt-1">{r.desc}</p>
                </div>
              ))}
            </div>
            <p className="pt-2 text-xs text-neutral-400">
              To exercise any of these rights, contact us at <a href="mailto:info@mad0media.com" className="text-[#FE3EB4] hover:underline font-semibold">info@mad0media.com</a>. We respond to all verified statutory requests within 30 calendar days.
            </p>
          </section>

          {/* Section 9 */}
          <section id="security" className="space-y-4 pt-4 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
              <span className="text-[#FE3EB4]">09.</span> Information Security & Storage
            </h2>
            <p>
              We implement comprehensive technical, administrative, and physical security measures designed to safeguard personal data against unauthorized disclosure, loss, destruction, or alteration. All web communications utilize TLS 1.3 encryption. Access to client data is strictly restricted based on the principle of least privilege.
            </p>
          </section>

          {/* Section 10 */}
          <section id="children" className="space-y-4 pt-4 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
              <span className="text-[#FE3EB4]">10.</span> Children&apos;s Privacy
            </h2>
            <p>
              Our web services and creative offerings are exclusively addressed to business enterprises, creators, and individuals aged 18 and above. We do not knowingly solicit or collect information from individuals under the age of 18. If you believe a minor has submitted personal records to us, please notify us immediately for expedited deletion.
            </p>
          </section>

          {/* Section 11 */}
          <section id="contact-dpo" className="space-y-6 pt-4 scroll-mt-28">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
              <span className="text-[#FE3EB4]">11.</span> Contact Our Data Protection Team
            </h2>
            <p>
              For privacy inquiries, legal notices, or data subject requests, please contact our team through any of the official channels below:
            </p>

            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <div>
                  <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold block mb-1">
                    Direct Email
                  </span>
                  <a
                    href="mailto:info@mad0media.com"
                    className="text-white font-medium hover:text-[#FE3EB4] transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-[#FE3EB4]" />
                    info@mad0media.com
                  </a>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold block mb-1">
                    Direct Phone Lines
                  </span>
                  <div className="space-y-1">
                    <a href="tel:+918828888130" className="text-white hover:text-[#FE3EB4] block transition-colors">
                      +91 88288 88130
                    </a>
                    <a href="tel:+919082903363" className="text-white hover:text-[#FE3EB4] block transition-colors">
                      +91 90829 03363
                    </a>
                    <a href="tel:+919769021534" className="text-white hover:text-[#FE3EB4] block transition-colors">
                      +91 97690 21534
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-900 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/918828888130?text=Hi%20Mad%20O%20Media,%20I%20have%20a%20privacy%20question"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#25D366] text-black text-xs font-bold transition-all hover:bg-white"
                >
                  Chat with Team on WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="px-5 py-2.5 rounded-full bg-white/10 text-white text-xs font-medium hover:bg-white hover:text-black transition-all"
                >
                  Visit Contact Page
                </Link>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Quick Links Navigation */}
        <div className="pt-12 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-xs text-neutral-500">
            © {new Date().getFullYear()} MAD O MEDIA. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-xs text-neutral-400">
            <Link href="/cookie-policy" className="hover:text-[#FE3EB4] transition-colors">
              Cookie Policy
            </Link>
            <Link href="/contact" className="hover:text-[#FE3EB4] transition-colors">
              Contact Us
            </Link>
            <Link href="/faqs" className="hover:text-[#FE3EB4] transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
