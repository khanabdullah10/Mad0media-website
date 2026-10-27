import type { Metadata } from "next";
import { WhoWeAreClient } from "./WhoWeAreClient";

export const metadata: Metadata = {
  title: "Who We Are | About MAD O MEDIA",
  description:
    "We are the creators, strategists, and culture architects rewriting the rules of brand attention. Learn about Mad O Media's DNA, leadership, and brand philosophy.",
  alternates: {
    canonical: "https://mad0media.com/who-we-are",
  },
  openGraph: {
    title: "Who We Are | About MAD O MEDIA",
    description:
      "We make brands loud enough to be heard, sharp enough to be remembered, and bold enough to be talked about.",
    url: "https://mad0media.com/who-we-are",
    images: [
      {
        url: "/images/mad-o-media-logo.png",
        width: 1200,
        height: 630,
        alt: "About MAD O MEDIA",
      },
    ],
  },
};

export default function WhoWeArePage() {
  return <WhoWeAreClient />;
}
