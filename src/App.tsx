import { lazy, Suspense } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// Lazy load section components for code splitting
const HeroSection = lazy(() => import("./components/HeroSection"));
const EventsSection = lazy(() => import("./components/EventsSection"));
const PortfolioSection = lazy(() => import("./components/PortfolioSection"));
const MethodologySection = lazy(
  () => import("./components/MethodologySection")
);
const ProfessionalSection = lazy(
  () => import("./components/ProfessionalSection")
);

// Loading fallback component
const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-pulse text-slate-400">Loading...</div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-grow" role="main">
        <Suspense fallback={<SectionLoader />}>
          <HeroSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <EventsSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <PortfolioSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <MethodologySection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ProfessionalSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
