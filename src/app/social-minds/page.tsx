"use client";

import React, { useState } from "react";
import { PodcastPlayer } from "@/components/PodcastPlayer";
import { ContactDrawer } from "@/components/ContactDrawer";
import { Radio, Calendar, ExternalLink, Sparkles, Send, CheckCircle2 } from "lucide-react";

export default function SocialMindsPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [email, setEmail] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setRegistered(true);
    }
  };

  return (
    <div className="pt-32 pb-24 space-y-24">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
        <span className="text-xs uppercase tracking-widest text-brand-neon font-bold flex items-center gap-2">
          <Radio className="w-3.5 h-3.5" />
          The Social Media Intelligence Hub
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight max-w-4xl">
          SocialMinds: Where the industry learns how to win on social.
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
          The UK's #1 social marketing podcast, live events with Canva and Meta, and authoritative weekly trend reports read by over 45,000 marketing leaders.
        </p>
      </section>

      {/* Podcast Player Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <PodcastPlayer />
      </section>

      {/* Live Events Spotlight */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2">
            <Calendar className="w-6 h-6 text-brand-neon" />
            SocialMinds Live Events
          </h2>
          <span className="text-xs text-brand-neon font-bold">Upcoming 2026 Season</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Event 1 */}
          <div className="p-8 rounded-3xl bg-brand-surface border border-white/10 space-y-6">
            <span className="px-3 py-1 rounded-full bg-brand-neon/10 border border-brand-neon/30 text-brand-neon text-xs font-bold uppercase tracking-wider">
              Live Webinar & Q&A
            </span>
            <h3 className="text-2xl font-bold text-white">
              SocialMinds Live x Canva: The Speed of Visual Culture
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              How modern creative teams produce 100+ native social assets a month without diluting brand integrity or burning out designers.
            </p>
            <div className="p-4 rounded-xl bg-white/5 text-xs text-zinc-400 space-y-1">
              <div><strong>Speakers:</strong> Rachel O'Connell (VP Brand, Canva) & Pete Sellers (ECD, Mad O Media)</div>
              <div><strong>Format:</strong> 45-min fireside keynote + interactive Q&A</div>
            </div>
            {registered ? (
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>You're registered! Calendar invite sent.</span>
              </div>
            ) : (
              <form onSubmit={handleRegister} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-brand-neon"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-brand-neon text-black font-bold text-xs hover:bg-brand-neon/90"
                >
                  Register Free
                </button>
              </form>
            )}
          </div>

          {/* Event 2 */}
          <div className="p-8 rounded-3xl bg-brand-card border border-white/10 space-y-6">
            <span className="px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-xs font-bold uppercase tracking-wider">
              In-Person Summit • London
            </span>
            <h3 className="text-2xl font-bold text-white">
              SocialMinds Live x Meta: The Creator Commerce Summit
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              An exclusive gathering of 250 enterprise CMOs and creator economy leaders exploring the future of social shopping, AI agents, and affiliate funnels.
            </p>
            <div className="p-4 rounded-xl bg-white/5 text-xs text-zinc-400 space-y-1">
              <div><strong>Location:</strong> Meta UK HQ, 10 Brock St, London</div>
              <div><strong>Access:</strong> By Application Only (VIP Brands)</div>
            </div>
            <button
              onClick={() => setIsContactOpen(true)}
              className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
            >
              Request An Invitation
            </button>
          </div>
        </div>
      </section>

      <ContactDrawer
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
