import mdx from "@astrojs/mdx"
import solidJs from "@astrojs/solid-js"
import { defineConfig } from 'astro/config'
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"


// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    solidJs(),
    vanillaExtractPlugin()
  ]
});
