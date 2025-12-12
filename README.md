# AInspire Job Club - React Application

Modern React 18 + TypeScript application for NJIT student professional development.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit: `http://localhost:5173`

## 📦 Tech Stack

- **React 18** - UI library with hooks and Suspense
- **TypeScript 5** - Type safety
- **Vite 7** - Build tool and dev server
- **Tailwind CSS 3** - Utility-first styling
- **Headless UI** - Accessible components
- **Zustand** - State management

## 🎨 Features

- ✅ Lazy Loading - Code splitting with React.lazy()
- ✅ Responsive Design - Mobile-first approach
- ✅ Accessibility - WCAG 2.1 AA compliant
- ✅ SEO Optimized - Meta tags, Open Graph
- ✅ Performance - 89KB gzipped bundle
- ✅ Type Safety - Full TypeScript coverage

## 🚢 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment instructions.

## 📊 Performance Metrics

- **Bundle Size:** 89 KB (gzipped)
- **Target:** < 500 KB ✅

---

## Developer Notes

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
