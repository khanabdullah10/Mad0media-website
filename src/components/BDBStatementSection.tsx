"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function BDBStatementSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const headingWords = [
    { text: "We", italic: false },
    { text: "make", italic: false },
    { text: "brands", italic: false },
    { text: "impossible", italic: true },
    { text: "to", italic: true },
    { text: "ignore.", italic: true },
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#080c14] py-28 sm:py-36 lg:py-44 px-6 sm:px-12 lg:px-16 overflow-hidden border-t border-b border-neutral-900 select-none flex items-center justify-center"
    >
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(75,112,216,0.12)_0%,transparent_75%)] pointer-events-none" />

      {/* Billion Dollar Boy Exact statement-main__layout */}
      <div className="statement-main__layout relative z-10 w-full max-w-[1440px] mx-auto flex flex-col items-center text-center space-y-10 sm:space-y-12">
        
        {/* H2 Heading with word-by-word staggered reveal in BDB Blue (#4b70d8) - Single Line */}
        <h2 className="font-['PP_Editorial_New',Georgia,serif] text-[clamp(1.5rem,4.9vw,5.25rem)] font-extralight leading-[1.08] tracking-[-0.03em] text-[#4b70d8] flex items-center justify-center whitespace-nowrap w-full">
          {headingWords.map((word, idx) => (
            <span key={idx} className="inline-block overflow-hidden pb-1 sm:pb-2 mr-[0.22em] last:mr-0">
              <motion.span
                className={`inline-block ${word.italic ? "italic font-normal" : ""}`}
                initial={{ y: "115%", opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: "115%", opacity: 0 }}
                transition={{
                  duration: 0.9,
                  delay: idx * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word.text}
              </motion.span>
            </span>
          ))}
        </h2>

        {/* Content Paragraphs matching BDB statement-main__content */}
        <div className="statement-main__content max-w-3xl mx-auto space-y-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg md:text-xl lg:text-[21px] text-[#4b70d8]/90 font-normal leading-relaxed"
          >
            Strategy, creativity and digital experiences built to make your brand stand out,
            connect with people and drive real growth. From building a brand from the ground up
            to transforming an established one, we turn ideas into meaningful experiences that
            get noticed, remembered and talked about.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg md:text-xl lg:text-[21px] text-[#4b70d8]/75 font-normal leading-relaxed"
          >
            We don&apos;t believe in marketing for the sake of marketing. We believe in finding
            the right idea, telling the right story and putting it in the right place creating
            work that people connect with and businesses grow from.
          </motion.p>
        </div>

      </div>
    </section>
  );
}
