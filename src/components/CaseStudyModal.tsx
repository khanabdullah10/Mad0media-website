"use client";

import React from "react";
import { X, ExternalLink, TrendingUp, CheckCircle, Tag, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CaseStudy } from "@/data/caseStudies";

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export function CaseStudyModal({ caseStudy, onClose, onOpenContact }: CaseStudyModalProps) {
  if (!caseStudy) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[92vh] bg-brand-surface border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl overflow-y-auto z-10 text-white"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 backdrop-blur-md transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Banner Image */}
          <div className="relative h-64 sm:h-96 w-full overflow-hidden bg-brand-dark">
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-brand-surface/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-neon text-black text-xs font-bold uppercase tracking-wider mb-2">
                {caseStudy.client} • {caseStudy.category}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                {caseStudy.title}
              </h2>
            </div>
          </div>

          <div className="p-6 sm:p-10 space-y-10">
            {/* KPI Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
              {caseStudy.stats.map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold text-brand-neon">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Campaign Overview & Challenge */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-widest text-zinc-400 font-bold">
                  The Cultural Challenge
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-widest text-brand-neon font-bold">
                  The Social-First Solution
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {caseStudy.solution}
                </p>
              </div>
            </div>

            {/* Key Results */}
            <div className="p-6 rounded-2xl bg-brand-card border border-white/10 space-y-4">
              <h3 className="text-sm uppercase tracking-widest text-white font-bold flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                Verified Business Impact
              </h3>
              <ul className="space-y-2.5">
                {caseStudy.results.map((res, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                    <CheckCircle className="w-4 h-4 text-brand-neon shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables & Tags */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div className="flex flex-wrap gap-2">
                {caseStudy.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400"
                  >
                    <Tag className="w-3 h-3 text-brand-neon" />
                    #{tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="px-6 py-3 rounded-full bg-brand-neon text-black text-xs font-bold hover:bg-brand-neon/90 transition-colors flex items-center gap-2"
              >
                <span>Launch A Similar Campaign</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
