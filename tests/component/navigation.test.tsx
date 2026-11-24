import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Header } from "@/components/layout/header";
import { siteConfig } from "@/config/site";

describe("Navigation Links", () => {
  it("renders all configured navigation items with correct anchor targets", () => {
    render(<Header />);
    const nav = screen.getByRole("navigation", { name: "Main Navigation" });
    expect(nav).toBeInTheDocument();

    siteConfig.navigation.forEach((item) => {
      const link = screen.getByRole("link", { name: item.label });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", item.href);
    });
  });
});
