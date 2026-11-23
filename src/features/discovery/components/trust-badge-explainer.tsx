import { Badge } from "@/components/ui/badge";

export function TrustBadgeExplainer() {
  const pillars = [
    {
      title: "Dish-First Verification",
      description:
        "Restaurants aren't universally good or bad. We verify individual signature dishes — so you know precisely what to order when you sit down.",
      icon: "🍲",
    },
    {
      title: "Zero Sponsored Placement",
      description:
        "No restaurant can pay to jump to the top of our recommendations or buy a verification badge. Organic authenticity only.",
      icon: "🛡️",
    },
    {
      title: "Independent Quality Audits",
      description:
        "Trained food auditors evaluate consistency, recipe heritage, hygiene, and ingredient integrity without announcing their presence.",
      icon: "🔍",
    },
  ];

  return (
    <section id="verification" className="py-16 bg-white border-b border-stone-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="verified" className="mb-2">
            The Trust Standard
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
            Why Traditional Food Apps Fail You
          </h2>
          <p className="mt-3 text-sm text-stone-600">
            Algorithmic star ratings are overwhelmed by fake reviews and ad spend. We are building an independent verification protocol tailored for authentic food culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl border border-stone-200 bg-stone-50/50 p-6 flex flex-col items-start"
            >
              <span className="text-3xl mb-4" role="img" aria-hidden="true">
                {pillar.icon}
              </span>
              <h3 className="font-bold text-stone-900 text-lg mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
