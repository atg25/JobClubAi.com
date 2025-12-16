// Google Analytics 4 integration placeholder
// TODO: Add GA4 Measurement ID before production deployment

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || "";

// Initialize Google Analytics
export const initGA = () => {
  if (!GA_MEASUREMENT_ID) {
    console.warn("Google Analytics Measurement ID not configured");
    return;
  }

  // Load GA4 script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID);
};

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track events
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, unknown>
) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", eventName, eventParams);
  }
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: any[]) => void;
  }
}
