import { test, expect } from "@playwright/test";

test.describe("Event Registration", () => {
  test("should display registration form", async ({ page }) => {
    // Navigate to event detail page first
    await page.goto("/events/test-event-id");

    // Click register button (if it exists)
    const registerButton = page.getByRole("link", { name: /Register/i });
    if (await registerButton.isVisible()) {
      await registerButton.click();

      // Check form is displayed
      await expect(
        page.getByRole("heading", { name: /Register for Event/i })
      ).toBeVisible();
    }
  });

  test("should have all required form fields", async ({ page }) => {
    await page.goto("/events/test-event-id/register");

    // Check required fields
    await expect(page.getByLabel(/First Name/i)).toBeVisible();
    await expect(page.getByLabel(/Last Name/i)).toBeVisible();
    await expect(page.getByLabel(/Email/i)).toBeVisible();
  });

  test("should validate required fields", async ({ page }) => {
    await page.goto("/events/test-event-id/register");

    // Try to submit without filling required fields
    await page.getByRole("button", { name: /Register for Event/i }).click();

    // Check for validation messages (browser native validation)
    const firstNameInput = page.getByLabel(/First Name/i);
    await expect(firstNameInput).toHaveAttribute("required");
  });

  test("should submit registration successfully", async ({ page }) => {
    await page.goto("/events/test-event-id/register");

    // Fill out form
    await page.getByLabel(/First Name/i).fill("Test");
    await page.getByLabel(/Last Name/i).fill("User");
    await page.getByLabel(/Email/i).fill("test@example.com");
    await page.getByLabel(/Phone/i).fill("123-456-7890");
    await page.getByLabel(/Major/i).fill("Computer Science");
    await page.getByLabel(/Graduation Year/i).fill("2025");

    // Submit form
    await page.getByRole("button", { name: /Register for Event/i }).click();

    // Check for success message
    await expect(page.getByText(/Registration successful/i)).toBeVisible({
      timeout: 10000,
    });
  });

  test("should display error on submission failure", async ({ page }) => {
    // Mock API to fail
    await page.route("**/api.sanity.io/**", (route) => route.abort());

    await page.goto("/events/test-event-id/register");

    // Fill and submit
    await page.getByLabel(/First Name/i).fill("Test");
    await page.getByLabel(/Last Name/i).fill("User");
    await page.getByLabel(/Email/i).fill("test@example.com");
    await page.getByRole("button", { name: /Register for Event/i }).click();

    // Check for error message
    await expect(page.getByText(/Failed to register/i)).toBeVisible({
      timeout: 10000,
    });
  });
});
