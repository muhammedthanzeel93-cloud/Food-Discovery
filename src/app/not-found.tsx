import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 text-center">
      <span className="rounded-full bg-amber-100 p-4 text-3xl mb-4" role="img" aria-label="Bowl">
        🍲
      </span>
      <h1 className="text-3xl font-extrabold text-stone-900">404 — Dish Not Found</h1>
      <p className="mt-2 text-stone-600 max-w-md text-sm">
        We couldn&apos;t find the food destination or culinary page you were looking for in Kozhikode.
      </p>
      <div className="mt-6">
        <Link href="/">
          <Button variant="primary">Return to Discovery Home</Button>
        </Link>
      </div>
    </div>
  );
}
