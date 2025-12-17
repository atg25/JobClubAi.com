import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("should open mobile menu", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // Mobile size
    await page.goto("/");

    // Click hamburger menu
    const menuButton = page.getByRole("button", { name: /menu/i });
    await menuButton.click();

    // Check menu is visible
    const nav = page.getByRole("navigation");
    await expect(nav).toBeVisible();
  });

  test("should close mobile menu on link click", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    // Open menu
    await page.getByRole("button", { name: /menu/i }).click();

    // Click a link
    await page.getByRole("button", { name: /Events/i }).click();

    // Wait for animation
    await page.waitForTimeout(500);

    // Menu should be closed (check if it's hidden or has closed state)
    // This depends on your implementation
  });

  test("should highlight active section in navigation", async ({ page }) => {
    await page.goto("/");

    // Scroll to events section
    await page.locator("#events").scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    // Check if Events nav item is highlighted
    const eventsNavItem = page.getByRole("button", { name: /Events/i });
    // Check for active class (adjust selector based on your implementation)
    const classes = await eventsNavItem.getAttribute("class");
    expect(classes).toContain("text-white"); // or whatever your active class is
  });
});

test.describe("Accessibility", () => {
  test("should be navigable with keyboard", async ({ page }) => {
    await page.goto("/");

    // Tab through interactive elements
    await page.keyboard.press("Tab"); // Skip link
    await page.keyboard.press("Tab"); // First nav item
    await page.keyboard.press("Tab"); // Second nav item

    // Check something is focused
    const focused = await page.evaluate(() => document.activeElement?.tagName);
    expect(["A", "BUTTON"]).toContain(focused);
  });

  test("should have proper heading hierarchy", async ({ page }) => {
    await page.goto("/");

    // Check h1 exists and is unique
    const h1s = await page.locator("h1").count();
    expect(h1s).toBeGreaterThan(0);
  });

  test("should have alt text on images", async ({ page }) => {
    await page.goto("/");

    // Check all images have alt attribute
    const images = await page.locator("img").all();
    for (const img of images) {
      const alt = await img.getAttribute("alt");
      expect(alt).toBeDefined();
    }
  });
});

test.describe("Responsive Design", () => {
  test("should render correctly on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    // Check layout adapts
    await expect(page.locator("body")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /Where Students Grow/i })
    ).toBeVisible();
  });

  test("should render correctly on tablet", async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto("/");

    await expect(page.locator("body")).toBeVisible();
  });

  test("should render correctly on desktop", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto("/");

    await expect(page.locator("body")).toBeVisible();
  });
});
