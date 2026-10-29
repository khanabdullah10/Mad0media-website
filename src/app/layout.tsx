import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ClientLayout } from "@/components/ClientLayout";
import { OrganizationJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://mad0media.com"),
  title: {
    default: "MAD O MEDIA | Premier Influencer Marketing & Creative Digital Agency",
    template: "%s | MAD O MEDIA",
  },
  description:
    "MAD O MEDIA is a premier full-service influencer marketing, creator commerce, and digital growth agency. We scale enterprise brands through viral social strategies, creator partnerships, high-impact production, and performance marketing.",
  keywords: [
    "Influencer Marketing Agency",
    "Creator Marketing Agency",
    "Social Media Marketing Agency",
    "Performance Marketing Agency",
    "Creative Digital Agency",
    "Brand Strategy Agency",
    "Web Design and Development",
    "Creator Commerce",
    "TikTok Shop Marketing",
    "Influencer Campaigns India",
    "Global Influencer Agency",
    "Mad O Media",
    "mad0media",
  ],
  authors: [{ name: "MAD O MEDIA", url: "https://mad0media.com" }],
  creator: "MAD O MEDIA",
  publisher: "MAD O MEDIA",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://mad0media.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "MAD O MEDIA | Premier Influencer Marketing & Creative Digital Agency",
    description:
      "Strategy, creativity and digital experiences built to make your brand impossible to ignore. Connect with 130M+ creators and scale your full-funnel revenue.",
    url: "https://mad0media.com/",
    siteName: "MAD O MEDIA",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/mad-o-media-logo.png",
        width: 1200,
        height: 630,
        alt: "MAD O MEDIA - Premier Influencer Marketing & Creative Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAD O MEDIA | Premier Influencer Marketing & Creative Digital Agency",
    description:
      "We connect global brands with high-impact creators and drive measurable full-funnel growth.",
    images: ["/images/mad-o-media-logo.png"],
    creator: "@madomedia",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  category: "digital marketing",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-black text-white selection:bg-[#FE3EB4] selection:text-white">
        <OrganizationJsonLd />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
