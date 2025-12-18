/**
 * Application constants
 * Centralized location for magic values and configuration
 */

// Locale Settings
export const LOCALE = "en-US";

// Date Configuration
export const DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const TIME_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
};

// Form Validation
export const GRADUATION_YEAR = {
  MIN: 2024,
  MAX: 2030,
} as const;

// Cache Configuration
export const CACHE_TIMEOUT = 5 * 60 * 1000; // 5 minutes in milliseconds

// API Configuration
export const API = {
  RETRY_ATTEMPTS: 3,
  TIMEOUT: 10000, // 10 seconds
} as const;
