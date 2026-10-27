"use client";

import React, { useState } from "react";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import { OurProcessSection } from "./OurProcessSection";
import { 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Compass, 
  Cpu, 
  Radio, 
  BarChart3, 
  Code2, 
  Globe2, 
  Share2, 
  Palette,
  MousePointer2
} from "lucide-react";

export interface ServiceCardData {
  number: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  accent: string;
  icon: any;
  items: string[];
}

export const SERVICES_CARDS: ServiceCardData[] = [
  {
    number: "01",
    category: "Branding",
    title: "BRANDING",
    tagline: "MAKE YOUR BRAND IMPOSSIBLE TO MISTAKE.",
    description:
      "Your brand is more than a logo. We build distinctive identities, positioning and visual systems that give businesses a voice people recognise and remember.",
    accent: "#FF3EB5",
    icon: Palette,
    items: [
      "Brand Strategy",
      "Brand Identity",
      "Logo Design",
      "Visual Systems",
      "Brand Guidelines",
    ],
  },
  {
    number: "02",
    category: "Social Media",
    title: "SOCIAL MEDIA",
    tagline: "DON'T JUST POST. START SOMETHING.",
    description:
      "We turn social media into a place where brands have something worth saying, sharing and talking about.",
    accent: "#FF8A00",
    icon: Share2,
    items: [
      "Social Strategy",
      "Content Creation",
      "Campaigns",
      "Community Building",
      "Social Management",
    ],
  },
  {
    number: "03",
    category: "Influencer Marketing",
    title: "INFLUENCER MARKETING",
    tagline: "THE RIGHT PEOPLE. THE RIGHT STORY.",
    description:
      "We connect brands with creators who have the right audience, credibility and cultural relevance to make campaigns feel natural — not forced.",
    accent: "#00BAE2",
    icon: Compass,
    items: [
      "Creator Strategy",
      "Influencer Campaigns",
      "Creator Partnerships",
      "Campaign Management",
      "Performance Tracking",
    ],
  },
  {
    number: "04",
    category: "Web Design & Development",
    title: "WEB DESIGN & DEVELOPMENT",
    tagline: "YOUR WEBSITE SHOULD DO MORE THAN LOOK GOOD.",
    description:
      "We create digital experiences that combine sharp design, seamless functionality and technology built around your business goals.",
    accent: "#806EFF",
    icon: Globe2,
    items: [
      "UI/UX Design",
      "Website Design",
      "Web Development",
      "E-Commerce",
      "Optimisation & Support",
    ],
  },
  {
    number: "05",
    category: "ERP & CRM",
    title: "ERP & CRM",
    tagline: "MAKE YOUR BUSINESS WORK SMARTER.",
    description:
      "We build and implement systems that connect your operations, customers and data — giving your business more control and less chaos.",
    accent: "#10B981",
    icon: Cpu,
    items: [
      "ERP Solutions",
      "CRM Solutions",
      "Process Automation",
      "Business Integration",
      "Custom Workflows",
    ],
  },
  {
    number: "06",
    category: "Digital Marketing",
    title: "DIGITAL MARKETING",
    tagline: "BE EVERYWHERE THAT MATTERS.",
    description:
      "We build digital strategies that put your brand in front of the right people, at the right moment, with the right message.",
    accent: "#FEC5FB",
    icon: Layers,
    items: [
      "Digital Strategy",
      "Search Marketing",
      "Social Advertising",
      "Lead Generation",
      "Campaign Management",
    ],
  },
  {
    number: "07",
    category: "Performance Marketing",
    title: "PERFORMANCE MARKETING",
    tagline: "ATTENTION IS NICE. RESULTS ARE BETTER.",
    description:
      "We combine creative thinking with data, testing and optimisation to turn campaigns into measurable business growth.",
    accent: "#F59E0B",
    icon: BarChart3,
    items: [
      "Paid Media",
      "Conversion Optimisation",
      "Lead Generation",
      "Retargeting",
      "Analytics & Reporting",
    ],
  },
  {
    number: "08",
    category: "Software Solutions",
    title: "SOFTWARE SOLUTIONS",
    tagline: "IF IT DOESN'T EXIST, WE'LL BUILD IT.",
    description:
      "From custom platforms to business tools, we turn complex requirements into technology that works the way your business needs it to.",
    accent: "#3B82F6",
    icon: Code2,
    items: [
      "Custom Software",
      "Web Applications",
      "Business Platforms",
      "API & System Integration",
      "Automation",
    ],
  },
  {
    number: "09",
    category: "Podcast",
    title: "PODCAST",
    tagline: "GIVE YOUR IDEAS A VOICE.",
    description:
      "From concept to production, we help brands and people turn conversations into content worth listening to.",
    accent: "#EC4899",
    icon: Radio,
    items: [
      "Podcast Strategy",
      "Studio Production",
      "Recording",
      "Editing & Post-Production",
    ],
  },
];

interface WhatWeDoProps {
  onOpenContact?: () => void;
}

export function WhatWeDoScrollExperience({ onOpenContact }: WhatWeDoProps) {
  const [stackFinished, setStackFinished] = useState(false);

  return (
    <div className="relative w-full bg-[#05070a] text-white">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(0,186,226,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-[35%] right-5 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(254,197,251,0.05)_0%,transparent_70%)] pointer-events-none" />

      {/* ========================================================= */}
      {/* HEADER SECTION                                            */}
      {/* ========================================================= */}
      <section className="relative pt-36 sm:pt-44 pb-12 sm:pb-16 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto border-b border-neutral-900">
        <div className="space-y-6 max-w-4xl">
          
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-neutral-800 bg-[#0d1420] text-xs font-mono uppercase tracking-widest text-[#00BAE2]">
            <span className="w-2 h-2 rounded-full bg-[#00BAE2]" />
            Capabilities & Services
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white font-['Futura_ND_Condensed'] uppercase">
            WHAT WE DO<span className="text-[#FF3EB5]">.</span>
          </h1>

          <p className="font-['PP_Editorial_New',Georgia,serif] italic text-2xl sm:text-4xl md:text-5xl text-neutral-200 leading-snug font-normal">
            A LOT. BUT NEVER JUST FOR THE SAKE OF IT.
          </p>

          <p className="text-lg sm:text-2xl text-neutral-400 font-light max-w-3xl leading-relaxed pt-2">
            We bring strategy, creativity, technology and culture together to build brands, experiences and digital solutions that actually move the needle.
          </p>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SCROLL STACK SECTION                                      */}
      {/* Cards stack on top of each other as user scrolls the page */}
      {/* ========================================================= */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto">
        
        {/* Status Indicator */}
        <div className="mb-12 flex items-center justify-between text-xs font-mono text-neutral-400 px-3 sm:px-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00BAE2] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00BAE2]"></span>
            </span>
            <span className="uppercase tracking-widest text-neutral-300 font-medium">
              Scroll down to stack cards
            </span>
          </div>
          <span className="text-neutral-500 font-mono hidden sm:inline-block">
            01 — 09 / Interactive Stack Deck
          </span>
        </div>

        {/* ScrollStack driven by normal window / mouse wheel scroll */}
        <ScrollStack
          useWindowScroll={true}
          itemDistance={160}
          itemStackDistance={24}
          stackPosition="110px"
          itemScale={0.035}
          baseScale={0.88}
          dimAmount={0.18}
          tiltAmount={0}
          rotationAmount={0}
          holdDistance={400}
          smoothScroll={false}
          snap={false}
          onStackComplete={() => setStackFinished(true)}
        >
          {SERVICES_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <ScrollStackItem key={card.number} itemClassName="service-stack-card">
                {/* Top Color Accent Line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{
                    background: `linear-gradient(90deg, ${card.accent} 0%, transparent 80%)`,
                  }}
                />

                {/* Corner Accent Glow (hardware-accelerated radial gradient without blur filter) */}
                <div
                  className="absolute -right-24 -top-24 w-60 h-60 rounded-full pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${card.accent}30 0%, transparent 70%)`,
                  }}
                />

                <div className="space-y-5 relative z-10">
                  
                  {/* Header: Card Number & Category */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className="text-xs font-mono font-bold px-3 py-1 rounded-md bg-white/5 border border-white/10"
                        style={{ color: card.accent }}
                      >
                        CARD {card.number}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                        {card.category}
                      </span>
                    </div>

                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 bg-white/5"
                      style={{ color: card.accent }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Futura_ND_Condensed'] uppercase tracking-tight">
                    {card.title}
                  </h3>

                  {/* Tagline */}
                  <p
                    className="font-['PP_Editorial_New',Georgia,serif] italic text-xl sm:text-2xl font-normal leading-snug"
                    style={{ color: card.accent }}
                  >
                    {card.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light max-w-2xl">
                    {card.description}
                  </p>

                </div>

                {/* Deliverables Checklist / Tags */}
                <div className="pt-6 border-t border-neutral-800/80 mt-6 relative z-10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-2.5">
                    Capabilities & Deliverables
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {card.items.map((item, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-900/90 border border-neutral-800 text-xs font-mono text-neutral-300"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: card.accent }}
                        />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollStackItem>
            );
          })}
        </ScrollStack>

      </section>

      {/* ========================================================= */}
      {/* OUR PROCESS (Billion Dollar Boy Interaction & Style)      */}
      {/* ========================================================= */}
      <OurProcessSection />

      {/* ========================================================= */}
      {/* BOTTOM CTA                                                */}
      {/* ========================================================= */}
      <section className="relative pb-28 sm:pb-36 px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto text-center space-y-8">
        <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-b from-[#0d1424] to-[#070b12] border border-neutral-800 shadow-2xl relative overflow-hidden space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-800 bg-[#060a12] text-xs font-mono uppercase tracking-widest text-[#00BAE2]">
            <Sparkles className="w-3.5 h-3.5" />
            Let's Make Something Impossible to Mistake
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-white uppercase font-['Futura_ND_Condensed'] tracking-tight">
            Ready to move the needle<span className="text-[#FF3EB5]">?</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto font-light leading-relaxed">
            Whether you need a high-impact branding overhaul, viral creator campaigns, or custom business software, our team is ready to engineer results.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#FF3EB5] to-[#00BAE2] text-white font-bold text-sm tracking-wide uppercase hover:opacity-90 transition-opacity shadow-xl shadow-[#00BAE2]/20 flex items-center justify-center gap-2"
            >
              <span>Schedule A Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
