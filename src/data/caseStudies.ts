export interface CaseStudy {
  id: string;
  slug: string;
  client: string;
  title: string;
  subtitle: string;
  category: "Creator Marketing" | "Social-First Strategy" | "Viral Creative" | "Paid Performance";
  image: string;
  videoUrl?: string;
  stats: { label: string; value: string }[];
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  deliverables: string[];
  tags: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "sharkninja-cryoglow",
    slug: "making-sharkninjas-cryoglow-led-mask-a-skincare-must-have",
    client: "SharkNinja",
    title: "CryoGlow: The Skincare Revolution",
    subtitle: "Making SharkNinja's CryoGlow LED mask a skincare must-have with our biggest-ever creator campaign.",
    category: "Creator Marketing",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Total Views", value: "48M+" },
      { label: "Creator Reach", value: "120+" },
      { label: "Sales Lift", value: "+310%" },
      { label: "Viral TikToks", value: "450+" },
    ],
    overview: "SharkNinja expanded beyond household technology into high-tech beauty with the CryoGlow LED mask. They needed to establish credibility within the hyper-critical beauty creator community.",
    challenge: "Overcoming consumer skepticism in a saturated beauty gadget market while driving direct e-commerce velocity within the first 30 days of launch.",
    solution: "We deployed a tiered creator network across TikTok and Instagram: from dermatologist authorities explaining the science to top-tier aesthetic influencers demonstrating real-time chill benefits.",
    results: [
      "Generated 48M+ organic and paid video views within the initial 4-week window",
      "CryoGlow sold out twice on launch week across UK retail and direct-to-consumer",
      "Ranked as the #1 trending beauty gadget on TikTok Shop for two consecutive weeks",
    ],
    deliverables: ["Creator Strategy & Casting", "Content Production", "Paid Whitelisting", "Live TikTok Shopping"],
    tags: ["TikTok", "Influencer", "E-Commerce", "Beauty"],
  },
  {
    id: "holland-barrett",
    slug: "holland-and-barrett-from-checkout-to-checking-in",
    client: "Holland & Barrett",
    title: "From Checkout to Checking In",
    subtitle: "Re-imagining a 150-year-old high-street wellness icon for Gen Z & Millennials on social.",
    category: "Social-First Strategy",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Social Engagement", value: "+185%" },
      { label: "New Gen Z Followers", value: "320K" },
      { label: "Brand Sentiment", value: "94% Positive" },
      { label: "Store Footfall Lift", value: "+18%" },
    ],
    overview: "Holland & Barrett needed to transition from being seen as a legacy supplement store to an active, modern daily wellness partner.",
    challenge: "Wellness advice on TikTok is riddled with misinformation. Holland & Barrett had authority, but needed social-first tone of voice and cultural resonance.",
    solution: "We launched an always-on wellness content engine: digestible health hacks, debunking viral trends with certified nutritionists, and relatable micro-content.",
    results: [
      "Shifted brand affinity among 18-34s by 42% in 6 months",
      "Doubled social-driven online basket additions",
      "Shortlisted for Best Brand Re-invention at the Social Media Awards",
    ],
    deliverables: ["Tone of Voice & Rebrand", "Always-on Content Engine", "Community Management", "Influencer Hub"],
    tags: ["Wellness", "Strategy", "Community", "Rebrand"],
  },
  {
    id: "kfc-world-cup",
    slug: "case-study-kfc-world-cup-2022",
    client: "KFC",
    title: "World Cup: The Finger Lickin' Rivalry",
    subtitle: "Owning the cultural banter and halftime feasts during football's greatest spectacle.",
    category: "Viral Creative",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Impressions", value: "85M" },
      { label: "Trending Moments", value: "14x" },
      { label: "Matchday Orders", value: "+44%" },
      { label: "Share of Voice", value: "#1 QSR" },
    ],
    overview: "During the World Cup, non-official sponsor brands have to out-think, not out-spend, the legacy sponsors. KFC needed to dominate social timelines during match days.",
    challenge: "Strict FIFA ambush marketing regulations meant KFC couldn't use official trademarks, yet needed to feel like the official meal of tournament drama.",
    solution: "A live reactive war room. We produced memes, real-time Twitter/X threads, and rapid TikTok shorts reacting to VAR controversies, extra-time tension, and victory celebrations within 90 seconds of live broadcast events.",
    results: [
      "Captured the #1 share of voice among fast-food brands throughout the entire tournament",
      "Over 85 million organic social impressions without spending on official sponsorship rights",
      "Set an all-time record for matchday delivery app orders",
    ],
    deliverables: ["Reactive Social War Room", "Meme Engine", "Dynamic Paid Social", "Influencer Watch Parties"],
    tags: ["Reactive", "Culture", "Sports", "Fast Food"],
  },
  {
    id: "tiktok-music",
    slug: "case-study-music-on-tiktok",
    client: "TikTok US",
    title: "Music on TikTok: Charting Culture",
    subtitle: "Empowering artists and creators to turn viral sounds into Billboard chart-topping hits.",
    category: "Creator Marketing",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Sound Creations", value: "2.4M" },
      { label: "Billboard Top 100 Entries", value: "8 Tracks" },
      { label: "Global Reach", value: "340M+" },
      { label: "Artist Growth", value: "+640%" },
    ],
    overview: "TikTok has evolved into the music industry's primary discovery engine. TikTok US partnered with Mad O Media to architect creator-led sound campaigns.",
    challenge: "Organic virality can't be forced; listeners reject canned sponsored dances. Campaigns need natural hooks that inspire user-generated audio trends.",
    solution: "We seeded emerging music tracks across disparate subcultures — fitness, gaming, culinary, and comedy — allowing each niche to invent their own choreography and contextual trend.",
    results: [
      "Over 2.4 million distinct user-generated videos created using featured audio tracks",
      "Propelled 8 indie singles into the Spotify Viral 50 and Billboard Top 100",
      "Cemented TikTok's reputation as the definitive launching pad for global music careers",
    ],
    deliverables: ["Audio Seeding Strategy", "Subculture Creator Mapping", "Viral Trend Architecture", "Analytics & Tracking"],
    tags: ["Music", "TikTok", "Virality", "Culture"],
  },
  {
    id: "loveholidays-getaway",
    slug: "loveholidays-the-getaway",
    client: "loveholidays",
    title: "The Getaway: Escaping Boxing Day Burnout",
    subtitle: "Turning holiday season fatigue into loveholidays' top-performing influencer campaign for bookings.",
    category: "Paid Performance",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Booking Conversions", value: "+240%" },
      { label: "Return on Ad Spend (ROAS)", value: "6.8x" },
      { label: "Total Bookings", value: "18,500+" },
      { label: "Influencer Whitelist ROI", value: "+82%" },
    ],
    overview: "The week between Christmas and New Year is prime booking season for summer holidays. loveholidays wanted to cut through aggressive discount advertising with authentic travel inspiration.",
    challenge: "Travelers are overwhelmed by cookie-cutter price drops. We needed emotional appeal grounded in genuine travel relief.",
    solution: "Creators shared raw, honest 'Burnout Confessions' contrasted with dreamy clips of their favorite budget-friendly European escapes, backed by whitelisted performance ads.",
    results: [
      "Became loveholidays' single most profitable campaign in company history",
      "Achieved a 6.8x verified return on ad spend across Meta and TikTok ads",
      "Generated over 18,500 direct holiday bookings",
    ],
    deliverables: ["Paid Influencer Whitelisting", "High-Intent Creative", "Performance Funnel Optimization", "UGC Video"],
    tags: ["Travel", "Performance", "ROAS", "Influencer"],
  },
  {
    id: "primark-denim",
    slug: "making-denim-feel-personal-for-primark",
    client: "Primark",
    title: "In My Denim: Real Fits for Real Lives",
    subtitle: "Demonstrating quality, inclusivity, and affordability through micro-creators.",
    category: "Viral Creative",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Organic Engagements", value: "3.2M" },
      { label: "UGC Submissions", value: "14K" },
      { label: "In-Store Sell-Through", value: "+28%" },
      { label: "Positive Fit Sentiment", value: "96%" },
    ],
    overview: "Primark's denim collection offers high durability at unbeatable prices, but struggled against premium denim brand perception.",
    challenge: "Showcasing fit inclusivity and everyday wear without feeling like a traditional fashion commercial.",
    solution: "We tapped 80 diverse everyday creators across the UK to style the same denim pairs for their real routines: school runs, studio shifts, night outs, and casual coffee runs.",
    results: [
      "Sparked an organic UGC movement with over 14,000 customers posting their fits under #InMyDenim",
      "Increased denim line sell-through by 28% across flagship UK and European stores",
      "Won Best Multi-Platform Fashion Campaign at the Drum Marketing Awards",
    ],
    deliverables: ["Creator Styling", "UGC Activation", "In-Store Integration", "High-Energy Micro-Content"],
    tags: ["Fashion", "UGC", "Retail", "Inclusivity"],
  },
];
