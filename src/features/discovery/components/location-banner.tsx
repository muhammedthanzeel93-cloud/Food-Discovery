import { Badge } from "@/components/ui/badge";

export function LocationBanner() {
  const hubs = [
    { name: "S.M. Street (Sweet Meat Street)", note: "Historic hub for halwa makers & legacy bakeries" },
    { name: "Kozhikode Beach Promenade", note: "Arikadukka (mussels), pickled fruits & ocean snacks" },
    { name: "Mananchira Square", note: "Traditional Malabar tea cafes & heritage lunch homes" },
    { name: "CH Flyover / Kannur Road", note: "Culinary cluster for classic Malabar dum biryanis" },
  ];

  return (
    <section id="heritage" className="py-12 bg-stone-100 border-b border-stone-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-xs border border-stone-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="accent">City Profile</Badge>
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                  Phase 1 Launch Ground
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                Why Kozhikode (Calicut)?
              </h2>
              <p className="mt-1 text-sm text-stone-600 max-w-2xl">
                Kozhikode holds a celebrated status as Kerala&apos;s culinary capital — UNESCO City of Literature with centuries-old maritime spice trade connections. Authentic local food here is a cultural anchor, not a commercial commodity.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end justify-center shrink-0">
              <span className="text-2xl font-black text-amber-600">800+ Years</span>
              <span className="text-xs text-stone-500">Culinary Trade Heritage</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {hubs.map((hub) => (
              <div
                key={hub.name}
                className="rounded-lg bg-stone-50 p-4 border border-stone-200/70"
              >
                <h3 className="font-bold text-stone-800 text-sm">{hub.name}</h3>
                <p className="mt-1 text-xs text-stone-500 leading-normal">{hub.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
