"use client";

import React from "react";
import { ArrowUpRight, TrendingUp, Sparkles } from "lucide-react";
import { CaseStudy } from "@/data/caseStudies";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  onClick: () => void;
}

export function CaseStudyCard({ caseStudy, onClick }: CaseStudyCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative rounded-3xl overflow-hidden bg-brand-surface border border-white/10 hover:border-brand-neon/50 transition-all duration-500 cursor-pointer flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-brand-neon/10"
    >
      {/* Thumbnail with zoom effect */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-brand-card">
        <img
          src={caseStudy.image}
          alt={caseStudy.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-bold text-white uppercase tracking-wider">
            {caseStudy.client}
          </span>
          <span className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-brand-neon group-hover:text-black text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
            <ArrowUpRight className="w-5 h-5" />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <span className="text-[11px] uppercase tracking-widest text-brand-neon font-bold">
            {caseStudy.category}
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-brand-neon transition-colors mt-1.5 leading-snug">
            {caseStudy.title}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
            {caseStudy.subtitle}
          </p>
        </div>

        {/* Key Stats Bar */}
        <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
          <div>
            <div className="text-xl sm:text-2xl font-black text-white group-hover:text-brand-neon transition-colors">
              {caseStudy.stats[0]?.value}
            </div>
            <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium">
              {caseStudy.stats[0]?.label}
            </div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-white group-hover:text-brand-neon transition-colors">
              {caseStudy.stats[1]?.value}
            </div>
            <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium">
              {caseStudy.stats[1]?.label}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
