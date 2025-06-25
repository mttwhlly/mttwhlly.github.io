// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// Production config for Vercel
export default defineConfig({
  output: 'server', // This is correct for your setup
  adapter: vercel(),
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
