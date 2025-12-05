# Job Club — Customer Journey Map

This map outlines the student journey through Job Club, from first awareness to advocacy. It aligns with the personas in `PERSONA.md` and highlights touchpoints, emotions, pain points, opportunities, recommended automations, and KPIs for each stage.

---

## Journey Stages (overview)
- Awareness — Student discovers Job Club (social, campus, professor, Discord, events)
- Consideration — Learns what Job Club offers; explores resources and events
- Onboarding / Activation — Submits onboarding form, receives personalized checklist, joins Discord
- Engagement — Attends events, completes tasks, connects with mentors
- Retention / Progress — Continues to use resources, publishes portfolio, tracks milestones
- Advocacy — Refers peers, posts wins to Discord, becomes a mentor

---

## Stage 1: Awareness

- Primary goal: Make Job Club discoverable and appealing to students
- Key personas: Aisha (Freshman), Marcus (Senior), Priya (Founder)
- Touchpoints: Flyers, class announcements, faculty email, student orgs, social posts, SEO'd landing page
- Emotions: Curious, cautious, hopeful
- Pain points: Unsure whether program fits their stage; unclear ROI
- Opportunities:
  - Use short, persona-targeted copy on landing page
  - Promote beginner workshops and founder nights separately
  - Add clear CTAs for Onboarding and Discord join
- Recommended KPIs: Landing page views, CTA clicks, Discord join rate, event sign-ups from organic channels

---

## Stage 2: Consideration

- Primary goal: Convert interest into submission or event registration
- Touchpoints: Onboarding page, Events list, Resource previews, Testimonials, Analytics-enabled content
- Emotions: Evaluative, hopeful
- Pain points: Overload of options; uncertainty around next steps to be career-ready
- Opportunities:
  - Show small wins: sample portfolios, one-pager templates
  - Offer “What should I do first?” checklist tailored by persona
  - Use GDPR consent banner before analytics; load analytics after consent
- Recommended KPIs: Onboarding page views, event page clicks, resource downloads, bounce rate

---

## Stage 3: Onboarding / Activation

- Primary goal: Collect profile data and surface a personalized roadmap
- Touchpoints: Onboarding form (Sanity-backed), personalized onboarding email (Zapier/Make), Discord `#jobclub-intros`, CRM entry (HubSpot/Airtable/Notion)
- Emotions: Excited, anxious
- Pain points: Missing professional assets (LinkedIn/GitHub/portfolio/Calendly); unclear immediate tasks
- Opportunities:
  - Automate: Form submission → create CRM record, post intro to Discord, send personalized checklist email
  - Detect missing assets and prioritize checklist items
  - Offer immediate actionable tasks (e.g., create GitHub repo) to drive quick wins
- Recommended Automations:
  - Onboarding Form → CRM create/update
  - Onboarding Form → Send personalized email (Zapier/Make)
  - Onboarding Form → Post to Discord `#jobclub-intros`
- Recommended KPIs: Onboarding submissions, email open/click rates, assets-completion rate (LinkedIn/GitHub/portfolio/Calendly)

---

## Stage 4: Engagement

- Primary goal: Help students make progress via events, mentorship, and resources
- Touchpoints: Workshops, office hours, mentor sessions, resource library, Discord channels, Calendly integrations
- Emotions: Confident, challenged
- Pain points: Scheduling friction, lack of feedback, difficulty prioritizing next tasks
- Opportunities:
  - Offer targeted event tracks (beginners, hiring-ready, founders)
  - Use CRM to surface mentor matches and follow-ups
  - Use Zapier to add booked mentor calls to CRM and post reminders in Discord
- Recommended Automations:
  - Event created in Sanity → Announcement to Discord `#events`
  - Event registration → Add to CRM and Google Calendar (optional)
  - Resource published → Post to Discord `#resources`
- Recommended KPIs: Events attended per user, mentor sessions booked, resources consumed, repeat event attendance

---

## Stage 5: Retention / Progress

- Primary goal: Keep students progressing toward portfolio and hiring milestones
- Touchpoints: Progress emails, milestone badges on profile, mentor follow-ups, cohort check-ins
- Emotions: Motivated, proud
- Pain points: Losing momentum, competing priorities
- Opportunities:
  - Milestone nudges via email and Discord
  - Track progress in CRM fields (e.g., `portfolio_published`, `mentor_assigned`, `workshops_attended`)
  - Celebrate completed milestones publicly (opt-in) to encourage others
- Recommended KPIs: Percent reaching portfolio published, mentor retention, conversion to interviews/offers

---

## Stage 6: Advocacy

- Primary goal: Turn successful students into mentors and referrers
- Touchpoints: Alumni spotlight posts, mentor signup flow, referral CTAs, showcase events
- Emotions: Proud, connected
- Pain points: Time constraints; unclear mentor expectations
- Opportunities:
  - Create clear mentor onboarding and lightweight volunteer roles
  - Offer recognition and small incentives (badges, spotlight posts)
  - Use automation to ask for referrals after milestone achievements
- Recommended KPIs: Referrals per month, mentor signups, content shares

---

## Persona Touchpoint Mapping (quick)
- Aisha (Freshman): Awareness → on-campus/Discord → Onboarding → Beginner workshops → Mentor intro → Portfolio published
- Marcus (Senior): Awareness → Events/hiring panels → Onboarding → Mock interviews → Recruiter intros → Job interviews
- Priya (Founder): Awareness → Founder events → Onboarding → Founder office hours → MVP launch → Investor/mentor intros

---

## Suggested CRM Fields / Events (for tracking & automation)
- `name`, `email`, `major`, `graduation_year`
- `linkedin_url`, `github_url`, `portfolio_url`, `calendly_url`
- `career_goal`, `onboarding_status` (new, in-progress, completed)
- `portfolio_published` (boolean), `mentor_assigned` (id), `workshops_attended` (count)
- Events to emit:
  - `onboarding_submitted`
  - `asset_completed` (asset_name)
  - `event_registered`
  - `mentor_session_booked`

---

## Quick Implementation Priorities (MVP)
1. Build onboarding form + Sanity schema for `memberProfile` and webhook to Zapier/Make
2. Automation: Onboarding → CRM + personalized email + Discord intro
3. Events list + event detail pages in Sanity; automation for Discord announcements
4. Resource library with at least 2 guides and SEO-friendly pages
5. GDPR cookie consent and analytics enabled after consent

---

Document created to support discovery deliverables and align implementation priorities with personas in `PERSONA.md`.
