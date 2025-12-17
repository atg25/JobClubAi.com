# AI-Generated Harvest Notes

Reusable patterns, code snippets, and strategies for the Job Club project.

## CSS Architecture Patterns

### Container Pattern

```tsx
// Reusable container component with max-width
export const Container = ({ children, className = "" }) => (
  <div className={`max-w-unified mx-auto ${className}`}>{children}</div>
);
```

### Glassmorphic Card

```tsx
// Glassmorphic effect with backdrop blur
<div className="backdrop-blur-md bg-white/5 rounded-xl border border-white/10 p-6">
  {/* Card content */}
</div>
```

### Gradient Background

```tsx
// Orange gradient for emphasis
style={{
  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)'
}}
```

## Accessibility Patterns

### Skip to Main Content

```tsx
<a
  href="#main"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600"
>
  Skip to main content
</a>
```

### Keyboard Navigation Handler

```typescript
const handleKeyDown = (e: React.KeyboardEvent, callback: () => void) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    callback();
  }
};
```

### Focus Management

```typescript
// Close menu and restore focus on Escape
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === "Escape") {
    setIsOpen(false);
    triggerRef.current?.focus();
  }
};
```

## Performance Patterns

### Lazy Loading Sections

```tsx
import { lazy, Suspense } from "react";

const HeroSection = lazy(() => import("./components/HeroSection"));

// With fallback
<Suspense fallback={<SectionLoader />}>
  <HeroSection />
</Suspense>;
```

### Manual Code Splitting (Vite)

```javascript
rollupOptions: {
  output: {
    manualChunks: {
      'react-vendor': ['react', 'react-dom'],
      'ui-vendor': ['@headlessui/react', 'zustand']
    }
  }
}
```

### Asset Optimization

```javascript
build: {
  assetsInlineLimit: 4096, // Inline assets < 4kb
  minify: 'terser',
  cssMinify: true
}
```

## SEO Patterns

### Meta Tags Template

```html
<!-- Essential meta tags -->
<meta name="description" content="150-160 character description" />
<meta property="og:title" content="Page Title" />
<meta property="og:description" content="Description" />
<meta property="og:image" content="https://domain.com/og-image.jpg" />
<meta name="twitter:card" content="summary_large_image" />
```

### Page Tracking (React Router)

```typescript
function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    trackPageview(location.pathname);
  }, [location]);
  return null;
}
```

## Sanity CMS Patterns

### Schema Definition

```typescript
import { defineType, defineField } from "sanity";

export const eventType = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "datetime", type: "datetime" }),
    // ... more fields
  ],
});
```

### GROQ Query

```typescript
export const EVENTS_QUERY = `*[_type == "event"] | order(datetime desc) [0...6] {
  _id,
  name,
  datetime,
  location
}`;
```

### Client Setup

```typescript
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-12-12",
});
```

## Responsive Patterns

### Mobile Menu Toggle

```tsx
const [isOpen, setIsOpen] = useState(false);

// Hamburger button
<button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
  <div className={`hamburger ${isOpen ? "open" : ""}`} />
</button>;
```

### Breakpoint Usage

```tsx
// Mobile-first approach
<div className="px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

## TypeScript Patterns

### Interface Definition

```typescript
interface Event {
  _id: string;
  name: string;
  datetime: string;
  location?: string;
  category: "workshop" | "networking" | "speaker";
}
```

### Props with Children

```typescript
interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}
```

---

**Last Updated**: December 17, 2025  
**AI Tools Used**: GitHub Copilot, ChatGPT, Claude  
**Purpose**: Reusable patterns for future projects
