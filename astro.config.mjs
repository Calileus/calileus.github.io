import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
    site: "https://calileus.github.io",
    base: "/",
    integrations: [tailwind()]
});