/**
 * Production-safe logger utility
 * Console statements are disabled in production to improve performance
 * and prevent exposing debugging information
 */

const isDev = import.meta.env.MODE === "development";

export const logger = {
  /**
   * Log general information (disabled in production)
   */
  log: (...args: unknown[]): void => {
    if (isDev) {
      console.log(...args);
    }
  },

  /**
   * Log warnings (disabled in production)
   */
  warn: (...args: unknown[]): void => {
    if (isDev) {
      console.warn(...args);
    }
  },

  /**
   * Log errors (always enabled for error tracking)
   */
  error: (...args: unknown[]): void => {
    console.error(...args);
  },

  /**
   * Log debug information (disabled in production)
   */
  debug: (...args: unknown[]): void => {
    if (isDev) {
      console.debug(...args);
    }
  },
};
