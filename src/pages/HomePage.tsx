import { lazy, Suspense } from "react";

// Lazy load section components for code splitting
const HeroSection = lazy(() => import("../components/HeroSection"));
const EventsSection = lazy(() => import("../components/EventsSection"));
const PortfolioSection = lazy(() => import("../components/PortfolioSection"));
const MethodologySection = lazy(() => import("../components/MethodologySection"));
const ProfessionalSection = lazy(() => import("../components/ProfessionalSection"));

// Loading fallback component
const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-pulse text-slate-400">Loading...</div>
  </div>
);

export default function HomePage() {
  return (
    <>
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
    </>
  );
}
