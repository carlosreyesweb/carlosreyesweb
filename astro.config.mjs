// @ts-check
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

export default defineConfig({
  site: "https://www.carlosreyesweb.com",
  trailingSlash: "never",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap(), react()],
})
