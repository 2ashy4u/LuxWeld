# Luxury Welding

Marketing website for **Luxury Welding** — mobile welding, fabrication, and repair services. Built with Next.js (App Router), TypeScript, and Tailwind CSS v4. Black & gold theme.

## Run locally

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Project structure

```
app/
  layout.tsx          Root layout: header, footer, SEO metadata, JSON-LD
  page.tsx            Home page
  services/page.tsx   Full services list (anchored by category)
  pricing/page.tsx    Pricing cards
  about/page.tsx      About + Why Choose Us
  contact/
    page.tsx          Quote request page
    QuoteForm.tsx     Client form (React 19 useActionState)
    actions.ts        Server action that validates & handles submissions
  globals.css         Theme tokens (black & gold)
components/           Header, Footer, Logo, CtaBand
lib/
  site.ts             Business name, phone, email, hours, nav
  data.ts             Services, materials, processes, pricing, etc.
```

## Things to finish

1. **Logo** — drop your logo file in `public/` and swap the placeholder in
   `components/Logo.tsx` (replace the `LW` block with `next/image`).
2. **Contact details** — update phone, email, service area, and hours in
   `lib/site.ts`.
3. **Pricing** — replace the `$___` and `___` placeholders in `lib/data.ts`.
4. **Quote delivery** — the form currently logs submissions on the server.
   Wire up an email provider in `app/contact/actions.ts` (a Resend example is
   included in the comments). Add your API key in a `.env.local` file (never
   commit secrets).
5. **Photos** — add real project photos to `public/` and reference them on the
   home and services pages.

## Brand colors

| Token        | Value     |
|--------------|-----------|
| `gold`       | `#d4af37` |
| `gold-light` | `#e7c65b` |
| `gold-dark`  | `#a9851d` |
| background   | `#0a0a0a` |

Defined in `app/globals.css` and usable as Tailwind classes (`text-gold`,
`bg-gold`, `border-gold`, etc.).

## Deploy

Optimized for [Vercel](https://vercel.com). Push to a Git repo and import it,
or run `vercel`. All pages are statically prerendered; the quote form runs as a
server action.
# LuxWeld
