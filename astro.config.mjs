import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://michaelpaws.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
