import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import NotFound from "@/app/not-found";

describe("NotFound (404) Page", () => {
  it("renders 404 heading and return home CTA", () => {
    render(<NotFound />);
    expect(
      screen.getByRole("heading", { name: /404 — Dish Not Found/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/We couldn't find the food destination/i)
    ).toBeInTheDocument();

    const returnLink = screen.getByRole("link", {
      name: /Return to Discovery Home/i,
    });
    expect(returnLink).toHaveAttribute("href", "/");
  });
});
