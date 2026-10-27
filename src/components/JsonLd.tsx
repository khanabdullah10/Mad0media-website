import React from "react";
import { FAQS_DATA } from "@/data/faqsData";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": "https://mad0media.com/#organization",
        name: "MAD O MEDIA",
        alternateName: ["Mad O Media", "MOM Creative", "MADOMEDIA"],
        url: "https://mad0media.com",
        logo: {
          "@type": "ImageObject",
          "@id": "https://mad0media.com/#logo",
          url: "https://mad0media.com/images/mad-o-media-logo.png",
          caption: "MAD O MEDIA Logo",
        },
        image: "https://mad0media.com/images/mad-o-media-logo.png",
        description:
          "MAD O MEDIA is a premier full-service creator and digital growth agency specializing in influencer marketing, viral social strategies, high-performance campaigns, branding, and web development.",
        email: "info@mad0media.com",
        telephone: "+918828888130",
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+918828888130",
            contactType: "customer service",
            availableLanguage: ["English", "Hindi"],
            contactOption: "TollFree",
          },
          {
            "@type": "ContactPoint",
            telephone: "+919082903363",
            contactType: "sales",
            availableLanguage: ["English", "Hindi"],
          },
          {
            "@type": "ContactPoint",
            telephone: "+919769021534",
            contactType: "partnerships",
            availableLanguage: ["English", "Hindi"],
          },
        ],
        sameAs: [
          "https://www.instagram.com/mad.o.media?rpxt=ZnJmOW1mMzJuaDQy",
          "https://www.linkedin.com/company/madomedia/home/",
        ],
        areaServed: [
          { "@type": "Country", name: "India" },
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "United Arab Emirates" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Agency Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Influencer Marketing" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Strategy" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Branding & Identity" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Design & Development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Performance Marketing" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "ERP & CRM Solutions" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Software Solutions" } },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://mad0media.com/#website",
        url: "https://mad0media.com",
        name: "MAD O MEDIA",
        description: "Official website of MAD O MEDIA - Influencer Marketing & Digital Agency",
        publisher: {
          "@id": "https://mad0media.com/#organization",
        },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS_DATA.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answerHtml.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim(),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
