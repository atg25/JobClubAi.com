import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { client } from "../lib/sanity";
import { EVENT_BY_ID_QUERY } from "../queries/events";
import { Container } from "../components/Container";
import type { Event } from "../types";

export default function EventDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const data = await client.fetch(EVENT_BY_ID_QUERY, { id });
        if (!data) {
          setError("Event not found");
        } else {
          setEvent(data);
        }
      } catch (err) {
        setError("Failed to load event details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchEvent();
    }
  }, [id]);

  if (loading) {
    return (
      <section className="py-20 lg:py-32">
        <Container>
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-pulse text-slate-400 text-xl">
              Loading event...
            </div>
          </div>
        </Container>
      </section>
    );
  }

  if (error || !event) {
    return (
      <section className="py-20 lg:py-32">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Event Not Found
            </h1>
            <p className="text-slate-400 mb-8">
              {error || "The event you're looking for doesn't exist."}
            </p>
            <Link
              to="/#events"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              ← Back to Events
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  const eventDate = new Date(event.datetime);
  const formattedDate = eventDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = eventDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <section className="py-20 lg:py-32">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            to="/#events"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Events
          </Link>

          {/* Event Header */}
          <div className="glass-card rounded-2xl p-8 lg:p-12 mb-8 hover:scale-[1.01] hover:shadow-[0_8px_40px_rgba(59,130,246,0.15)] transition-all duration-300">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-4">
                {event.category}
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-display">
                {event.name}
              </h1>
            </div>

            {/* Event Details Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p className="text-slate-400 text-sm">Date & Time</p>
                  <p className="text-white font-medium">{formattedDate}</p>
                  <p className="text-slate-300">{formattedTime}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
                <div>
                  <p className="text-slate-400 text-sm">Meeting Type</p>
                  <p className="text-white font-medium">{event.type}</p>
                  {event.location && (
                    <p className="text-slate-300">{event.location}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                About This Event
              </h2>
              <p className="text-slate-300 leading-relaxed whitespace-pre-wrap">
                {event.description}
              </p>
            </div>

            {/* CTA Button */}
            {event.link && (
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
              >
                Join Event
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
