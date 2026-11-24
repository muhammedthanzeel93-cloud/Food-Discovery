import { test, expect } from "@playwright/test";

test.describe("Food Discovery Platform — Smoke Tests", () => {
  test("loads the homepage and displays Kozhikode culinary elements", async ({
    page,
  }) => {
    await page.goto("/");

    // Verify title
    await expect(page).toHaveTitle(/Food Discovery Platform/);

    // Verify hero section is visible
    const heroHeading = page.getByRole("heading", {
      name: /Discover Real Food\./i,
    });
    await expect(heroHeading).toBeVisible();

    // Verify signature dishes section
    const dishesHeading = page.getByRole("heading", {
      name: /Signature Kozhikode Dishes/i,
    });
    await expect(dishesHeading).toBeVisible();

    // Verify landmark food venues
    const venuesHeading = page.getByRole("heading", {
      name: /Landmark Food Venues in Kozhikode/i,
    });
    await expect(venuesHeading).toBeVisible();
  });

  test("verifies main navigation links exist", async ({ page }) => {
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: "Main Navigation" });
    await expect(nav).toBeVisible();

    await expect(nav.getByRole("link", { name: "Discover" })).toBeVisible();
    await expect(
      nav.getByRole("link", { name: "Signature Dishes" })
    ).toBeVisible();
    await expect(
      nav.getByRole("link", { name: "Kozhikode Heritage" })
    ).toBeVisible();
    await expect(
      nav.getByRole("link", { name: "Verification Standard" })
    ).toBeVisible();
  });
});
