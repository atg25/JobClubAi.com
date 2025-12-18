import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { client } from "../lib/sanity";
import { Container } from "../components/Container";
import { EVENT_BY_ID_QUERY } from "../queries/events";
import type { Event } from "../types";

interface RegistrationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  major: string;
  graduationYear: string;
  dietaryRestrictions: string;
  notes: string;
}

export default function EventRegistrationPage() {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [formData, setFormData] = useState<RegistrationFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    major: "",
    graduationYear: "",
    dietaryRestrictions: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      if (id) {
        try {
          const data = await client.fetch(EVENT_BY_ID_QUERY, { id });
          setEvent(data);
        } catch (err) {
          console.error("Failed to fetch event:", err);
        }
      }
    };
    fetchEvent();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Create registration document in Sanity
      const registration = await client.create({
        _type: "eventRegistration",
        event: {
          _type: "reference",
          _ref: id,
        },
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone || undefined,
        major: formData.major || undefined,
        graduationYear: formData.graduationYear
          ? parseInt(formData.graduationYear)
          : undefined,
        dietaryRestrictions: formData.dietaryRestrictions || undefined,
        notes: formData.notes || undefined,
        status: "registered",
        registeredAt: new Date().toISOString(),
        confirmationSent: false,
        calendarInviteSent: false,
      });

      console.log("Registration created:", registration);

      // Trigger Zapier webhook for confirmation email and automation
      try {
        // Format date nicely for email
        const formatEventDate = (datetime?: string) => {
          if (!datetime) return "";
          const date = new Date(datetime);
          return (
            date.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            }) +
            " at " +
            date.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
            })
          );
        };

        // Use FormData to avoid CORS preflight issues
        const webhookData = new URLSearchParams({
          registrationId: registration._id,
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone || "",
          major: formData.major || "",
          graduationYear: formData.graduationYear || "",
          eventId: id || "",
          eventName: event?.name || "",
          eventDescription: event?.description || "",
          eventDatetime: formatEventDate(event?.datetime),
          eventLocation: event?.location || event?.link || "",
          eventType: event?.type || "",
          eventCategory: event?.category || "",
        });

        const webhookUrl = import.meta.env.VITE_ZAPIER_EVENT_WEBHOOK;
        if (webhookUrl) {
          await fetch(webhookUrl, {
            method: "POST",
            body: webhookData,
          });
        }
      } catch (webhookError) {
        // Don't fail registration if webhook fails
        console.warn("Webhook notification failed:", webhookError);
      }

      setSubmitSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        major: "",
        graduationYear: "",
        dietaryRestrictions: "",
        notes: "",
      });
    } catch (error) {
      console.error("Registration error:", error);
      setSubmitError(
        "Failed to register for event. Please try again or contact support."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 sm:px-8 lg:px-4">
      <Container>
        <div className="max-w-2xl mx-auto">
          <Link
            to={`/events/${id}`}
            className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-6 transition-colors"
          >
            ← Back to Event
          </Link>

          <h1 className="text-4xl font-bold text-white mb-4">
            {event ? `Register for ${event.name}` : "Register for Event"}
          </h1>
          <p className="text-slate-300 mb-8">
            Fill out the form below to register for this event. You'll receive a
            confirmation email with event details and a calendar invite.
          </p>

          {submitSuccess && (
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-6">
              <p className="text-green-400 font-medium">
                Registration successful! Check your email for confirmation and
                calendar invite.
              </p>
            </div>
          )}

          {submitError && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6">
              <p className="text-red-400">{submitError}</p>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="backdrop-blur-md bg-white/5 rounded-xl border border-white/10 p-6 lg:p-8"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Phone Number (optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="major"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Major (optional)
                </label>
                <input
                  type="text"
                  id="major"
                  name="major"
                  value={formData.major}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label
                  htmlFor="graduationYear"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Graduation Year (optional)
                </label>
                <input
                  type="number"
                  id="graduationYear"
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleChange}
                  min="2024"
                  max="2030"
                  className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="dietaryRestrictions"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Dietary Restrictions (optional)
              </label>
              <textarea
                id="dietaryRestrictions"
                name="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Any allergies or dietary preferences..."
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="notes"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Additional Notes (optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Anything else we should know..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Registering..." : "Register for Event"}
            </button>

            <p className="text-sm text-slate-400 mt-4 text-center">
              * Required fields
            </p>
          </form>
        </div>
      </Container>
    </div>
  );
}
