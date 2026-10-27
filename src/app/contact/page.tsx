import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Get In Touch | MAD O MEDIA",
  description:
    "Get in touch with Mad O Media. Reach our team directly via WhatsApp, phone (+91 88288 88130), or email (info@mad0media.com) to discuss your next creator or digital marketing campaign.",
  alternates: {
    canonical: "https://mad0media.com/contact",
  },
  openGraph: {
    title: "Contact Us | MAD O MEDIA",
    description:
      "Connect with our strategists and creator marketing team. Reach out via email, phone, or WhatsApp.",
    url: "https://mad0media.com/contact",
    images: [
      {
        url: "/images/mad-o-media-logo.png",
        width: 1200,
        height: 630,
        alt: "Contact MAD O MEDIA",
      },
    ],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
