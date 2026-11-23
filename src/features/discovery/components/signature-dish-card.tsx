import type { SignatureDish } from "../types";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SignatureDishCardProps {
  dish: SignatureDish;
}

export function SignatureDishCard({ dish }: SignatureDishCardProps) {
  return (
    <Card className="flex flex-col justify-between h-full">
      <CardHeader>
        <div className="flex items-center justify-between gap-2 mb-1">
          <Badge variant={dish.isVegetarian ? "verified" : "preview"}>
            {dish.isVegetarian ? "Pure Veg" : "Non-Veg"}
          </Badge>
          <Badge variant="default" className="text-[10px]">
            {dish.category}
          </Badge>
        </div>
        <CardTitle className="text-base font-bold text-stone-900">
          {dish.name}
        </CardTitle>
        {dish.malayalamName && (
          <span className="text-xs font-medium text-amber-800">
            {dish.malayalamName}
          </span>
        )}
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-xs text-stone-600 leading-relaxed">
          {dish.description}
        </p>

        <div className="flex flex-wrap gap-1">
          {dish.flavorProfile.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-stone-100 px-2 py-0.5 text-[11px] font-medium text-stone-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="rounded-lg bg-amber-50/60 p-2.5 text-xs border border-amber-100">
          <span className="font-semibold text-amber-900 block mb-1">
            Iconic Spots to Find This:
          </span>
          <span className="text-stone-700">
            {dish.bestPlaces.join(" • ")}
          </span>
        </div>
      </CardContent>

      <CardFooter>
        <span className="font-semibold text-stone-800">
          Typical: {dish.samplePrice ?? "Varies"}
        </span>
        <Badge variant="preview" className="text-[10px]">
          Sample Preview
        </Badge>
      </CardFooter>
    </Card>
  );
}
