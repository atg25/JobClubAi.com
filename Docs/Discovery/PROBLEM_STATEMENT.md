# Job Club — Problem Statement

Problem
- NJIT students seeking AI careers lack an integrated, mentor-driven, and automated pathway to become portfolio-ready and hireable. They struggle to know which projects and professional assets (LinkedIn, GitHub, personal site, Calendly) signal readiness to employers, and they lack accessible mentorship, practical events, and streamlined administrative support to progress efficiently.

Target Users
- Early-career students exploring AI (e.g., freshmen/sophomores)
- Career-switching seniors and non-CS students aiming to transition into AI roles
- Founder-minded students building AI products who need credible artifacts and mentor introductions

Evidence & Constraints
- Students are active on Discord and respond well to workshops and peer reviews; faculty and campus channels are effective awareness paths.
- Requirements include Sanity CMS-backed content, automation (Zapier/Make) for onboarding → CRM → email → Discord, GDPR-compliant analytics, and accessible UX.
- Project must be production-ready for GitHub Pages/Netlify/Vercel and include CI, Playwright tests, and Lighthouse checks.

Objectives (what success looks like)
- Provide a low-friction onboarding flow that captures member profiles and produces a personalized, automated checklist for missing assets.
- Deliver at least two practical guides and an events system that drives measurable engagement.
- Integrate CRM and Discord automations so submissions create CRM records and community intros.
- Ensure GDPR-compliant analytics and accessible interfaces across all pages.

Success Metrics
- Onboarding conversion rate (landing → form submission)
- Asset completion rate (percent who publish LinkedIn/GitHub/portfolio/Calendly after onboarding)
- Event attendance and repeat attendance per user
- Mentor sessions booked and mentorship matches completed
- Time-to-first-portfolio-published (median days)

MVP Scope
- Sanity schema for `memberProfile`, `event`, and `resource` plus a public listing for onboarding and events
- Onboarding form that writes to Sanity and triggers: CRM entry + personalized email + Discord intro (Zapier/Make)
- Resource library with 2 guides, events list and event detail page
- GDPR cookie banner and analytics consent gating

Technical & UX Constraints
- Analytics must be disabled until user consents; cookie preferences required.
- Forms must be accessible (ARIA labels, keyboard navigation) and follow GDPR guidance for optional data sharing with third-party CRMs.
- Automations must avoid exposing PII in public channels; Discord posts should be consent-aware and omit sensitive fields.

Risks & Assumptions
- Assumes Zapier/Make and chosen CRM provider allow required webhook and field mappings without paid constraints.
- Risk: Students may not opt into analytics/notifications, limiting measurement — mitigate with lightweight, privacy-first analytics and clear value messaging.
- Risk: Overly ambitious feature set can delay deployment — mitigate by strict MVP scope above and iterative delivery.

Next Steps
- Map the `memberProfile` fields to a CRM schema and sample Zapier automations.
- Create wireframes for the onboarding flow and cookie consent interaction.
- Implement Sanity schemas and a minimal onboarding form for end-to-end testing.

---

Document created to guide discovery and implementation planning for the Job Club project.
