import { HeroSection } from "@/features/discovery/components/hero-section";
import { LocationBanner } from "@/features/discovery/components/location-banner";
import { SignatureDishCard } from "@/features/discovery/components/signature-dish-card";
import { RestaurantCard } from "@/features/discovery/components/restaurant-card";
import { TrustBadgeExplainer } from "@/features/discovery/components/trust-badge-explainer";
import {
  MOCK_SIGNATURE_DISHES,
  MOCK_RESTAURANTS,
  SAMPLE_DISCLAIMER_NOTICE,
} from "@/features/discovery/data/mock-discovery";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* City & Culinary Heritage Positioning */}
      <LocationBanner />

      {/* Signature Dish Discovery Section */}
      <section id="signature-dishes" className="py-16 bg-white border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="verified">Dish-Centric Discovery</Badge>
                <span className="text-xs text-stone-500 font-medium">
                  Verified Heritage Recipes
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                Signature Kozhikode Dishes
              </h2>
              <p className="mt-1 text-sm text-stone-600 max-w-xl">
                Discover what makes Kozhikode world-famous. Each dish has distinct regional nuances, secret masala proportions, and designated landmark venues.
              </p>
            </div>
            <div className="text-xs text-stone-400">
              Showing 5 curated signature staples
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_SIGNATURE_DISHES.map((dish) => (
              <SignatureDishCard key={dish.id} dish={dish} />
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Discovery Section */}
      <section id="discovery" className="py-16 bg-stone-50 border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="heritage">Iconic Food Spots</Badge>
                <span className="text-xs text-stone-500 font-medium">
                  Local Food Institutions
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                Landmark Food Venues in Kozhikode
              </h2>
              <p className="mt-1 text-sm text-stone-600 max-w-xl">
                Institutions that have shaped Kozhikode&apos;s culinary identity across generations. No sponsored promotions; strictly curated for authenticity.
              </p>
            </div>
            <div className="text-xs text-stone-400">
              Showing 4 historic culinary pillars
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MOCK_RESTAURANTS.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>

          {/* Explicit Sample Disclaimer Callout */}
          <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs text-amber-900">
            <span className="font-bold">Transparency Guarantee:</span> {SAMPLE_DISCLAIMER_NOTICE}
          </div>
        </div>
      </section>

      {/* Trust & Independent Verification Methodology */}
      <TrustBadgeExplainer />
    </div>
  );
}
