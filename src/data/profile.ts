import type { L } from '../i18n';
import photo from '../assets/KADAFI1.webp';

export const profile = {
  name: 'KADAFI Ben',
  fullName: 'KADAFI Ben Ismaelagassi Ibrahim',
  photo,
  role: { fr: 'Développeur Full-Stack', en: 'Full-Stack Developer' } satisfies L,
  stackLine: 'TypeScript · React · Vue 3 · Laravel · PostgreSQL',
  pitch: {
    fr: "Je conçois et livre des applications web et mobiles de bout en bout, du recueil des besoins à la mise en production. Au quotidien, j'utilise Claude Code en développement assisté par IA pour être plus rapide sur l'écriture du code.",
    en: 'I design and ship web and mobile applications end to end, from requirements to production. Every day I use Claude Code for AI-assisted development, to write code faster.',
  } satisfies L,
  email: 'kadafiben196@gmail.com',
  phone: '+261 34 14 566 79',
  phoneHref: 'tel:+261341456679',
  location: { fr: 'Toamasina, Madagascar', en: 'Toamasina, Madagascar' } satisfies L,
  timezone: 'UTC+3',
  github: 'https://github.com/k-adafi',
  linkedin: 'https://www.linkedin.com/in/kadafi-ben-0312a3265/',
  interactiveCv: 'https://kadafi-ben-cv.vercel.app/',
  cv: { fr: '/cv/CV_KADAFI_Ben_FR.pdf', en: '/cv/CV_KADAFI_Ben_EN.pdf' } satisfies L,
};

export const stats: { value: string; label: L }[] = [
  { value: '2+', label: { fr: "ans d'expérience pro", en: 'years of professional experience' } },
  { value: '5', label: { fr: 'projets majeurs en 2026', en: 'major projects in 2026' } },
  { value: '4', label: { fr: 'sites en production', en: 'sites in production' } },
];

export const about = {
  paragraphs: [
    {
      fr: "Développeur full-stack chez DNA Webhosting, je travaille sur des applications Laravel / Vue 3 / Inertia et sur AfroJourney, une plateforme TourismTech web et mobile (React, React Native, NestJS, PostgreSQL / PostGIS). En parallèle, je livre des projets pour des clients et pour l'association YES-TaFiTa.",
      en: 'As a full-stack developer at DNA Webhosting, I work on Laravel / Vue 3 / Inertia applications and on AfroJourney, a web and mobile TourismTech platform (React, React Native, NestJS, PostgreSQL / PostGIS). On the side, I ship projects for clients and for the YES-TaFiTa non-profit.',
    },
    {
      fr: "Je suis exigeant sur l'architecture, le contrôle d'accès (RBAC) et la revue de code. Mon Master en Informatique (Imagerie et Interactions) m'a donné une base solide en IA et vision par ordinateur, que j'ai appliquée à la détection d'objets en temps réel sur mobile.",
      en: "I care about architecture, access control (RBAC) and code review. My Master's in Computer Science (Imaging & Interactions) gave me a solid grounding in AI and computer vision, which I applied to real-time object detection on mobile.",
    },
    {
      fr: "Habitué au travail à distance et asynchrone : tickets, revues de code, comptes rendus écrits et démos régulières.",
      en: 'Used to remote, async collaboration: tickets, code reviews, written updates and regular demos.',
    },
  ] satisfies L[],
  facts: [
    { key: 'about.facts.location', value: { fr: 'Toamasina, Madagascar', en: 'Toamasina, Madagascar' } },
    { key: 'about.facts.timezone', value: { fr: 'UTC+3 · chevauchement avec l’Europe et la matinée en Amérique du Nord', en: 'UTC+3 · overlaps Europe and North American mornings' } },
    { key: 'about.facts.languages', value: { fr: 'Malgache (natif) · Français B2 · Anglais B2', en: 'Malagasy (native) · French B2 · English B2' } },
    { key: 'about.facts.focus', value: { fr: 'Produits SaaS, back-offices, apps géolocalisées', en: 'SaaS products, back offices, location-based apps' } },
  ] as const,
};
