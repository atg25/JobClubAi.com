import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize bundle size
    target: "es2015",
    minify: "terser",
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code
          "react-vendor": ["react", "react-dom"],
          "ui-vendor": ["@headlessui/react", "zustand"],
        },
      },
    },
    // Performance targets
    chunkSizeWarningLimit: 500,
    assetsInlineLimit: 4096, // Inline assets < 4kb as base64
  },
});
