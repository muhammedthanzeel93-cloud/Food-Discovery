import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SignatureDishCard } from "@/features/discovery/components/signature-dish-card";
import { MOCK_SIGNATURE_DISHES } from "@/features/discovery/data/mock-discovery";

describe("SignatureDishCard Component", () => {
  const sampleDish = MOCK_SIGNATURE_DISHES[0];

  it("renders dish title, category, and regional Malayalam name", () => {
    render(<SignatureDishCard dish={sampleDish} />);
    expect(screen.getByText(sampleDish.name)).toBeInTheDocument();
    expect(screen.getByText(sampleDish.category)).toBeInTheDocument();
    if (sampleDish.malayalamName) {
      expect(screen.getByText(sampleDish.malayalamName)).toBeInTheDocument();
    }
  });

  it("renders dietary indicator, flavor tags, and sample preview badge", () => {
    render(<SignatureDishCard dish={sampleDish} />);
    const dietLabel = sampleDish.isVegetarian ? "Pure Veg" : "Non-Veg";
    expect(screen.getByText(dietLabel)).toBeInTheDocument();

    sampleDish.flavorProfile.forEach((tag) => {
      expect(screen.getByText(`#${tag}`)).toBeInTheDocument();
    });

    expect(screen.getByText(/Sample Preview/i)).toBeInTheDocument();
  });
});
