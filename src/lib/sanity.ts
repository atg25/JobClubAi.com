import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || "u19u69pp";
const dataset = import.meta.env.VITE_SANITY_DATASET || "production";

if (!projectId) {
  throw new Error("Missing VITE_SANITY_PROJECT_ID environment variable");
}

if (!dataset) {
  throw new Error("Missing VITE_SANITY_DATASET environment variable");
}

export const client = createClient({
  projectId,
  dataset,
  useCdn: true, // Set to false for real-time data
  apiVersion: "2024-12-12", // Use current date
});

// Helper function to generate image URLs
const builder = imageUrlBuilder(client);

export function urlFor(source: unknown) {
  return builder.image(source as Parameters<typeof builder.image>[0]);
}
