import { useEffect, useState } from "react";
import { Container } from "./Container";
import { EventCard } from "./EventCard";
import { Button } from "./Button";
import { client } from "../lib/sanity";
import { logger } from "../lib/logger";
import type { Event } from "../types";

const FEATURED_EVENTS_QUERY = `*[_type == "event"] | order(datetime desc) [0...3] {
  _id,
  name,
  category,
  description,
  datetime,
  type,
  location,
  link
}`;

const FeaturedEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const data: Event[] = await client.fetch(FEATURED_EVENTS_QUERY);
        setEvents(data);
      } catch (error) {
        logger.error("Failed to fetch featured events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <section className="py-12 lg:py-16 px-6 sm:px-8 lg:px-4">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Join us for hands-on workshops and networking opportunities
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-6 animate-pulse h-96"
              >
                <div className="h-8 bg-slate-800 rounded mb-4"></div>
                <div className="h-4 bg-slate-800 rounded mb-2"></div>
                <div className="h-4 bg-slate-800 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-12 lg:py-16 px-6 sm:px-8 lg:px-4">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Upcoming Events
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Join us for hands-on workshops and networking opportunities
          </p>
        </div>

        {events.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {events.map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
            </div>
            <div className="text-center">
              <Button href="/events" variant="secondary">
                View All Events
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">
              No upcoming events at the moment. Check back soon!
            </p>
          </div>
        )}
      </Container>
    </section>
  );
};

export default FeaturedEvents;
