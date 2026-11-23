/**
 * Food Discovery Platform — Site Configuration
 * Focused on initial launch in Kozhikode (Calicut), Kerala, India.
 */
export const siteConfig = {
  name: "Food Discovery Platform",
  shortName: "FoodDiscovery",
  description:
    "Discover authentic restaurants, trustworthy local food spots, and independently verified signature dishes in Kozhikode, Kerala.",
  tagline: "Authentic Food. Independently Verified.",
  launchCity: {
    name: "Kozhikode",
    alternateName: "Calicut",
    state: "Kerala",
    country: "India",
    coordinates: {
      latitude: 11.2588,
      longitude: 75.7804,
    },
    knownFor: [
      "Kozhikodan Biryani",
      "Malabar Halwa",
      "Erachi Pathiri",
      "Banana Chips",
      "Sulaimani Tea",
      "Kallummakkaya (Mussels)",
      "Malabar Parotta & Beef Roast",
    ],
  },
  navigation: [
    { label: "Discover", href: "#discovery" },
    { label: "Signature Dishes", href: "#signature-dishes" },
    { label: "Kozhikode Heritage", href: "#heritage" },
    { label: "Verification Standard", href: "#verification" },
  ],
  links: {
    github: "https://github.com",
    documentation: "/docs",
  },
  disclaimer:
    "Preview Notice: All listings and dish recommendations displayed currently are sample preview data for architectural demonstration. Genuine independent verification audits will commence prior to public community rollout.",
} as const;

export type SiteConfig = typeof siteConfig;
