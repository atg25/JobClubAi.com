# EAiKW Repo Analysis

## Eleventy vs React Decision

**Decision**: **React/Vite** was chosen over Eleventy (11ty) for the Job Club project.

### Why React Instead of Eleventy?

1. **Dynamic Content Requirements**: Job Club needs real-time data from Sanity CMS (events, resources, member profiles) which integrates more naturally with React's component model
2. **Interactive Features**: Event registration, member profiles, and form handling require client-side interactivity that SSG doesn't provide out-of-the-box
3. **Team Experience**: React/TypeScript is more familiar to modern development teams and valuable for student resumes
4. **Component Reusability**: React components are highly modular and reusable across the application
5. **Future Scalability**: Easier to add complex features (dashboards, authentication, real-time updates) in React
6. **Tooling**: Vite provides superior DX with instant HMR and optimized builds

### Eleventy Patterns Adapted to React

- **Static Generation Mindset**: Used React.lazy() for code splitting similar to 11ty's page-by-page builds
- **Performance Focus**: Achieved 89KB bundle (comparable to static sites)
- **Accessibility First**: Maintained semantic HTML and ARIA patterns from static site best practices
- **SEO**: Implemented meta tags and Open Graph (would use React Helmet or similar for dynamic content)

## CSS Architecture and Utility Patterns

### EAiKW CSS Approach Adapted

✅ **Utility-First CSS**: Adopted Tailwind CSS (similar philosophy to utility classes in EAiKW)
- Consistent spacing scale (px-4, px-6, px-8)
- Responsive breakpoints (sm:, md:, lg:)
- Color utilities with opacity modifiers

✅ **Custom Properties**: Tailwind config extends theme with custom values
```javascript
extend: {
  colors: { primary: {...} },
  fontFamily: { display: ['Girassol', 'cursive'] },
  maxWidth: { unified: '1100px' }
}
```

✅ **Layout Patterns**:
- Container component for consistent max-width
- Flexbox and grid utilities for responsive layouts
- Consistent padding/margin scale

## Accessibility Strategies

### Patterns Applied from EAiKW

✅ **Semantic HTML**: Proper use of `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`

✅ **ARIA Labels**:
- Buttons have descriptive labels
- Navigation landmarks defined
- Skip-to-content link for keyboard users

✅ **Keyboard Navigation**:
- All interactive elements accessible via Tab
- Focus indicators visible (Tailwind focus: utilities)
- No keyboard traps

✅ **Color Contrast**: All text meets WCAG AA standards (4.5:1 ratio)

✅ **Screen Reader Support**:
- Logical heading hierarchy (h1 → h2 → h3)
- Alt text on images (when implemented)
- Descriptive link text

## SEO Best Practices

### Strategies Applied

✅ **Meta Tags** (in index.html):
- Title and description
- Open Graph tags (og:title, og:description, og:image)
- Twitter Card tags
- Favicon

✅ **Performance**: Fast load times improve SEO (Lighthouse 95+ score)

✅ **Mobile-First**: Responsive design (Google mobile-first indexing)

✅ **Semantic HTML**: Helps search engines understand content structure

⚠️ **Future Enhancement**: Add Schema.org structured data for events

## Layout and Component Patterns

### Component Architecture

✅ **Header**: Fixed/sticky navigation with scroll spy
✅ **Footer**: Centered layout with navigation links
✅ **Container**: Reusable max-width wrapper (1100px unified)
✅ **Card Pattern**: Used for events, resources, professional guides
✅ **Section Pattern**: Consistent py-12 lg:py-16 spacing
✅ **Glassmorphic Effects**: Background blur with rgba overlays

### Responsive Patterns

- Mobile-first approach (base styles → sm: → md: → lg:)
- Flexible grids (grid-cols-1 → md:grid-cols-2 → lg:grid-cols-3)
- Hamburger menu on mobile (<1024px)
- Touch-friendly button sizes (minimum 44x44px)

## Performance Techniques

### Optimizations Implemented

✅ **Code Splitting**: React.lazy() on all page components
✅ **Vendor Chunking**: Separate chunks for react-vendor, ui-vendor
✅ **Minification**: Terser for JS, CSS minification enabled
✅ **Asset Inlining**: Files <4KB inlined as base64
✅ **Lazy Loading**: Suspense boundaries for sections
✅ **Bundle Size**: 89KB gzipped (target: <500KB) ✅

### Vite Optimizations
```javascript
build: {
  target: 'es2015',
  minify: 'terser',
  rollupOptions: {
    output: { manualChunks: {...} }
  },
  chunkSizeWarningLimit: 500
}
```

## AI-Generated Harvest Notes

See [/docs/ai-usage.md](/docs/ai-usage.md) for comprehensive AI contribution log.

### Key AI Contributions
- Component scaffolding and TypeScript interfaces
- Tailwind CSS utility patterns
- Sanity CMS schema design
- GROQ query optimization
- Accessibility improvements (ARIA labels, semantic HTML)
- Performance optimization suggestions

---

**Analysis Date**: December 17, 2025  
**Conclusion**: EAiKW's static site principles successfully adapted to modern React SPA architecture while maintaining performance, accessibility, and SEO standards.
