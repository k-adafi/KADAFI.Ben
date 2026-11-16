import type { L } from '../i18n';
import photo from '../assets/KADAFI1.webp';

export const profile = {
  name: 'KADAFI Ben',
  fullName: 'KADAFI Ben Ismaelagassi Ibrahim',
  photo,
  role: { fr: 'Développeur Full-Stack', en: 'Full-Stack Developer' } satisfies L,
  stackLine: 'TypeScript · React · Vue 3 · Laravel · PostgreSQL',
  pitch: {
    fr: "Je conçois et livre des applications web et mobiles de bout en bout, du recueil des besoins à la mise en production. Je travaille au quotidien avec des agents de programmation IA : l'IA accélère l'écriture du code, je garde la main sur l'architecture, la sécurité et la qualité.",
    en: 'I design and ship web and mobile applications end to end, from requirements to production. I work with AI coding agents every day: AI speeds up writing the code, while I stay in charge of architecture, security and quality.',
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

/** How I work with coding agents — shown in the "AI workflow" section. */
export const workflow = {
  intro: {
    fr: "Tous mes projets récents ont été développés avec un agent de programmation IA, mais pas en « vibe coding ». L'agent produit le code ; je pose le cadre, je relis chaque diff et je reste responsable de ce qui part en production.",
    en: "All my recent projects were built with an AI coding agent, but not by vibe coding. The agent produces the code; I set the frame, review every diff and remain accountable for what ships.",
  } satisfies L,
  steps: [
    {
      title: { fr: 'Cadrer', en: 'Frame' },
      body: {
        fr: "Je rédige le besoin, les contraintes (schéma de données, conventions, rôles) et les critères d'acceptation avant la première ligne de code.",
        en: 'I write down the need, the constraints (data model, conventions, roles) and the acceptance criteria before any code is written.',
      },
    },
    {
      title: { fr: 'Planifier', en: 'Plan' },
      body: {
        fr: "L'agent propose un plan ; je le corrige, je découpe en petites tâches et je valide les choix d'architecture.",
        en: 'The agent proposes a plan; I correct it, split it into small tasks and sign off on the architecture.',
      },
    },
    {
      title: { fr: 'Relire', en: 'Review' },
      body: {
        fr: 'Chaque diff est relu comme une pull request : logique métier, requêtes N+1, permissions, doublons, cas limites.',
        en: 'Every diff is reviewed like a pull request: business logic, N+1 queries, permissions, duplication, edge cases.',
      },
    },
    {
      title: { fr: 'Vérifier', en: 'Verify' },
      body: {
        fr: 'Typecheck, lint, tests et vérification manuelle dans le navigateur, puis commits atomiques et lisibles.',
        en: 'Typecheck, lint, tests and manual checks in the browser, then small, readable commits.',
      },
    },
  ] satisfies { title: L; body: L }[],
  example: {
    label: { fr: 'Exemple type de tâche confiée à l’agent', en: 'Typical task given to the agent' } satisfies L,
    prompt: {
      fr: '« Ajoute le circuit de validation des dépenses au module Budget : un membre soumet une dépense liée à une tâche et à une ligne budgétaire, avec justificatif ; le chef de projet l’approuve ou la rejette avec un motif. Respecte les policies Laravel existantes, mets à jour les soldes dans une transaction et écris les tests Feature. Propose d’abord un plan. »',
      en: '"Add the expense approval flow to the Budget module: a member submits an expense linked to a task and a budget line, with a receipt; the project lead approves it or rejects it with a reason. Follow the existing Laravel policies, update balances inside a transaction and write Feature tests. Propose a plan first."',
    } satisfies L,
    context: { fr: 'YES-TaFiTa · Espace collaboratif', en: 'YES-TaFiTa · Collaborative workspace' } satisfies L,
  },
};
