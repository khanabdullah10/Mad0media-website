"use client";

import React from "react";

const CLIENTS = [
  { name: "SharkNinja", logo: "SHARK•NINJA" },
  { name: "KFC", logo: "KFC" },
  { name: "Holland & Barrett", logo: "HOLLAND & BARRETT" },
  { name: "TikTok", logo: "TikTok" },
  { name: "Primark", logo: "PRIMARK" },
  { name: "loveholidays", logo: "loveholidays" },
  { name: "Amazon", logo: "amazon" },
  { name: "Universal Music", logo: "UNIVERSAL MUSIC GROUP" },
  { name: "Beats by Dre", logo: "beats by dre" },
  { name: "Warner Bros", logo: "WARNER BROS." },
  { name: "Canva", logo: "Canva" },
  { name: "Lamb Weston", logo: "LambWeston" },
];

export function Marquee() {
  return (
    <div className="relative w-full overflow-hidden py-10 bg-brand-surface/40 border-y border-white/5 select-none">
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-ticker hover:[animation-play-state:paused]">
        {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, idx) => (
          <div
            key={idx}
            className="flex items-center gap-8 px-8 sm:px-12 group cursor-pointer"
          >
            <span className="text-xl sm:text-2xl font-black tracking-tighter text-zinc-600 group-hover:text-white transition-colors duration-300 uppercase">
              {client.logo}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-neon/40 group-hover:bg-brand-neon" />
          </div>
        ))}
      </div>
    </div>
  );
}
