import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import { schemaTypes } from "./sanity/schemas";
import { myStructure } from "./sanity/deskstructure";

// Keep Studio config separate from frontend client-config.
// Prefer env vars so deploys (Vercel) don't require code edits.
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "5zyxoqnf";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  projectId,
  dataset,
  title: "In Search Of",
  apiVersion: "2023-08-31",
  basePath: "/admin",
  // Studio should generally bypass CDN for freshest previews.
  useCdn: true,
  plugins: [
    deskTool({ structure: myStructure }),
    // NOTE: visionTool removed to avoid styled-components export issues in Next builds.
    // Add it back later only if you really need Vision:
    // import { visionTool } from "@sanity/vision";
    // visionTool(),
  ],
  schema: { types: schemaTypes },
});
