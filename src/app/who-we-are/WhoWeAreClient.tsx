"use client";

import React, { useState } from "react";
import { ContactDrawer } from "@/components/ContactDrawer";
import { OurDNAScrollSection } from "@/components/OurDNAScrollSection";
import { Sparkles, ArrowRight, Zap, Target, MessageSquare } from "lucide-react";

export function WhoWeAreClient() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="pt-32 pb-24 space-y-24 bg-black text-white selection:bg-[#FE3EB4] selection:text-white">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
        <span className="text-xs uppercase tracking-widest text-[#FF3EB5] font-bold flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5" />
          Who We Are
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight max-w-4xl font-['Futura_ND_Condensed'] uppercase leading-[0.95]">
          We are the creators, strategists, and culture architects rewriting the rules of brand attention.
        </h1>
        <p className="text-base sm:text-xl text-neutral-400 max-w-2xl font-light leading-relaxed">
          Mad O Media is a full-service creative, digital, and growth agency pioneering high-impact social, creator marketing, and digital innovation.
        </p>
      </section>

      {/* OUR DNA - GSAP PIN & SCRUB SECTION */}
      <OurDNAScrollSection />

      {/* THE MANIFESTO / BRAND PHILOSOPHY */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-neutral-950 via-[#0a0f1d] to-black border border-neutral-800/80 p-8 sm:p-14 lg:p-20 shadow-2xl">
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4b70d8]/10 blur-[130px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FE3EB4]/10 blur-[110px] pointer-events-none rounded-full" />

          <div className="relative z-10 space-y-10 sm:space-y-14">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/80 text-xs font-mono uppercase tracking-widest text-[#FE3EB4]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Brand Philosophy</span>
            </div>

            {/* Main Headline Statement */}
            <div className="max-w-5xl">
              <h2 className="font-['Futura_ND_Condensed'] uppercase font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] text-white tracking-[-0.03em] leading-[0.92]">
                WE MAKE BRANDS{" "}
                <span className="text-[#00BAE2]">LOUD ENOUGH</span> TO BE HEARD,{" "}
                <span className="text-[#FE3EB4]">SHARP ENOUGH</span> TO BE REMEMBERED, AND{" "}
                <span className="text-[#FFE71A]">BOLD ENOUGH</span> TO BE TALKED ABOUT.
              </h2>
            </div>

            {/* 3 Pillars Deep-Dive Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {/* Pillar 1: LOUD ENOUGH */}
              <div className="p-7 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#00BAE2]/15 text-[#00BAE2] flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-['Futura_ND_Condensed'] text-2xl uppercase font-bold tracking-wide text-white">
                  Loud Enough To Be Heard
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  In a noisy digital world, whispering gets ignored. We build viral creator campaigns, high-energy content, and unapologetic cultural moments that cut through the algorithm.
                </p>
              </div>

              {/* Pillar 2: SHARP ENOUGH */}
              <div className="p-7 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FE3EB4]/15 text-[#FE3EB4] flex items-center justify-center font-bold">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-['Futura_ND_Condensed'] text-2xl uppercase font-bold tracking-wide text-white">
                  Sharp Enough To Be Remembered
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Attention is fleeting without precision. We blend high-converting aesthetic craft, strategic messaging, and data-driven targeting to turn views into lasting brand equity.
                </p>
              </div>

              {/* Pillar 3: BOLD ENOUGH */}
              <div className="p-7 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFE71A]/15 text-[#FFE71A] flex items-center justify-center font-bold">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="font-['Futura_ND_Condensed'] text-2xl uppercase font-bold tracking-wide text-white">
                  Bold Enough To Be Talked About
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  The greatest marketing doesn&apos;t feel like an ad. We engineer conversation starters, organic word-of-mouth engines, and social-first activations that communities love sharing.
                </p>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="pt-2">
              <button
                onClick={() => setIsContactOpen(true)}
                className="px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-[#FE3EB4] hover:text-white transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Partner with Mad O Media</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Slide-out Contact Drawer */}
      <ContactDrawer
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
