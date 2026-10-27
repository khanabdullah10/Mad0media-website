export interface PodcastEpisode {
  id: string;
  title: string;
  guest: string;
  role: string;
  company: string;
  duration: string;
  date: string;
  summary: string;
  keyTakeaways: string[];
  audioUrl?: string;
  spotifyUrl: string;
  appleUrl: string;
  coverImage: string;
  category: "Strategy" | "Creators" | "Culture" | "E-Commerce";
}

export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    id: "universal-music-group",
    title: "Going Viral vs. Building an Enduring Fanbase",
    guest: "Danny Ingham",
    role: "Director of Creator Marketing",
    company: "Universal Music Group",
    duration: "42 min",
    date: "October 2026",
    summary: "Danny breaks down why algorithmic 15-second TikTok virality is meaningless without a conversion funnel into streaming, tour ticket sales, and lifelong artist loyalty.",
    keyTakeaways: [
      "The algorithm tests music like software: hooks in the first 2 seconds dictate playlisting",
      "Artists need creator ecosystems, not just standalone accounts",
      "How to convert casual meme listeners into paying superfans",
    ],
    spotifyUrl: "https://open.spotify.com/show/socialminds",
    appleUrl: "https://podcasts.apple.com/podcast/socialminds",
    coverImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    category: "Culture",
  },
  {
    id: "mob-kitchen",
    title: "Building a Food Brand That Survives the Algorithm",
    guest: "Ayala Daly",
    role: "Social Strategy Director",
    company: "MOB Kitchen",
    duration: "38 min",
    date: "September 2026",
    summary: "Ayala reveals how MOB scaled from a university flat camera setup to one of the UK's most beloved digital food networks with 3M+ active foodies.",
    keyTakeaways: [
      "Why 'relatability' beats production value every single time on Reels & Shorts",
      "Building a recipe publishing empire around community comments",
      "The exact workflow behind 12 fresh video recipes a week",
    ],
    spotifyUrl: "https://open.spotify.com/show/socialminds",
    appleUrl: "https://podcasts.apple.com/podcast/socialminds",
    coverImage: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80",
    category: "Strategy",
  },
  {
    id: "essity-creator-age",
    title: "Breaking the Mould: Cultural Credibility in Taboo Categories",
    guest: "Luciana de Azevedo Lara",
    role: "Global Head of Brand Communications",
    company: "Essity (Bodyform / Libresse)",
    duration: "46 min",
    date: "August 2026",
    summary: "How one of the world's largest hygiene companies turned sensitive, historically taboo health topics into award-winning, viral creative discussions.",
    keyTakeaways: [
      "Why shame-busting creative earns 10x higher organic engagement",
      "Navigating platform censorship guidelines while being unapologetically real",
      "Working with creators to destigmatize everyday health realities",
    ],
    spotifyUrl: "https://open.spotify.com/show/socialminds",
    appleUrl: "https://podcasts.apple.com/podcast/socialminds",
    coverImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    category: "Creators",
  },
  {
    id: "canva-visual-economy",
    title: "SocialMinds Live x Canva: The Speed of Visual Culture",
    guest: "Rachel O'Connell",
    role: "VP of Brand & Creative",
    company: "Canva",
    duration: "51 min",
    date: "July 2026",
    summary: "Recorded live with 500 agency leaders: How brands can produce at the speed of culture without burning out creative teams or diluting brand guidelines.",
    keyTakeaways: [
      "Decentralizing content creation to local and agile social teams",
      "AI tools that empower creators without replacing creative instinct",
      "The metrics modern CMOs actually care about on social",
    ],
    spotifyUrl: "https://open.spotify.com/show/socialminds",
    appleUrl: "https://podcasts.apple.com/podcast/socialminds",
    coverImage: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80",
    category: "Strategy",
  },
];
