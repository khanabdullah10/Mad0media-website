"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FAQS_DATA, FAQItem } from "@/data/faqsData";

interface FAQSectionProps {
  showHeroTitle?: boolean;
  title?: string;
  subtitle?: string;
  className?: string;
}

export function FAQSection({
  showHeroTitle = true,
  title = "FAQ",
  subtitle = "Everything you need to know about working with Billion Dollar Boy.",
  className = "",
}: FAQSectionProps) {
  // Single active open accordion item index (null if all closed)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className={`w-full bg-[#141414] text-[#F9F7F4] py-20 sm:py-28 lg:py-32 border-t border-b border-neutral-900 relative overflow-hidden ${className}`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Massive Ultra-Condensed Display Title matching BDB */}
        {showHeroTitle && (
          <div className="mb-14 sm:mb-20">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-[90px] sm:text-[130px] md:text-[160px] lg:text-[190px] font-black tracking-[-0.03em] uppercase leading-[0.82] select-none text-[#F9F7F4] font-['Futura_ND_Condensed',Impact,sans-serif]"
            >
              {title}
            </motion.h1>
          </div>
        )}

        {/* 12-Column Grid Layout matching BDB */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: PP Editorial New Style Subtitle */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl lg:text-[44px] font-light leading-[1.08] tracking-[-0.02em] text-[#F9F7F4] font-serif max-w-[420px]"
            >
              {subtitle}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-[380px]"
            >
              Have a question that isn&apos;t covered here? Reach out to our strategists and creator partners anytime.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-[#FF3EB5] hover:text-white transition-all duration-300"
              >
                <span>Get in touch</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="rotate-[-45deg]">
                  <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: 11 Accordion Items */}
          <div className="lg:col-span-7 flex flex-col border-t border-neutral-700/60 divide-y divide-neutral-700/60">
            {FAQS_DATA.map((item: FAQItem, index: number) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.25), ease: [0.16, 1, 0.3, 1] }}
                  className="w-full"
                >
                  {/* Accordion Question Button */}
                  <button
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                    className="w-full py-5 sm:py-6 flex items-center justify-between gap-4 text-left group cursor-pointer focus:outline-none"
                  >
                    <span className="text-[17px] sm:text-[19px] lg:text-[21px] font-bold tracking-tight text-[#4B70D8] group-hover:text-[#6a8df0] transition-colors capitalize leading-snug pr-4">
                      {item.question}
                    </span>

                    {/* Plus / Minus SVG (Exact BDB 20x20 Line Rotation) */}
                    <div className="w-5 h-5 shrink-0 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        {/* Vertical line that rotates 90deg to collapse into horizontal minus */}
                        <motion.line
                          x1="10"
                          y1="4.5"
                          x2="10"
                          y2="15.5"
                          stroke="#EEE9E6"
                          strokeWidth="1.4"
                          strokeLinecap="square"
                          animate={{ rotate: isOpen ? 90 : 0 }}
                          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                          style={{ originX: "10px", originY: "10px" }}
                        />
                        {/* Fixed horizontal line */}
                        <line
                          x1="4.5"
                          y1="10"
                          x2="15.5"
                          y2="10"
                          stroke="#EEE9E6"
                          strokeWidth="1.4"
                          strokeLinecap="square"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* Accordion Expandable Answer Body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          transition: {
                            height: { duration: 0.38, ease: [0.16, 1, 0.3, 1] },
                            opacity: { duration: 0.28, delay: 0.05 },
                          },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: {
                            height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                            opacity: { duration: 0.18 },
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <div
                          className="pt-1 pb-7 text-neutral-300 text-[15px] sm:text-[16px] leading-[1.65] font-normal [&_p]:mb-3 [&_p:last-child]:mb-0 [&_ul]:my-3.5 [&_ul]:pl-5 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_li]:text-neutral-300 [&_a]:text-[#4B70D8] [&_a]:underline hover:[&_a]:text-[#FF3EB5] [&_a]:transition-colors"
                          dangerouslySetInnerHTML={{ __html: item.answerHtml }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
