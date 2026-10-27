"use client";

import React from "react";

export function MadOMediaChain() {
  return (
    <section className="w-full bg-black py-8 sm:py-12 overflow-hidden flex justify-center items-center select-none">
      <div className="w-full flex items-center justify-center">
        <picture className="w-full flex justify-center">
          <source srcSet="/madomedia_chain.webp" type="image/webp" />
          <img
            src="/madomedia_chain.gif"
            alt="Mad O Media Chain Loop"
            className="w-full h-auto object-cover max-h-[300px] min-h-[140px] pointer-events-none select-none"
            loading="lazy"
          />
        </picture>
      </div>
    </section>
  );
}

