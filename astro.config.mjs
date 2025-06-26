// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// Static config for GitHub Pages
export default defineConfig({
  output: 'static', // Back to static!
  server: {
    host: '127.0.0.1',
    port: 4321,
  },
  integrations: [react()],
  site: 'https://mattwhalley.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
