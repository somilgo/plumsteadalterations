// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployment URL configuration
// ----------------------------
// Live on the custom domain. The CNAME file in public/ tells GitHub Pages which
// domain to serve, and `site` below makes canonical URLs, the sitemap, and
// Open Graph tags use the real domain.
//
// (If you ever revert to the github.io URL, set
//  site: 'https://somilgo.github.io' and base: '/plumsteadalterations'.)

export default defineConfig({
  site: 'https://doylestownalterations.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
