export interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  link: string;
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
