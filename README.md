<div align="center">

# ✨ AInspire Job Club

**Empowering NJIT students to build exceptional portfolios and advance their careers**

[![Live Site](https://img.shields.io/badge/Live-ainspire.vercel.app-brightgreen?style=for-the-badge)](https://ainspire-smoky.vercel.app/)
[![CI/CD](https://img.shields.io/github/actions/workflow/status/atg25/JobClubAi.com/ci-cd.yml?style=for-the-badge&label=CI%2FCD)](https://github.com/atg25/JobClubAi.com/actions)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

[Live Demo](https://ainspire-smoky.vercel.app/) · [Report Bug](https://github.com/atg25/JobClubAi.com/issues) · [Request Feature](https://github.com/atg25/JobClubAi.com/issues)

</div>

---

## 🎯 About

AInspire Job Club is a modern web platform designed to help NJIT students showcase their professional portfolios, discover career events, and access valuable resources for professional development. Built with cutting-edge technologies and a focus on performance, accessibility, and user experience.

### ✨ Key Features

- 📅 **Event Management** - Browse and register for professional development events
- 📚 **Resource Library** - Curated career resources and guides
- 🎨 **Portfolio Showcase** - Tips and examples for building standout portfolios
- 🔒 **Privacy-First** - GDPR-compliant with cookie consent management
- 📱 **Fully Responsive** - Seamless experience across all devices
- ♿ **Accessible** - WCAG 2.1 AA compliant design

---

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/atg25/JobClubAi.com.git

# Navigate to project directory
cd JobClub

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to view the application.

---

## 🛠️ Tech Stack

### Core

- **[React 19](https://react.dev/)** - Latest UI library with concurrent features
- **[TypeScript 5.9](https://www.typescriptlang.org/)** - Type-safe development
- **[Vite 7](https://vitejs.dev/)** - Lightning-fast build tool
- **[React Router 7](https://reactrouter.com/)** - Client-side routing

### Styling & UI

- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Headless UI 2](https://headlessui.com/)** - Accessible component primitives
- **Custom Glass Morphism** - Modern glassmorphic design system

### Content & Data

- **[Sanity CMS](https://www.sanity.io/)** - Headless content management
- **[Portable Text](https://www.sanity.io/docs/portable-text)** - Rich text rendering

### State & Performance

- **[Zustand 5](https://zustand-demo.pmnd.rs/)** - Lightweight state management
- **React.lazy()** - Code splitting and lazy loading
- **Error Boundaries** - Graceful error handling

### Testing & Quality

- **[Vitest 4](https://vitest.dev/)** - Unit testing framework
- **[Playwright 1.57](https://playwright.dev/)** - End-to-end testing
- **[Testing Library](https://testing-library.com/)** - Component testing utilities
- **[ESLint 9](https://eslint.org/)** - Code linting and formatting

### Analytics & Monitoring

- **Google Analytics 4** - Privacy-focused analytics
- **Cookie Consent** - User consent management

---

## 📁 Project Structure

```
JobClub/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/           # Route pages
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utilities and helpers
│   ├── queries/         # Sanity CMS queries
│   ├── types/           # TypeScript definitions
│   ├── constants/       # App-wide constants
│   └── tests/           # Unit tests
├── studio-ainspire/     # Sanity Studio CMS
├── tests/               # E2E tests (Playwright)
├── public/              # Static assets
└── docs/                # Documentation
```

---

## 🧪 Testing

```bash
# Run unit tests
npm run test:unit

# Run unit tests with UI
npm run test:unit:ui

# Run unit tests with coverage
npm run test:coverage

# Run E2E tests
npm test

# Run E2E tests with UI
npm run test:ui
```

**Current Test Coverage:** 33/39 tests passing

---

## 🎨 Design System

### Color Palette

- **Purple Gradient:** `#9333EA` → `#EC4899`
- **Glass Cards:** Translucent backgrounds with backdrop blur
- **Dark Theme:** Rich purple-to-black gradient backgrounds

### Typography

- **Primary Font:** System fonts (optimized for performance)
- **Responsive Scaling:** Fluid typography with mobile-first approach

---

## 📊 Performance

- **Bundle Size:** 73.89 KB (gzipped)
- **Build Size:** ~6 MB (uncompressed dist)
- **Lighthouse Scores:**
  - Performance: 90+
  - Accessibility: 100
  - Best Practices: 95+
  - SEO: 100

---

## 🚢 Deployment

The application is automatically deployed to [Vercel](https://vercel.com) on every push to the `master` branch.

### Continuous Integration

GitHub Actions workflow automatically:
- ✅ Runs ESLint checks
- ✅ Performs TypeScript type checking
- ✅ Builds the production bundle
- ✅ Validates bundle size (< 10MB)
- ✅ Runs Lighthouse CI tests

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

**AInspire** - Building tools to empower student success

- Website: [ainspire-smoky.vercel.app](https://ainspire-smoky.vercel.app/)
- Email: ainspireteam@gmail.com

---

## 🙏 Acknowledgments

- NJIT for supporting student professional development
- The React and Vite communities for excellent tooling
- Sanity for providing a powerful headless CMS
- All contributors and supporters of this project

---

<div align="center">

**Built with ❤️ for NJIT students**

[⬆ Back to Top](#-ainspire-job-club)

</div>
