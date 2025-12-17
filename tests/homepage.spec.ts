import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("should load successfully", async ({ page }) => {
    await page.goto("/");

    // Check page title
    await expect(page).toHaveTitle(/AInspire/);

    // Check hero section
    await expect(
      page.getByRole("heading", { name: /Where Students Grow/i })
    ).toBeVisible();
  });

  test("should have working navigation", async ({ page }) => {
    await page.goto("/");

    // Check navigation links
    const nav = page.getByRole("navigation");
    await expect(nav.getByRole("button", { name: /Home/i })).toBeVisible();
    await expect(nav.getByRole("button", { name: /Join/i })).toBeVisible();
    await expect(nav.getByRole("button", { name: /Events/i })).toBeVisible();
    await expect(nav.getByRole("button", { name: /Resources/i })).toBeVisible();
  });

  test("should have accessible skip link", async ({ page }) => {
    await page.goto("/");

    // Tab to skip link
    await page.keyboard.press("Tab");

    // Check skip link is focused
    const skipLink = page.getByRole("link", { name: /Skip to main content/i });
    await expect(skipLink).toBeFocused();
  });

  test("should scroll to sections on navigation click", async ({ page }) => {
    await page.goto("/");

    // Click Events navigation
    await page.getByRole("button", { name: /Events/i }).click();

    // Wait for scroll
    await page.waitForTimeout(1000);

    // Check we're at events section
    const eventsSection = page.locator("#events");
    await expect(eventsSection).toBeInViewport();
  });

  test("should display all main sections", async ({ page }) => {
    await page.goto("/");

    // Check all sections exist
    await expect(page.locator("#home")).toBeVisible();
    await expect(page.locator("#events")).toBeVisible();
    await expect(page.locator("#portfolio")).toBeVisible();
    await expect(page.locator("#resources")).toBeVisible();
    await expect(page.locator("#join")).toBeVisible();
  });

  test("should have CTA buttons in hero", async ({ page }) => {
    await page.goto("/");

    const joinButton = page.getByRole("link", { name: /Join the Club/i });
    const eventsButton = page.getByRole("link", { name: /Check out Events/i });

    await expect(joinButton).toBeVisible();
    await expect(eventsButton).toBeVisible();
  });

  test("should display benefit icons", async ({ page }) => {
    await page.goto("/");

    // Check for benefit icons (should be 4)
    const benefitIcons = page.locator(".benefit-icon"); // Adjust selector as needed
    await expect(benefitIcons.first()).toBeVisible();
  });
});
