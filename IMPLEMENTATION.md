# Implementation Checklist - Make Everything Work

This is your practical action list to go from "documented" to "fully functional."

---

## 🔴 CRITICAL - Must Do First

### ✅ 1. Deploy Sanity Studio

**Status**: ✅ COMPLETE - https://ainspire.sanity.studio/

### ✅ 2. Configure Environment Variables in Vercel

**Status**: ✅ COMPLETE - All env vars set in Vercel

### ✅ 3. Initialize Google Analytics

**Status**: ✅ COMPLETE - GA4 loads on app mount

### ✅ 4. Add Register Button to Event Detail Page

**Status**: ✅ COMPLETE - Links to registration form

### 5. Add Content to Sanity

**Current Status**: Empty CMS  
**Action**:

1. Open https://ainspire.sanity.studio/
2. Add at least 3 events with:
   - Name, date, location, description, category
3. Add at least 2 resources/articles
4. Test that they appear on live site

---

## 🟡 HIGH PRIORITY - Core Functionality

### 4. Set Up GitHub Actions Secrets

**Current Status**: CI/CD pipeline exists but will fail without secrets  
**Action**:

1. Go to GitHub repo → Settings → Secrets and variables → Actions
2. Add these secrets:
   ```
   VITE_SANITY_PROJECT_ID=u19u69pp
   VITE_SANITY_DATASET=production
   VITE_SANITY_TOKEN=[token]
   VITE_GA_MEASUREMENT_ID=[GA4 ID]
   VERCEL_TOKEN=[from Vercel account settings]
   VERCEL_ORG_ID=[from Vercel project settings]
   V6RCEL_PROJECT_ID=[from Vercel project settings]
   ```
3. Push a small change to test CI/CD

### 5. Connect Event Registration to Automation

**Current Status**: Form exists but doesn't trigger emails/calendar invites  
**Action Option A - Zapier (Easiest)**:

1. Go to Zapier.com, create account
2. Create new Zap:
   - **Trigger**: Webhook (get webhook URL)
   - **Action 1**: Email by Zapier (send confirmation)
   - **Action 2**: Code by Zapier (generate .ics file)
   - Test with sample data
3. Add webhook to EventRegistrationPage.tsx:
   ```typescript
   // After successful Sanity registration
   a7ait fetch('YOUR_ZAPIER_WEBHOOK_URL', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
       email: formData.email,
       firstName: formData.firstName,
       eventName: event.name,
       eventDate: event.datetime,
       // ... other fields
     })
   });
   ```

**Action Option B - Vercel Edge Function (More Control)**:

1. Create `/api/event-registration.ts` (code in automation-guide.md)
2. Set up nodemailer with Gmail app password
3. Add email credentials to Vercel env vars
4. Call API from EventRegistrationPage

---

## 🟢 MEDIUM PRIORITY - Enhanced Functionality

### 7. Set Up Discord Webhooks

**Current Status**: Documented but not connected  
**Action**:

1. Go to Discord Server → Settings → Integrations → Webhooks
2. Create webhooks for:
   - `#jobclub-intros` → Copy webhook URL
   - `#events` → Copy webhook URL
3. Add to automation (Zapier action or custom function)
4. Test by registering for an event

### 8. Choose and Set Up CRM

**Current Status**: Documented but not implemented  
**Action - Option 1 (Airtable - Easiest)**:

1. Create Airtable base with "Members" and "Registrations" tables
2. Get API key from Airtable account settings
3. Add Airtable action to Zapier workflow
4. Test by submitting a registration

**Action - Option 2 (HubSpot - Most Professional)**:

1. Create free HubSpot account
2. Create custom contact properties (major, gradYear)
3. Get API key from Settings → Integrations
4. Add HubSpot action to Zapier
5. Test integration

### 9. Set Up Google Analytics

**Current Status**: Code exists but no tracking ID  
**Action**:

1. Go to analytics.google.com
2. Create GA4 property for ainspire.io
3. Copy Measurement ID (G-XXXXXXXXXX)
4. Add to Vercel environment variables as `VITE_GA_MEASUREMENT_ID`
5. Add gtag.js script to `index.html`:
   ```html
   <!-- Google tag (gtag.js) -->
   <script
     async
     src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
   ></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag() {
       dataLayer.push(arguments);
     }
     gtag("js", new Date());
     gtag("config", "G-XXXXXXXXXX");
   </script>
   ```

### 10. Run Playwright Tests

**Current Status**: Tests written but not verified  
**Action**:

```bash
npm run build
npm run preview  # In one terminal
npm test         # In another terminal
```

- Fix any failing tests
- Take screenshots of passing tests for documentation

---

## 🔵 NICE TO HAVE - Polish & Optimization

### 11. Add Real Event Data

**Action**:

1. In Sanity Studio, create 6 real events:
   - Workshop: "Portfolio Building 101"
   - Networking: "Industry Mixer with Tech Leaders"
   - Speaker: "Career Panel: AI Engineers"
   - Workshop: "LinkedIn Optimization"
   - Networking: "Coffee Chat Connections"
   - Workshop: "Interview Prep Bootcamp"
2. Add realistic dates (next 30 days)
3. Add locations (NJIT campus buildings)

### 12. Create Sample Resources

**Action**:

1. Write 3 articles in Sanity:
   - "How to Build a Standout Tech Portfolio"
   - "Networking Tips for Introverts"
   - "Landing Your First Tech Internship"
2. Use PortableText formatting (headings, lists, links)
3. Add author names and publish dates

### 13. Implement Join/Onboarding Form

**Current Status**: Placeholder page  
**Action**:

1. Use FillOut.com to create onboarding form
2. Embed in JoinPage.tsx using @fillout/react
3. Connect to Zapier → Sanity → CRM workflow
4. Add welcome email automation

### 14. Take Screenshots for Documentation

**Action**:

1. Homepage on desktop
2. Mobile menu open
3. Event registration form
4. Sanity Studio interface
5. Lighthouse results (use PageSpeed Insights)
6. GitHub Actions passing
7. Playwright test results
8. Add to `/docs/screenshots/` folder

### 15. Test Accessibility

**Action**:

1. Use NVDA/VoiceOver screen reader
2. Navigate entire site with keyboard only
3. Run axe DevTools extension
4. Fix any issues found
5. Document results in qa-report.md

---

## 📋 Testing Checklist

Before calling it "done," verify:

### Frontend

- [ ] Site loads at https://ainspire-smoky.vercel.app/
- [ ] All sections visible and styled correctly
- [ ] Navigation works (scroll spy, mobile menu)
- [ ] Events display from Sanity CMS
- [ ] Resources page shows articles
- [ ] Cookie consent modal appears on first visit
- [ ] Privacy policy page loads

### Event Registration Flow

- [ ] Click "Register" on an event
- [ ] Fill out registration form
- [ ] Form submits successfully
- [ ] Registration appears in Sanity Studio
- [ ] Confirmation email received (if automation set up)
- [ ] .ics calendar file attached (if automation set up)
- [ ] CRM record created (if integrated)
- [ ] Discord notification posted (if integrated)

### Performance

- [ ] Lighthouse score ≥ 90 on all categories
- [ ] Page loads in < 2 seconds
- [ ] No console errors
- [ ] Mobile responsive on iPhone and Android

### CI/CD

- [ ] Push to GitHub triggers GitHub Actions
- [ ] All checks pass (lint, type check, build, Lighthouse)
- [ ] Auto-deploys to Vercel
- [ ] Preview deployments work for PRs

---

## 🚨 Common Issues & Solutions

### Issue: "Can't connect to Sanity"

**Solution**: Check VITE_SANITY_TOKEN is valid. Get new token from Sanity project settings.

### Issue: "Environment variables not working"

**Solution**:

1. Make sure they start with `VITE_` prefix
2. Redeploy after adding to Vercel
3. Clear browser cache

### Issue: "Event registration doesn't send email"

**Solution**: Webhook not configured. Follow step 5 above.

### Issue: "GitHub Actions failing"

**Solution**: Add all required secrets to GitHub (step 4).

### Issue: "Tests failing"

**Solution**:

1. Make sure build is running (`npm run preview`)
2. Check test expects match actual implementation
3. Update selectors if components changed

---

## ⏱️ Time Estimates

| Task                            | Time      | Priority        |
| ------------------------------- | --------- | --------------- |
| Deploy Sanity Studio            | 10 min    | 🔴 Critical     |
| Add env vars to Vercel          | 5 min     | 🔴 Critical     |
| Add 3 events to Sanity          | 15 min    | 🔴 Critical     |
| Set up GitHub secrets           | 10 min    | 🟡 High         |
| Connect registration automation | 1-2 hours | 🟡 High         |
| Fix event detail page           | 30 min    | 🟡 High         |
| Set up Discord webhooks         | 30 min    | 🟢 Medium       |
| Set up CRM (Airtable)           | 1 hour    | 🟢 Medium       |
| Set up Google Analytics         | 20 min    | 🟢 Medium       |
| Run and verify tests            | 30 min    | 🟢 Medium       |
| Create sample content           | 1 hour    | 🔵 Nice to have |
| Take screenshots                | 20 min    | 🔵 Nice to have |

**Minimum Viable (Critical + High)**: ~3-4 hours  
**Fully Functional (+ Medium)**: ~6-7 hours  
**Polished (+ Nice to have)**: ~8-9 hours

---

## 🎯 Quick Start (Next 30 Minutes)

If you only have 30 minutes right now:

1. **Deploy Sanity Studio** (10 min)

   ```bash
   cd studio-ainspire && npm install && npm run deploy
   ```

2. **Add Environment Variables to Vercel** (5 min)

   - Sanity Project ID, Dataset, Token
   - Trigger redeploy

3. **Add 3 Test Events in Sanity** (15 min)
   - Open deployed studio
   - Create events with realistic data
   - Refresh live site to see them appear

This gets you a functioning site with real content. Then tackle automation/integrations when you have more time.

---

## 📞 Need Help?

**Sanity Issues**: https://www.sanity.io/docs  
**Vercel Deployment**: https://vercel.com/docs  
**Zapier Webhooks**: https://zapier.com/help/doc/how-get-started-webhooks  
**GitHub Actions**: https://docs.github.com/en/actions

---

**Last Updated**: December 17, 2025  
**Status**: All code complete, needs configuration & deployment
