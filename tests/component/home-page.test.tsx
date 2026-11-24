import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HomePage from "@/app/page";

describe("HomePage Component", () => {
  it("renders the primary hero heading and Kozhikode context", () => {
    render(<HomePage />);
    expect(
      screen.getByRole("heading", {
        name: /Discover Real Food\./i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/Kozhikode \(Calicut\), Kerala/i)).toBeInTheDocument();
  });

  it("renders the signature dishes discovery section", () => {
    render(<HomePage />);
    expect(
      screen.getByRole("heading", {
        name: /Signature Kozhikode Dishes/i,
      })
    ).toBeInTheDocument();
    expect(screen.getAllByText(/Kozhikodan Dum Biryani/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Kozhikode Halwa/i).length).toBeGreaterThan(0);
  });

  it("renders the landmark food venues section", () => {
    render(<HomePage />);
    expect(
      screen.getByRole("heading", {
        name: /Landmark Food Venues in Kozhikode/i,
      })
    ).toBeInTheDocument();
    expect(screen.getAllByText(/Paragon Restaurant/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Rahmath Hotel/i).length).toBeGreaterThan(0);
  });

  it("renders the independent verification explainer and transparency disclaimer", () => {
    render(<HomePage />);
    expect(
      screen.getByRole("heading", {
        name: /Why Traditional Food Apps Fail You/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Transparency Guarantee:/i)
    ).toBeInTheDocument();
  });
});
