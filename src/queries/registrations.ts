// GROQ queries for event registrations

export const EVENT_REGISTRATIONS_BY_EVENT_QUERY = `*[_type == "eventRegistration" && event._ref == $eventId] | order(registeredAt desc) {
  _id,
  firstName,
  lastName,
  email,
  phone,
  major,
  graduationYear,
  status,
  registeredAt,
  confirmationSent,
  calendarInviteSent,
  "eventName": event->name
}`;

export const ALL_REGISTRATIONS_QUERY = `*[_type == "eventRegistration"] | order(registeredAt desc) {
  _id,
  firstName,
  lastName,
  email,
  status,
  registeredAt,
  "eventName": event->name,
  "eventDate": event->datetime
}`;

export const REGISTRATION_BY_ID_QUERY = `*[_type == "eventRegistration" && _id == $id][0] {
  _id,
  firstName,
  lastName,
  email,
  phone,
  major,
  graduationYear,
  dietaryRestrictions,
  notes,
  status,
  registeredAt,
  confirmationSent,
  calendarInviteSent,
  "event": event-> {
    _id,
    name,
    datetime,
    location,
    description
  }
}`;
