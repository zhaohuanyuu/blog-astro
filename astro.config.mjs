import mdx from "@astrojs/mdx"
import solidJs from "@astrojs/solid-js"
import { defineConfig } from 'astro/config'
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"

// https://astro.build/config
export default defineConfig({
  site: 'https://www.auu.zone',
  devToolbar: {
    enabled: false
  },
  integrations: [
    mdx(),
    solidJs(),
  ],
  vite: {
    plugins: [ vanillaExtractPlugin() ]
  },
  server: ({ command }) => ({ port: command === 'dev' ? 8000 : 9000})
});
