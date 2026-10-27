"use client";

import React from "react";

export function AboutScrollSection() {
  return (
    <section className="about-scroll-section relative w-full bg-black text-white select-none border-b border-neutral-900">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Symmetrical top breathing room, and calibrated bottom padding so CHANGE IT settles perfectly before the next section appears */}
        <div className="about-scroll__layout pt-24 sm:pt-32 lg:pt-36 pb-[32vh] sm:pb-[36vh]">
          {/* Scroll track with row-gap between items */}
          <div className="about-scroll__track relative flex flex-col items-center gap-[28vh] sm:gap-[32vh]">
            
            {/* 1. WHY PLAY THE GAME */}
            <div
              className="about-scroll__item flex flex-col items-center justify-start w-full sticky z-10 pointer-events-none"
              style={{
                top: "26vh",
                paddingBottom: "2.36em",
                fontSize: "clamp(1.65rem, 6.8vw, 7.5rem)",
              }}
            >
              <p className="u-h1 font-['Futura_ND_Condensed'] font-bold uppercase text-white tracking-[-0.04em] leading-[0.92] text-center m-0 whitespace-nowrap">
                why play the game
              </p>
            </div>

            {/* 2. WHEN YOU CAN */}
            <div
              className="about-scroll__item is-2 flex flex-col items-center justify-start w-full sticky z-20 pointer-events-none"
              style={{
                top: "26vh",
                paddingTop: "1.18em",
                paddingBottom: "1.18em",
                fontSize: "clamp(1.65rem, 6.8vw, 7.5rem)",
              }}
            >
              <p className="u-h1 font-['Futura_ND_Condensed'] font-bold uppercase text-white tracking-[-0.04em] leading-[0.92] text-center m-0 whitespace-nowrap">
                When you can
              </p>
            </div>

            {/* 3. CHANGE IT (Signature Billion Dollar Blue #4b70d8 Badge) */}
            <div
              className="about-scroll__item is-3 flex flex-col items-center justify-start w-full sticky z-30 pointer-events-none"
              style={{
                top: "26vh",
                paddingTop: "2.36em",
                fontSize: "clamp(1.65rem, 6.8vw, 7.5rem)",
              }}
            >
              <div
                className="inline-flex items-center justify-center bg-[#4b70d8] text-black shadow-2xl"
                style={{
                  padding: "0.08em 0.36em",
                }}
              >
                <p className="u-h1 font-['Futura_ND_Condensed'] font-bold uppercase text-black tracking-[-0.04em] leading-[0.92] text-center m-0 whitespace-nowrap">
                  change it
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
