import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "./Container";
import { EventCard } from "./EventCard";
import { client } from "../lib/sanity";
import { logger } from "../lib/logger";
import { EVENTS_QUERY } from "../queries/events";
import type { Event } from "../types";

const EventsSection = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const data = await client.fetch(EVENTS_QUERY);
        setEvents(data);
      } catch (error) {
        logger.error("Failed to fetch events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section
      id="events"
      className="py-12 lg:py-16 px-6 sm:px-8 lg:px-4 min-h-[95svh] pb-32"
    >
      <Container>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white text-center mb-10 lg:mb-12 italic font-serif">
          Attend an Event
        </h2>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-slate-800 rounded-lg overflow-hidden animate-pulse"
              >
                <div className="h-48 bg-slate-700" />
                <div className="p-6 space-y-3">
                  <div className="h-4 bg-slate-700 rounded w-3/4" />
                  <div className="h-4 bg-slate-700 rounded w-1/2" />
                  <div className="h-4 bg-slate-700 rounded w-full" />
                </div>
              </div>
            ))}
          </div>
        ) : events.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-400">
              No upcoming events. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Link key={event._id} to={`/events/${event._id}`}>
                <EventCard event={event} />
              </Link>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default EventsSection;
