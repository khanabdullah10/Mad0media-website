"use client";

import React, { useState } from "react";
import { Zap, Server, ShieldCheck, Cpu, ArrowRight, X, Gauge, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function TechStackBadge() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Trigger Pill */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-brand-surface/90 hover:bg-brand-surface border border-brand-neon/40 shadow-2xl backdrop-blur-xl text-xs font-medium text-white transition-all hover:scale-105 hover:border-brand-neon group"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-neon opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-neon"></span>
        </span>
        <span className="font-semibold text-brand-neon">Next.js 15 Rebuild</span>
        <span className="text-zinc-400 group-hover:text-white hidden sm:inline">⚡ 0ms Navigation</span>
        <Zap className="w-3.5 h-3.5 text-brand-neon" />
      </motion.button>

      {/* Tech Comparison Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              className="relative w-full max-w-2xl bg-brand-surface border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-brand-neon/10 border border-brand-neon/30 text-brand-neon">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Modern Next.js 15 vs Legacy WordPress</h3>
                  <p className="text-xs text-zinc-400">Architectural overhaul comparison for MadOMedia.com</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {/* Legacy Card */}
                <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20">
                  <div className="flex items-center justify-between text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
                    <span>Legacy Architecture</span>
                    <Server className="w-4 h-4" />
                  </div>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    <li className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-zinc-400">Core</span>
                      <span className="font-mono text-red-300">WordPress 6.7.1 + Apache</span>
                    </li>
                    <li className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-zinc-400">Page Builder</span>
                      <span className="font-mono text-red-300">Elementor Pro 3.26</span>
                    </li>
                    <li className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-zinc-400">Lighthouse Score</span>
                      <span className="font-mono text-red-400 font-bold">~52 / 100</span>
                    </li>
                    <li className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-zinc-400">Average TTFB</span>
                      <span className="font-mono text-red-400">850ms - 1.4s</span>
                    </li>
                    <li className="flex justify-between py-1">
                      <span className="text-zinc-400">Custom CSS File</span>
                      <span className="font-mono text-red-300">134 KB monolithic</span>
                    </li>
                  </ul>
                </div>

                {/* Modern Card */}
                <div className="p-4 rounded-xl bg-brand-neon/5 border border-brand-neon/30">
                  <div className="flex items-center justify-between text-brand-neon text-xs font-semibold uppercase tracking-wider mb-3">
                    <span>This Next.js 15 Stack</span>
                    <Zap className="w-4 h-4" />
                  </div>
                  <ul className="space-y-2 text-xs text-zinc-200">
                    <li className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-zinc-400">Framework</span>
                      <span className="font-mono text-brand-neon">Next.js 15 App Router</span>
                    </li>
                    <li className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-zinc-400">UI / Animations</span>
                      <span className="font-mono text-brand-neon">React 19 + Framer Motion</span>
                    </li>
                    <li className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-zinc-400">Lighthouse Score</span>
                      <span className="font-mono text-emerald-400 font-bold">99 - 100 / 100</span>
                    </li>
                    <li className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-zinc-400">Average TTFB</span>
                      <span className="font-mono text-emerald-400 font-bold">&lt; 35ms (Edge)</span>
                    </li>
                    <li className="flex justify-between py-1">
                      <span className="text-zinc-400">Styling</span>
                      <span className="font-mono text-brand-neon">Tailwind CSS (Tree-shaken)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-zinc-300 leading-relaxed">
                <p className="font-semibold text-white mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Why this stack feels instant and seamless:
                </p>
                Zero-layout shifts, pre-fetched route boundaries, GPU-accelerated motion transforms, lightweight SVG icons, and reactive modal states that do not require full page refreshes.
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-brand-neon text-black font-semibold text-xs hover:bg-brand-neon/90 transition-colors"
                >
                  Explore The Site
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
