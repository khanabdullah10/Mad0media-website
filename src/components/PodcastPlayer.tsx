"use client";

import React, { useState } from "react";
import { Play, Pause, Headphones, Radio, ExternalLink, Sparkles } from "lucide-react";
import { PODCAST_EPISODES, PodcastEpisode } from "@/data/podcasts";

export function PodcastPlayer() {
  const [activeEpisode, setActiveEpisode] = useState<PodcastEpisode>(PODCAST_EPISODES[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl bg-brand-surface border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 rounded-full bg-brand-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 rounded-full bg-brand-neon/10 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/10 relative z-10">
        <div>
          <div className="flex items-center gap-2 text-brand-neon text-xs font-bold uppercase tracking-widest mb-1.5">
            <Radio className="w-4 h-4 animate-pulse" />
            <span>The #1 Social Media Marketing Podcast</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            SocialMinds
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Weekly deep-dives with global marketing heads, platform leads, and culture disruptors.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://open.spotify.com/show/socialminds"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/10 transition-colors flex items-center gap-2"
          >
            <span>Spotify</span>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
          </a>
          <a
            href="https://podcasts.apple.com/podcast/socialminds"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/10 transition-colors flex items-center gap-2"
          >
            <span>Apple Podcasts</span>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
          </a>
        </div>
      </div>

      {/* Active Player Card */}
      <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
        <div className="md:col-span-4 relative rounded-2xl overflow-hidden aspect-square shadow-xl group border border-white/10">
          <img
            src={activeEpisode.coverImage}
            alt={activeEpisode.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 rounded-full bg-brand-neon text-black flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="w-7 h-7 fill-current" />
              ) : (
                <Play className="w-7 h-7 fill-current ml-1" />
              )}
            </button>
          </div>
        </div>

        <div className="md:col-span-8 space-y-4">
          <div className="flex items-center gap-3 text-xs">
            <span className="px-3 py-1 rounded-full bg-brand-neon/10 border border-brand-neon/30 text-brand-neon font-bold uppercase tracking-wider">
              {activeEpisode.category}
            </span>
            <span className="text-zinc-400 flex items-center gap-1.5">
              <Headphones className="w-3.5 h-3.5" />
              {activeEpisode.duration} • {activeEpisode.date}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
            {activeEpisode.title}
          </h3>

          <div className="text-xs sm:text-sm font-medium text-brand-neon">
            Guest: {activeEpisode.guest} — {activeEpisode.role}, {activeEpisode.company}
          </div>

          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            {activeEpisode.summary}
          </p>

          {/* Animated Waveform Simulation */}
          <div className="pt-2">
            <div className="flex items-center gap-1 h-8 px-4 rounded-xl bg-white/5 border border-white/10">
              {[40, 65, 30, 85, 95, 45, 60, 75, 100, 35, 55, 80, 70, 90, 50, 65, 85, 40, 75, 90, 60, 45, 80, 100, 70, 55, 30, 85, 60, 40, 75].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-full transition-all duration-300 ${
                    isPlaying ? "bg-brand-neon animate-pulse" : "bg-zinc-600"
                  }`}
                  style={{
                    height: isPlaying ? `${Math.max(15, (h * (i % 3 + 1)) % 100)}%` : `${h * 0.4}%`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Episode Selector List */}
      <div className="pt-6 border-t border-white/10 relative z-10">
        <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-4">
          Recent Episodes
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {PODCAST_EPISODES.map((ep) => (
            <button
              key={ep.id}
              onClick={() => {
                setActiveEpisode(ep);
                setIsPlaying(true);
              }}
              className={`p-3 rounded-xl text-left border transition-all ${
                activeEpisode.id === ep.id
                  ? "bg-brand-card border-brand-neon/50 shadow-lg"
                  : "bg-white/5 border-white/5 hover:border-white/20"
              }`}
            >
              <div className="text-xs font-bold text-white truncate">{ep.title}</div>
              <div className="text-[11px] text-zinc-400 mt-1">{ep.guest} • {ep.company}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
