import { lazy, Suspense } from "react";

const PortfolioSection = lazy(() => import("../components/PortfolioSection"));
const MethodologySection = lazy(() => import("../components/MethodologySection"));

const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-pulse text-slate-400">Loading...</div>
  </div>
);

export default function PortfolioTipsPage() {
  return (
    <>
      <Suspense fallback={<SectionLoader />}>
        <PortfolioSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <MethodologySection />
      </Suspense>
    </>
  );
}
