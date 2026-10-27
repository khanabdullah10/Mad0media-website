import type { Metadata } from "next";
import { WhatWeDoClient } from "./WhatWeDoClient";

export const metadata: Metadata = {
  title: "What We Do | Influencer Marketing & Digital Disciplines",
  description:
    "Explore Mad O Media's core disciplines: Influencer Marketing, Creator Media Planning, Social Strategy, Brand Channel Architecture, Paid Performance, and Web Development.",
  alternates: {
    canonical: "https://mad0media.com/what-we-do",
  },
  openGraph: {
    title: "What We Do | Disciplines & Services | MAD O MEDIA",
    description:
      "From lo-fi creator assets to high-production campaigns, see how Mad O Media scales brands across every platform.",
    url: "https://mad0media.com/what-we-do",
    images: [
      {
        url: "/images/mad-o-media-logo.png",
        width: 1200,
        height: 630,
        alt: "What We Do - MAD O MEDIA",
      },
    ],
  },
};

export default function WhatWeDoPage() {
  return <WhatWeDoClient />;
}
