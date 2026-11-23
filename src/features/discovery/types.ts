import type { GeoLocation, TrustStatus } from "@/types";

export type PriceRange = "₹" | "₹₹" | "₹₹₹" | "₹₹₹₹";

export interface SignatureDish {
  id: string;
  name: string;
  malayalamName?: string;
  description: string;
  category: "Biryani" | "Breads & Curries" | "Snacks & Sweets" | "Seafood" | "Beverages";
  bestPlaces: string[];
  samplePrice?: string;
  isVegetarian: boolean;
  trustStatus: TrustStatus;
  flavorProfile: string[];
}

export interface Restaurant {
  id: string;
  name: string;
  location: GeoLocation;
  popularDishes: string[];
  cuisineTypes: string[];
  priceRange: PriceRange;
  trustStatus: TrustStatus;
  yearEstablished?: number;
  isSamplePreview: boolean;
  sampleHighlight: string;
}

export interface VerificationTier {
  id: TrustStatus;
  label: string;
  description: string;
  badgeColor: string;
}
