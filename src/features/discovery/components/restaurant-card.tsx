import type { Restaurant } from "../types";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <Card className="flex flex-col justify-between h-full">
      <CardHeader>
        <div className="flex items-center justify-between gap-2 mb-1">
          <Badge variant="heritage">
            Est. {restaurant.yearEstablished ?? "Heritage"}
          </Badge>
          <span className="text-xs font-bold text-stone-700">
            {restaurant.priceRange}
          </span>
        </div>
        <CardTitle className="text-lg font-bold text-stone-900">
          {restaurant.name}
        </CardTitle>
        <p className="text-xs text-stone-500">
          📍 {restaurant.location.address}, {restaurant.location.city}
        </p>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-xs text-stone-600 italic">
          &ldquo;{restaurant.sampleHighlight}&rdquo;
        </p>

        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-1">
            Signature Specialties:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {restaurant.popularDishes.map((dish) => (
              <span
                key={dish}
                className="rounded-full bg-amber-50 border border-amber-200/60 px-2 py-0.5 text-xs font-medium text-amber-900"
              >
                {dish}
              </span>
            ))}
          </div>
        </div>

        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-1">
            Cuisine:
          </span>
          <p className="text-xs text-stone-600">
            {restaurant.cuisineTypes.join(", ")}
          </p>
        </div>
      </CardContent>

      <CardFooter>
        <span className="text-[11px] text-stone-400">
          Landmark: {restaurant.location.landmark}
        </span>
        <Badge variant="preview" className="text-[10px]">
          Sample Listing
        </Badge>
      </CardFooter>
    </Card>
  );
}
