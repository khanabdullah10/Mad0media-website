"use client";

import React, { useState } from "react";
import { WhatWeDoScrollExperience } from "@/components/WhatWeDoScrollExperience";
import { ContactDrawer } from "@/components/ContactDrawer";
import { Marquee } from "@/components/Marquee";

export function WhatWeDoClient() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="w-full min-h-screen bg-[#05070a]">
      {/* Scroll-Driven Visual Capabilities Experience */}
      <WhatWeDoScrollExperience onOpenContact={() => setIsContactOpen(true)} />

      {/* Marquee Banner */}
      <section className="py-12 border-t border-b border-neutral-900 bg-[#070b12]">
        <Marquee />
      </section>

      {/* Slide-out Contact Drawer */}
      <ContactDrawer
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </main>
  );
}
