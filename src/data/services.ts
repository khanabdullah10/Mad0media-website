export interface ServiceOffering {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  deliverables: string[];
  color: string;
}

export const SERVICES: ServiceOffering[] = [
  {
    id: "full-service-social",
    number: "01",
    title: "Full-Service Social",
    tagline: "Strategy, Production, Creator Marketing, and Always-On Community in one unified engine.",
    description: "Our flagship end-to-end partnership. We embed with your brand team to execute everything from daily reactive timeline memes to blockbuster multi-million dollar global campaigns.",
    capabilities: [
      "Always-On Creative & Video Production",
      "Full-Funnel Paid Social Media Buying",
      "24/7 Community Management & Reactive Banter",
      "Brand Guardrails & Crisis Response Protocols",
      "Advanced Social Intelligence & Competitor Auditing",
    ],
    deliverables: [
      "Monthly Content Roadmaps (60+ assets/month)",
      "Dedicated Creative Director & Community Lead",
      "Real-time Analytics Dashboard & Attribution",
      "Direct Line Reactive Slack / Teams Integration",
    ],
    color: "from-pink-500/20 to-purple-500/10",
  },
  {
    id: "social-first-strategy",
    number: "02",
    title: "Social-First Strategy",
    tagline: "Built for algorithms, designed for humans. We define how brands win attention.",
    description: "Legacy advertising agencies build TV commercials and cut them into 9:16 vertical videos. We flip the script: we build ideas native to feeds, comment sections, and FYPs that travel everywhere.",
    capabilities: [
      "Platform-Specific Content Architecture (TikTok, Reels, Shorts, Threads)",
      "Subculture & Trend Forecasting",
      "Channel Role & Persona Mapping",
      "Algorithm Reverse-Engineering & Hook Optimization",
      "Organic-to-Paid Whitelist Strategy",
    ],
    deliverables: [
      "The Social-First Master Playbook",
      "Quarterly Trend Reports & Creative Briefs",
      "Audience Whitespace Identification",
      "Format Testing Matrix & Benchmarks",
    ],
    color: "from-emerald-500/20 to-teal-500/10",
  },
  {
    id: "creator-influencer-engine",
    number: "03",
    title: "Creator & Influencer Engine",
    tagline: "Authentic storytelling at scale. From hyper-niche tastemakers to mainstream superstars.",
    description: "We don't do sterile sponsored product placements that audiences scroll past. We collaborate with creators who genuinely love what you make, letting them speak in their voice.",
    capabilities: [
      "Proprietary Creator Discovery & Authenticity Vetting",
      "Usage Rights & Talent Contract Negotiation",
      "Creative Briefing & Whitelist Advertising Rights",
      "TikTok Shop & Creator Affiliate Infrastructure",
      "Creator Ambassador Programs & Event Activations",
    ],
    deliverables: [
      "Vetted Creator Shortlists & Scorecards",
      "Full Legal Contracting & Rights Management",
      "Raw Footage Asset Library for Paid Retargeting",
      "Sales & ROI Attribution Tracking",
    ],
    color: "from-amber-500/20 to-yellow-500/10",
  },
];
