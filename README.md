# Doylestown Alterations — Website

A fast, SEO-optimized one-page marketing site for **Doylestown Alterations**, a
home-based clothing-alterations service in Bucks County, PA, serving Doylestown
and the surrounding towns.

Built with [Astro](https://astro.build) and deployed for free with GitHub Pages.

> The GitHub repo / URL is `plumsteadalterations`, but the public brand name on
> the site is **Doylestown Alterations** (the more recognizable town for search).
> The displayed name lives in `src/site.ts` and is independent of the repo URL.

---

## ✏️ How to edit the content (the easy part)

Almost everything you'll want to change — the business name, the phone number,
the services, the **prices**, the towns served, and the FAQ — lives in **one
file**:

```
src/site.ts
```

Open it, edit the text between the quotes, save, and the whole site updates.

> **⚠️ Please review the prices.** The "from" prices in `src/site.ts` are
> competitive *placeholder estimates* for the Bucks County area. Update each one
> to what you actually want to charge before sharing the site widely.

## 🚀 Going live (GitHub Pages)

This repo includes an automated deploy workflow (`.github/workflows/deploy.yml`).
To turn it on, once:

1. Go to the repo on GitHub → **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` (merging the website PR does this). The site builds and
   deploys automatically. Future edits to `main` redeploy on their own.

Your site will be live at:

```
https://somilgo.github.io/plumsteadalterations/
```

## 🌐 Recommended: a custom domain

For a real business, a custom domain (e.g. `doylestownalterations.com`) looks far
more professional, helps SEO, and fixes the `/plumsteadalterations/` sub-path.
After buying a domain (~$12/yr):

1. In `astro.config.mjs`, set `site: 'https://doylestownalterations.com'` and
   change `base` to `'/'` (or delete the `base` line).
2. Update the `Sitemap:` URL in `public/robots.txt` to the new domain.
3. Create a file `public/CNAME` containing just your domain:
   `doylestownalterations.com`
4. In **Settings → Pages → Custom domain**, enter the domain and follow the DNS
   steps GitHub shows you (point an A record / CNAME at GitHub Pages).

## 📍 Google Business Profile (do this — it's the #1 local SEO step)

A website helps, but a **Google Business Profile** is what makes you show up in
Google Maps and the "near me" local results. Create one (free) at
<https://business.google.com>:

- Business name: **Doylestown Alterations** (use the real registered business
  name — Google can suspend profiles for keyword-stuffed names, so register the
  business under this name to keep everything consistent).
- Category: **Clothing alteration service**
- Mark it as a **service-area business** (no storefront) and list the towns from
  `areaServed` in `src/site.ts` — this keeps your home address private.
- Add the phone number, the website URL, hours, and photos of finished work.
- After it's verified, paste the website link in, and ask happy customers for
  reviews — reviews are the biggest driver of local ranking.

Also submit your sitemap in [Google Search Console](https://search.google.com/search-console):
`https://somilgo.github.io/plumsteadalterations/sitemap-index.xml`

## 🖼️ Recommended asset to replace

`public/og-image.svg` is the preview image shown when the site is shared (texts,
Facebook, etc.). SVG works in some places but not all — for best results, replace
it with a **1200×630 PNG or JPG** named `og-image.png` and update the reference
in `src/layouts/BaseLayout.astro`.

---

## 🧑‍💻 Local development

```sh
npm install      # install dependencies (first time only)
npm run dev      # start a local preview at http://localhost:4321/plumsteadalterations
npm run build    # build the production site into dist/
npm run preview  # preview the production build locally
```

## 📁 Project structure

```
public/            static files copied as-is (favicon, og-image, robots.txt)
src/
  site.ts          ← ALL your business details & prices live here
  layouts/         the <head> with SEO tags + structured data
  pages/index.astro the page sections (hero, services, pricing, about, FAQ, CTA)
  styles/global.css the look & feel
.github/workflows/ the automatic deploy-to-Pages workflow
```
