// GROQ queries for events

export const EVENTS_QUERY = `*[_type == "event"] | order(datetime desc) [0...6] {
  _id,
  name,
  slug,
  category,
  description,
  datetime,
  type,
  location,
  link
}`;

export const EVENT_BY_SLUG_QUERY = `*[_type == "event" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  category,
  description,
  datetime,
  type,
  location,
  link,
  _createdAt,
  _updatedAt
}`;

export const ALL_EVENT_SLUGS_QUERY = `*[_type == "event"] {
  "slug": slug.current
}`;
