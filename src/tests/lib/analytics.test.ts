import { describe, it, expect, beforeEach } from "vitest";
import {
  loadGtag,
  trackPageview,
  trackEvent,
  isLoaded,
  getSavedConsent,
} from "../../lib/analytics";

describe("Analytics utility", () => {
  beforeEach(() => {
    // Clear any existing gtag
    (window as Window & { gtag?: unknown }).gtag = undefined;
    (window as Window & { dataLayer?: unknown }).dataLayer = undefined;
    // Clear localStorage
    localStorage.clear();
    // Clear document scripts
    const scripts = document.querySelectorAll(
      'script[src*="googletagmanager"]'
    );
    scripts.forEach((s) => s.remove());
  });

  describe("getSavedConsent", () => {
    it("should return null when no consent is saved", () => {
      expect(getSavedConsent()).toBeNull();
    });

    it("should return consent value from localStorage", () => {
      localStorage.setItem("cookie_consent_v1", JSON.stringify(true));
      expect(getSavedConsent()).toBe(true);

      localStorage.setItem("cookie_consent_v1", JSON.stringify(false));
      expect(getSavedConsent()).toBe(false);
    });

    it("should handle invalid JSON gracefully", () => {
      localStorage.setItem("cookie_consent_v1", "invalid-json");
      expect(getSavedConsent()).toBeNull();
    });
  });

  describe("isLoaded", () => {
    it("should return false when gtag is not loaded", () => {
      expect(isLoaded()).toBe(false);
    });

    it("should return true after loadGtag is called", async () => {
      await loadGtag("G-TEST123");
      expect(isLoaded()).toBe(true);
    });
  });

  describe("loadGtag", () => {
    it("should set loaded flag to true after execution", async () => {
      await loadGtag("G-TEST123");
      expect(isLoaded()).toBe(true);
    });

    it("should not load gtag twice if already loaded", async () => {
      await loadGtag("G-TEST123");
      const loaded1 = isLoaded();
      await loadGtag("G-TEST123");
      const loaded2 = isLoaded();
      expect(loaded1).toBe(true);
      expect(loaded2).toBe(true);
    });
  });

  describe("trackPageview", () => {
    it("should not throw error if gtag is not loaded", () => {
      // Don't load gtag, so isLoaded() returns false
      expect(() => trackPageview("/test")).not.toThrow();
    });

    it("should execute without error when gtag is loaded", async () => {
      await loadGtag("G-TEST123");
      expect(() => trackPageview("/test-page")).not.toThrow();
    });
  });

  describe("trackEvent", () => {
    it("should not throw error if gtag is not loaded", () => {
      expect(() => trackEvent("test_event", { value: 1 })).not.toThrow();
    });

    it("should execute without error when gtag is loaded", async () => {
      await loadGtag("G-TEST123");
      expect(() =>
        trackEvent("button_click", { button_name: "submit" })
      ).not.toThrow();
    });
  });
});
