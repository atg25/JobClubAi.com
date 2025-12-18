import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loadGtag, getSavedConsent } from "../lib/analytics";

const COOKIE_KEY = "cookie_consent_v1";

const defaultPrefs = {
  essential: true,
  analytics: false,
  marketing: false,
};

type CookiePrefs = typeof defaultPrefs;

export const CookieConsentModal = () => {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<CookiePrefs & { functionality: boolean }>({
    ...defaultPrefs,
    functionality: false,
  });
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const saved = getSavedConsent(COOKIE_KEY);
    if (!saved) setTimeout(() => setOpen(true), 0);
    // Initialize analytics if consent was previously given
    if (saved && saved.analytics) {
      // fire-and-forget
      loadGtag().catch(() => {});
    }
  }, []);

  const savePrefs = (newPrefs: CookiePrefs) => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(newPrefs));
    setOpen(false);
    setPrefs({ ...newPrefs, functionality: prefs.functionality });
    // Only load analytics if consented
    if (newPrefs.analytics) {
      loadGtag().catch(() => {});
    }
  };

  if (!open) return null;

  // Modal size/animation
  const expanded = showDetails;

  return (
    <div className="fixed inset-0 lg:inset-auto lg:bottom-6 lg:right-6 z-50 flex items-center justify-center lg:items-end lg:justify-end pointer-events-none">
      {/* Overlay for small screens */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 lg:hidden pointer-events-auto z-40"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Decorative shadow behind modal on large screens */}
      <div className="hidden lg:block absolute z-40 pointer-events-none flex items-center justify-center inset-0">
        <div
          aria-hidden="true"
          className="rounded-2xl"
          style={{
            width: expanded ? "min(90%,700px)" : "min(90%,384px)",
            height: expanded ? 420 : 'auto',
            transform: "translateY(10px)",
          }}
        />
      </div>

      <div
        className={`relative z-50 bg-white rounded-2xl shadow-2xl border border-blue-100 pointer-events-auto transition-all duration-1000 p-8 text-gray-900 ${
          expanded ? "cookie-modal-expanded" : ""
        }`}
        style={{
          width: expanded ? "min(90%,700px)" : "min(90%,384px)",
          minHeight: expanded ? "420px" : "auto",
          maxHeight: "70svh",
          transition:
            "width 0.4s cubic-bezier(0.4,0,0.2,1), min-height 0.4s cubic-bezier(0.4,0,0.2,1), padding 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s",
          padding: expanded ? "2.5rem 2.5rem" : "1.5rem",
          opacity: 1,
          overflow: "hidden",
          boxSizing: "border-box",
          overflowY: "auto",
        }}
        // ensure modal sits above overlay on small screens
        aria-modal="true"
      >
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-bold">This website uses cookies</h2>
          <button
            className="text-gray-400 hover:text-gray-700 text-2xl leading-none"
            aria-label="Close"
            onClick={() => setOpen(false)}
            type="button"
          >
            ×
          </button>
        </div>
        <p className="mb-4 text-sm text-gray-700">
          We use cookies to improve user experience. Choose what cookies you
          allow us to use. You can read more about our Cookie Policy in our{" "}
          <Link to="/privacy" className="underline text-blue-600">
            Privacy policy
          </Link>
          .
        </p>
        <form className={`space-y-3 mb-6 transition-all duration-1000`}>
          <div className="flex flex-col gap-3">
            {/* Strictly Necessary */}
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked
                disabled
                className="accent-gray-400 w-5 h-5 mt-1 cursor-not-allowed"
              />
              <div>
                <span className="block font-semibold text-gray-700">
                  STRICTLY NECESSARY
                </span>
                <div
                  style={{
                    maxHeight: showDetails ? 60 : 0,
                    opacity: showDetails ? 1 : 0,
                    transition: showDetails
                      ? "max-height 0.9s cubic-bezier(0.4,0,0.2,1), opacity 0.7s"
                      : "max-height 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.9s",
                    overflow: "hidden",
                  }}
                >
                  <span className="block text-sm text-gray-500 font-normal mt-1">
                    The website cannot be used properly without these cookies.
                  </span>
                </div>
              </div>
            </label>
            {/* Performance */}
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={prefs.analytics}
                onChange={(e) =>
                  setPrefs((p) => ({ ...p, analytics: e.target.checked }))
                }
                className="accent-blue-500 w-5 h-5 mt-1"
              />
              <div>
                <span className="block font-semibold text-gray-700">
                  PERFORMANCE
                </span>
                <div
                  style={{
                    maxHeight: showDetails ? 60 : 0,
                    opacity: showDetails ? 1 : 0,
                    transition: showDetails
                      ? "max-height 0.9s cubic-bezier(0.4,0,0.2,1), opacity 0.7s"
                      : "max-height 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.9s",
                    overflow: "hidden",
                  }}
                >
                  <span className="block text-sm text-gray-500 font-normal mt-1">
                    Analyzes how visitors use the website. These cookies cannot
                    be used to directly identify certain site visitors.
                  </span>
                </div>
              </div>
            </label>
            {/* Targeting */}
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={prefs.marketing}
                onChange={(e) =>
                  setPrefs((p) => ({ ...p, marketing: e.target.checked }))
                }
                className="accent-blue-500 w-5 h-5 mt-1"
              />
              <div>
                <span className="block font-semibold text-gray-700">
                  TARGETING
                </span>
                <div
                  style={{
                    maxHeight: showDetails ? 60 : 0,
                    opacity: showDetails ? 1 : 0,
                    transition: showDetails
                      ? "max-height 0.9s cubic-bezier(0.4,0,0.2,1), opacity 0.7s"
                      : "max-height 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.9s",
                    overflow: "hidden",
                  }}
                >
                  <span className="block text-sm text-gray-500 font-normal mt-1">
                    Used to identify visitors between different websites. These
                    cookies may be used to show relevant ads on other sites.
                  </span>
                </div>
              </div>
            </label>
            {/* Functionality */}
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={prefs.functionality}
                onChange={(e) =>
                  setPrefs((p) => ({ ...p, functionality: e.target.checked }))
                }
                className="accent-blue-500 w-5 h-5 mt-1"
              />
              <div>
                <span className="block font-semibold text-gray-700">
                  FUNCTIONALITY
                </span>
                <div
                  style={{
                    maxHeight: showDetails ? 60 : 0,
                    opacity: showDetails ? 1 : 0,
                    transition: showDetails
                      ? "max-height 0.9s cubic-bezier(0.4,0,0.2,1), opacity 0.7s"
                      : "max-height 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.9s",
                    overflow: "hidden",
                  }}
                >
                  <span className="block text-sm text-gray-500 font-normal mt-1">
                    Used to remember visitor information, such as your language
                    and timezone.
                  </span>
                </div>
              </div>
            </label>
          </div>
        </form>
        <div className="flex flex-col sm:flex-row gap-3 mb-3 w-full">
          <button
            className="bg-blue-500 text-white block w-full sm:w-1/2 rounded-full px-6 py-2 font-semibold text-base hover:bg-blue-600 transition shadow"
            onClick={() =>
              savePrefs({ essential: true, analytics: true, marketing: true })
            }
            type="button"
          >
            ACCEPT
          </button>
          <button
            className="border border-gray-400 text-gray-900 block w-full sm:w-1/2 rounded-full px-6 py-2 font-semibold text-base hover:bg-gray-100 transition shadow"
            onClick={() =>
              savePrefs({ essential: true, analytics: false, marketing: false })
            }
            type="button"
          >
            DECLINE ALL
          </button>
        </div>
        <button
          className="flex items-center justify-center gap-2 text-black text-base font-semibold mt-4 w-full hover:underline"
          type="button"
          onClick={() => setShowDetails((d) => !d)}
        >
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-black text-white text-lg font-serif">
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 500,
                fontSize: "1rem",
                lineHeight: 1,
              }}
            >
              i
            </span>
          </span>
          {showDetails ? "HIDE DETAILS" : "SHOW DETAILS"}
        </button>
      </div>
      <style>{`
        @keyframes slide-in-bounce {
          0% { transform: translateY(100px) scale(0.95); opacity: 0; }
          60% { transform: translateY(-10px) scale(1.02); opacity: 1; }
          80% { transform: translateY(4px) scale(0.98); }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
        .animate-slide-in-bounce {
          animation: slide-in-bounce 0.7s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .cookie-modal-expanded {
          transition: width 1s cubic-bezier(0.4,0,0.2,1), height 1s cubic-bezier(0.4,0,0.2,1), padding 1s cubic-bezier(0.4,0,0.2,1), opacity 1s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </div>
  );
};
