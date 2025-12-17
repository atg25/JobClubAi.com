# CMS Evaluation & Selection

## Overview

This document evaluates three headless CMS platforms for the AInspire Job Club project: **Sanity**, **Contentful**, and **Strapi**.

## Evaluation Criteria

1. **Data Modeling** - Flexibility in schema design
2. **API Performance** - Query speed and developer experience
3. **Editorial Workflow** - Content editor experience
4. **Developer Experience** - Setup, documentation, integration
5. **Pricing** - Free tier and scalability
6. **Integration** - React/TypeScript compatibility
7. **Fit for Project** - Alignment with Job Club needs

---

## 1. Sanity

### Strengths

- **Excellent Data Modeling**: Flexible schema with TypeScript support via `defineType` and `defineField`
- **Portable Text**: Rich text with custom components (perfect for article content)
- **Real-time Collaboration**: Live editing and preview
- **GROQ Query Language**: Powerful, flexible queries with filtering and projections
- **Free Tier**: Generous (100K API requests, 3 users, unlimited documents)
- **Developer Experience**: Clean API, excellent TypeScript support, great documentation
- **Image Pipeline**: Built-in image optimization with `@sanity/image-url`
- **Studio Customization**: Fully customizable CMS UI with desk structure

### Weaknesses

- Learning curve for GROQ (vs GraphQL)
- Studio requires separate deployment (can be embedded)

### Pricing

- **Free**: 100K API requests/month, 3 users
- **Growth**: $99/month (1M requests, 10 users)
- **Team**: $399/month (unlimited)

### Fit for Job Club

✅ **Excellent** - Already implemented with:

- `eventType` schema (name, category, datetime, location, link)
- `resourceType` schema (title, slug, author, body with PortableText)
- `memberProfileType` schema (profile data, URLs, career goals)
- Custom desk structure for content organization

---

## 2. Contentful

### Strengths

- **Mature Platform**: Well-established with extensive documentation
- **GraphQL & REST APIs**: Flexible API options
- **Content Preview**: Built-in preview for editors
- **Robust Permissions**: Enterprise-grade access control
- **Media Management**: Advanced asset organization
- **Internationalization**: Built-in i18n support
- **App Framework**: Extensible UI with custom apps

### Weaknesses

- **Pricing**: More expensive than Sanity for similar features
- **Complex Setup**: Steeper learning curve for advanced features
- **Content Modeling**: Less flexible than Sanity's schema approach
- **Free Tier Limits**: 25K records, 2 locales, 5 users (more restrictive)

### Pricing

- **Free**: 25K records, 48 roles, 5 users
- **Basic**: $300/month (limited features)
- **Premium**: Custom pricing

### Fit for Job Club

⚠️ **Good but overkill** - More features than needed, higher cost, less flexible schema

---

## 3. Strapi

### Strengths

- **Open Source**: Self-hosted option (full control)
- **Traditional CMS Feel**: Familiar to WordPress users
- **GraphQL & REST**: Multiple API options
- **Plugin Ecosystem**: Extensible via plugins
- **Full Control**: Own your data completely if self-hosted
- **Free**: Open source with no API limits on self-hosted

### Weaknesses

- **Self-Hosting Burden**: Requires server management, maintenance, security updates
- **Cloud Pricing**: Expensive cloud offering ($99/month for basic)
- **Less Modern DX**: Not as clean as Sanity for TypeScript/React workflows
- **Content Editing**: Less polished than Sanity or Contentful studio
- **Performance**: Self-hosted performance depends on infrastructure

### Pricing

- **Open Source**: Free (self-hosted)
- **Cloud Pro**: $99/month (3 users, 1M API calls)
- **Cloud Team**: $499/month (10 users, 5M calls)

### Fit for Job Club

❌ **Not Ideal** - Self-hosting adds complexity, cloud pricing high, DX not as good

---

## Comparison Table

| Feature             | Sanity                    | Contentful       | Strapi                      |
| ------------------- | ------------------------- | ---------------- | --------------------------- |
| **Data Modeling**   | ⭐⭐⭐⭐⭐ Excellent      | ⭐⭐⭐⭐ Good    | ⭐⭐⭐ Moderate             |
| **API Performance** | ⭐⭐⭐⭐⭐ GROQ + CDN     | ⭐⭐⭐⭐ GraphQL | ⭐⭐⭐ Self-hosted          |
| **Dev Experience**  | ⭐⭐⭐⭐⭐ Excellent      | ⭐⭐⭐⭐ Good    | ⭐⭐⭐ Moderate             |
| **Editorial UX**    | ⭐⭐⭐⭐⭐ Best-in-class  | ⭐⭐⭐⭐ Strong  | ⭐⭐⭐ Basic                |
| **Pricing**         | ⭐⭐⭐⭐⭐ Best free tier | ⭐⭐⭐ Expensive | ⭐⭐⭐⭐ Free (self-hosted) |
| **TypeScript**      | ⭐⭐⭐⭐⭐ Native         | ⭐⭐⭐⭐ Good    | ⭐⭐⭐ OK                   |
| **Setup Speed**     | ⭐⭐⭐⭐⭐ Fast           | ⭐⭐⭐ Moderate  | ⭐⭐ Slow (self-hosted)     |
| **Fit for Project** | ⭐⭐⭐⭐⭐ Perfect        | ⭐⭐⭐ Overkill  | ⭐⭐ Too complex            |

---

## Final Selection: **Sanity** ✅

### Justification

**Sanity is the clear winner** for the AInspire Job Club project for the following reasons:

1. **Developer Experience**: Best TypeScript integration, clean schema design with `defineType`, and excellent documentation
2. **Flexible Schema**: Perfect for our needs (events, resources, member profiles) with easy-to-define custom fields
3. **Portable Text**: Ideal for rich article content with custom component rendering
4. **GROQ Queries**: Powerful and expressive, easy to filter and shape data
5. **Generous Free Tier**: 100K API requests/month is more than sufficient for our scale
6. **Real-time Collaboration**: Multiple admins can manage content simultaneously
7. **Image Optimization**: Built-in URL builder for responsive images
8. **Custom Studio**: Desk structure allows custom views (e.g., "Missing URLs" filter for member profiles)
9. **Production Ready**: Already implemented and working in the project

### Implementation Status

✅ **Fully Implemented**:

- Sanity Studio deployed at `/studio-ainspire`
- Three schemas: `eventType`, `resourceType`, `memberProfileType`
- GROQ queries for events and resources
- Client configuration with authentication
- Image URL builder for assets
- PortableText rendering for article content
- Custom desk structure with filtered views

### Integration Details

```typescript
// Sanity client configuration
export const client = createClient({
  projectId: "u19u69pp",
  dataset: "production",
  token: process.env.VITE_SANITY_TOKEN,
  useCdn: false,
  apiVersion: "2024-12-12",
});
```

**Project ID**: `u19u69pp`  
**Dataset**: `production`  
**Studio URL**: TBD (Sanity Studio deployment)

---

## Conclusion

Sanity provides the optimal balance of flexibility, performance, developer experience, and cost for the Job Club project. It integrates seamlessly with React/TypeScript/Vite stack and provides all necessary features for content management without unnecessary complexity or cost.
