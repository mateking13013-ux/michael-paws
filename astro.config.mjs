import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nobleweenie.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
