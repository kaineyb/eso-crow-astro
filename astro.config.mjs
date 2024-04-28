import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://eso-crow-astro.pages.dev", // Mainly for sitemap
  integrations: [
    vue({
      appEntrypoint: "/src/pages/_app",
    }),
    sitemap(),
  ],
});
