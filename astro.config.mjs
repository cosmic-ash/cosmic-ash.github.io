import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://cosmic-ash.github.io",
  integrations: [tailwind()],
  output: "static",
});
