"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { TechStackGrid } from "./TechStackGrid";

interface CapabilityItem {
  id: string;
  name: string;
  description: string;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    id: "creators",
    name: "CREATORS",
    description:
      "From influencer partnerships and creator collaborations to scaled advocacy programmes, we help brands build with the voices shaping culture today.",
  },
  {
    id: "content",
    name: "CONTENT",
    description:
      "Social-first content designed to earn attention, spark conversation and drive measurable impact across the full customer journey.",
  },
  {
    id: "community",
    name: "COMMUNITY",
    description:
      "Communities aren't audiences to reach - they're relationships to build. From social communities to IRL experiences, we help brands earn participation and advocacy.",
  },
  {
    id: "commerce",
    name: "COMMERCE",
    description:
      "Where inspiration meets transaction. We design social commerce experiences that turn attention into measurable business growth.",
  },
  {
    id: "media",
    name: "MEDIA",
    description:
      "Paid media amplification that scales organic creator winners, optimizes algorithmic performance, and maximizes return on ad spend.",
  },
];

const SLIDE_COUNT = CAPABILITIES.length;
const TWO_PI = 2 * Math.PI;
const STEP_ANGLE = TWO_PI / SLIDE_COUNT;

export function BarrelCapabilities() {
  // Start with CREATORS (index 0) or CONTENT (index 1)
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [centerIndex, setCenterIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const barrelWrapRef = useRef<HTMLDivElement>(null);

  const dragStartY = useRef<number>(0);
  const dragStartProgress = useRef<number>(0);
  const targetProgress = useRef<number>(0);
  const currentProgress = useRef<number>(0);
  const rafId = useRef<number | null>(null);

  // 1. Native non-passive Wheel listener on the left barrel column
  // When cursor is over the left barrel:
  // - Prevent default page scroll
  // - Stop propagation to Lenis smooth scroll
  // - Rotate the 3D barrel cylinder smoothly
  // - Dynamically update active capability and right-side content
  // When cursor is NOT over the left barrel:
  // - Page scrolls down normally!
  useEffect(() => {
    const wrapEl = barrelWrapRef.current;
    if (!wrapEl) return;

    const handleNativeWheel = (e: WheelEvent) => {
      // Intercept vertical scroll
      if (Math.abs(e.deltaY) >= Math.abs(e.deltaX)) {
        e.preventDefault();
        e.stopPropagation();

        // Increment target progress to rotate cylinder
        // deltaY > 0 (scroll down) spins downward/forward
        targetProgress.current += e.deltaY * 0.0035;

        // When wheeling, clear hovered override so the centered rolling item takes active focus
        setHoveredIndex(null);
      }
    };

    // Attach non-passive wheel listener directly to DOM node
    wrapEl.addEventListener("wheel", handleNativeWheel, {
      passive: false,
      capture: true,
    });

    return () => {
      wrapEl.removeEventListener("wheel", handleNativeWheel, {
        capture: true,
      });
    };
  }, []);

  // 2. Smooth Lerp Animation Loop
  useEffect(() => {
    const update = () => {
      // Smooth Lerp factor (0.09 for fluid momentum)
      const diff = targetProgress.current - currentProgress.current;
      currentProgress.current += diff * 0.09;

      setScrollProgress(currentProgress.current);

      // Compute which item is currently closest to the front center
      const normalized =
        (((currentProgress.current % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT);
      const closest = Math.round(normalized) % SLIDE_COUNT;
      setCenterIndex(closest);

      rafId.current = requestAnimationFrame(update);
    };

    rafId.current = requestAnimationFrame(update);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  // 3. Click any word to smoothly rotate it to the center
  const handleItemClick = (index: number) => {
    const currentNorm =
      (((currentProgress.current % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT);
    let diff = index - currentNorm;
    if (diff > SLIDE_COUNT / 2) diff -= SLIDE_COUNT;
    if (diff < -SLIDE_COUNT / 2) diff += SLIDE_COUNT;

    targetProgress.current = currentProgress.current + diff;
    setHoveredIndex(index);
  };

  // 4. Mouse Drag & Touch Support
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartY.current = e.clientY;
    dragStartProgress.current = targetProgress.current;
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaY = e.clientY - dragStartY.current;
      targetProgress.current = dragStartProgress.current - deltaY * 0.007;
      setHoveredIndex(null);
    },
    [isDragging]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    dragStartY.current = e.touches[0].clientY;
    dragStartProgress.current = targetProgress.current;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const deltaY = e.touches[0].clientY - dragStartY.current;
    targetProgress.current = dragStartProgress.current - deltaY * 0.007;
    setHoveredIndex(null);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Active capability: hovered takes priority, otherwise center-focused
  const activeIndex = hoveredIndex !== null ? hoveredIndex : centerIndex;

  return (
    <section className="relative w-full bg-[#F9F7F4] text-[#191919] py-20 sm:py-28 lg:py-32 px-6 sm:px-12 lg:px-20 overflow-hidden select-none border-t border-b border-neutral-300">
      <div className="max-w-[1440px] mx-auto flex flex-col justify-between">
        {/* Top Header / Kicker */}
        <div className="w-full max-w-[480px] pb-3 mb-10 sm:mb-14 border-b border-black">
          <h2
            className="text-lg sm:text-xl font-bold tracking-tight uppercase text-black"
            style={{
              fontFamily: "'Futura ND Condensed', Impact, sans-serif",
              letterSpacing: "-0.01em",
            }}
          >
            CONNECTED CAPABILITIES
          </h2>
        </div>

        {/* 2-Column Split: Left 3D Barrel Wheel / Right Dynamic Editorial Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: 3D Cylindrical Barrel Wheel */}
          {/* data-lenis-prevent stops smooth scroll from hijacking when cursor is over this element */}
          <div
            ref={barrelWrapRef}
            data-lenis-prevent="true"
            data-scroll-prevent="true"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="lg:col-span-6 relative h-[420px] sm:h-[480px] md:h-[540px] w-full flex items-center justify-start overflow-hidden cursor-ns-resize"
            style={{
              perspective: "1200px",
              perspectiveOrigin: "35% 50%",
            }}
          >
            <div
              className="relative w-full h-full flex items-center"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {CAPABILITIES.map((cap, i) => {
                // Exact 3D Cylindrical Geometry Formula from Billion Dollar Boy
                const offsetAngle =
                  (scrollProgress / SLIDE_COUNT) * TWO_PI;
                let angle = i * STEP_ANGLE - offsetAngle;

                // Normalize to [-PI, PI]
                angle = ((angle % TWO_PI) + TWO_PI) % TWO_PI;
                if (angle > Math.PI) angle -= TWO_PI;

                const ITEM_SPREAD = 0.44; // Spread constant
                const spreadAngle = angle * ITEM_SPREAD;
                const RADIUS = 210; // Cylinder radius in px

                // 3D coordinates on cylinder
                const translateY = RADIUS * Math.sin(spreadAngle);
                const translateZ = RADIUS * (Math.cos(spreadAngle) - 1);
                const rotateX = -spreadAngle * (180 / Math.PI);

                // Smooth opacity falloff
                const absAngle = Math.abs(angle);
                const N = Math.PI * 0.52;
                const Z = Math.PI * 0.88;
                const opacity =
                  absAngle < N
                    ? 1
                    : absAngle > Z
                    ? 0
                    : 1 - (absAngle - N) / (Z - N);

                const isActive = activeIndex === i;

                return (
                  <div
                    key={cap.id}
                    onClick={() => handleItemClick(i)}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="absolute left-0 cursor-pointer select-none transition-colors duration-150"
                    style={{
                      transform: `translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg)`,
                      transformOrigin: "left center",
                      opacity: Math.max(0.08, opacity),
                      zIndex: isActive ? 30 : 10,
                      willChange: "transform, opacity",
                    }}
                  >
                    <span
                      className={`block uppercase font-bold transition-colors duration-150 ${
                        isActive
                          ? "text-[#2B66FF]"
                          : "text-[#191919] hover:text-black"
                      }`}
                      style={{
                        fontFamily:
                          "'Futura ND Condensed', Impact, 'Arial Black', sans-serif",
                        fontSize: "clamp(3.8rem, 7.2vw, 7.5rem)",
                        lineHeight: 0.88,
                        letterSpacing: "-0.04em",
                        fontStyle: "italic", // Slanted italic typography exactly matching reference screenshots
                        fontWeight: 900,
                      }}
                    >
                      {cap.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Editorial Content (Crossfades dynamically as barrel rolls) */}
          <div className="lg:col-span-6 relative min-h-[180px] sm:min-h-[220px] flex items-center max-w-xl">
            {CAPABILITIES.map((cap, i) => {
              const isCurrent = activeIndex === i;
              return (
                <div
                  key={cap.id}
                  className={`w-full transition-all duration-300 ease-out ${
                    isCurrent
                      ? "opacity-100 translate-y-0 relative pointer-events-auto"
                      : "opacity-0 translate-y-3 absolute inset-0 pointer-events-none"
                  }`}
                >
                  <p
                    className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] text-[#191919] leading-[1.26] tracking-[-0.01em] relative pl-7 sm:pl-9"
                    style={{
                      fontFamily:
                        "'PP Editorial New', Georgia, 'Times New Roman', serif",
                      fontWeight: 200,
                    }}
                  >
                    {/* Signature Electric Blue Circle Bullet */}
                    <span
                      className="absolute left-0 top-[0.32em] w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#2B66FF]"
                      aria-hidden="true"
                    />
                    {cap.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Powered by Industry-Leading Technologies Section (Replaces old awards marquee) */}
        <div id="tech-stack" className="w-full mt-16 sm:mt-24 pt-10 sm:pt-14 border-t border-black/15 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-500 text-xs font-bold font-mono uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span>STACK</span>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Futura_ND_Condensed'] uppercase tracking-tight text-[#191919]">
                POWERED BY INDUSTRY-LEADING TECHNOLOGIES<span className="text-red-500">.</span>
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-md font-normal leading-relaxed">
              We use best-in-class platforms and tools to deliver smarter, faster and more impactful results.
            </p>
          </div>

          {/* Interactive Fully Responsive Native Tech Stack Grid */}
          <TechStackGrid />
        </div>
      </div>
    </section>
  );
}
