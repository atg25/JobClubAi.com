import { Container } from "./Container";
import { EventCard } from "./EventCard";
import { events } from "../data/events";

const EventsSection = () => {
  return (
    <section id="events" className="py-12 lg:py-16 px-6 sm:px-8 lg:px-4">
      <Container>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white text-center mb-10 lg:mb-12 italic font-serif">
          Attend an Event
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default EventsSection;
