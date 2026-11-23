import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-600 text-white font-black text-lg shadow-sm group-hover:bg-amber-700 transition-colors">
              F
            </span>
            <div className="flex flex-col">
              <span className="font-extrabold text-stone-900 tracking-tight leading-tight">
                {siteConfig.shortName}
              </span>
              <span className="text-[10px] uppercase font-bold text-amber-700 tracking-wider">
                {siteConfig.launchCity.name} Hub
              </span>
            </div>
          </Link>
          <Badge variant="heritage" className="hidden sm:inline-flex ml-2">
            📍 Kerala Launch
          </Badge>
        </div>

        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600"
        >
          {siteConfig.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-amber-700 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Badge variant="preview" className="text-[11px]">
            Preview Architecture
          </Badge>
        </div>
      </div>
    </header>
  );
}
