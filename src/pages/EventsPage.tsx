import { lazy, Suspense } from "react";

const EventsSection = lazy(() => import("../components/EventsSection"));

const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-pulse text-slate-400">Loading...</div>
  </div>
);

export default function EventsPage() {
  return (
    <section>
      <Suspense fallback={<SectionLoader />}>
        <EventsSection />
      </Suspense>
    </section>
  );
}
