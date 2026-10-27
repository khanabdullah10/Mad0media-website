import React from "react";
import Link from "next/link";

export default function CultureAndCareersPage() {
  return (
    <div className="pt-36 pb-24 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto space-y-16">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl sm:text-6xl font-medium tracking-tight text-white">
          Culture & Careers
        </h1>
        <p className="text-xl sm:text-2xl text-neutral-300 font-light leading-relaxed">
          We’re always looking for brilliant thinkers, makers, and culture creators to join our studios in Manchester, London, and New York.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-neutral-900">
        <div className="space-y-4 p-8 rounded-2xl bg-neutral-950 border border-neutral-900">
          <span className="text-xs uppercase tracking-wider text-[#FE3EB4] font-semibold">Manchester HQ</span>
          <h3 className="text-2xl font-medium text-white">Creative & Strategy</h3>
          <p className="text-sm text-neutral-400">
            Home to our video production suites, creator casting desk, and social listening labs.
          </p>
        </div>

        <div className="space-y-4 p-8 rounded-2xl bg-neutral-950 border border-neutral-900">
          <span className="text-xs uppercase tracking-wider text-[#FE3EB4] font-semibold">London Soho</span>
          <h3 className="text-2xl font-medium text-white">Client Leadership & Media</h3>
          <p className="text-sm text-neutral-400">
            Directing global brand accounts, paid media strategy, and partner platforms.
          </p>
        </div>

        <div className="space-y-4 p-8 rounded-2xl bg-neutral-950 border border-neutral-900">
          <span className="text-xs uppercase tracking-wider text-[#FE3EB4] font-semibold">New York</span>
          <h3 className="text-2xl font-medium text-white">US Market & Creators</h3>
          <p className="text-sm text-neutral-400">
            Scaling social commerce, TikTok Shop integrations, and entertainment talent.
          </p>
        </div>
      </div>

      <div className="pt-12">
        <Link
          href="/contact"
          className="inline-block px-8 py-3.5 rounded-full bg-white text-black text-[15px] font-medium hover:bg-[#FE3EB4] hover:text-white transition-all duration-300"
        >
          View Open Opportunities
        </Link>
      </div>
    </div>
  );
}
