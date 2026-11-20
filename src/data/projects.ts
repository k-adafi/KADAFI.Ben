import type { L, LList } from '../i18n';

import yestafitaEspace from '../assets/projects/yestafita-espace.webp';
import yestafitaSite from '../assets/projects/yestafita-site.webp';
import afroWeb from '../assets/projects/afrojourney-web.webp';
import afroMobile from '../assets/projects/afrojourney-mobile.webp';
import ranovao from '../assets/projects/ranovao.webp';
import jessRedac from '../assets/projects/jess-redac.webp';
import immo from '../assets/immo.webp';
import immo1 from '../assets/immo1.webp';
import immo2 from '../assets/immo2.webp';
import immo3 from '../assets/immo3.webp';
import detector1 from '../assets/my_detector1.webp';
import detector2 from '../assets/my_detector2.webp';
import detector3 from '../assets/my_detector3.webp';
import detector4 from '../assets/my_detector4.webp';
import ianatra from '../assets/ianatra.webp';
import ianatra1 from '../assets/ianatra1.webp';
import ianatra2 from '../assets/ianatra2.webp';
import ianatra3 from '../assets/ianatra3.webp';
import market from '../assets/projet10.webp';
import market1 from '../assets/projet11.webp';
import educ from '../assets/educ.webp';
import educ1 from '../assets/educ1.webp';
import educ2 from '../assets/educ2.webp';
import educ3 from '../assets/educ3.webp';
import peace from '../assets/projet15.webp';
import peace1 from '../assets/peace.webp';
import peace2 from '../assets/peace1.webp';

export type ProjectCategory = 'web' | 'mobile' | 'ai';
export type ProjectKind = 'work' | 'client' | 'nonprofit' | 'personal' | 'academic';

export interface Project {
  id: string;
  name: string;
  tagline: L;
  summary: L;
  year: string;
  kind: ProjectKind;
  status: L;
  categories: ProjectCategory[];
  stack: string[];
  context: L;
  role: L;
  highlights: LList;
  images: string[];
  /** Gradient + monogram shown when no screenshot is available. */
  cover?: { from: string; to: string; mark: string };
  links: { live?: string; code?: string; video?: string; design?: string };
  isPrivate?: boolean;
  featured?: boolean;
}

export const kindLabel: Record<ProjectKind, L> = {
  work: { fr: 'En entreprise', en: 'Employer' },
  client: { fr: 'Client', en: 'Client' },
  nonprofit: { fr: 'Association', en: 'Non-profit' },
  personal: { fr: 'Personnel', en: 'Personal' },
  academic: { fr: 'Académique', en: 'Academic' },
};

export const projects: Project[] = [
  {
    id: 'afrojourney',
    name: 'AfroJourney',
    tagline: { fr: 'Plateforme TourismTech web & mobile', en: 'Web & mobile TourismTech platform' },
    summary: {
      fr: 'Application voyageurs et SaaS pour les professionnels du tourisme à Madagascar : carte interactive communautaire, publications géolocalisées, fiches établissements et back-office.',
      en: 'Traveller app and SaaS for tourism businesses in Madagascar: community-driven interactive map, geotagged posts, business pages and an admin back office.',
    },
    year: '2026',
    kind: 'work',
    status: { fr: 'En développement', en: 'In development' },
    categories: ['web', 'mobile'],
    stack: ['React Native', 'React', 'TypeScript', 'NestJS', 'TanStack Query', 'Zustand', 'PostgreSQL', 'PostGIS'],
    context: {
      fr: "Startup malgache qui veut devenir la référence pour découvrir Madagascar autrement. Le produit relie les voyageurs (B2C, gratuit) aux hôtels, restaurants, guides et artisans (B2B, abonnement). Projet réalisé chez DNA Webhosting.",
      en: 'A Malagasy startup that wants to become the go-to platform to discover Madagascar. The product connects travellers (B2C, free) with hotels, restaurants, guides and artisans (B2B, subscription). Built at DNA Webhosting.',
    },
    role: {
      fr: "Développeur full-stack sur l'application mobile (React Native), l'application web (React), l'API NestJS et la couche de données PostgreSQL / PostGIS.",
      en: 'Full-stack developer on the mobile app (React Native), the web app (React), the NestJS API and the PostgreSQL / PostGIS data layer.',
    },
    highlights: {
      fr: [
        'Carte interactive en thème sombre : publications regroupées en clusters, position GPS en temps réel et suivi de trajet avec progression.',
        'Requêtes géospatiales PostGIS pour charger les contenus autour d’un point ou dans la zone visible de la carte.',
        'Données serveur gérées avec TanStack Query (cache, invalidation) et état client avec Zustand, sur le web comme sur mobile.',
        'Recherche unifiée (lieux, personnes, publications, événements), filtres, messagerie, favoris et agenda des prochains événements.',
      ],
      en: [
        'Dark-themed interactive map: clustered posts, live GPS position and trip tracking with progress.',
        'PostGIS geospatial queries to load content around a point or inside the visible map area.',
        'Server state handled with TanStack Query (caching, invalidation) and client state with Zustand, on web and mobile alike.',
        'Unified search (places, people, posts, events), filters, messaging, favourites and upcoming-events feed.',
      ],
    },
    images: [afroWeb, afroMobile],
    cover: { from: '#0d9488', to: '#f59e0b', mark: 'AJ' },
    links: {},
    isPrivate: true,
    featured: true,
  },
  {
    id: 'yestafita-workspace',
    name: 'YES-TaFiTa · Espace collaboratif',
    tagline: { fr: 'Intranet de gestion de projets associatif', en: 'Project-management intranet for a non-profit' },
    summary: {
      fr: 'Une plateforme qui réunit plannings, documents, budgets, logistique, messagerie et formation de l’association, avec une source de vérité unique autour de la tâche.',
      en: "One platform for the association's planning, documents, budgets, logistics, messaging and training, with a single source of truth built around the task.",
    },
    year: '2026',
    kind: 'nonprofit',
    status: { fr: 'En production', en: 'In production' },
    categories: ['web'],
    stack: ['Vue 3', 'TypeScript', 'Laravel', 'MySQL', 'Jitsi'],
    context: {
      fr: "YES-TaFiTa est une association de jeunes de la côte Est de Madagascar. Elle avait besoin d'un outil unique pour aligner planification stratégique et exécution (plannings, documents, budgets, échanges) avec la traçabilité et la transparence financière attendues par ses partenaires.",
      en: "YES-TaFiTa is a youth association on Madagascar's east coast. It needed a single tool to align strategic planning and execution (schedules, documents, budgets, communication) with the traceability and financial transparency its partners expect.",
    },
    role: {
      fr: 'Conception et développement full-stack : modélisation des données, architecture des modules, interface et déploiement.',
      en: 'Full-stack design and development: data modelling, module architecture, UI and deployment.',
    },
    highlights: {
      fr: [
        '7 modules : sécurité et rôles (2FA), GED, gestion de projet, communication, logistique, formation et reporting.',
        'Planification du plan annuel (PTBA) jusqu’à la tâche, avec vues Kanban, liste, Gantt et calendrier multi-couches.',
        'Circuit budgétaire tracé de bout en bout : ligne budgétaire → dépense avec justificatif → validation par le chef de projet.',
        'Messagerie par projet et visioconférence Jitsi auto-hébergée ; parcours de formation avec quiz et certificats vérifiables par QR code.',
      ],
      en: [
        '7 modules: security & roles (2FA), document management, project management, messaging, logistics, training and reporting.',
        'Planning from the annual work plan down to the task, with Kanban, list, Gantt and layered calendar views.',
        'End-to-end budget trail: budget line → expense with receipt → approval by the project lead.',
        'Per-project chat and self-hosted Jitsi video calls; training paths with quizzes and QR-verifiable certificates.',
      ],
    },
    images: [yestafitaEspace],
    links: { live: 'https://yestafita.org/user/login' },
    featured: true,
  },
  {
    id: 'ranovao',
    name: 'Ranovao',
    tagline: { fr: 'Gestion de la production et de la distribution d’eau', en: 'Water production & distribution management' },
    summary: {
      fr: 'Plateforme de production, de gestion et de distribution d’eau, avec tableau de bord en temps réel, développée chez DNA Webhosting.',
      en: 'Water production, management and distribution platform with a real-time dashboard, built at DNA Webhosting.',
    },
    year: '2025 – 2026',
    kind: 'work',
    status: { fr: 'Version 1.0', en: 'Version 1.0' },
    categories: ['web'],
    stack: ['Vue 3', 'TypeScript', 'Laravel', 'MySQL'],
    context: {
      fr: 'Un distributeur d’eau avait besoin de piloter toute sa chaîne logistique dans un seul outil : matières premières, production, stockage et livraisons.',
      en: 'A water distributor needed to run its whole supply chain in one tool: raw materials, production, storage and deliveries.',
    },
    role: {
      fr: 'Développeur full-stack : back-end Laravel, interfaces Vue 3 en TypeScript, modèle de données MySQL.',
      en: 'Full-stack developer: Laravel back end, Vue 3 interfaces in TypeScript, MySQL data model.',
    },
    highlights: {
      fr: [
        'Modules couvrant toute la chaîne : matières premières → production → entrepôt → distribution.',
        'Tableau de bord et statistiques pour suivre l’activité en temps réel.',
        'Module « Sécurité et accès » : gestion des utilisateurs et des droits par rôle.',
      ],
      en: [
        'Modules covering the whole chain: raw materials → production → warehouse → distribution.',
        'Dashboard and statistics to follow activity in real time.',
        '"Security & access" module: user management and role-based permissions.',
      ],
    },
    images: [ranovao],
    cover: { from: '#0369a1', to: '#22d3ee', mark: 'Rv' },
    links: {},
    isPrivate: true,
    featured: true,
  },
  {
    id: 'yestafita-site',
    name: 'YES-TaFiTa · Site web',
    tagline: { fr: 'Site institutionnel de l’association', en: "The association's public website" },
    summary: {
      fr: 'Site public bilingue de l’association : présentation, actions, blog, événements et appel au soutien, avec un contenu administré depuis l’espace collaboratif.',
      en: "The association's bilingual public site: about, programmes, blog, events and a call for support, with content managed from the collaborative workspace.",
    },
    year: '2026',
    kind: 'nonprofit',
    status: { fr: 'En production', en: 'In production' },
    categories: ['web'],
    stack: ['Vue 3', 'TypeScript', 'Laravel', 'MySQL'],
    context: {
      fr: 'L’association avait besoin d’une vitrine en ligne pour se présenter à ses partenaires et au public.',
      en: 'The association needed a public website to present itself to partners and the wider public.',
    },
    role: {
      fr: 'Conception, développement et mise en ligne.',
      en: 'Design, development and launch.',
    },
    highlights: {
      fr: [
        'Contenu géré depuis le module « Gestion de site web » de l’espace collaboratif : une seule base, un seul back-office.',
        'Interface bilingue FR / EN avec thème clair / sombre, responsive, aux couleurs de l’association.',
        'Blog et agenda des événements pour garder le site vivant sans intervention technique.',
      ],
      en: [
        'Content managed from the "Website management" module of the workspace: one database, one back office.',
        "Bilingual FR / EN interface with light / dark theme, responsive, in the association's brand colours.",
        'Blog and events calendar so the site stays up to date without developer help.',
      ],
    },
    images: [yestafitaSite],
    cover: { from: '#2563eb', to: '#16a34a', mark: 'YT' },
    links: { live: 'https://yestafita.org/' },
    featured: true,
  },
  {
    id: 'jess-redac',
    name: 'Jess Rédac',
    tagline: { fr: 'Portfolio d’une rédactrice web freelance', en: 'Portfolio for a freelance web copywriter' },
    summary: {
      fr: 'Site vitrine de Palmary Jessina, rédactrice web spécialisée en SEO et copywriting : profil, compétences, services, réalisations et contact.',
      en: 'Showcase site for Palmary Jessina, a web writer specialising in SEO and copywriting: profile, skills, services, portfolio and contact.',
    },
    year: '2026',
    kind: 'client',
    status: { fr: 'En production', en: 'In production' },
    categories: ['web'],
    stack: ['React', 'TypeScript', 'Laravel', 'MySQL'],
    context: {
      fr: 'Une rédactrice freelance avait besoin d’un site professionnel pour présenter son offre et trouver des clients.',
      en: 'A freelance copywriter needed a professional site to present her services and win clients.',
    },
    role: {
      fr: 'Développeur freelance : du recueil des besoins à la mise en ligne, en contact direct avec la cliente.',
      en: 'Freelance developer: from requirements to launch, working directly with the client.',
    },
    highlights: {
      fr: [
        'Front React + TypeScript sur un back-end Laravel / MySQL.',
        'Site bilingue FR / EN avec thème clair / sombre et CV téléchargeable.',
        'Direction artistique éditoriale sur mesure, livrée et mise en ligne sur son propre nom de domaine.',
      ],
      en: [
        'React + TypeScript front end on a Laravel / MySQL back end.',
        'Bilingual FR / EN site with light / dark theme and downloadable CV.',
        'Custom editorial art direction, delivered and launched on her own domain.',
      ],
    },
    images: [jessRedac],
    cover: { from: '#be185d', to: '#f97316', mark: 'JR' },
    links: { live: 'https://jess-redac.com/' },
    featured: true,
  },
  {
    id: 'immo-mada-ocea',
    name: 'IMMO Mada Océa',
    tagline: { fr: 'Site d’agence immobilière', en: 'Real-estate agency website' },
    summary: {
      fr: 'Site de l’agence immobilière IMMO Mada Océa à Toamasina, avec gestion des biens et des services.',
      en: 'Website for the IMMO Mada Océa real-estate agency in Toamasina, with property and service management.',
    },
    year: '2025',
    kind: 'client',
    status: { fr: 'En production', en: 'In production' },
    categories: ['web'],
    stack: ['React', 'Laravel', 'MySQL', 'Bootstrap'],
    context: {
      fr: 'Mission freelance pour une agence qui voulait publier et gérer elle-même son catalogue de biens.',
      en: 'Freelance engagement for an agency that wanted to publish and manage its own property listings.',
    },
    role: { fr: 'Lead développeur.', en: 'Lead developer.' },
    highlights: {
      fr: ['Catalogue de biens et de services administrable.', 'En ligne sur agenceimmomadaocea.com.'],
      en: ['Manageable property and service catalogue.', 'Live at agenceimmomadaocea.com.'],
    },
    images: [immo, immo1, immo2, immo3],
    links: { live: 'https://agenceimmomadaocea.com/' },
    featured: true,
  },
  {
    id: 'my-detector',
    name: 'My Detector',
    tagline: { fr: 'Détection et suivi d’objets en temps réel sur Android', en: 'Real-time object detection & tracking on Android' },
    summary: {
      fr: 'Application Android de détection et de suivi d’objets en temps réel, optimisée pour les smartphones milieu de gamme. Projet de mémoire de Master.',
      en: "Android app for real-time object detection and tracking, optimised for mid-range phones. My Master's thesis project.",
    },
    year: '2025',
    kind: 'academic',
    status: { fr: 'Terminé', en: 'Completed' },
    categories: ['mobile', 'ai'],
    stack: ['Java', 'Android', 'TensorFlow Lite', 'YOLOv11', 'MobileNetV3', 'DeepSORT', 'PyTorch'],
    context: {
      fr: 'Mémoire de Master : faire tourner un pipeline de détection + suivi en temps réel sur du matériel modeste, sans serveur.',
      en: "Master's thesis: run a real-time detection + tracking pipeline on modest hardware, fully on-device.",
    },
    role: {
      fr: 'Recherche, entraînement et conversion des modèles, développement de l’application Android.',
      en: 'Research, model training and conversion, Android app development.',
    },
    highlights: {
      fr: [
        'Pipeline YOLOv11 + MobileNetV3-Small + DeepSORT.',
        'Inférence embarquée avec TensorFlow Lite, sans connexion réseau.',
      ],
      en: ['YOLOv11 + MobileNetV3-Small + DeepSORT pipeline.', 'On-device inference with TensorFlow Lite, no network needed.'],
    },
    images: [detector1, detector2, detector3, detector4],
    links: { video: '/assets/Mydetector.mp4' },
    featured: true,
  },
  {
    id: 'ianatra-ai',
    name: 'Ianatra AI',
    tagline: { fr: 'Chatbot éducatif pour le programme malgache', en: 'Educational chatbot for the Malagasy curriculum' },
    summary: {
      fr: 'Plateforme éducative avec chatbot IA pour les collégiens et lycéens malgaches.',
      en: 'Learning platform with an AI chatbot for Malagasy secondary-school students.',
    },
    year: '2025',
    kind: 'personal',
    status: { fr: 'En cours', en: 'In progress' },
    categories: ['web', 'ai'],
    stack: ['Vue 3', 'Firebase', 'Tailwind CSS'],
    context: { fr: 'Projet personnel.', en: 'Personal project.' },
    role: { fr: 'Conception et développement.', en: 'Design and development.' },
    highlights: { fr: ['Chatbot centré sur le programme scolaire malgache.'], en: ['Chatbot focused on the Malagasy school curriculum.'] },
    images: [ianatra, ianatra1, ianatra2, ianatra3],
    links: { live: 'https://ianatraaifront.vercel.app/' },
  },
  {
    id: 'my-market',
    name: 'My-market',
    tagline: { fr: 'Application web de vente', en: 'Sales web app' },
    summary: {
      fr: 'Catalogue, panier et back-office de gestion des produits.',
      en: 'Catalogue, cart and product back office.',
    },
    year: '2025',
    kind: 'personal',
    status: { fr: 'En cours', en: 'In progress' },
    categories: ['web'],
    stack: ['Vue 3', 'Laravel', 'MySQL', 'Tailwind CSS'],
    context: { fr: 'Projet personnel.', en: 'Personal project.' },
    role: { fr: 'Conception et développement.', en: 'Design and development.' },
    highlights: { fr: ['Catalogue, panier et gestion des produits.'], en: ['Catalogue, cart and product management.'] },
    images: [market, market1],
    links: { live: 'https://gestionmagasin.vercel.app/' },
  },
  {
    id: 'edupro',
    name: 'ÉduPro',
    tagline: { fr: 'Plateforme d’un établissement secondaire', en: 'Secondary-school platform' },
    summary: {
      fr: 'Présentation des filières et prise de rendez-vous pour un établissement secondaire.',
      en: 'Programmes and appointment booking for a secondary school.',
    },
    year: '2025',
    kind: 'academic',
    status: { fr: 'En cours', en: 'In progress' },
    categories: ['web'],
    stack: ['React', 'Laravel', 'MySQL', 'Tailwind CSS'],
    context: { fr: 'Projet académique.', en: 'Academic project.' },
    role: { fr: 'Conception et développement.', en: 'Design and development.' },
    highlights: { fr: ['Filières et prise de rendez-vous en ligne.'], en: ['Programmes and online appointment booking.'] },
    images: [educ, educ1, educ2, educ3],
    links: { live: 'https://educsecondaire.vercel.app/' },
  },
  {
    id: 'peacemobile',
    name: 'PeaceMobile',
    tagline: { fr: 'Design UX/UI d’application mobile', en: 'Mobile app UX/UI design' },
    summary: {
      fr: 'Maquette d’application mobile pour vulgariser les droits humains et la dignité.',
      en: 'Mobile app prototype to make human-rights concepts accessible.',
    },
    year: '2023',
    kind: 'nonprofit',
    status: { fr: 'Terminé', en: 'Completed' },
    categories: ['mobile'],
    stack: ['Adobe XD', 'Figma'],
    context: { fr: 'Projet associatif.', en: 'Non-profit project.' },
    role: { fr: 'Designer UX/UI.', en: 'UX/UI designer.' },
    highlights: { fr: ['Prototype interactif complet.'], en: ['Complete interactive prototype.'] },
    images: [peace, peace1, peace2],
    links: { design: 'https://xd.adobe.com/view/61aa449f-a18c-4245-b3d4-3d58cb40bf5b-34f9/?fullscreen' },
  },
];
