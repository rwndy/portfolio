# Riwandi — Portfolio

Retro arcade/RPG-themed portfolio built with **Next.js 16** (Pages Router), **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## Getting Started

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
pnpm start      # serve production
```

## Project Structure

```
├── pages/              # Next.js pages (Pages Router)
│   ├── _document.tsx   # HTML shell, fonts, meta
│   ├── _app.tsx        # Global CSS + font variables
│   └── index.tsx       # Main page — SEO + section composition
├── components/
│   ├── ui/             # Reusable primitives (PixelParticles, TypeWriter, StatBar, etc.)
│   ├── sections/       # Page sections (Hero, About, Skills, Experience, Projects, Footer)
│   └── seo/            # JSON-LD structured data
├── lib/
│   ├── types.ts        # TypeScript interfaces
│   ├── constants.ts    # All portfolio data — edit content here
│   ├── hooks.ts        # useScrollSpy, useInView, useTweaks, useMounted
│   ├── seo.ts          # SEO config + JSON-LD generators
│   └── utils.ts        # Utility functions
├── styles/
│   └── globals.css     # Tailwind v4 + design tokens + component styles
└── public/             # Static assets (favicon, OG image, robots, sitemap)
```

## Before Deploy

1. Update `SITE_URL` in `lib/seo.ts`
2. Replace `public/og-image.png` with a custom 1200×630 image
3. Replace `public/favicon.ico` with your own icon
