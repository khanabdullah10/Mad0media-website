"use client";

import React, { useState, useMemo } from "react";
import { CASE_STUDIES, CaseStudy } from "@/data/caseStudies";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { CaseStudyModal } from "@/components/CaseStudyModal";
import { ContactDrawer } from "@/components/ContactDrawer";
import { Search, Sparkles, Filter, ArrowRight } from "lucide-react";

const CATEGORIES = [
  "All",
  "Creator Marketing",
  "Social-First Strategy",
  "Viral Creative",
  "Paid Performance",
] as const;

export default function OurWorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const filteredStudies = useMemo(() => {
    return CASE_STUDIES.filter((cs) => {
      const matchesCategory =
        selectedCategory === "All" || cs.category === selectedCategory;
      const matchesSearch =
        cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cs.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cs.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs uppercase tracking-widest text-brand-neon font-bold flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5" />
          Campaign Archive
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          Work That Moves Feeds and Bottom Lines.
        </h1>
        <p className="text-base sm:text-lg text-zinc-400">
          From viral TikTok sound explosions to high-ROI creator whitelisting campaigns for the world's most ambitious brands.
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-brand-surface border border-white/10 shadow-xl">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-brand-neon text-black shadow-md font-extrabold"
                  : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by brand or tag..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-brand-neon transition-colors"
          />
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-zinc-500">
        <span>
          Showing <span className="text-white font-bold">{filteredStudies.length}</span> of {CASE_STUDIES.length} case studies
        </span>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="text-brand-neon hover:underline"
          >
            Clear search
          </button>
        )}
      </div>

      {/* Case Studies Grid */}
      {filteredStudies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((cs) => (
            <CaseStudyCard
              key={cs.id}
              caseStudy={cs}
              onClick={() => setActiveModalStudy(cs)}
            />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center space-y-4 rounded-3xl bg-white/5 border border-white/10">
          <p className="text-lg font-bold text-white">No campaigns match your filters</p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="px-6 py-2.5 rounded-full bg-brand-neon text-black text-xs font-bold"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="p-8 sm:p-12 rounded-3xl bg-brand-card border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white">Want results like these for your brand?</h3>
          <p className="text-xs sm:text-sm text-zinc-400">Let's craft your next breakthrough campaign together.</p>
        </div>
        <button
          onClick={() => setIsContactOpen(true)}
          className="px-8 py-3.5 rounded-full bg-brand-neon text-black font-extrabold text-xs hover:bg-brand-neon/90 transition-all flex items-center gap-2"
        >
          <span>Start A Brief</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <CaseStudyModal
        caseStudy={activeModalStudy}
        onClose={() => setActiveModalStudy(null)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <ContactDrawer
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
