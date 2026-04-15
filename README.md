# AppSoft Asia — Marketing Website

Single-page marketing site for **AppSoft Asia Sdn Bhd**, built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Features a WebGL shader hero background.

## Stack

- Next.js 14 (App Router, RSC)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)
- Poppins (Google Fonts via `next/font`)

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this repo to GitHub (already done).
2. Go to https://vercel.com/new, import the GitHub repo.
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.
4. Every push to `main` will redeploy automatically.

## Project structure

```
src/
  app/
    layout.tsx      Poppins font, metadata, globals
    page.tsx        Assembles all section components
    globals.css     CSS variables, grid patterns, base styles
  components/
    Logo.tsx        Wordmark: App (green) + Soft (grey) + Asia (mist)
    Navbar.tsx      Fixed, scroll-shadow, mobile hamburger
    Hero.tsx        Shader bg + headline + CTAs + stats
    About.tsx       Decorative card + company copy
    Products.tsx    iTax + Helpdesk product cards
    AgenticAI.tsx   6 AI service cards + CTA banner
    WhyUs.tsx       8 feature cards with Lucide icons
    Contact.tsx     Info block + contact form (client-side success state)
    Footer.tsx      4-column footer
    ui/
      shader-background.tsx   WebGL plasma background for Hero
  lib/
    utils.ts        cn() helper (clsx + tailwind-merge)
```
