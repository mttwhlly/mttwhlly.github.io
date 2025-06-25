// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static', // Changed from 'server' to 'static' to deploy as a static site
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
