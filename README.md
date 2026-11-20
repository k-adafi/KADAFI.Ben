# KADAFI Ben — Portfolio

Personal portfolio of **KADAFI Ben**, full-stack developer (TypeScript · React · Vue 3 · Laravel · PostgreSQL).

**Live:** https://kadafi-ben.vercel.app · **Interactive résumé:** https://kadafi-ben-cv.vercel.app

## Stack

- React 18 + TypeScript, built with Vite
- Tailwind CSS with CSS-variable design tokens (light / dark)
- Framer Motion (respects `prefers-reduced-motion`)
- Bilingual FR / EN, no i18n dependency

## Structure

```
src/
  data/        content: profile, projects, career (edit these to update the site)
  i18n/        language context + UI labels
  components/  page sections (Hero, Projects, Experience…)
  lib/         shared UI helpers and hooks
public/        résumé PDFs, favicon, Open Graph image, robots.txt, sitemap.xml
```

To add a project, append an entry to `src/data/projects.ts`. Projects without screenshots get a generated cover.

## Scripts

```bash
npm install
npm run dev        # local dev server
npm run typecheck  # tsc
npm run lint       # eslint
npm run build      # typecheck + production build
```
