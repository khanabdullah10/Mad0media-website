"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { MadOMediaChain } from "@/components/MadOMediaChain";
import { ConnectedEcosystem } from "@/components/ConnectedEcosystem";
import { BDBStatementSection } from "@/components/BDBStatementSection";
import { BarrelCapabilities } from "@/components/BarrelCapabilities";
import { StatementBanner } from "@/components/StatementBanner";
import { CreatorInstinctHero } from "@/components/CreatorInstinctHero";
import { AboutScrollSection } from "@/components/AboutScrollSection";
import { HomeContactSection } from "@/components/HomeContactSection";

const TICKER_SERVICES = [
  "BRANDING",
  "SOCIAL MEDIA",
  "INFLUENCER MARKETING",
  "WEB DESIGN & DEVELOPMENT",
  "ERP & CRM",
  "DIGITAL MARKETING",
  "PERFORMANCE MARKETING",
  "SOFTWARE SOLUTIONS",
];

export default function HomePage() {
  const [isMuted, setIsMuted] = useState(true);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number } | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const handleVideoClick = () => {
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    if (!nextMuted) {
      videoRef.current.play().catch(() => {});
    }
    setIsMuted(nextMuted);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoContainerRef.current) return;
    const rect = videoContainerRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left - 124.4 / 2,
      y: e.clientY - rect.top - 70 / 2,
    });
  };

  return (
    <div className="w-full bg-black text-white selection:bg-[#FF3EB5] selection:text-black">
      {/* 1. HERO VIDEO */}
      <section className="relative w-full pt-[76px] home-video-wrap bg-black">
        <div
          ref={videoContainerRef}
          onClick={handleVideoClick}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full aspect-[1920/820] md:aspect-auto md:h-[calc(100vh-76px)] md:max-h-[calc(100vh-76px)] cursor-pointer md:cursor-none select-none overflow-hidden flex items-center justify-center bg-black"
        >
          {/* Main Video */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            controlsList="nodownload"
            className="w-full h-full object-cover pointer-events-none"
          >
            <source
              src="/videos/showreel.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML5 video.
          </video>

          {/* Exact Mad O Media "Play Sound" Custom Mouse Cursor */}
          {isHovered && cursorPos && (
            <span
              className={`hidden md:flex video-hover select-none ${!isMuted ? "muted" : ""}`}
              style={{
                transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0)`,
                position: "absolute",
                top: 0,
                left: 0,
                width: "124.4px",
                height: "70px",
                borderRadius: "15px",
                pointerEvents: "none",
                background: "#ffffffc4",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "#000",
                fontWeight: "bold",
                fontSize: "16px",
                fontFamily: "'National-Medium', sans-serif",
                zIndex: 30,
                opacity: !isMuted ? 0.6 : 1,
                boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
              }}
            >
              {isMuted ? "Play Sound" : "Mute Sound"}
            </span>
          )}

          {/* Mobile Fallback Tap Indicator */}
          <div className="md:hidden absolute bottom-6 right-6 z-20 px-4 py-2 rounded-full bg-white/90 text-black text-xs font-bold">
            {isMuted ? "Tap to Play Sound" : "Mute Sound"}
          </div>
        </div>
      </section>

      {/* 2. THE BIG STATEMENT BANNER (Mad O Media authentic fadeInLeft on-load/in-view) */}
      <StatementBanner />

      {/* 2.2 THE SOCIAL AGENCY WITH CREATOR INSTINCT (Billion Dollar Boy Signature Section) */}
      <CreatorInstinctHero />

      {/* 2.3 ABOUT SCROLL SECTION (Why Play The Game When You Can Change It) */}
      <AboutScrollSection />

      {/* 2.5 CONNECTED ECOSYSTEM (Viral Nation 2-Column Phone Hub + 6 Disciplines) */}
      <ConnectedEcosystem />

      {/* 2.8 BILLION DOLLAR BOY STATEMENT SECTION (Editorial Text Reveal in BDB Blue) */}
      <BDBStatementSection />

      {/* 3. CONNECTED CAPABILITIES (3D Cylindrical Barrel Wheel - Billion Dollar Boy Style) */}
      <BarrelCapabilities />

      {/* 4. CREATIVE SHOWCASE & CULTURE MARQUEE SECTION */}
      <section className="w-full bg-black py-24 sm:py-36 border-t border-b border-neutral-900 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-8">
            <img
              src="/images/mad-o-media-logo.png"
              alt="Mad O Media"
              className="h-10 sm:h-12 w-auto object-contain"
            />

            <div className="space-y-4 text-xl sm:text-2xl md:text-[26px] font-medium text-white leading-snug">
              <p>We get it. Social moves fast.</p>
              <p>
                That’s why Mad O Media keeps brands&nbsp;one step ahead.
              </p>
              <p className="text-neutral-400">
                Culture. Creator partnerships. High-impact production. Performance amplification. Whatever you need, we’ve got it.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#contact-query"
                className="inline-block px-8 py-3.5 rounded-full bg-white text-black text-[15px] font-medium hover:bg-[#FF3EB5] hover:text-white transition-all duration-300"
              >
                Work with us
              </a>
            </div>
          </div>

          {/* Right 3-Column Card Animation (Vertical Marquee) */}
          <div className="lg:col-span-7 h-[540px] sm:h-[620px] overflow-hidden grid grid-cols-3 gap-3 sm:gap-4 relative">
            {/* Top and bottom fade masks */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

            {/* Column 1 (Scroll Up) */}
            <div className="flex flex-col gap-4 animate-scroll-up">
              {[
                "/creatives/creative-1.jpg",
                "/creatives/creative-2.jpg",
                "/creatives/creative-3.jpg",
                "/creatives/creative-4.jpg",
                "/creatives/creative-1.jpg",
                "/creatives/creative-2.jpg",
                "/creatives/creative-3.jpg",
                "/creatives/creative-4.jpg",
              ].map((src, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden shadow-xl bg-neutral-900 border border-white/5 aspect-[4/5] relative group">
                  <img src={src} alt="MOM Creative" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              ))}
            </div>

            {/* Column 2 (Scroll Down) */}
            <div className="flex flex-col gap-4 animate-scroll-down">
              {[
                "/creatives/creative-5.jpg",
                "/creatives/creative-6.jpg",
                "/creatives/creative-7.jpg",
                "/creatives/creative-1.jpg",
                "/creatives/creative-5.jpg",
                "/creatives/creative-6.jpg",
                "/creatives/creative-7.jpg",
                "/creatives/creative-1.jpg",
              ].map((src, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden shadow-xl bg-neutral-900 border border-white/5 aspect-[4/5] relative group">
                  <img src={src} alt="MOM Creative" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              ))}
            </div>

            {/* Column 3 (Scroll Up) */}
            <div className="flex flex-col gap-4 animate-scroll-up">
              {[
                "/creatives/creative-3.jpg",
                "/creatives/creative-4.jpg",
                "/creatives/creative-2.jpg",
                "/creatives/creative-6.jpg",
                "/creatives/creative-3.jpg",
                "/creatives/creative-4.jpg",
                "/creatives/creative-2.jpg",
                "/creatives/creative-6.jpg",
              ].map((src, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden shadow-xl bg-neutral-900 border border-white/5 aspect-[4/5] relative group">
                  <img src={src} alt="MOM Creative" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CAPABILITIES & SERVICES MARQUEE TICKER */}
      <section className="w-full py-8 sm:py-10 bg-black overflow-hidden border-t border-b border-neutral-900 select-none">
        <div className="flex w-max animate-ticker">
          {[...TICKER_SERVICES, ...TICKER_SERVICES].map((item, idx) => (
            <div key={idx} className="flex items-center shrink-0">
              <span className="font-['Futura_ND_Condensed'] uppercase font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-wider px-6 sm:px-10 hover:text-[#4b70d8] transition-colors">
                {item}
              </span>
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#4b70d8] shrink-0" aria-hidden="true" />
            </div>
          ))}
        </div>
      </section>

      {/* 6. MAD O MEDIA ANIMATED CHAIN */}
      <MadOMediaChain />

      {/* 7. CONTACT INFORMATION & QUERY FORM SECTION */}
      <HomeContactSection />
    </div>
  );
}
