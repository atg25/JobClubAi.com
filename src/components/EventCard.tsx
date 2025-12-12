import type { Event } from "../types";

interface EventCardProps {
  event: Event;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <article className="bg-gradient-event glass-card rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.3)] flex flex-col">
      <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide leading-tight">
        {event.title}
      </h3>

      <div className="flex items-center gap-3 mb-3">
        <svg
          className="w-5 h-5 flex-shrink-0 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <div className="text-white/90 text-sm">
          <time dateTime={event.date} className="font-medium">
            {event.date}
          </time>
          <span className="text-white/70"> • {event.time}</span>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-5">
        <svg
          className="w-5 h-5 flex-shrink-0 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span className="text-white/90 text-sm font-medium">
          {event.location}
        </span>
      </div>

      <p className="text-white/80 text-sm mb-5 leading-relaxed flex-grow">
        {event.description}
      </p>

      <a
        href={event.link}
        className="block w-full py-2 px-5 rounded-full text-center bg-slate-600/60 border border-white/30 text-white font-semibold text-xs transition-all duration-300 hover:bg-slate-600/80 hover:border-white/50 hover:scale-[1.02] hover:shadow-[0_4px_12px_rgba(255,255,255,0.15)] active:bg-blue-500/40 active:border-blue-400/60 active:shadow-[0_0_15px_rgba(59,130,246,0.4)] active:scale-[0.98]"
        aria-label={`Add ${event.title} to calendar`}
      >
        Add to Calendar
      </a>
    </article>
  );
};
