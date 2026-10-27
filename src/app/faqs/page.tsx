import type { Metadata } from "next";
import { FAQsClient } from "./FAQsClient";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | Creator Marketing & Partnerships",
  description:
    "Find answers to common questions about working with Mad O Media, our end-to-end influencer marketing services, global creator network, vetting processes, brand safety, and full-funnel measurement.",
  alternates: {
    canonical: "https://mad0media.com/faqs",
  },
  openGraph: {
    title: "Frequently Asked Questions (FAQ) | MAD O MEDIA",
    description:
      "Everything you need to know about partnering with Mad O Media for creator marketing, global activations, and full-funnel social campaigns.",
    url: "https://mad0media.com/faqs",
    images: [
      {
        url: "/images/mad-o-media-logo.png",
        width: 1200,
        height: 630,
        alt: "MAD O MEDIA FAQs",
      },
    ],
  },
};

export default function FAQsPage() {
  return <FAQsClient />;
}
