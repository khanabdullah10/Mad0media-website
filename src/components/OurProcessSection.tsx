"use client";

import React, { useState } from "react";

export interface ProcessStep {
  number: string;
  title: string;
  marqueeText: string;
  color: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01.",
    title: "FIND THE WHY.",
    marqueeText:
      "01 Before we make anything, we understand everything. Your business, your audience, your ambition, your challenges and the opportunity hiding underneath it all.",
    color: "#FE4F2A", // BDB Signature Energetic Red-Orange
  },
  {
    number: "02.",
    title: "FIND THE IDEA.",
    marqueeText:
      "02 We turn insight into direction. Strategy gives the idea purpose, and creativity gives it a reason to exist.",
    color: "#FE3EB4", // Mad O Media Iconic Brand Hot Pink
  },
  {
    number: "03.",
    title: "MAKE IT REAL.",
    marqueeText:
      "03 This is where thinking becomes something people can see, feel, use and remember — from brands and campaigns to digital experiences and technology.",
    color: "#FFE71A", // Electric Cyber Yellow
  },
  {
    number: "04.",
    title: "PUT IT OUT THERE.",
    marqueeText:
      "04 Great work deserves to be seen. We launch it, activate it, amplify it and put it in front of the people who matter.",
    color: "#00BAE2", // Electric Cyan Blue
  },
  {
    number: "05.",
    title: "MAKE IT MATTER.",
    marqueeText:
      "05 We don’t disappear after launch. We track, learn, optimise and keep pushing until the work creates real impact.",
    color: "#44D62C", // Electric Growth Green
  },
];

export function OurProcessSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="our-process"
      className="hero-work-section relative w-full bg-[#05070a] py-24 sm:py-32 lg:py-40 overflow-x-clip border-t border-neutral-900 select-none selection:bg-[#FE4F2A] selection:text-black"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="hero-work__layout flex flex-col gap-12 sm:gap-16 lg:gap-20">
          
          {/* Header Section matching Billion Dollar Boy hero-work__he */}
          <div className="hero-work__he flex flex-col gap-8 sm:gap-10">
            {/* Main H1 Title */}
            <h2 className="u-h1 font-['Futura_ND_Condensed'] text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold uppercase text-white tracking-tight leading-[0.9]">
              Our Process
            </h2>

            {/* Subtext Grid (Left Strategy Vision + Right Editorial Subtitle) */}
            <div className="hero-work__he-inner grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 pt-4 border-t border-neutral-800/80 items-start">
              <div className="hero-work__subtext lg:col-span-7">
                <p className="u-paragraph-xl text-lg sm:text-xl md:text-2xl text-white font-normal leading-snug">
                  <strong className="text-white font-medium">
                    Creativity without results is just vanity. We turn strategic vision into measurable market dominance.
                  </strong>
                </p>
              </div>
              <div className="hero-work__subtext is-2 lg:col-span-5">
                <p className="u-h4 font-['PP_Editorial_New',Georgia,serif] text-xl sm:text-2xl md:text-3xl text-neutral-400 font-extralight italic leading-snug">
                  Here is how we take your brand<br className="hidden sm:inline" /> from ambition to execution.
                </p>
              </div>
            </div>
          </div>

          {/* Main List matching BDB hero-work__main (without photo section) */}
          <div className="hero-work__main w-full">
            <div className="hero-work__inner relative w-full">
              <div className="hero-work__cms w-full">
                <div
                  role="list"
                  className="hero-work__ul flex flex-col border-t border-b border-neutral-800/80 divide-y divide-neutral-800/60"
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {PROCESS_STEPS.map((step, idx) => {
                    const isActive = activeIndex === idx;

                    return (
                      <div
                        key={step.number}
                        role="listitem"
                        data-active={isActive ? "true" : "false"}
                        onMouseEnter={() => setActiveIndex(idx)}
                        onMouseLeave={() => setActiveIndex(null)}
                        onClick={() =>
                          setActiveIndex(activeIndex === idx ? null : idx)
                        }
                        className={`hero-work__li group relative w-full py-6 sm:py-8 lg:py-10 min-h-[96px] sm:min-h-[128px] lg:min-h-[150px] flex items-center cursor-pointer transition-all duration-300 ${
                          activeIndex !== null && !isActive
                            ? "opacity-30"
                            : "opacity-100"
                        }`}
                      >
                        {/* Default Visible Title: 01. FIND THE WHY. */}
                        <div className="w-full flex items-baseline relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                          <h3 className="u-h2 text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white font-['Futura_ND_Condensed'] uppercase tracking-tight leading-none flex items-baseline">
                            <span
                              className="mr-3 sm:mr-5 transition-colors duration-300"
                              style={{ color: step.color }}
                            >
                              {step.number}
                            </span>
                            <span className="text-white">
                              {step.title}
                            </span>
                          </h3>
                        </div>

                        {/* Full-Bleed Marquee Bar covering the WHOLE screen width on hover */}
                        <div
                          aria-hidden={!isActive}
                          className={`hero-work__li-marquee-w absolute inset-y-0 z-20 flex items-center text-black pointer-events-none transition-opacity duration-200 overflow-hidden ${
                            isActive ? "opacity-100" : "opacity-0"
                          }`}
                          style={{
                            backgroundColor: step.color,
                            width: "100vw",
                            left: "calc(50% - 50vw)",
                          }}
                        >
                          <div className="hero-work__li-marquee-ul flex items-center whitespace-nowrap overflow-hidden w-full h-full">
                            <div className="animate-process-marquee flex items-center shrink-0">
                              {/* Track 1 */}
                              <div className="flex items-center shrink-0">
                                {[...Array(2)].map((_, repIdx) => (
                                  <span
                                    key={repIdx}
                                    className="flex items-center text-3xl sm:text-5xl md:text-6xl lg:text-[4.75rem] font-bold text-black font-['Futura_ND_Condensed'] uppercase tracking-tight leading-none px-4 sm:px-6"
                                  >
                                    <span>{step.marqueeText}</span>
                                    <span className="mx-8 sm:mx-14 text-black/60 font-mono tracking-widest text-3xl sm:text-5xl">
                                      —
                                    </span>
                                  </span>
                                ))}
                              </div>

                              {/* Track 2 (exact duplicate for seamless 60fps infinite loop) */}
                              <div
                                className="flex items-center shrink-0"
                                aria-hidden="true"
                              >
                                {[...Array(2)].map((_, repIdx) => (
                                  <span
                                    key={repIdx}
                                    className="flex items-center text-3xl sm:text-5xl md:text-6xl lg:text-[4.75rem] font-bold text-black font-['Futura_ND_Condensed'] uppercase tracking-tight leading-none px-4 sm:px-6"
                                  >
                                    <span>{step.marqueeText}</span>
                                    <span className="mx-8 sm:mx-14 text-black/60 font-mono tracking-widest text-3xl sm:text-5xl">
                                      —
                                    </span>
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
