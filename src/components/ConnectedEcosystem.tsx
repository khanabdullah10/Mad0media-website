"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Volume2, VolumeX } from "lucide-react";

export function ConnectedEcosystem() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleSound = () => {
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    if (!nextMuted) {
      videoRef.current.play().catch(() => {});
    }
    setIsMuted(nextMuted);
  };

  const leftPills = [
    "Influencer\nMarketing",
    "Content\nCreation",
    "Performance\nMarketing",
  ];

  const rightPills = [
    "Community\nManagement",
    "Experiential\nMarketing",
    "Business\nIntelligence",
  ];

  return (
    <section className="relative w-full bg-[#070e17] py-20 sm:py-28 lg:py-32 px-6 sm:px-12 lg:px-16 overflow-hidden border-t border-b border-neutral-900">
      {/* Background Ambience & Subtle Geometry */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(15,42,74,0.35)_0%,rgba(7,14,23,1)_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c1a2e_1px,transparent_1px),linear-gradient(to_bottom,#0c1a2e_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Heading, Paragraph, CTA Buttons */}
        <div className="lg:col-span-6 flex flex-col items-start justify-center space-y-6 sm:space-y-8 z-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight text-white leading-[1.08]">
            Creators are your most powerful channel
            <span className="text-[#FF8A00]">.</span>
            <br />
            Run them like one
            <span className="text-[#FF8A00]">.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed max-w-xl">
            Mad O Media gives enterprise brands the infrastructure to turn
            creator marketing and social into a measurable, accountable revenue
            engine.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-lg bg-white text-black font-semibold text-sm sm:text-base hover:bg-[#FF3EB5] hover:text-white transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(255,62,181,0.3)]"
            >
              Work with us
            </Link>
            <Link
              href="/what-we-do"
              className="px-7 py-3.5 rounded-lg bg-transparent border border-neutral-700 hover:border-neutral-400 text-white font-semibold text-sm sm:text-base hover:bg-white/10 transition-all duration-300"
            >
              Explore capabilities
            </Link>
          </div>
        </div>

        {/* Right Column: Phone Mockup with Expanding Concentric Contour Rings & 6 Floating Pills */}
        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[520px] sm:min-h-[620px] py-6 select-none">
          {/* Concentric Expanding Radar / Phone Wireframes (Matching Image 2) */}
          <div className="absolute w-[290px] sm:w-[360px] md:w-[410px] h-[520px] sm:h-[620px] md:h-[680px] rounded-[56px] border border-blue-500/15 pointer-events-none" />
          <div className="absolute w-[260px] sm:w-[325px] md:w-[370px] h-[480px] sm:h-[570px] md:h-[630px] rounded-[50px] border border-blue-400/25 pointer-events-none" />
          <div className="absolute w-[230px] sm:w-[290px] md:w-[330px] h-[440px] sm:h-[520px] md:h-[575px] rounded-[44px] border border-blue-400/35 pointer-events-none" />
          <div className="absolute w-[205px] sm:w-[260px] md:w-[295px] h-[400px] sm:h-[475px] md:h-[525px] rounded-[38px] border border-blue-300/45 pointer-events-none" />

          {/* Left Flanking Pills (Matching Image 2) */}
          <div className="absolute left-0 sm:left-2 md:left-4 lg:left-0 z-30 flex flex-col justify-between h-[360px] sm:h-[420px]">
            {leftPills.map((pill, idx) => (
              <div
                key={idx}
                className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-[#1b2533]/90 backdrop-blur-md border border-neutral-600/60 shadow-xl text-center hover:border-white/50 hover:bg-[#222f42] transition-all duration-300"
              >
                <span className="text-[11px] sm:text-xs md:text-sm font-medium text-white/95 whitespace-pre-line leading-tight block">
                  {pill}
                </span>
              </div>
            ))}
          </div>

          {/* Center Smartphone Mockup */}
          <div className="relative z-20 w-[185px] sm:w-[220px] md:w-[245px] aspect-[9/18.5] rounded-[36px] sm:rounded-[42px] p-2 bg-black border-[3px] border-neutral-700/80 shadow-[0_0_60px_rgba(15,42,74,0.7)] flex flex-col items-center">
            {/* Top speaker slit & camera */}
            <div className="absolute top-3.5 z-30 w-14 h-3 bg-black rounded-full flex items-center justify-center">
              <div className="w-6 h-1 bg-neutral-800 rounded-full" />
            </div>

            {/* Inner Screen with Continuous Autoplay Video */}
            <div
              onClick={toggleSound}
              className="relative w-full h-full rounded-[28px] sm:rounded-[34px] overflow-hidden bg-black flex items-center justify-center cursor-pointer group"
            >
              <video
                ref={videoRef}
                src="/videos/IMG_2039.mp4"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                preload="auto"
                controlsList="nodownload nofullscreen"
                className="w-full h-full object-cover"
              />

              {/* Sound Toggle Floating Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSound();
                }}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
                className="absolute bottom-3 right-3 z-30 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all duration-200 opacity-80 hover:opacity-100 hover:scale-105"
              >
                {isMuted ? (
                  <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                ) : (
                  <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF3EB5]" />
                )}
              </button>
            </div>
          </div>

          {/* Right Flanking Pills (Matching Image 2) */}
          <div className="absolute right-0 sm:right-2 md:right-4 lg:right-0 z-30 flex flex-col justify-between h-[360px] sm:h-[420px]">
            {rightPills.map((pill, idx) => (
              <div
                key={idx}
                className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-[#1b2533]/90 backdrop-blur-md border border-neutral-600/60 shadow-xl text-center hover:border-white/50 hover:bg-[#222f42] transition-all duration-300"
              >
                <span className="text-[11px] sm:text-xs md:text-sm font-medium text-white/95 whitespace-pre-line leading-tight block">
                  {pill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
