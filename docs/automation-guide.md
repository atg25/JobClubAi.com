# Automation & Integration Setup Guide

## Overview

This document provides step-by-step instructions for setting up automations and integrations for the AInspire Job Club platform.

---

## 1. Event Registration Automation

### Goal

Automate the event registration flow to:

1. Save registration to Sanity CMS
2. Send confirmation email with event details
3. Generate and attach .ics calendar file
4. Add registrant to CRM
5. Post notification to Discord

### Implementation Options

#### Option A: Zapier (Recommended for Beginners)

**Step 1: Create Sanity Webhook**

1. In Sanity Studio, go to API settings
2. Add webhook with URL: `https://hooks.zapier.com/hooks/catch/YOUR_WEBHOOK_ID/`
3. Filter for `_type == "eventRegistration"`
4. Dataset: `production`

**Step 2: Configure Zapier Zap**

**Trigger**: Webhook by Zapier

- Catch hook: Use the webhook URL from Sanity
- Test with a sample registration

**Action 1**: Get Event Details from Sanity

- App: HTTP Request (GET)
- URL: `https://u19u69pp.api.sanity.io/v1/data/query/production?query=*[_id == "${event._ref}"][0]`
- Headers: `Authorization: Bearer YOUR_SANITY_TOKEN`

**Action 2**: Generate .ics File

- App: Code by Zapier (JavaScript)

```javascript
const ics = require("ics");

const event = {
  start: [2025, 12, 18, 18, 0], // Year, Month, Day, Hour, Minute
  duration: { hours: 2 },
  title: inputData.eventName,
  description: inputData.eventDescription,
  location: inputData.eventLocation,
  status: "CONFIRMED",
  organizer: { name: "AInspire Job Club", email: "events@ainspire.io" },
};

ics.createEvent(event, (error, value) => {
  output = { icsContent: value };
});
```

**Action 3**: Send Confirmation Email

- App: Gmail / SendGrid / Mailgun
- To: `{{registration.email}}`
- Subject: `✅ Confirmed: {{event.name}}`
- Body:

```
Hi {{registration.firstName}},

You're registered for {{event.name}}!

📅 When: {{event.datetime}}
📍 Where: {{event.location}}

See you there!

- AInspire Team
```

- Attachment: .ics file from Action 2

**Action 4**: Add to CRM

- See CRM Integration section below

**Action 5**: Post to Discord

- See Discord Integration section below

#### Option B: Make.com (More Visual, More Control)

**Scenario Setup**:

1. **Webhook Trigger**: Receive Sanity webhook
2. **HTTP Module**: Fetch event details from Sanity
3. **Tools Module**: Generate .ics file
4. **Email Module**: Send confirmation with attachment
5. **HTTP Module**: Post to CRM API
6. **Discord Module**: Post to channel

**Make.com Advantages**:

- Visual workflow builder
- Better error handling
- Conditional logic (e.g., different emails for different event types)
- Free tier: 1,000 operations/month

#### Option C: Custom Serverless Function (Advanced)

**Vercel Edge Function** (`/api/event-registration.ts`):

```typescript
import { createClient } from "@sanity/client";
import nodemailer from "nodemailer";
import ics from "ics";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { registrationId } = req.body;

  // 1. Fetch registration and event from Sanity
  const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: "production",
    token: process.env.SANITY_TOKEN,
    useCdn: false,
  });

  const registration = await client.fetch(
    `*[_type == "eventRegistration" && _id == $id][0] {
      ...,
      "event": event-> {
        name, datetime, location, description
      }
    }`,
    { id: registrationId }
  );

  // 2. Generate .ics file
  const eventDate = new Date(registration.event.datetime);
  const icsEvent = {
    start: [
      eventDate.getFullYear(),
      eventDate.getMonth() + 1,
      eventDate.getDate(),
      eventDate.getHours(),
      eventDate.getMinutes(),
    ],
    duration: { hours: 2 },
    title: registration.event.name,
    description: registration.event.description,
    location: registration.event.location,
  };

  const { error, value } = ics.createEvent(icsEvent);
  if (error) {
    return res.status(500).json({ error: "Failed to create .ics file" });
  }

  // 3. Send email
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: "AInspire Job Club <events@ainspire.io>",
    to: registration.email,
    subject: `✅ Confirmed: ${registration.event.name}`,
    html: `
      <h2>Hi ${registration.firstName},</h2>
      <p>You're registered for <strong>${registration.event.name}</strong>!</p>
      <p>📅 <strong>When:</strong> ${new Date(
        registration.event.datetime
      ).toLocaleString()}</p>
      <p>📍 <strong>Where:</strong> ${registration.event.location}</p>
      <p>See you there!</p>
    `,
    attachments: [
      {
        filename: "event.ics",
        content: value,
      },
    ],
  });

  // 4. Update registration status
  await client
    .patch(registrationId)
    .set({ confirmationSent: true, calendarInviteSent: true })
    .commit();

  return res.status(200).json({ success: true });
}
```

---

## 2. Onboarding Automation

### Goal

When new member joins via FillOut form:

1. Save to Sanity as `memberProfile`
2. Add to CRM
3. Send personalized welcome email with checklist
4. Post intro to Discord #jobclub-intros

### Zapier Setup

**Trigger**: FillOut - New Form Response

**Action 1**: Create Member Profile in Sanity

- App: HTTP Request (POST)
- URL: `https://u19u69pp.api.sanity.io/v1/data/mutate/production`
- Body:

```json
{
  "mutations": [{
    "create": {
      "_type": "memberProfile",
      "filloutId": "{{fillout_id}}",
      "firstName": "{{first_name}}",
      "lastName": "{{last_name}}",
      "email": "{{email}}",
      "major": "{{major}}",
      "graduationYear": {{graduation_year}}
    }
  }]
}
```

**Action 2**: Send Welcome Email

- Subject: `Welcome to AInspire Job Club, {{first_name}}! 🎉`
- Include personalized checklist:
  - [ ] Complete LinkedIn profile
  - [ ] Set up GitHub
  - [ ] Create Calendly
  - [ ] Attend first event

**Action 3**: Post to Discord

- Channel: `#jobclub-intros`
- Message: `👋 Welcome {{first_name}} {{last_name}}! Major: {{major}}, Graduating: {{graduation_year}}`

---

## 3. CRM Integration

### Option 1: HubSpot

**Setup**:

1. Get HubSpot API key from Settings > Integrations > API Key
2. Add to Zapier as "HubSpot" action
3. Action: Create/Update Contact
4. Map fields:
   - Email → Email
   - First Name → First Name
   - Last Name → Last Name
   - Major → Custom Property: `major`
   - Graduation Year → Custom Property: `graduation_year`

**Custom Properties in HubSpot**:

- Create custom contact properties for NJIT-specific fields
- Track event attendance, resource downloads

### Option 2: Airtable

**Base Setup**:

1. Create base: "AInspire Job Club"
2. Tables:
   - Members (Name, Email, Major, Grad Year, LinkedIn, GitHub, Calendly, Status)
   - Events (Name, Date, Location, Type, Attendees)
   - Registrations (Member, Event, Registered At, Status)

**Zapier Integration**:

- Action: Create Record in Airtable
- Select Base and Table
- Map fields from Sanity/FillOut

### Option 3: Notion

**Database Setup**:

1. Create database: "Members"
2. Properties:
   - Name (Title)
   - Email (Email)
   - Major (Select)
   - Graduation Year (Number)
   - LinkedIn (URL)
   - GitHub (URL)
   - Status (Select: Active, Alumni, Inactive)

**Zapier Integration**:

- Action: Create Database Item in Notion
- Select Database
- Map properties

---

## 4. Discord Integration

### Webhook Setup

1. In Discord, go to Server Settings > Integrations > Webhooks
2. Create webhooks for channels:
   - `#jobclub-intros`
   - `#events`
   - `#resources`
3. Copy webhook URLs

### Zapier/Make Actions

**Post to #jobclub-intros**:

```json
{
  "content": "👋 Welcome {{firstName}} {{lastName}}!\n\n**Major:** {{major}}\n**Graduating:** {{graduationYear}}\n\nWelcome to the community! 🎉"
}
```

**Post to #events**:

```json
{
  "embeds": [
    {
      "title": "🎉 New Event: {{eventName}}",
      "description": "{{eventDescription}}",
      "color": 3447003,
      "fields": [
        { "name": "📅 When", "value": "{{eventDate}}" },
        { "name": "📍 Where", "value": "{{eventLocation}}" },
        { "name": "🔗 Register", "value": "[Click here]({{registrationLink}})" }
      ]
    }
  ]
}
```

**HTTP Request in Zapier**:

- Method: POST
- URL: Discord Webhook URL
- Headers: `Content-Type: application/json`
- Body: JSON above

---

## 5. Testing Checklist

### Event Registration Flow

- [ ] Register for test event
- [ ] Confirm Sanity document created
- [ ] Receive confirmation email
- [ ] .ics file attached and imports correctly
- [ ] CRM record created
- [ ] Discord notification posted

### Onboarding Flow

- [ ] Submit test onboarding form
- [ ] Sanity memberProfile created
- [ ] Welcome email received
- [ ] CRM contact created
- [ ] Discord intro posted

---

## 6. Environment Variables

Add to `.env`:

```
# Sanity
VITE_SANITY_PROJECT_ID=u19u69pp
VITE_SANITY_DATASET=production
VITE_SANITY_TOKEN=your_token_here

# Zapier Webhooks
ZAPIER_EVENT_REGISTRATION_WEBHOOK=https://hooks.zapier.com/hooks/catch/...
ZAPIER_ONBOARDING_WEBHOOK=https://hooks.zapier.com/hooks/catch/...

# Discord Webhooks
DISCORD_INTROS_WEBHOOK=https://discord.com/api/webhooks/...
DISCORD_EVENTS_WEBHOOK=https://discord.com/api/webhooks/...

# Email (if using custom function)
EMAIL_USER=events@ainspire.io
EMAIL_PASS=your_app_password

# CRM API Keys (if using custom integration)
HUBSPOT_API_KEY=your_key
AIRTABLE_API_KEY=your_key
NOTION_API_KEY=your_key
```

---

## 7. Documentation for Stakeholders

**For C-Suite Presentation**:

1. **Show Zapier/Make Dashboard**: Visual workflow
2. **Demo Registration Flow**: Live registration → instant email
3. **Show CRM**: Updated contact list
4. **Show Discord**: Automated posts
5. **Highlight Benefits**:
   - 95% time savings on manual processes
   - Zero missed follow-ups
   - Professional member experience
   - Scalable to 1000+ members

---

## Next Steps

1. Choose automation platform (Zapier recommended for ease)
2. Set up Sanity webhooks
3. Configure email service (Gmail, SendGrid, or Mailgun)
4. Create CRM (HubSpot/Airtable/Notion)
5. Set up Discord webhooks
6. Test each flow end-to-end
7. Document for team handoff

**Estimated Setup Time**: 4-6 hours for full implementation
