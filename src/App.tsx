import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CookieConsentModal } from "./components/CookieConsentModal";
import { trackPageview, loadGtag } from "./lib/analytics";

// Lazy load page components
const HomePage = lazy(() => import("./pages/HomePage"));
const JoinPage = lazy(() => import("./pages/JoinPage"));
const EventDetailPage = lazy(() => import("./pages/EventDetailPage"));
const EventRegistrationPage = lazy(
  () => import("./pages/EventRegistrationPage")
);
const ResourcesPage = lazy(() => import("./pages/ResourcesPage"));
const ResourceDetailPage = lazy(() => import("./pages/ResourceDetailPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-pulse text-slate-400 text-xl">Loading...</div>
  </div>
);

function App() {
  // Initialize Google Analytics on app mount
  useEffect(() => {
    loadGtag();
  }, []);

  function AnalyticsListener() {
    const location = useLocation();
    useEffect(() => {
      // attempt to track pageview whenever location changes; no-op if gtag not loaded
      trackPageview(location.pathname + location.search);
    }, [location]);
    return null;
  }
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded"
        >
          Skip to main content
        </a>
        <CookieConsentModal />
        <AnalyticsListener />
        <Header />
        <main id="main-content" className="flex-grow" role="main">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/join" element={<JoinPage />} />
              <Route path="/events/:id" element={<EventDetailPage />} />
              <Route
                path="/events/:id/register"
                element={<EventRegistrationPage />}
              />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/resources/:slug" element={<ResourceDetailPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
