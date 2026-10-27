"use client";

import React, { useEffect, useRef, useState } from "react";

export function StatementBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-black py-12 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div ref={bannerRef} className="max-w-[1440px] mx-auto">
        <h2
          className={`text-[30px] sm:text-[46px] md:text-[54px] lg:text-[62px] font-normal text-white leading-[1.14] tracking-[-0.02em] font-['National-Regular',sans-serif] text-left select-none ${
            isVisible ? "animate-social-fade-in-left opacity-100" : "opacity-0 invisible"
          }`}
          style={{
            willChange: isVisible ? "transform, opacity" : "auto",
          }}
        >
          <span className="block">We build stronger connections</span>
          <span className="block">
            between <span className="text-[#FE3EB4]">people and brands</span>
          </span>
        </h2>
      </div>
    </section>
  );
}
