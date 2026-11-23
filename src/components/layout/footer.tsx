import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-stone-200 bg-stone-50 text-stone-600">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-amber-600 text-white font-black text-sm">
                F
              </span>
              <span className="font-bold text-stone-900">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed">
              {siteConfig.description}
            </p>
            <p className="mt-3 text-xs font-semibold text-amber-800">
              Initial Launch: {siteConfig.launchCity.name}, {siteConfig.launchCity.state}, {siteConfig.launchCity.country}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-stone-900 text-sm mb-3">
              Culinary Heritage Focus
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-500">
              {siteConfig.launchCity.knownFor.map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <span className="text-amber-600">•</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-stone-900 text-sm mb-3">
              Independent Verification Principle
            </h4>
            <p className="text-xs text-stone-500 leading-relaxed mb-3">
              We operate strictly without paid listing bias, sponsored star ratings, or algorithmic favoritism. Every signature dish is earmarked for independent validation.
            </p>
            <div className="rounded-md border border-amber-200 bg-amber-50/70 p-3 text-[11px] text-amber-900">
              <strong>Preview Notice:</strong> All restaurant listings and dishes displayed on this version are sample placeholders for development validation.
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-stone-200 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-3">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p>Kozhikode, Kerala, India — Architecture Baseline v0.1.0</p>
        </div>
      </div>
    </footer>
  );
}
