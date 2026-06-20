// =============================================================================
// EDIT YOUR BUSINESS DETAILS HERE
// =============================================================================
// This is the single place to change the business name, phone number, services,
// prices, and service area. Everything on the site reads from this file.
//
// NOTE ON PRICES: the "from" prices below are competitive placeholder estimates
// for the Bucks County area. Please review each one and adjust to match what
// your mom actually wants to charge before going live.
// =============================================================================

export const business = {
  name: 'Doylestown Alterations',
  // Short phrase shown under the name / in search results.
  tagline: 'Affordable Clothing Alterations in Doylestown & Bucks County, PA',

  // Phone number in two formats: one for links, one for display.
  phoneLink: '+12673345212', // used by text/call links — keep the +1 and no spaces
  phoneDisplay: '(267) 334-5212', // how the number appears on the page

  // Service-area business run from home — we intentionally do NOT show a street
  // address. We only name the town/region for trust + local SEO.
  locality: 'Pipersville',
  region: 'PA',
  regionName: 'Pennsylvania',
  country: 'US',

  // "$" = inexpensive (good for an affordable positioning). Options: $, $$, $$$.
  priceRange: '$',

  // Towns served — used in the page copy AND in the structured data Google reads.
  areaServed: [
    'Doylestown',
    'Pipersville',
    'New Hope',
    'Furlong',
    'Buckingham',
    'Plumsteadville',
    'Point Pleasant',
    'Ottsville',
    'Dublin',
    'Chalfont',
  ],
};

export type Service = {
  title: string;
  description: string;
  fromPrice: string; // e.g. "$12" — shown as "from $12"
};

export const services: Service[] = [
  {
    title: 'Hemming',
    description:
      'Shorten pants, jeans, skirts, and dresses to the perfect length — including original-hem finishes on jeans.',
    fromPrice: '$12',
  },
  {
    title: 'Sleeve Adjustments',
    description:
      'Lengthen or shorten sleeves on shirts, blouses, jackets, and dresses for a clean, proportional fit.',
    fromPrice: '$18',
  },
  {
    title: 'Taking In & Letting Out',
    description:
      'Adjust waists and side seams so your favorite pieces fit just right — whether they need to be taken in or let out.',
    fromPrice: '$20',
  },
  {
    title: 'Repairs',
    description:
      'Replace buttons, fix or replace zippers, and mend seams and small tears to give your clothes a second life.',
    fromPrice: '$8',
  },
];

export const faqs = [
  {
    q: 'How much do alterations cost?',
    a: 'Prices depend on the garment and the work involved, but most simple jobs start at just a few dollars. Send a text describing what you need (a photo helps!) and you’ll get a friendly, no-obligation quote.',
  },
  {
    q: 'How long do alterations take?',
    a: 'Most everyday alterations are ready within a few days. If you have an event coming up, just mention your deadline and we’ll do our best to accommodate it.',
  },
  {
    q: 'Where are you located?',
    a: 'We’re based in Pipersville (Plumstead Township) and proudly serve Doylestown and the surrounding Bucks County area. Drop-off and pick-up details are arranged when you reach out by text.',
  },
  {
    q: 'What kinds of alterations do you do?',
    a: 'We focus on everyday alterations and repairs — hemming, sleeve adjustments, taking garments in or letting them out, and fixing zippers, buttons, and seams. We don’t make new clothing from scratch.',
  },
  {
    q: 'How do I get started?',
    a: 'Just text ' + business.phoneDisplay + ' with a quick description of what you need. It’s the fastest way to get a quote and find a time to drop off your garments.',
  },
];
