import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/60 via-stone-50 to-white py-16 sm:py-24 border-b border-stone-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <Badge variant="heritage" className="text-xs">
              📍 {siteConfig.launchCity.name} ({siteConfig.launchCity.alternateName}), {siteConfig.launchCity.state}
            </Badge>
            <Badge variant="verified" className="text-xs">
              Independent Food Audit
            </Badge>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-5xl sm:leading-tight">
            Discover Real Food. <br />
            <span className="text-amber-600">Independently Verified Dishes</span> in Kozhikode.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-stone-600 leading-relaxed">
            Skip sponsored listicles and unverified star ratings. Explore the authentic culinary capitals of Malabar — from legendary Khaima rice Dum Biryanis to historic halwa guilds.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#signature-dishes">
              <Button size="lg" variant="primary">
                Explore Signature Dishes
              </Button>
            </a>
            <a href="#discovery">
              <Button size="lg" variant="outline">
                Browse Iconic Spots
              </Button>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 text-xs text-stone-500">
            <span className="font-semibold text-stone-700">Popular Searches:</span>
            <span className="rounded-full bg-stone-100 px-2.5 py-1 text-stone-600">Kozhikodan Dum Biryani</span>
            <span className="rounded-full bg-stone-100 px-2.5 py-1 text-stone-600">Kozhikode Halwa</span>
            <span className="rounded-full bg-stone-100 px-2.5 py-1 text-stone-600">Erachi Pathiri</span>
            <span className="rounded-full bg-stone-100 px-2.5 py-1 text-stone-600">Sulaimani Tea</span>
          </div>
        </div>
      </div>
    </section>
  );
}
