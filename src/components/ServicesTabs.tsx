"use client";

import React, { useState } from "react";
import { SERVICES } from "@/data/services";
import { Check, ArrowRight, Sparkles, Layers, Target, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ServicesTabsProps {
  onOpenContact: () => void;
}

export function ServicesTabs({ onOpenContact }: ServicesTabsProps) {
  const [selectedId, setSelectedId] = useState(SERVICES[0].id);
  const activeService = SERVICES.find((s) => s.id === selectedId) || SERVICES[0];

  const getIcon = (idx: number) => {
    if (idx === 0) return <Layers className="w-5 h-5" />;
    if (idx === 1) return <Target className="w-5 h-5" />;
    return <Users className="w-5 h-5" />;
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Tab Switcher */}
      <div className="flex flex-wrap items-center justify-center gap-3 p-1.5 rounded-2xl bg-white/5 border border-white/10 max-w-2xl mx-auto backdrop-blur-md">
        {SERVICES.map((srv, idx) => (
          <button
            key={srv.id}
            onClick={() => setSelectedId(srv.id)}
            className={`flex-1 min-w-[160px] py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2.5 transition-all ${
              selectedId === srv.id
                ? "bg-brand-neon text-black shadow-lg shadow-brand-neon/20 font-extrabold"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            {getIcon(idx)}
            <span>{srv.title}</span>
          </button>
        ))}
      </div>

      {/* Active Service Content Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeService.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="p-8 sm:p-12 rounded-3xl bg-brand-surface border border-white/10 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle gradient background */}
          <div className={`absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br ${activeService.color} blur-3xl pointer-events-none`} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
            {/* Left Column: Description & Tagline */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-black text-brand-neon font-mono">
                  {activeService.number}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400 font-medium">
                  Core Practice Area
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                {activeService.title}
              </h3>

              <p className="text-base sm:text-lg text-brand-neon font-medium leading-relaxed">
                "{activeService.tagline}"
              </p>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {activeService.description}
              </p>

              <div className="pt-4">
                <button
                  onClick={onOpenContact}
                  className="px-6 py-3.5 rounded-full bg-brand-neon text-black font-bold text-xs hover:bg-brand-neon/90 hover:shadow-lg hover:shadow-brand-neon/20 transition-all flex items-center gap-2"
                >
                  <span>Inquire About {activeService.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Capabilities & Deliverables */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-6 rounded-2xl bg-brand-card/80 border border-white/5 space-y-3">
                <h4 className="text-xs uppercase tracking-widest text-brand-neon font-bold flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Key Capabilities
                </h4>
                <ul className="space-y-2">
                  {activeService.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                      <Check className="w-4 h-4 text-brand-neon shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-3">
                <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-bold">
                  What Your Team Receives
                </h4>
                <ul className="space-y-2">
                  {activeService.deliverables.map((del, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-neon shrink-0 mt-2" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
