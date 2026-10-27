"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FAQSection } from "@/components/FAQSection";
import { FAQJsonLd } from "@/components/JsonLd";

export function FAQsClient() {
  return (
    <main className="min-h-screen bg-black text-white pt-[76px]">
      <FAQJsonLd />
      {/* 1. Complete BDB FAQ Section */}
      <FAQSection
        showHeroTitle={true}
        title="FAQ"
        subtitle="Everything you need to know about working with Billion Dollar Boy."
      />

      {/* 2. Exact BDB "Let's talk" CTA Section */}
      <section className="w-full bg-[#0d0d0d] border-t border-neutral-900 py-24 sm:py-32 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#4B70D8]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            {/* Left Column: Let's talk title & button */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] font-normal tracking-tight leading-none text-[#F9F7F4] font-serif">
                  Let&apos;s <span className="italic font-light">talk</span>
                </h2>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#1e1e1e] border border-neutral-700 hover:border-white hover:bg-[#FF3EB5] transition-all duration-300 shadow-2xl"
                    aria-label="Contact Us"
                  >
                    <svg
                      width="22"
                      height="20"
                      viewBox="0 0 19 17"
                      fill="none"
                      className="text-[#F9F7F4] group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <path
                        d="M13.2271 0.0137623L11.905 0.379153C11.6863 0.439019 11.5617 0.670226 11.6291 0.889048C11.9724 1.99554 12.8205 4.87531 14.864 7.02843H0.398483C0.177785 7.02843 0 7.21009 0 7.43098V8.93176C0 9.15471 0.179828 9.33431 0.398483 9.33431H14.864C12.8184 11.4874 11.9704 14.3672 11.6291 15.4737C11.5617 15.6925 11.6863 15.9237 11.905 15.9836L13.2271 16.349C13.4294 16.4047 13.6379 16.2974 13.7073 16.0971C14.347 14.2846 15.9021 10.6844 18.3747 8.47967C18.5504 8.32278 18.5504 8.03996 18.3747 7.88307C15.9021 5.67834 14.347 2.07811 13.7073 0.265613C13.6379 0.0674355 13.4294 -0.0399108 13.2271 0.0137623Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Narrative subtext */}
            <div className="lg:col-span-5">
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg sm:text-xl lg:text-2xl text-neutral-300 font-light leading-relaxed"
              >
                Great content doesn&apos;t shout; it resonates. We craft stories that spark attention, fuel conversation — applied across the full funnel.
              </motion.p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
