import mdx from "@astrojs/mdx"
import solidJs from "@astrojs/solid-js"
import { defineConfig } from 'astro/config'
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"

console.log(import.meta.url)

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    solidJs(),
  ],
  vite: {
    plugins: [ vanillaExtractPlugin() ]
  }
});
