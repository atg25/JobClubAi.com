export interface Event {
  _id: string;
  name: string;
  category: string;
  description: string;
  datetime: string;
  type: "In-Person" | "Virtual" | "Hybrid";
  location?: string;
  link?: string;
  // Legacy fields for backwards compatibility
  title?: string;
  date?: string;
  time?: string;
  slug?: { current: string };
}

export interface PageContent {
  hero: {
    title: string;
    subtitle: string;
  };
  portfolio: {
    title: string;
    subtitle: string;
  };
  methodology: {
    title?: string;
    subtitle?: string;
    do: string[];
    dont: string[];
  };
  professional: {
    title: string;
    sections?: Array<{
      title: string;
      description: string;
    }>;
  };
}

// Future: Sanity CMS types
export interface SanityEvent extends Event {
  _id: string;
  _type: "event";
  _createdAt: string;
  _updatedAt: string;
}

// Future: FillOut form types
export interface FormSubmission {
  name: string;
  email: string;
  message?: string;
  eventId?: string;
}
