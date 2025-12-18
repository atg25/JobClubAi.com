import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { EventCard } from "../../components/EventCard";
import type { Event } from "../../types";

const mockEvent: Event = {
  _id: "test-id",
  name: "Test Event",
  category: "Workshop",
  title: "Test Event",
  description: "This is a test event description",
  datetime: "2025-12-25T14:00:00.000Z",
  location: "Test Location",
  type: "In-Person",
};

describe("EventCard component", () => {
  it("should render event title", () => {
    render(
      <BrowserRouter>
        <EventCard event={mockEvent} />
      </BrowserRouter>
    );
    expect(screen.getByText("Test Event")).toBeDefined();
  });

  it("should render event description", () => {
    render(
      <BrowserRouter>
        <EventCard event={mockEvent} />
      </BrowserRouter>
    );
    expect(screen.getByText("This is a test event description")).toBeDefined();
  });

  it("should render event location", () => {
    render(
      <BrowserRouter>
        <EventCard event={mockEvent} />
      </BrowserRouter>
    );
    expect(screen.getByText(/Test Location/)).toBeDefined();
  });

  it("should format date correctly", () => {
    render(
      <BrowserRouter>
        <EventCard event={mockEvent} />
      </BrowserRouter>
    );
    // Date should be formatted as "Dec 25, 2025"
    expect(screen.getByText(/Dec 25, 2025/)).toBeDefined();
  });

  it("should display event type when location is not provided", () => {
    const eventWithoutLocation = { ...mockEvent, location: undefined };
    render(
      <BrowserRouter>
        <EventCard event={eventWithoutLocation} />
      </BrowserRouter>
    );
    expect(screen.getByText(/In-Person/)).toBeDefined();
  });
});
