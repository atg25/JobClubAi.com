import { describe, it, expect } from "vitest";
import {
  LOCALE,
  DATE_FORMAT_OPTIONS,
  TIME_FORMAT_OPTIONS,
  GRADUATION_YEAR,
  CACHE_TIMEOUT,
  API,
} from "../../constants/app";

describe("App constants", () => {
  it("should export LOCALE constant", () => {
    expect(LOCALE).toBe("en-US");
  });

  it("should export DATE_FORMAT_OPTIONS", () => {
    expect(DATE_FORMAT_OPTIONS).toEqual({
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  it("should export TIME_FORMAT_OPTIONS", () => {
    expect(TIME_FORMAT_OPTIONS).toEqual({
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  });

  it("should export GRADUATION_YEAR with MIN and MAX", () => {
    expect(GRADUATION_YEAR.MIN).toBe(2024);
    expect(GRADUATION_YEAR.MAX).toBe(2030);
    expect(GRADUATION_YEAR.MIN).toBeLessThan(GRADUATION_YEAR.MAX);
  });

  it("should export CACHE_TIMEOUT in milliseconds", () => {
    expect(CACHE_TIMEOUT).toBe(5 * 60 * 1000); // 5 minutes
    expect(CACHE_TIMEOUT).toBe(300000);
  });

  it("should export API configuration", () => {
    expect(API.RETRY_ATTEMPTS).toBe(3);
    expect(API.TIMEOUT).toBe(10000); // 10 seconds
  });
});
