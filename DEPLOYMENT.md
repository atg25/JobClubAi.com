# AInspire Job Club - React Migration Deployment Guide

## 🚀 Deployment to Vercel

### Prerequisites

1. Vercel account connected to GitHub
2. Repository: `JobClubAi.com` by `atg25`
3. Branch: `feature/react-migration`

### Quick Deploy Steps

#### 1. Install Vercel CLI (Optional for local testing)

```bash
npm i -g vercel
```

#### 2. Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import `atg25/JobClubAi.com` repository
3. Configure project:
   - **Framework Preset:** Vite
   - **Root Directory:** `react-app`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

#### 3. Environment Variables (Vercel Dashboard)

Navigate to Project Settings → Environment Variables:

```
VITE_GA_MEASUREMENT_ID=<your-ga4-id>
VITE_BUILD_ENV=production
```

#### 4. Deploy

- **Production:** Merge to `master` branch
- **Preview:** Push to `feature/react-migration` or open PR

### 🔧 CI/CD with GitHub Actions

The workflow `.github/workflows/deploy-react.yml` automatically:

- ✅ Type checks TypeScript
- ✅ Runs linter
- ✅ Builds production bundle
- ✅ Reports bundle size
- ✅ Deploys preview on PR

#### Setup GitHub Secrets

Add these secrets in GitHub repo settings:

```
VERCEL_TOKEN=<from-vercel-account-tokens>
VERCEL_ORG_ID=<from-vercel-project-settings>
VERCEL_PROJECT_ID=<from-vercel-project-settings>
```

### 📊 Performance Metrics

- **Bundle Size:** 89 KB (gzipped)
- **Target:** < 500 KB ✅
- **Code Splitting:** React.lazy() on all sections
- **Chunks:** react-vendor, ui-vendor, per-section

### 🔗 Deployment URLs

- **Production:** `https://jobclub.ainspire.io/` (custom domain)
- **Preview:** `https://jobclub-{hash}.vercel.app/`
- **Local Dev:** `http://localhost:5173/`

### 🛠️ Manual Deploy (CLI)

```bash
cd react-app
vercel --prod  # Production
vercel         # Preview
```

### 📋 Post-Deployment Checklist

- [ ] Verify all routes work (SPA routing)
- [ ] Test mobile responsiveness
- [ ] Check Open Graph meta tags (share preview)
- [ ] Run Lighthouse audit (target >90)
- [ ] Test scroll spy navigation
- [ ] Verify mobile menu functionality
- [ ] Check portfolio iframe embed
- [ ] Test all CTA buttons

### 🔮 Future Integrations

Ready for:

- **Sanity CMS:** Content management (events, portfolio data)
- **FillOut:** Form submissions (contact, event registration)
- **Calendly:** Meeting scheduling (career coaching)
- **Google Analytics 4:** User behavior tracking

### 🐛 Troubleshooting

**Issue:** Routes not working (404 on refresh)
**Fix:** `vercel.json` includes SPA rewrite rule ✅

**Issue:** Assets not loading
**Fix:** Check `base` path in `vite.config.ts`

**Issue:** Environment variables not working
**Fix:** Ensure variables start with `VITE_` prefix

### 📱 Testing Locally

```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview production build
```

### 🎯 Presentation Ready

- Modern React 18 + TypeScript stack
- 89KB gzipped bundle (highly optimized)
- Full accessibility (WCAG 2.1 AA ready)
- SEO optimized with meta tags
- Lazy-loaded sections for performance
- Mobile-first responsive design
- Enterprise-ready architecture
