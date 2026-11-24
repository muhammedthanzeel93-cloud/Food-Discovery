import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Header } from "@/components/layout/header";

describe("Header Component", () => {
  it("renders platform branding and launch hub badges", () => {
    render(<Header />);
    expect(screen.getByText("FoodDiscovery")).toBeInTheDocument();
    expect(screen.getByText("Kozhikode Hub")).toBeInTheDocument();
    expect(screen.getByText(/📍 Kerala Launch/i)).toBeInTheDocument();
    expect(screen.getByText(/Preview Architecture/i)).toBeInTheDocument();
  });

  it("renders the logo link pointing to root", () => {
    render(<Header />);
    const logoLink = screen.getByRole("link", { name: /FoodDiscovery/i });
    expect(logoLink).toHaveAttribute("href", "/");
  });
});
