export interface OfficeHub {
  city: string;
  country: string;
  timezone: string;
  address: string;
  role: string;
  contactEmail: string;
  image: string;
  stats: string;
}

export const HUBS: OfficeHub[] = [
  {
    city: "Manchester",
    country: "United Kingdom",
    timezone: "Europe/London",
    address: "Bruntwood Works, 117-119 Portland St, Manchester M1 6ED",
    role: "Global Headquarters & Creative Studio",
    contactEmail: "manchester@madomedia.com",
    image: "https://images.unsplash.com/photo-1543832923-44667a44c804?auto=format&fit=crop&w=800&q=80",
    stats: "HQ • 120+ Creators & Strategists",
  },
  {
    city: "London",
    country: "United Kingdom",
    timezone: "Europe/London",
    address: "100 Avebury Ave, Soho, London W1D 4HG",
    role: "Media Buying & Client Leadership",
    contactEmail: "london@madomedia.com",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    stats: "Capital Hub • 80+ Media & Brand Leads",
  },
  {
    city: "New York",
    country: "United States",
    timezone: "America/New_York",
    address: "419 Park Ave S, 2nd Floor, New York, NY 10016",
    role: "US Market & Entertainment Partnerships",
    contactEmail: "newyork@madomedia.com",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80",
    stats: "US Hub • 60+ Creator Agents",
  },
];
