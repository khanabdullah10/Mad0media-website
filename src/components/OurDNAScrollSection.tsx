"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DNA_ITEMS = [
  {
    number: "01",
    title: "BORING? NO.",
    tagline: "We'd rather be remembered.",
    description:
      "We don't believe great brands are built by playing it safe. We find the unexpected, push the creative further and create work that stays in people's heads long after they've seen it.",
    accent: "#FF3EB5",
  },
  {
    number: "02",
    title: "SAFE? NEVER.",
    tagline: "Comfort zones don't create culture.",
    description:
      "We challenge the obvious, question the usual and explore what hasn't been done yet. Because the safest idea is rarely the one that gets people talking.",
    accent: "#FF8A00",
  },
  {
    number: "03",
    title: "COPY? HARD PASS.",
    tagline: "We'd rather create the reference.",
    description:
      "Trends come and go. We care about creating ideas that start something new — work people want to follow, share and eventually call a trend.",
    accent: "#00BAE2",
  },
  {
    number: "04",
    title: "LOUD? ONLY WHEN NEEDED.",
    tagline: "Impact doesn't always have to shout.",
    description:
      "Sometimes it's a bold campaign. Sometimes it's one perfect line. We believe in making the right noise, in the right place, for the right people.",
    accent: "#FEC5FB",
  },
  {
    number: "05",
    title: "WTF? GOOD.",
    tagline: "If it makes people curious, we're onto something.",
    description:
      "The best ideas can make you stop, stare and wonder what you just saw. We embrace curiosity, surprise and the occasional “wait… what?” because attention starts with intrigue.",
    accent: "#806EFF",
  },
  {
    number: "06",
    title: "WHAT'S NEXT?",
    tagline: "We're already there.",
    description:
      "Culture moves fast. Technology moves faster. We stay curious, experiment constantly and keep looking around the corner for what's coming next.",
    accent: "#4b70d8",
  },
];

export function OurDNAScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<HTMLDivElement>(null);
  const mobileSvgRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeItem, setActiveItem] = useState(0);

  const scrollToItem = (index: number) => {
    const el = itemRefs.current[index];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop & Tablet (Pinned windmill starting right at 01 / START)
      mm.add("(min-width: 1024px)", () => {
        if (!pinRef.current || !wrapRef.current || !svgRef.current) return;

        // Pinned windmill with scrubbed 900deg rotation matching GSAP production code
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinRef.current,
            pin: true,
            start: "center center",
            endTrigger: wrapRef.current,
            end: "bottom center",
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const idx = Math.min(
                DNA_ITEMS.length - 1,
                Math.floor(self.progress * DNA_ITEMS.length)
              );
              setActiveItem(idx);
            },
          },
        });

        tl.to(svgRef.current, {
          rotateZ: 900,
          ease: "none",
        });

        // Vertical Progress Indicator along track
        if (progressBarRef.current) {
          gsap.fromTo(
            progressBarRef.current,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              transformOrigin: "top center",
              scrollTrigger: {
                trigger: wrapRef.current,
                start: "top center",
                end: "bottom center",
                scrub: 0.5,
              },
            }
          );
        }
      });

      // Mobile (scrub rotation as user scrolls through the container)
      mm.add("(max-width: 1023px)", () => {
        if (!mobileSvgRef.current || !wrapRef.current) return;

        gsap.to(mobileSvgRef.current, {
          rotateZ: 540,
          ease: "none",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
            onUpdate: (self) => {
              const idx = Math.min(
                DNA_ITEMS.length - 1,
                Math.floor(self.progress * DNA_ITEMS.length)
              );
              setActiveItem(idx);
            },
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#05070a] text-white py-20 sm:py-28 lg:py-36 border-t border-b border-neutral-900 select-none overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(0,186,226,0.08)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,rgba(254,197,251,0.05)_0%,transparent_55%)] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="mb-16 sm:mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-800 bg-[#0d1420] text-xs font-mono uppercase tracking-widest text-[#00BAE2]">
            <span className="w-2 h-2 rounded-full bg-[#00BAE2] animate-pulse" />
            Core Values & Philosophy
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white font-['Futura_ND_Condensed'] uppercase">
            OUR DNA<span className="text-[#FF3EB5]">.</span>
          </h2>
          <p className="text-base sm:text-xl text-neutral-400 max-w-2xl font-light">
            The unbending principles that shape our thinking, fuel our creativity, and define how we build brands that refuse to be ignored.
          </p>
        </div>

        {/* Mobile Mini Windmill & Status Bar */}
        <div className="lg:hidden flex items-center justify-between p-4 mb-8 rounded-2xl bg-[#0b101b] border border-neutral-800 sticky top-20 z-20 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <div ref={mobileSvgRef} className="w-9 h-9">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 248 248"
                  fill="none"
                  className="w-full h-full"
                  aria-hidden="true"
                >
                  <path
                    fill="url(#m_paint0)"
                    d="M152.266 123.716h94.275c.802 0 1.459.656 1.459 1.459v121.067c0 .81-.664 1.474-1.474 1.466-67.274-.78-121.669-55.137-122.522-122.387v121.22c0 .803-.657 1.459-1.46 1.459H1.474c-.81 0-1.474-.664-1.467-1.474C.795 178.721 56 124.008 123.996 124H1.459C.657 124 0 123.344 0 122.541V1.474C0 .664.664 0 1.474.008c67.274.78 121.669 55.137 122.522 122.387V1.46c0-.803.657-1.46 1.46-1.46h121.07c.81 0 1.474.664 1.467 1.474-.679 58.224-41.486 106.801-96.055 119.367-1.686.386-1.401 2.875.336 2.875h-.008Z"
                  />
                  <path
                    fill="url(#m_paint1)"
                    d="M152.266 123.716h94.275c.802 0 1.459.656 1.459 1.459v121.067c0 .81-.664 1.474-1.474 1.466-67.274-.78-121.669-55.137-122.522-122.387v121.22c0 .803-.657 1.459-1.46 1.459H1.474c-.81 0-1.474-.664-1.467-1.474C.795 178.721 56 124.008 123.996 124H1.459C.657 124 0 123.344 0 122.541V1.474C0 .664.664 0 1.474.008c67.274.78 121.669 55.137 122.522 122.387V1.46c0-.803.657-1.46 1.46-1.46h121.07c.81 0 1.474.664 1.467 1.474-.679 58.224-41.486 106.801-96.055 119.367-1.686.386-1.401 2.875.336 2.875h-.008Z"
                  />
                  <defs>
                    <linearGradient id="m_paint0" x1="218" x2="-47.283" y1="258" y2="153.706" gradientUnits="userSpaceOnUse">
                      <stop offset=".27" stopColor="#FFD3FD" />
                      <stop offset=".838" stopColor="#806EFF" />
                    </linearGradient>
                    <linearGradient id="m_paint1" x1="-21.183" x2="223.712" y1="-7.807" y2="329.472" gradientUnits="userSpaceOnUse">
                      <stop offset=".27" stopColor="#FEC5FB" />
                      <stop offset=".838" stopColor="#00BAE2" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-[#00BAE2]">PRINCIPLE {DNA_ITEMS[activeItem]?.number}</span>
              <p className="text-sm font-bold text-white uppercase font-['Futura_ND_Condensed']">
                {DNA_ITEMS[activeItem]?.title}
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-neutral-400">
            {activeItem + 1} / 6
          </span>
        </div>

        {/* Two-Column Layout (Left: 6 DNA Items, Right: GSAP Pinned Windmill Section) */}
        <div ref={wrapRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative">
          
          {/* Left Column: 6 DNA Items */}
          <div className="lg:col-span-7 space-y-24 sm:space-y-32 py-2">
            {DNA_ITEMS.map((item, idx) => {
              const isActive = activeItem === idx;
              return (
                <div
                  key={idx}
                  ref={(el) => {
                    itemRefs.current[idx] = el;
                  }}
                  onClick={() => scrollToItem(idx)}
                  className={`space-y-4 transition-all duration-500 relative pl-6 sm:pl-8 border-l-2 cursor-pointer group ${
                    isActive ? "border-[#00BAE2] opacity-100" : "border-neutral-800 opacity-50 hover:opacity-85"
                  }`}
                >
                  {/* Item Number & Question/Answer */}
                  <div className="flex items-baseline gap-4 flex-wrap">
                    <span
                      className="text-2xl sm:text-3xl font-mono font-bold transition-colors"
                      style={{ color: item.accent }}
                    >
                      {item.number}
                    </span>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-['Futura_ND_Condensed'] uppercase group-hover:text-neutral-100">
                      {item.title}
                    </h3>
                  </div>

                  {/* Tagline */}
                  <p
                    className="font-['PP_Editorial_New',Georgia,serif] italic text-xl sm:text-2xl md:text-3xl font-normal leading-snug"
                    style={{ color: item.accent }}
                  >
                    {item.tagline}
                  </p>

                  {/* Detailed Description */}
                  <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal pt-1">
                    {item.description}
                  </p>

                  {/* Subtle Accent Glow dot on active */}
                  {isActive && (
                    <div
                      className="absolute -left-[5px] top-2 w-2 h-2 rounded-full shadow-[0_0_12px_#00BAE2]"
                      style={{ backgroundColor: item.accent }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: GSAP Pinned Windmill Section */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative w-full h-full min-h-[900px]">
              
              {/* Top Marker: "Start" (Positioned at top right, level with Item 01) */}
              <div className="absolute top-0 right-4 xl:right-8 flex flex-col items-center gap-1 text-xs font-mono uppercase tracking-wider text-[#FEC5FB] select-none pointer-events-none z-10">
                <span>Start</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="62" height="4" viewBox="0 0 62 4" fill="none">
                  <path stroke="url(#marker-grad-start)" strokeLinecap="round" strokeWidth="4" d="M2 2h58" />
                  <defs>
                    <linearGradient id="marker-grad-start" x1="0" y1="2" x2="62" y2="2" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#FEC5FB" />
                      <stop offset="100%" stopColor="#00BAE2" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Vertical Progress Track running between Start and End */}
              <div className="absolute top-7 bottom-7 right-[33px] xl:right-[49px] w-[2px] bg-neutral-800/60 pointer-events-none">
                <div
                  ref={progressBarRef}
                  className="w-full h-full bg-gradient-to-b from-[#FEC5FB] via-[#806EFF] to-[#00BAE2] origin-top rounded-full shadow-[0_0_8px_#00BAE2]"
                />
              </div>

              {/* Bottom Marker: "End" (Positioned at bottom right, level with Item 06) */}
              <div className="absolute bottom-0 right-4 xl:right-8 flex flex-col items-center gap-1 text-xs font-mono uppercase tracking-wider text-[#00BAE2] select-none pointer-events-none z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="62" height="4" viewBox="0 0 62 4" fill="none">
                  <path stroke="url(#marker-grad-end)" strokeLinecap="round" strokeWidth="4" d="M2 2h58" />
                  <defs>
                    <linearGradient id="marker-grad-end" x1="0" y1="2" x2="62" y2="2" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#FEC5FB" />
                      <stop offset="100%" stopColor="#00BAE2" />
                    </linearGradient>
                  </defs>
                </svg>
                <span>End</span>
              </div>

              {/* Pinned Windmill Container: Starts right at the top, aligned with Start & Item 01 */}
              <div
                ref={pinRef}
                className="relative w-full flex flex-col items-center justify-center pt-2 pb-6"
              >
                {/* The 4-Blade Gradient Geometric Windmill (Scaled down to balanced, sleek proportion) */}
                <div
                  ref={svgRef}
                  className="relative w-[130px] sm:w-[145px] lg:w-[160px] aspect-square flex items-center justify-center will-change-transform filter drop-shadow-[0_0_30px_rgba(0,186,226,0.3)]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 248 248"
                    fill="none"
                    className="w-full h-full"
                    aria-hidden="true"
                  >
                    <path
                      fill="url(#paint0_linear_windmill)"
                      d="M152.266 123.716h94.275c.802 0 1.459.656 1.459 1.459v121.067c0 .81-.664 1.474-1.474 1.466-67.274-.78-121.669-55.137-122.522-122.387v121.22c0 .803-.657 1.459-1.46 1.459H1.474c-.81 0-1.474-.664-1.467-1.474C.795 178.721 56 124.008 123.996 124H1.459C.657 124 0 123.344 0 122.541V1.474C0 .664.664 0 1.474.008c67.274.78 121.669 55.137 122.522 122.387V1.46c0-.803.657-1.46 1.46-1.46h121.07c.81 0 1.474.664 1.467 1.474-.679 58.224-41.486 106.801-96.055 119.367-1.686.386-1.401 2.875.336 2.875h-.008Z"
                    />
                    <path
                      fill="url(#paint1_linear_windmill)"
                      d="M152.266 123.716h94.275c.802 0 1.459.656 1.459 1.459v121.067c0 .81-.664 1.474-1.474 1.466-67.274-.78-121.669-55.137-122.522-122.387v121.22c0 .803-.657 1.459-1.46 1.459H1.474c-.81 0-1.474-.664-1.467-1.474C.795 178.721 56 124.008 123.996 124H1.459C.657 124 0 123.344 0 122.541V1.474C0 .664.664 0 1.474.008c67.274.78 121.669 55.137 122.522 122.387V1.46c0-.803.657-1.46 1.46-1.46h121.07c.81 0 1.474.664 1.467 1.474-.679 58.224-41.486 106.801-96.055 119.367-1.686.386-1.401 2.875.336 2.875h-.008Z"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_windmill"
                        x1="218"
                        x2="-47.283"
                        y1="258"
                        y2="153.706"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset=".27" stopColor="#FFD3FD" />
                        <stop offset=".838" stopColor="#806EFF" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_windmill"
                        x1="-21.183"
                        x2="223.712"
                        y1="-7.807"
                        y2="329.472"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset=".27" stopColor="#FEC5FB" />
                        <stop offset=".838" stopColor="#00BAE2" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}