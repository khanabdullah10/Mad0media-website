"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

const CLIENT_BRANDS = [
  { name: "Pine Tree Pictures", src: "/clients/pine-tree-pictures.png" },
  { name: "PatentManiac", src: "/clients/patent-maniac.png" },
  { name: "Lifafa", src: "/clients/lifafa.png" },
  { name: "Digital ROI", src: "/clients/digital-roi.png" },
  { name: "M.N. Rao Truly Bespoke", src: "/clients/mn-rao.png" },
  { name: "Brand Shield", src: "/clients/brand-shield.png" },
  { name: "Marshall Fire & Rescue", src: "/clients/marshall-fire.png" },
  { name: "PharmCrest", src: "/clients/pharmcrest.png" },
  { name: "Kopiant Private Limited", src: "/clients/kopiant.png" },
  { name: "Wulfox", src: "/clients/wulfox.png" },
  { name: "Pakeeza Milk Centre", src: "/clients/pakeeza.png" },
  { name: "Fame Design Studio", src: "/clients/fame-design-studio.png" },
  { name: "Fame Interior", src: "/clients/fame-interior.png" },
  { name: "Natsoverfood", src: "/clients/natsoverfood.png" },
  { name: "Sweet Delights Bakery", src: "/clients/sweet-delights.png" },
];

const MOM_REELS = [
  {
    id: 1,
    title: "A weekend. A luxury villa. Full of strangers. What's your story?",
    src: "/reels/reel-1.mp4",
  },
  {
    id: 2,
    title: "Cookie ASMR - Bandra Fresh Bake",
    src: "/reels/reel-2.mp4",
  },
  {
    id: 3,
    title: "Nepal Journey - 3 Seconds In",
    src: "/reels/reel-3.mp4",
  },
  {
    id: 4,
    title: "Sip. Splash. Repeat. - Fizzy & Cold Refreshment",
    src: "/reels/reel-4.mp4",
  },
  {
    id: 5,
    title: "You Send The Reel, They Place The Order",
    src: "/reels/reel-5.mp4",
  },
  {
    id: 6,
    title: "Jogeshwari West - New Luxury Launch",
    src: "/reels/reel-6.mp4",
  },
  {
    id: 7,
    title: "Repeat After Me - Funny Relatable Street Interview",
    src: "/reels/reel-7.mp4",
  },
];

export function CreatorInstinctHero() {
  const [selectedReel, setSelectedReel] = useState<{ id: number; title: string; src: string } | null>(null);

  return (
    <section className="relative w-full bg-[#4b70d8] text-[#191919] overflow-hidden select-none lg:h-screen lg:min-h-[580px] lg:max-h-[960px] lg:flex lg:items-stretch">
      
      {/* ============================================================== */}
      {/* MOBILE-ONLY LAYOUT (Matches reference screenshot exactly)       */}
      {/* ============================================================== */}
      <div className="lg:hidden w-full flex flex-col justify-between pt-10 sm:pt-14 pb-0 relative z-10">
        
        {/* Top Header & Awards Container */}
        <div className="px-6 sm:px-10 space-y-6">
          {/* Main Editorial Headline */}
          <h2 className="font-['Futura_ND_Condensed'] uppercase font-bold text-[#191919] text-[50px] sm:text-[68px] leading-[0.88] tracking-[-0.04em]">
            THE SOCIAL<br />
            AGENCY WITH<br />
            CREATOR<br />
            <span className="font-['PP_Editorial_New',Georgia,serif] italic font-normal text-[0.92em] tracking-normal inline-block lowercase capitalize">
              Instinct<sup className="text-[0.4em] align-super font-mono ml-0.5 font-normal">®</sup>
            </span>
          </h2>

          {/* Awards Logo Marquee (Directly beneath Instinct® on mobile) */}
          <div className="pt-2 w-full overflow-hidden">
            <div className="w-full overflow-hidden relative">
              <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#4b70d8] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[#4b70d8] to-transparent z-10 pointer-events-none" />

              <div className="animate-awards-marquee flex items-center">
                {/* Loop 1 */}
                <div className="flex items-center gap-6 sm:gap-7 pr-6 sm:pr-7 shrink-0">
                  {CLIENT_BRANDS.map((client, idx) => (
                    <div key={`mob-c1-${idx}`} className="h-6 sm:h-7 flex items-center shrink-0">
                      <img
                        src={client.src}
                        alt={client.name}
                        className="h-full w-auto max-w-[110px] sm:max-w-[130px] object-contain"
                        loading="eager"
                      />
                    </div>
                  ))}
                </div>

                {/* Loop 2 */}
                <div className="flex items-center gap-6 sm:gap-7 pr-6 sm:pr-7 shrink-0" aria-hidden="true">
                  {CLIENT_BRANDS.map((client, idx) => (
                    <div key={`mob-c2-${idx}`} className="h-6 sm:h-7 flex items-center shrink-0">
                      <img
                        src={client.src}
                        alt={client.name}
                        className="h-full w-auto max-w-[110px] sm:max-w-[130px] object-contain"
                        loading="eager"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Blue Space */}
        <div className="h-10 sm:h-14 w-full" />

        {/* Bottom Media Panels: Edge-to-Edge, 3-up flush seamless strip */}
        <div className="w-full overflow-hidden border-t border-[#191919]/15">
          <div className="flex w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth snap-x snap-mandatory">
            {MOM_REELS.map((reel, idx) => (
              <div
                key={`mob-bottom-reel-${idx}`}
                onClick={() => setSelectedReel(reel)}
                className="relative shrink-0 w-1/3 aspect-[9/16] max-h-[260px] sm:max-h-[300px] overflow-hidden bg-neutral-950 cursor-pointer snap-start group border-r border-[#191919]/20 last:border-r-0"
              >
                <video
                  ref={(el) => {
                    if (el) {
                      el.muted = true;
                      el.play().catch(() => {});
                    }
                  }}
                  src={reel.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ============================================================== */}
      {/* DESKTOP-ONLY LAYOUT (Preserved 100% untouched)                  */}
      {/* ============================================================== */}
      <div className="hidden lg:flex w-full h-full max-w-[1440px] mx-auto flex-col justify-between pt-20 pb-12 px-10 lg:px-16 pr-[380px] xl:pr-[440px] relative z-10">
        
        {/* Main Editorial Headline */}
        <div className="space-y-4">
          <h2 className="font-['Futura_ND_Condensed'] uppercase font-bold text-[#191919] text-[44px] sm:text-[64px] md:text-[80px] lg:text-[98px] xl:text-[112px] 2xl:text-[124px] leading-[0.88] tracking-[-0.04em]">
            THE SOCIAL<br />
            AGENCY WITH<br />
            CREATOR{" "}
            <span className="font-['PP_Editorial_New',serif] lowercase font-normal text-[0.86em] tracking-normal inline-block relative -top-1 sm:-top-2">
              instinct<sup className="text-[0.38em] align-super font-mono ml-1 font-normal">®</sup>
            </span>
          </h2>
        </div>

        {/* Awards Logo Horizontal Continuous Marquee (Anchored at the bottom) */}
        <div className="mt-8 pt-6 border-t border-[#191919]/20 w-full overflow-hidden">
          <div className="w-full overflow-hidden relative">
            {/* Fade gradient masks on left and right */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#4b70d8] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#4b70d8] to-transparent z-10 pointer-events-none" />

            <div className="animate-awards-marquee flex items-center">
              {/* Loop 1 */}
              <div className="flex items-center gap-7 sm:gap-9 pr-7 sm:pr-9 shrink-0">
                {CLIENT_BRANDS.map((client, idx) => (
                  <div key={`c1-${idx}`} className="h-7 sm:h-8 md:h-9 flex items-center shrink-0">
                    <img
                      src={client.src}
                      alt={client.name}
                      className="h-full w-auto max-w-[140px] sm:max-w-[160px] object-contain hover:scale-105 transition-transform"
                      loading="eager"
                    />
                  </div>
                ))}
              </div>

              {/* Loop 2 for seamless infinite ticker */}
              <div className="flex items-center gap-7 sm:gap-9 pr-7 sm:pr-9 shrink-0" aria-hidden="true">
                {CLIENT_BRANDS.map((client, idx) => (
                  <div key={`c2-${idx}`} className="h-7 sm:h-8 md:h-9 flex items-center shrink-0">
                    <img
                      src={client.src}
                      alt={client.name}
                      className="h-full w-auto max-w-[140px] sm:max-w-[160px] object-contain hover:scale-105 transition-transform"
                      loading="eager"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Right Column: Absolutely Pinned Full-Height Vertical Creator Showcase Filmstrip (Desktop Only) */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[340px] xl:w-[400px] h-full z-20 overflow-hidden border-l border-[#191919]/15 bg-black/10 shadow-2xl">
        {/* Minimal, subtle edge feathering */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-b from-[#4b70d8]/20 to-transparent z-30 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-t from-[#4b70d8]/20 to-transparent z-30 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="w-full h-full overflow-hidden">
          <div className="w-full animate-vertical-reel flex flex-col">
            
            {/* Group 1 of 9:16 Portrait Video Reels */}
            <div className="flex flex-col shrink-0">
              {MOM_REELS.map((reel, idx) => (
                <div
                  key={`r1-${idx}`}
                  onClick={() => setSelectedReel(reel)}
                  className="relative w-full aspect-[9/16] shrink-0 overflow-hidden bg-neutral-950 group cursor-pointer border-b-4 border-[#4b70d8]"
                >
                  <video
                    ref={(el) => {
                      if (el) {
                        el.muted = true;
                        el.play().catch(() => {});
                      }
                    }}
                    src={reel.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover Caption Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 pointer-events-none">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#FF3EB5] font-semibold">Mad O Media Reel</span>
                    <p className="text-white text-xs sm:text-sm font-semibold line-clamp-2 leading-snug">
                      {reel.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Group 2 (Duplicate for Seamless Infinite Loop) */}
            <div className="flex flex-col shrink-0" aria-hidden="true">
              {MOM_REELS.map((reel, idx) => (
                <div
                  key={`r2-${idx}`}
                  onClick={() => setSelectedReel(reel)}
                  className="relative w-full aspect-[9/16] shrink-0 overflow-hidden bg-neutral-950 group cursor-pointer border-b-4 border-[#4b70d8]"
                >
                  <video
                    ref={(el) => {
                      if (el) {
                        el.muted = true;
                        el.play().catch(() => {});
                      }
                    }}
                    src={reel.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 pointer-events-none">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#FF3EB5] font-semibold">Mad O Media Reel</span>
                    <p className="text-white text-xs sm:text-sm font-semibold line-clamp-2 leading-snug">
                      {reel.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Interactive Full Reel Modal Player */}
      {selectedReel && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedReel(null)}
        >
          <div
            className="relative max-w-sm sm:max-w-md w-full aspect-[9/16] max-h-[88vh] rounded-3xl overflow-hidden bg-black shadow-2xl border border-white/20 flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedReel(null)}
              className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/70 hover:bg-white text-white hover:text-black transition-all shadow-lg"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <video
              src={selectedReel.src}
              autoPlay
              controls
              playsInline
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

    </section>
  );
}
