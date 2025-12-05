# Technical Implementation Patterns

Reusable code patterns, architectural solutions, and best practices for modern web development.

---

## 1. BUILD & BUNDLING STRATEGY

### esbuild Configuration for Feature Bundles

Create separate bundles per feature to reduce initial load and improve caching:

```javascript
import esbuild from "esbuild";

function buildJS(entryPoint, outfile) {
  return esbuild.build({
    entryPoints: [entryPoint],
    bundle: true,
    minify: true,
    sourcemap: true,
    target: ["es2020"],
    format: "iife", // Immediately-invoked function - safe global scope
    platform: "browser",
    outfile,
  });
}

// Build multiple features in parallel
await Promise.all([
  buildJS("src/js/mobile-menu.js", "_site/js/mobile-menu.bundle.js"),
  buildJS("src/js/smooth-scroll.js", "_site/js/smooth-scroll.bundle.js"),
  buildJS(
    "src/js/projects-enhanced.js",
    "_site/js/projects-enhanced.bundle.js"
  ),
]);
```

**Key Pattern**: IIFE format prevents global namespace pollution, `minify: true` auto-compresses, sourcemaps enable production debugging.

### npm Task Orchestration with Parallel Execution

```json
{
  "scripts": {
    "build:css": "tailwindcss -i ./src/css/tailwind.css -o ./_site/css/main.css --minify",
    "build:js": "node build-alpine.js",
    "build:eleventy": "eleventy",
    "build": "npm-run-all --parallel build:css:prod build:js && npm run build:eleventy",
    "dev": "npm run build:eleventy && npm-run-all --parallel watch:css watch:js dev:eleventy"
  }
}
```

**Pattern**: Use `npm-run-all --parallel` to run independent tasks concurrently (CSS, JS, Eleventy separately), then sequence dependent tasks.

---

## 2. CSS ARCHITECTURE

### CSS Custom Properties System

Centralized variable system for consistency and rapid updates:

```css
:root {
  /* Spacing Scale (8px base) */
  --space-xs: 0.25rem; /* 4px */
  --space-sm: 0.5rem; /* 8px */
  --space-md: 0.75rem; /* 12px */
  --space-lg: 1rem; /* 16px */
  --space-xl: 1.5rem; /* 24px */
  --space-2xl: 2rem; /* 32px */
  --space-3xl: 2.5rem; /* 40px */
  --space-4xl: 3rem; /* 48px */
  --space-5xl: 4rem; /* 64px */

  /* Fluid Typography with clamp() - scales with viewport */
  --fluid-display: clamp(2rem, 6vw + 1rem, 3.5rem); /* 32px-56px */
  --fluid-h1: clamp(1.75rem, 5vw + 0.5rem, 3rem); /* 28px-48px */
  --fluid-h2: clamp(1.5rem, 4vw + 0.5rem, 2.25rem); /* 24px-36px */
  --fluid-body: clamp(1rem, 0.5vw + 0.75rem, 1.125rem); /* 16px-18px */

  /* Transition Timing - Material Design easing */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1);

  /* Shadow Hierarchy */
  --shadow-subtle: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-medium: 0 4px 12px rgba(16, 21, 34, 0.08), 0 2px 4px rgba(16, 21, 34, 0.04);
  --shadow-strong: 0 24px 48px rgba(16, 21, 34, 0.12), 0 12px 24px rgba(16, 21, 34, 0.08);
}
```

**Pattern**: Single source of truth for spacing, typography, timing, shadows. One variable change updates entire app.

### Fluid Typography with clamp()

Eliminate media query breakpoints for typography:

```css
/* clamp(minimum, preferred, maximum) */
.text-display {
  font-size: clamp(2rem, 6vw + 1rem, 3.5rem); /* Min: 32px, Max: 56px */
  line-height: 1.05;
  letter-spacing: -0.025em;
}

.text-body {
  font-size: clamp(
    1rem,
    0.5vw + 0.75rem,
    1.125rem
  ); /* 16px-18px smooth scaling */
  line-height: 1.7;
}
```

**Advantage**: Smooth scaling at every viewport size, no jumpy breakpoints. Scales automatically based on viewport width.

### CSS Grid with Dynamic Gaps

```css
.swiss-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--swiss-grid-gutter); /* Dynamic gap from variable */
  padding-left: var(--swiss-grid-margin);
  padding-right: var(--swiss-grid-margin);
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}

/* Asymmetric grid for hero sections */
.grid-asymmetric {
  display: grid;
  grid-template-columns: 5fr 7fr; /* 5:7 ratio creates visual tension */
  gap: clamp(2rem, 4vw, 4rem); /* Responsive gap */
}

@media (max-width: 768px) {
  .grid-asymmetric {
    grid-template-columns: 1fr; /* Stack on mobile */
  }
}
```

**Pattern**: Use CSS variables for gaps/margins, asymmetric ratios create visual interest, responsive collapse to single column.

### Transform-Based Animations (GPU-Accelerated)

Only animate transform and opacity for 60fps performance:

```css
.hover-lift {
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.hover-lift:hover {
  transform: translateY(-4px); /* Only transform - GPU accelerated */
  box-shadow: var(--shadow-hover);
}

.hover-scale {
  transition: transform var(--transition-base);
}

.hover-scale:hover {
  transform: scale(1.02); /* Scale instead of width/height changes */
}

/* Complex animation: rotate + translate */
.geometric-reveal:hover {
  transform: translateY(0) rotate(45deg); /* Combine transforms */
}
```

**Key**: Use `transform` and `opacity` only. Avoid animating width, height, left, top, padding (triggers layout recalculation).

### View Transitions API with Fallback

```css
/* Progressive enhancement - animations only for browsers that support */
@supports (view-transition-name: none) {
  ::view-transition-old(root),
  ::view-transition-new(root) {
    animation-duration: 0.3s;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Pattern**: Use `@supports` for feature detection, `@media (prefers-reduced-motion)` respects accessibility preferences.

### Scroll-Driven Animations (CSS-only)

```css
/* Animate elements as they scroll into view */
@supports (animation-timeline: view()) {
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .scroll-animate {
    animation: fade-in linear;
    animation-timeline: view();
    animation-range: entry 0% cover 30%; /* Trigger during first 30% of viewport visibility */
  }
}
```

**Advantage**: No JavaScript needed, browser handles scroll efficiency.

---

## 3. JAVASCRIPT PATTERNS

### Class-Based Encapsulation Pattern

Each feature is a self-contained class with no global state:

```javascript
class MobileMenu {
  constructor() {
    this.isOpen = false;
    this.menuButton = null;
    this.menuOverlay = null;
    this.init();
  }

  init() {
    // Wait for DOM ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.setup());
    } else {
      this.setup();
    }
  }

  setup() {
    this.menuButton = document.querySelector(
      '[data-testid="mobile-menu-button"]'
    );
    this.menuOverlay = document.getElementById("mobile-menu");

    if (!this.menuButton || !this.menuOverlay) {
      console.warn("Mobile menu elements not found");
      return;
    }

    this.menuButton.addEventListener("click", () => this.toggle());
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen) this.close();
    });
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  open() {
    this.isOpen = true;
    this.menuOverlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = this.getScrollbarWidth() + "px";
  }

  close() {
    this.isOpen = false;
    this.menuOverlay.classList.add("hidden");
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  }

  getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  }
}

// Auto-initialize
new MobileMenu();
```

**Pattern**: Self-contained class, no global state pollution, automatic DOM ready handling, encapsulated cleanup.

### Intersection Observer for Scroll Animations

```javascript
class ScrollAnimator {
  constructor() {
    this.observer = null;
    this.cards = document.querySelectorAll("[data-card]");
    this.init();
  }

  init() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% visible
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const card = entry.target;
          const index = parseInt(card.dataset.index) || 0;

          // Staggered animation: delay increases per card
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, index * 100); // 100ms between each card

          // Stop observing after animation
          this.observer.unobserve(card);
        }
      });
    }, options);

    this.cards.forEach((card) => this.observer.observe(card));
  }
}

new ScrollAnimator();
```

**Pattern**: Observe elements as they enter viewport, stagger animations based on index, unobserve after to free memory.

### Event Delegation for Performance

Use single listener instead of one per element:

```javascript
// Instead of:
// document.querySelectorAll("a").forEach(link => link.addEventListener(...))

// Use event delegation:
document.addEventListener("click", (e) => {
  const anchor = e.target.closest('a[href^="#"]:not([href="#"])');

  if (!anchor) return;

  const targetId = anchor.getAttribute("href");
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    e.preventDefault();
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    history.pushState(null, null, targetId); // Update URL without reload
  }
});
```

**Advantage**: Single listener works for dynamic content, better memory efficiency, automatic cleanup.

### Alpine.js for Reactive State

```javascript
import Alpine from "alpinejs";
import focus from "@alpinejs/focus";

Alpine.plugin(focus);

Alpine.data("menuState", () => ({
  open: false,

  init() {
    this.$watch("open", (value) => {
      if (value) {
        this.lockScroll();
      } else {
        this.unlockScroll();
      }
    });
  },

  toggle() {
    this.open = !this.open;
  },

  lockScroll() {
    document.body.style.overflow = "hidden";
  },

  unlockScroll() {
    document.body.style.overflow = "";
  },
}));

Alpine.start();
```

**Pattern**: HTML-based reactive data, `$watch` for side effects, automatic cleanup.

### Feature Detection Pattern

```javascript
// Check if View Transitions API is supported
function supportsViewTransitions() {
  return typeof document !== "undefined" && "startViewTransition" in document;
}

// Use feature
if (supportsViewTransitions()) {
  document.startViewTransition(async () => {
    // Smooth transition animation
    const response = await fetch(url);
    const html = await response.text();
    // Update DOM
  });
} else {
  // Fallback to standard navigation
  window.location.href = url;
}
```

**Pattern**: Detect capability, use if available, gracefully degrade otherwise.

### Rate-Limited Analytics

```javascript
const rateLimiter = {
  queue: [],
  maxPerMinute: 10,

  canSend() {
    const now = Date.now();
    const oneMinuteAgo = now - 60000;

    // Remove old entries older than 1 minute
    this.queue = this.queue.filter((timestamp) => timestamp > oneMinuteAgo);

    if (this.queue.length < this.maxPerMinute) {
      this.queue.push(now);
      return true;
    }

    return false;
  },
};

function sendMetric(metric) {
  if (!rateLimiter.canSend()) {
    console.warn("Rate limit exceeded");
    return;
  }

  // Use sendBeacon for reliable delivery (survives page unload)
  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/analytics", JSON.stringify(metric));
  }
}
```

**Pattern**: Prevent analytics spam, use sendBeacon for reliability, efficient queue management.

---

## 4. RESPONSIVE DESIGN PATTERNS

### Fluid Spacing with clamp()

```css
/* Container padding scales with viewport */
.container {
  padding-left: clamp(1rem, 4vw, 2rem);
  padding-right: clamp(1rem, 4vw, 2rem);
}

/* Section spacing scales smoothly */
.section {
  margin-top: clamp(4rem, 8vw, 8rem);
  margin-bottom: clamp(4rem, 8vw, 8rem);
}

/* Gap in grid scales with viewport */
.grid {
  display: grid;
  gap: clamp(1rem, 3vw, 3rem);
}
```

**Benefit**: Automatic responsive scaling without media queries, smoother on all screen sizes.

### Grid Collapse to Single Column

```css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-3xl);
}

/* Or explicit mobile handling: */
@media (max-width: 768px) {
  .grid-2col {
    grid-template-columns: 1fr;
  }
}
```

**Pattern**: `auto-fit` + `minmax()` auto-collapses grid, or use explicit breakpoint media queries.

### Touch Target Sizing (WCAG Compliance)

```css
.btn {
  /* Minimum 44x44px for touch targets */
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem; /* Additional padding around hit area */
}

/* Icon buttons */
.icon-btn {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

**Standard**: All interactive elements should be at least 44x44px for touch accessibility.

---

## 5. PERFORMANCE OPTIMIZATIONS

### Content Visibility for Off-Screen Performance

```css
/* Browsers skip rendering off-screen elements */
[data-section] {
  content-visibility: auto;
  contain-intrinsic-size: 0 800px; /* Hint about expected size */
}

/* Applied to cards/repeating elements */
[data-component="card"] {
  content-visibility: auto;
  contain-intrinsic-size: 300px 400px;
}
```

**Benefit**: Massive performance improvement for pages with many elements below the fold.

### Web Vitals Monitoring with Batching

```javascript
import { onLCP, onFCP, onCLS } from "web-vitals";

const metrics = [];

function trackMetric(metric) {
  metrics.push(metric);

  // Batch send after 5 metrics or 10 seconds
  if (metrics.length >= 5 || timeoutExpired) {
    sendBatch(metrics);
    metrics.length = 0; // Clear array
  }
}

onLCP(trackMetric);
onFCP(trackMetric);
onCLS(trackMetric);

async function sendBatch(batch) {
  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/metrics", JSON.stringify(batch));
  }
}
```

**Pattern**: Batch metrics for efficiency, use sendBeacon for reliability.

### Lazy Load Bundles Based on Route

```javascript
// Load bundle only on specific pages
if (document.querySelector("[data-projects-page]")) {
  import("./projects-enhanced.js");
}

if (document.querySelector("[data-about-page]")) {
  import("./about-enhanced.js");
}
```

**Benefit**: Only load JavaScript for features present on current page.

---

## 6. ACCESSIBILITY PATTERNS

### Focus Management

```javascript
class FocusTrap {
  constructor(element) {
    this.element = element;
    this.focusableElements = this.element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    this.firstElement = this.focusableElements[0];
    this.lastElement =
      this.focusableElements[this.focusableElements.length - 1];
  }

  enable() {
    this.element.addEventListener("keydown", (e) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === this.firstElement) {
          e.preventDefault();
          this.lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === this.lastElement) {
          e.preventDefault();
          this.firstElement.focus();
        }
      }
    });

    this.firstElement.focus();
  }
}
```

**Pattern**: Trap focus inside modal/menu, prevent focus from leaving.

### Keyboard Navigation

```javascript
document.addEventListener("keydown", (e) => {
  // Escape closes modal
  if (e.key === "Escape") {
    closeModal();
  }

  // Arrow keys navigate between items
  if (e.key === "ArrowUp" || e.key === "ArrowDown") {
    navigateMenu(e.key === "ArrowDown" ? 1 : -1);
  }

  // Enter activates focused button
  if (e.key === "Enter") {
    document.activeElement?.click();
  }
});
```

**Pattern**: Handle common keyboard shortcuts, always provide keyboard alternatives.

### ARIA Attributes for Custom Components

```html
<!-- Custom dropdown menu -->
<button aria-haspopup="true" aria-expanded="false" aria-controls="menu">
  Menu
</button>
<ul id="menu" role="menu" hidden>
  <li role="menuitem"><a href="/about">About</a></li>
  <li role="menuitem"><a href="/contact">Contact</a></li>
</ul>

<script>
  const button = document.querySelector("button");
  const menu = document.getElementById("menu");

  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", !expanded);
    menu.hidden = expanded;
  });
</script>
```

**Pattern**: Use ARIA to communicate state to screen readers.

---

## 7. DATA ATTRIBUTES FOR TESTING & HOOKS

### Semantic Data Attributes

```html
<!-- For JavaScript selection (not CSS) -->
<button data-testid="mobile-menu-button">Menu</button>
<div id="mobile-menu" data-component="header">
  <a href="/about">About</a>
</div>

<!-- For Playwright/testing selection -->
<div data-testid="product-card">...</div>

<!-- For feature grouping -->
<div data-path-card data-index="0">...</div>
<div data-project-card data-index="1">...</div>

<!-- For performance hints -->
<section data-section>...</section>
```

**Pattern**: Use data attributes for JS hooks, not classes (keeps styling separate from behavior).

---

## 8. ELEVENTY CONFIGURATION ESSENTIALS

### Collection Organization

```javascript
// .eleventy.js
export default async function (eleventyConfig) {
  // Organize content into collections
  eleventyConfig.addCollection("blog", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md").reverse();
  });

  eleventyConfig.addCollection("projects", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/projects/*.md");
  });

  // Filters for templating
  eleventyConfig.addFilter("dateFormat", (date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  });

  eleventyConfig.addFilter("excerpt", (content) => {
    return content.replace(/(<([^>]+)>)/gi, "").substring(0, 200) + "...";
  });

  // Passthrough copy
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/css/print.css");
}
```

**Pattern**: Collections organize content, filters format data in templates, passthrough preserves static assets.

---

## QUICK REFERENCE: BEST PRACTICES

### CSS

- Use CSS custom properties for consistency
- Use `clamp()` instead of media queries for typography/spacing
- Only animate `transform` and `opacity` (GPU accelerated)
- Use `@supports` for feature detection
- Respect `prefers-reduced-motion`

### JavaScript

- Encapsulate features in classes
- Use Intersection Observer for scroll animations
- Event delegation for dynamic content
- Feature detect before using modern APIs
- Rate-limit network requests

### Performance

- Separate bundles per feature
- Lazy load JavaScript by route
- Use `content-visibility: auto` for off-screen elements
- Batch analytics requests
- Use sendBeacon for reliable delivery

### Accessibility

- 44x44px minimum touch targets
- Focus management for modals
- ARIA attributes for custom components
- Keyboard shortcuts for common actions
- Test with keyboard navigation

### Testing

- Use `data-testid` for element selection
- Snapshot testing for visual regression
- Test keyboard navigation
- Monitor Web Vitals
- Lighthouse CI for performance gates
