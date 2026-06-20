// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// IMPORTANT — deployment URL configuration
// ----------------------------------------
// This is currently configured for a GitHub Pages *project* site, served at:
//     https://somilgo.github.io/plumsteadalterations/
//
// If you later buy a custom domain (recommended for a real business — e.g.
// plumsteadalterations.com), change `site` to your domain and set `base: '/'`
// (or remove the `base` line), then add a `public/CNAME` file containing the
// domain. See README.md for the full custom-domain steps.

export default defineConfig({
  site: 'https://somilgo.github.io',
  base: '/plumsteadalterations',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
