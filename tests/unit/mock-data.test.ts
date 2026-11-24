import { describe, it, expect } from "vitest";
import {
  MOCK_SIGNATURE_DISHES,
  MOCK_RESTAURANTS,
  SAMPLE_DISCLAIMER_NOTICE,
} from "@/features/discovery/data/mock-discovery";

describe("Mock Data Schema & Integrity", () => {
  it("contains valid signature dishes with required fields", () => {
    expect(MOCK_SIGNATURE_DISHES.length).toBeGreaterThan(0);

    MOCK_SIGNATURE_DISHES.forEach((dish) => {
      expect(dish.id).toBeTruthy();
      expect(dish.name).toBeTruthy();
      expect(dish.description).toBeTruthy();
      expect(dish.category).toBeTruthy();
      expect(dish.flavorProfile.length).toBeGreaterThan(0);
      expect(dish.bestPlaces.length).toBeGreaterThan(0);
    });
  });

  it("contains valid restaurants with location coordinates and sample preview flag", () => {
    expect(MOCK_RESTAURANTS.length).toBeGreaterThan(0);

    MOCK_RESTAURANTS.forEach((restaurant) => {
      expect(restaurant.id).toBeTruthy();
      expect(restaurant.name).toBeTruthy();
      expect(restaurant.isSamplePreview).toBe(true);
      expect(restaurant.location.city).toBe("Kozhikode");
      expect(restaurant.location.latitude).toBeGreaterThan(0);
      expect(restaurant.location.longitude).toBeGreaterThan(0);
      expect(restaurant.popularDishes.length).toBeGreaterThan(0);
    });
  });

  it("has a clear and non-empty sample transparency disclaimer", () => {
    expect(SAMPLE_DISCLAIMER_NOTICE).toBeTruthy();
    expect(SAMPLE_DISCLAIMER_NOTICE).toContain("Sample Preview");
  });
});
