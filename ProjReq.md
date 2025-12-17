1. Project Overview

Each team will:

    Clone, analyze, and adapt the EAiKW site architecture

    Use Eleventy (11ty) for static generation

    Integrate Sanity as the headless CMS

    Build automations, integrate Discord, and create CRM pipelines

    Follow a complete UX and discovery process

    Use AI to accelerate all phases (research, UX, content, code)

    Deliver a fully functional, production-ready website

The top-performing teams in each category will have their projects selected as the official deployed version. 2. Required Technology Stack
Frontend & Architecture

    Eleventy (11ty)

    Node.js 20+

    CSS structure harvested from EAiKW

    Accessibility & SEO patterns derived from EAiKW

    Minimal JS footprint unless necessary

Backend & CMS

    Sanity headless CMS (required)

    API integration via GROQ, REST, or data-fetch script

Automations & Integrations

    Zapier or Make (at least one automation)

    Discord (required for ALL projects)

    CRM (HubSpot, Airtable, or Notion — required for ALL projects)

CI/CD

    GitHub Actions with linting, testing, Lighthouse, bundle-size checks, and deploy

3. EAiKW Reference Site Requirement

Each team must:

    Clone the EAiKW repo:
    https://github.com/kaw393939/eaikw

    Links to an external site.

    Create a reference/ folder in their project repo containing:

        Eleventy config analysis

        CSS architecture notes

        Accessibility findings

        SEO strategy

        Layout approach

        Performance techniques

        AI-generated harvest notes (harvest-notes.md)

    Use VS Code with AI (“vibe coder”) to:

        Extract reusable techniques

        Assess accessibility practices

        Document how EAiKW improves SEO, performance, and code structure

        Adapt these into the new project

4. Headless CMS Evaluation (Mandatory)

Each team must evaluate Sanity + two other headless CMS options, such as:

    Strapi

    Contentful

    Payload CMS

    Hygraph

    Ghost

    Headless WordPress

    Airtable/Notion (pseudo CMS)

CMS Evaluation Report Must Include:

    Comparison table across:

        Data modeling

        API/querying

        Developer experience

        Editorial workflow

        Pricing & limits

        Integration ease with Eleventy

        Fit for THIS project

    Final selection + justification (Sanity should win, but they must explain why)

Deliverable: docs/cms-evaluation.md 5. Discovery Requirements
Personas (min. 3)

Detailed, AI-assisted but human-refined.
Customer Journey Map

    Primary persona

    Emotional states, pain points, opportunities

Problem Statement & Goals

Clear definition of:

    The audience

    The problem solved

    Success metrics

Competitor/Comparable Analysis

At least 2 reference sites or tools. 6. UX Requirements
Information Architecture

    Sitemap

    Content models

    Navigation map

Wireframes

Low-to-mid fidelity for:

    Home page

    Primary workflow

    One secondary page

Brand Guide

    Logo

    Colors

    Typography

    Tone/voice

    Component samples

7. Implementation Requirements
   Functional Site

Each team must deploy:

    A multi-page Eleventy site

    CMS-driven content

    A live demo URL (GitHub Pages, Vercel, or Netlify)

Workflow Features

Each project has a specific end-to-end workflow; all must function.
Automation

Minimum 1 automation using Zapier/Make, such as:

    Form submission → Discord

    Registration → CRM entry

    Publish event in Sanity → Announcement to Discord

    New member → Email with personalized checklist

CRM Integration (Required across ALL projects)

Each site must integrate with:

    HubSpot (recommended)
    OR

    Airtable
    OR

    Notion database

CRM must receive:

    Form submissions

    Registrations

    Membership/onboarding data

    Real user or sample test data

Discord Integration (Required for ALL projects)

Each site MUST:

    Provide a Discord server or dedicated channels

    Automate at least one base action, e.g.:

        New submission → post in #submissions

        New registrant → post in #events

        New member → post in #introductions

8. Privacy, GDPR, and Legal Requirements (Required)

Every site must:
GDPR-Compliant Cookie Consent Banner

    Load only essential cookies initially

    Delay analytics scripts until consent

    Provide “Accept / Reject / Preferences”

    Link to Privacy Policy page

Privacy Policy Page

Must include:

    What data is collected

    How data is stored (CRM, Sanity, forms)

    Analytics tools used

    How users can request deletion of their data

    Cookie usage

Legal Compliance Checklist

    GDPR-aligned data transparency

    Cookie banner before analytics

    Clear consent logging if analytics are opt-in

    Accessible forms with required labels

    Alt text for all images

    WCAG accessibility support

Deliverable:

    privacy.md or a page on the site

    Screenshot proof of cookie consent being functional

9. Web Analytics Evaluation + Implementation (Required)

Teams must evaluate at least 2 analytics solutions, such as:
Traditional Analytics

    Google Analytics 4

    Matomo

    Plausible

    Fathom

    Cloudflare Web Analytics

Privacy-Focused Alternatives

    Simple Analytics

    Umami

Analytics Evaluation Must Include:

    GDPR compliance

    Cookie requirements

    Cost

    Setup complexity

    Integration with Eleventy

    Integration with consent banner

    Pros/cons for this project

Implementation Requirement

Choose one analytics solution that:

    Supports GDPR consent mode

    Does not load until consent is given

    Tracks basic interactions:

        Page views

        Events (e.g., form submissions)

Deliverables:

    docs/analytics-evaluation.md

    Screenshot of the analytics dashboard with sample data

    Code snippet or config file showing analytics injection into Eleventy layouts

10. QA, Testing & CI/CD

Each team must implement ALL of:

    Linting: JS, CSS, Markdown, formatting

    Playwright Tests: min. 2–3 (homepage + workflow page)

    GitHub Actions CI:

        Quality gates

        Build

        Test

        Lighthouse

        Bundle-size

        Deploy

QA Report

A written QA document including:

    Lighthouse scores

    Bundle size

    CI screenshots or logs

    Test results

    Accessibility notes

Deliverable: docs/qa-report.md 11. AI Usage Documentation

Teams must maintain a clear record of AI usage.

Include:

    UX deliverables

    Code generation

    Research

    Debugging

    Content creation

    Automation setup

Deliverable: docs/ai-usage.md
