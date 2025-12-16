declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: any[]) => void;
  }
}

const GA_ID = (import.meta.env.VITE_GA_MEASUREMENT_ID as string) || "G-XXXXXXX";

let loaded = false;

export async function loadGtag(id?: string) {
  const finalId = id || GA_ID;
  if (loaded) return;
  try {
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${finalId}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      // push arguments as an array to dataLayer for simplicity
      window.dataLayer!.push(arguments);
    } as any;

    window.gtag?.("js", new Date());
    window.gtag?.("config", finalId, { anonymize_ip: true });
    loaded = true;
  } catch (err) {
    // swallow errors to avoid breaking the app when analytics fails
    // eslint-disable-next-line no-console
    console.warn("Failed to load gtag:", err);
  }
}

export function trackPageview(path: string) {
  if (!loaded || typeof window.gtag !== "function") return;
  try {
    window.gtag?.("event", "page_view", { page_path: path });
  } catch (err) {
    // ignore
  }
}

export function isLoaded() {
  return loaded;
}

export function getSavedConsent(cookieKey = "cookie_consent_v1") {
  try {
    const raw = localStorage.getItem(cookieKey);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (_) {
    return null;
  }
}

export default {
  loadGtag,
  trackPageview,
  isLoaded,
  getSavedConsent,
};

export {};
