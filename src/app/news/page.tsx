import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Press | Industry Insights & Agency Recognitions",
  description:
    "The latest news, thought leadership, creator economy trends, and agency recognitions from MAD O MEDIA.",
  alternates: {
    canonical: "https://mad0media.com/news",
  },
  openGraph: {
    title: "News & Press | MAD O MEDIA",
    description:
      "The latest announcements, industry recognitions, and cultural commentaries from Mad O Media.",
    url: "https://mad0media.com/news",
  },
};

export default function NewsPage() {
  const newsItems = [
    {
      date: "October 2026",
      title: "Mad O Media wins Best Creative Digital Agency at the Industry Awards 2026",
      category: "Agency Recognition",
      link: "/what-we-do",
    },
    {
      date: "September 2026",
      title: "How Creator Commerce is overtaking traditional e-commerce on TikTok Shop",
      category: "Thought Leadership",
      link: "/faqs",
    },
    {
      date: "August 2026",
      title: "Mad O Media announces expanded creator production and performance marketing studios",
      category: "Agency Expansion",
      link: "/contact",
    },
  ];

  return (
    <div className="pt-36 pb-24 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto space-y-16">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl sm:text-6xl font-medium tracking-tight text-white">
          News & Press
        </h1>
        <p className="text-xl sm:text-2xl text-neutral-300 font-light leading-relaxed">
          The latest announcements, industry recognitions, and cultural commentaries from Mad O Media.
        </p>
      </div>

      <div className="divide-y divide-neutral-900 border-t border-b border-neutral-900">
        {newsItems.map((item, idx) => (
          <div key={idx} className="py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 group">
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-xs text-neutral-500 font-mono">
                <span>{item.date}</span>
                <span>•</span>
                <span className="text-[#FE3EB4]">{item.category}</span>
              </div>
              <h3 className="text-2xl font-medium text-white group-hover:text-[#FE3EB4] transition-colors">
                {item.title}
              </h3>
            </div>
            <Link
              href={item.link}
              className="text-sm font-medium text-neutral-400 group-hover:text-white transition-colors underline underline-offset-4"
            >
              Read story
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
