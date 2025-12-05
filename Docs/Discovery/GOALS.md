# Job Club — Goals

This document summarizes the primary goals, measurable KPIs, prioritized deliverables (MVP and stretch), timeline assumptions, and success criteria for the Job Club project. It aligns with discovery artifacts (`PERSONA.md`, `CUSTOMER_JOURNEY_MAP.md`, `PROBLEM_STATEMENT.md`).

---

## Primary Goals
- Provide a low-friction onboarding flow that captures student profiles and produces a personalized, actionable checklist for missing professional assets.
- Deliver an events system and resource library that help students progress from onboarding to portfolio-published and interview-ready.
- Automate administrative workflows (CRM entry, Discord intros, personalized onboarding emails) to scale mentorship and community onboarding.
- Ensure privacy-first analytics and GDPR-compliant consent handling before any tracking runs.
- Achieve production-ready quality with CI, Playwright tests, Lighthouse audits, and automated deployment.

---

## Measurable KPIs
- Onboarding conversion rate (landing → form submission): target 10–20% for initial cohort
- Asset completion rate: % of onboarded students who publish LinkedIn/GitHub/portfolio/Calendly within 30 days (target 40%+)
- Event attendance rate: % of onboarded students attending an event in 60 days (target 30%+)
- Mentor session bookings per 100 onboarded students (target 15–25)
- Time-to-first-portfolio-published (median days) — target < 60 days for engaged users
- GDPR consent rate for analytics (monitor to evaluate measurement quality)

---

## Prioritized Deliverables

MVP (must-have for first release):
- Onboarding page & Sanity `memberProfile` schema
- Onboarding form that writes to Sanity and triggers automations (CRM entry, personalized email, Discord intro) via Zapier/Make
- Events list and event detail pages (Sanity schema + front-end listing)
- Resource library with at least 2 published guides
- GDPR cookie consent banner and analytics gating
- Basic CI: linting, Eleventy build check, Playwright smoke tests, Lighthouse run

Stretch (next-phase):
- Mentor-matching workflow in CRM and mentor dashboard
- Role assignment in Discord and advanced community automation
- Event registration → calendar invites + CRM registration mapping
- Advanced analytics funnels and cohort reporting

---

## Timeline Assumptions (two-week sprint example)
- Week 1: Set up Sanity schemas (`memberProfile`, `event`, `resource`), build onboarding form, implement cookie consent UX, publish 2 resources
- Week 2: Implement automations (Zapier/Make), connect CRM, add Discord posting, test Playwright flows, Lighthouse and accessibility fixes, deploy

---

## Success Criteria (release)
- Onboarding form captures required fields and creates CRM records reliably
- Personalized onboarding emails are sent automatically with accurate missing-asset detection
- At least 2 resources published and discoverable; events are listed and have working details
- GDPR consent works: analytics only run after consent
- No failing critical CI checks (build/test/lint)

---

## Alignment to Personas
- Aisha (Freshman): prioritize beginner workshops, starter portfolio templates, and step-by-step checklists
- Marcus (Senior): prioritize mock interviews, portfolio conversion templates, and CRM follow-ups for hiring pipelines
- Priya (Founder): prioritize founder-track events, pitch templates, and automation for demo/mentor scheduling

---

## Notes & Next Actions
- Map `memberProfile` fields to chosen CRM and prepare sample Zapier/Make recipes.
- Create UI wireframes for onboarding + cookie consent to validate UX before implementation.
- Instrument basic analytics (privacy-first) and plan cohort reports for KPIs above.

---

Document created to make project goals explicit and support sprint planning.
