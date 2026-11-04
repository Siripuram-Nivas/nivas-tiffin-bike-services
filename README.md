# Nivas Tiffin Center

Mobile-first, bilingual (English / Telugu) website for Nivas Tiffin Center, Sundaragiri.
Takeaway enquiries only — no home delivery and no online payment.

## Stack

- React 19 + Vite
- Tailwind CSS 3
- Plain JSX (no TypeScript)
- Static assets served from `public/`

## Run locally

```bash
npm install
npm run dev
```

Vite prints the local URL (usually `http://localhost:5173`).

## Checks and production build

```bash
npm run lint
npm run test:enquiry
npm run build
npm run preview
```

`test:enquiry` runs assertion checks on cart totals, quantity limits and WhatsApp message links.

## Where the content lives

- `src/data/business.js` — phone numbers, WhatsApp numbers, address, map link, opening hours.
  This is the single source of truth used by the header, contact section, footer and quick actions.
- `src/data/menu.js` — categories, menu items, prices, descriptions, specials and gallery entries.
- `src/lib/enquiry.js` — cart quantities, line keys and totals.
- `src/lib/whatsapp.js` — localized enquiry/availability messages and `wa.me` links.

Change prices or contact details only after confirmation from the shop. Availability is always
confirmed by the shop; the site never claims an item is available right now, and there are no
ratings or reviews.

## Images

Optimized WebP versions live in `public/img/`. Source PNGs are kept in `assets-src/` so the
images can be regenerated:

```bash
npm install --no-save sharp
npm run images
```

`sharp` is intentionally not a project dependency — it is only needed when regenerating images.

All food photos are illustrative and labelled as such on the site; they are not photos of the shop.

## Deploy

The site is a static Vite build. On Vercel, the defaults work:

- Build command: `npm run build`
- Output directory: `dist`

`public/robots.txt` and `public/sitemap.xml` use the canonical URL
`https://nivas-tiffin-bike-services.vercel.app/`. Update them together with the canonical/OG URLs
in `index.html` if the domain changes.
