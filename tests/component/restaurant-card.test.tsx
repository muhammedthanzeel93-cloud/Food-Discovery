import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { RestaurantCard } from "@/features/discovery/components/restaurant-card";
import { MOCK_RESTAURANTS } from "@/features/discovery/data/mock-discovery";

describe("RestaurantCard Component", () => {
  const sampleRestaurant = MOCK_RESTAURANTS[0];

  it("renders restaurant name, landmark address, and established badge", () => {
    render(<RestaurantCard restaurant={sampleRestaurant} />);
    expect(screen.getByText(sampleRestaurant.name)).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(sampleRestaurant.location.city, "i"))
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Est. ${sampleRestaurant.yearEstablished}`)
    ).toBeInTheDocument();
  });

  it("renders popular dishes and sample preview tag", () => {
    render(<RestaurantCard restaurant={sampleRestaurant} />);
    sampleRestaurant.popularDishes.forEach((dish) => {
      expect(screen.getByText(dish)).toBeInTheDocument();
    });
    expect(screen.getByText(/Sample Listing/i)).toBeInTheDocument();
  });
});
