

# Sprint 1: Documentation & Reference Foundation

## Goal
Lay groundwork for compliance and documentation deliverables.

## Tasks
1. Create `/reference` folder:
   - Clone and analyze the EAiKW repo.
   - Write detailed notes on:
     - Eleventy config and build process
     - CSS architecture and utility patterns
     - Accessibility strategies (landmarks, ARIA, color contrast)
     - SEO best practices (meta tags, structure, sitemap)
     - Layout and component patterns
     - Performance techniques (image optimization, lazy loading)
     - AI-generated harvest-notes.md (documenting reusable ideas and code snippets)
2. Create `/docs/discovery` folder:
   - Draft at least 3 detailed personas (background, goals, pain points)
   - Create a customer journey map (steps, emotions, opportunities)
   - Write a problem statement and project goals
   - Perform competitor/comparable analysis (at least 2 reference sites/tools)
3. Create `/docs/ux` folder:
   - Create a sitemap and information architecture diagram
   - Design low-to-mid fidelity wireframes for homepage, onboarding flow, events page, and resource library
   - Develop a brand guide (logo, color palette, typography, tone/voice, component/button styles)
4. Start `/docs/ai-usage.md`:
   - Log all AI-assisted work, prompts, and outputs from this sprint
5. Maintain site functionality after each change (test locally and on staging)
6. Communicate with the team for reviews and feedback
7. Update REQUIREMENTS_CHECKLIST.md as you complete each item

---

# Sprint 2: Technical Stack & Integration Compliance

## Goal
Address stack and integration requirements, and begin required evaluations.

## Tasks
1. Evaluate feasibility of migrating to Eleventy (11ty):
   - Attempt a minimal Eleventy build or document why React/Vite is retained
   - Document how EAiKW patterns are adapted in your stack
2. Begin CMS evaluation:
   - Compare Sanity with at least two other headless CMSs (e.g., Contentful, Strapi, Payload, etc.)
   - Create a comparison table (data modeling, API, dev experience, editorial workflow, pricing, integration, fit)
   - Write `/docs/cms-evaluation.md` (final selection and justification)
3. Begin analytics evaluation:
   - Compare GA4 with at least one privacy-focused alternative (e.g., Plausible, Fathom, Umami)
   - Create a comparison table (GDPR, cookie requirements, cost, setup, integration, pros/cons)
   - Write `/docs/analytics-evaluation.md` (final selection and justification)
4. Continue updating `/docs/ai-usage.md` with all AI-assisted research and code
5. Maintain site functionality after each change
6. Communicate with the team for reviews and feedback

---

# Sprint 3: Automation, CRM, and Discord Integration

## Goal
Implement and document required automations and integrations.

## Tasks
1. Set up Zapier/Make automations:
   - Onboarding form → CRM (HubSpot, Airtable, or Notion) + personalized onboarding email
   - Onboarding form → Discord intro post in #jobclub-intros
   - (Optional) Event created in Sanity → Discord announcement in #events
2. **Event Registration Automation:**
   - Add event registration form to Event Detail page (fields: name, email, etc.)
   - Save registration to Sanity as “eventRegistration” document
   - Set up Zapier/Make to trigger on new registration:
     - Generate .ics file with event details (title, date, time, location, description)
     - Send confirmation email to user with event details and .ics file attached
     - (Optional) Include “Add to Google Calendar” link in email
   - Test end-to-end: user registers, receives email, and can add event to calendar
3. Integrate CRM (HubSpot, Airtable, or Notion):
   - Store member data, onboarding status, and event registrations
   - Document integration and test with sample data
4. Integrate Discord:
   - Automate posts to #jobclub-intros, #events, #resources
   - (Optional) Role assignment for new members
   - Document integration and test with sample data
5. Document all automations and integrations in `/docs/ai-usage.md` and `/docs/qa-report.md`
6. Maintain site functionality after each change (test locally and on staging)
7. Communicate with the team for reviews and feedback

---

# Sprint 4: Testing, QA, and CI/CD

## Goal
Ensure quality, accessibility, and compliance.

## Tasks
1. Implement Playwright (or similar) tests:
   - Homepage loads
   - Onboarding form works (validations, submission, error handling)
   - Events/resource pages load and display data
   - Event registration flow works end-to-end
2. Set up/verify GitHub Actions for:
   - Linting (JS, CSS, Markdown, formatting)
   - Build/test
   - Lighthouse CI (performance, accessibility, best practices, SEO)
   - Bundle size check (CSS < ~10KB gzipped recommended)
3. Run Lighthouse and bundle size reports:
   - Add screenshots and results to `/docs/qa-report.md`
4. Ensure all forms are accessible, ARIA-labeled, and all images have alt text
5. Continue updating `/docs/ai-usage.md` and `/docs/qa-report.md`
6. Maintain site functionality after each change (test locally and on staging)
7. Communicate with the team for reviews and feedback

---

# Sprint 5: Final Review & Polish

## Goal
Ensure all deliverables are present, site is stable, and documentation is complete.

## Tasks
1. Review `/REQUIREMENTS_CHECKLIST.md` and mark off completed items
2. Double-check all `/docs` deliverables (discovery, UX, CMS/analytics evaluation, AI usage, QA report)
3. Take screenshots of cookie consent, analytics dashboard, and CI runs for documentation
4. Conduct manual accessibility and cross-browser checks (Chrome, Firefox, Safari, Edge, mobile)
5. Final deployment and smoke test (test all workflows in production)
6. Communicate with team for reviews and feedback
7. Prepare a final project handoff/readme with links to all deliverables and documentation
