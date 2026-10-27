"use client";

import React from "react";

interface TechItem {
  name: string;
  isWordmarkOnly?: boolean;
  logo: React.ReactNode;
}

const TECH_STACK: TechItem[] = [
  // Row 1
  {
    name: "Meta",
    logo: (
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8 shrink-0 fill-[#0081FB] group-hover:fill-white transition-colors duration-300"
      >
        <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z" />
      </svg>
    ),
  },
  {
    name: "Google Ads",
    logo: (
      <svg viewBox="0 0 28 28" className="h-8 w-8 shrink-0 group-hover:brightness-0 group-hover:invert transition-all duration-300" fill="none">
        <path
          d="M3.8 20.4L12 6.1a3.4 3.4 0 0 1 4.6-1.2 3.4 3.4 0 0 1 1.2 4.6L9.6 23.8a3.4 3.4 0 0 1-4.6 1.2 3.4 3.4 0 0 1-1.2-4.6z"
          fill="#FBBC04"
        />
        <path
          d="M24.2 20.4L16 6.1a3.4 3.4 0 0 0-4.6-1.2 3.4 3.4 0 0 0-1.2 4.6l8.2 14.3a3.4 3.4 0 0 0 4.6 1.2 3.4 3.4 0 0 0 1.2-4.6z"
          fill="#4285F4"
        />
        <circle cx="6.3" cy="22.1" r="3.4" fill="#34A853" />
      </svg>
    ),
  },
  {
    name: "Google Analytics",
    logo: (
      <svg viewBox="0 0 28 28" className="h-8 w-8 shrink-0 group-hover:brightness-0 group-hover:invert transition-all duration-300" fill="none">
        <rect x="17.5" y="4.5" width="5.2" height="19" rx="2.6" fill="#E37400" />
        <rect x="11.2" y="11" width="5.2" height="12.5" rx="2.6" fill="#F9AB00" />
        <circle cx="6.5" cy="20.5" r="2.6" fill="#F9AB00" />
      </svg>
    ),
  },
  {
    name: "Google Workspace",
    logo: (
      <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0 group-hover:brightness-0 group-hover:invert transition-all duration-300" fill="none">
        <path d="M10 6h12a4 4 0 0 1 4 4v2h-4v-2a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v2H4v-2a4 4 0 0 1 4-4z" fill="#EA4335" />
        <path d="M22 6a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-2v-4h2a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6h2z" fill="#FBBC04" />
        <path d="M22 26H10a4 4 0 0 1-4-4v-2h4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2h4v2a4 4 0 0 1-4 4z" fill="#34A853" />
        <path d="M10 26a4 4 0 0 1-4-4V10a4 4 0 0 1 4-4h2v4h-2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2v4h-2z" fill="#4285F4" />
      </svg>
    ),
  },

  // Row 2
  {
    name: "WordPress",
    logo: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0 fill-[#1E1E1E] group-hover:fill-white transition-colors duration-300">
        <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0" />
      </svg>
    ),
  },
  {
    name: "Shopify",
    logo: (
      <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0 group-hover:brightness-0 group-hover:invert transition-all duration-300" fill="none">
        <path
          d="M24.8 8.5c-.2-.5-.6-.8-1.1-.8h-3.9C19.5 5.4 17.8 3 15.4 3s-4.1 2.4-4.4 4.7H7.1c-.5 0-.9.3-1.1.8L3 26.5c-.1.6.4 1.2 1 1.2h22.8c.6 0 1.1-.6 1-1.2L24.8 8.5z"
          fill="#191919"
        />
        <path
          d="M13 7.7c.2-1.6 1.1-2.9 2.4-2.9s2.2 1.3 2.4 2.9H13z"
          fill="#FFFFFF"
        />
        <path
          d="M17.2 15.5c-.9-.3-1.4-.6-1.4-1.1 0-.6.4-1 1.2-1 .8 0 1.3.4 1.6 1.1l1.7-.9c-.5-1.2-1.7-1.9-3.3-1.9-1.9 0-3.2 1.2-3.2 2.8 0 1.7 1.3 2.4 2.6 2.8 1.1.3 1.6.7 1.6 1.2s-.5 1.1-1.5 1.1c-1.1 0-1.9-.6-2.2-1.5l-1.7.8c.5 1.6 2 2.4 3.9 2.4 2.1 0 3.5-1.2 3.5-3 0-1.8-1.3-2.5-2.8-2.8z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    name: "WooCommerce",
    logo: (
      <svg viewBox="0 0 36 26" className="h-7 w-auto shrink-0 group-hover:brightness-0 group-hover:invert transition-all duration-300" fill="none">
        <path
          d="M3 4.5C3 2 5.1 0 7.6 0h20.8C30.9 0 33 2 33 4.5v11.7c0 2.5-2.1 4.5-4.6 4.5h-11l-5.8 4.5c-.9.7-2.3.1-2.3-1.1v-3.4H7.6C5.1 20.7 3 18.7 3 16.2V4.5z"
          fill="#7F54B3"
        />
        <text
          x="18"
          y="14.8"
          fill="#FFFFFF"
          fontSize="12.5"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          textAnchor="middle"
          letterSpacing="-0.6"
        >
          Woo
        </text>
      </svg>
    ),
  },
  {
    name: "Adobe Creative Cloud",
    logo: (
      <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0 group-hover:brightness-0 group-hover:invert transition-all duration-300" fill="none">
        <defs>
          <linearGradient id="adobe-rainbow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FA0F00" />
            <stop offset="20%" stopColor="#FA006A" />
            <stop offset="45%" stopColor="#7F00FF" />
            <stop offset="70%" stopColor="#0072FF" />
            <stop offset="100%" stopColor="#00CC44" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="7" fill="url(#adobe-rainbow)" />
        <path
          d="M23 18.5c-.2-2.3-2-4.1-4.3-4.1-.5 0-1 .1-1.5.3-.8-1.9-2.7-3.2-4.8-3.2-2.9 0-5.3 2.4-5.3 5.3 0 .3 0 .5.1.7-1.5.7-2.6 2.2-2.6 4 0 2.4 2 4.4 4.4 4.4h14c2.4 0 4.4-2 4.4-4.4 0-1.5-.8-2.8-2-3.6l-2.4.6z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },

  // Row 3
  {
    name: "Figma",
    logo: (
      <svg viewBox="0 0 38 57" className="h-8 w-auto shrink-0 group-hover:brightness-0 group-hover:invert transition-all duration-300" fill="none">
        <path d="M19 0H9.5a9.5 9.5 0 0 0 0 19H19V0z" fill="#F24E1E" />
        <path d="M19 0h9.5a9.5 9.5 0 0 1 0 19H19V0z" fill="#FF7262" />
        <path d="M19 19H9.5a9.5 9.5 0 0 0 0 19H19V19z" fill="#A259FF" />
        <path d="M28.5 28.5a9.5 9.5 0 1 1-19 0 9.5 9.5 0 0 1 19 0z" fill="#1ABCFE" />
        <path d="M9.5 57A9.5 9.5 0 0 1 0 47.5 9.5 9.5 0 0 1 9.5 38H19v9.5A9.5 9.5 0 0 1 9.5 57z" fill="#0ACF83" />
      </svg>
    ),
  },
  {
    name: "Canva",
    isWordmarkOnly: true, // Wordmark takes natural visual balance in card
    logo: (
      <img
        src="/technologies/icons/canva_official.svg"
        alt="Canva"
        className="h-8 sm:h-9 w-auto max-w-[110px] object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
        loading="eager"
      />
    ),
  },
  {
    name: "Cloudflare",
    logo: (
      <svg viewBox="0 0 32 24" className="h-7 w-auto shrink-0 group-hover:brightness-0 group-hover:invert transition-all duration-300" fill="none">
        <path
          d="M24.8 14.8c-.4-3.2-3.2-5.7-6.5-5.7-2.5 0-4.8 1.5-5.8 3.8-.5-.2-1-.3-1.5-.3-2.6 0-4.8 2-5 4.7C2.2 18 0 20.3 0 23.1 0 26.3 2.5 28.9 5.7 28.9h17.8c3.8 0 7-3.2 7-7 0-3.6-2.7-6.5-6.2-6.9l.5-.2z"
          fill="#F38020"
        />
        <path
          d="M23.5 23.8H14.8c-.4 0-.7-.3-.7-.7s.3-.7.7-.7h8.7c1 0 1.9-.9 1.9-1.9s-.9-1.9-1.9-1.9h-1.5c-.4 0-.7-.3-.7-.7 0-1.8-1.4-3.2-3.2-3.2-1 0-1.9.5-2.4 1.3-.2.3-.5.4-.9.3-.3-.1-.5-.3-.6-.5-.3-.6-.9-1-1.7-1-1.3 0-2.3 1-2.3 2.3 0 .3.1.5.1.8.1.4 0 .8-.4.9-.8.4-1.3 1.1-1.3 2 0 1.3 1 2.3 2.3 2.3h11.2c.4 0 .7.3.7.7s-.3.7-.7.7z"
          fill="#FAAE40"
        />
      </svg>
    ),
  },
  {
    name: "Razorpay",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0" fill="none">
        {/* Upper dark navy fold */}
        <path
          d="M22.436 0l-11.91 7.773-1.174 4.276 6.625-4.297L11.65 24h4.391l6.395-24z"
          className="fill-[#0C2340] group-hover:fill-white transition-colors duration-300"
        />
        {/* Lower electric blue fold */}
        <path
          d="M14.26 10.098L3.389 17.166 1.564 24h9.008l3.688-13.902Z"
          className="fill-[#3395FF] group-hover:fill-white transition-colors duration-300"
        />
      </svg>
    ),
  },
];

export function TechStackGrid() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {TECH_STACK.map((item) => (
          <div
            key={item.name}
            className="group relative rounded-2xl bg-white px-6 py-5 sm:px-7 sm:py-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)] border border-neutral-200/90 hover:border-[#D9081B] hover:bg-[#D9081B] hover:shadow-[0_8px_28px_rgba(217,8,27,0.35)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 sm:gap-5 cursor-pointer overflow-hidden min-h-[76px]"
          >
            {/* Glossy sheen highlight that illuminates on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {item.isWordmarkOnly ? (
              // Canva: Standalone authentic script wordmark nicely balanced
              <div className="flex items-center justify-start py-0.5 group-hover:scale-105 transition-transform duration-300">
                {item.logo}
              </div>
            ) : (
              // Standard: [Icon] + [Brand Name]
              <>
                <div className="w-9 h-9 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {item.logo}
                </div>

                <div className="relative z-10 flex-1 min-w-0">
                  <h4 className="text-base sm:text-lg font-bold text-[#191919] group-hover:text-white tracking-tight leading-tight group-hover:translate-x-0.5 transition-all duration-300">
                    {item.name}
                  </h4>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
