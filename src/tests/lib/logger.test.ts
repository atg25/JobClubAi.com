import { describe, it, expect, vi, beforeEach } from "vitest";
import { logger } from "../../lib/logger";

describe("Logger utility", () => {
  let consoleLogSpy: ReturnType<typeof vi.spyOn>;
  let consoleWarnSpy: ReturnType<typeof vi.spyOn>;
  let consoleErrorSpy: ReturnType<typeof vi.spyOn>;
  let consoleDebugSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleLogSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    consoleDebugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});
  });

  it("should export logger object with all methods", () => {
    expect(logger).toBeDefined();
    expect(logger.log).toBeDefined();
    expect(logger.warn).toBeDefined();
    expect(logger.error).toBeDefined();
    expect(logger.debug).toBeDefined();
  });

  it("should call console.log in development mode", () => {
    logger.log("test message");
    // In test environment, isDev is typically true
    expect(consoleLogSpy).toHaveBeenCalledWith("test message");
  });

  it("should call console.warn in development mode", () => {
    logger.warn("warning message");
    expect(consoleWarnSpy).toHaveBeenCalledWith("warning message");
  });

  it("should always call console.error regardless of environment", () => {
    logger.error("error message");
    expect(consoleErrorSpy).toHaveBeenCalledWith("error message");
  });

  it("should call console.debug in development mode", () => {
    logger.debug("debug message");
    expect(consoleDebugSpy).toHaveBeenCalledWith("debug message");
  });

  it("should handle multiple arguments", () => {
    logger.log("message", { data: "test" }, 123);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "message",
      { data: "test" },
      123
    );
  });
});
