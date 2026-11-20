import type { L, LList } from '../i18n';

import certCoursera1 from '../assets/certificat/Coursera_450644XMZU44.pdf';
import certCoursera2 from '../assets/certificat/Coursera_5TGSML9DF7DN.pdf';
import certODC_CV from '../assets/certificat/Attestation_ODC_computer_vision.png';
import certEnglish from '../assets/certificat/Certificat_english_connect_programm.png';
import certODC_UXUI from '../assets/certificat/Certificat_ODC_UX-UI_Design.png';
import certJade from '../assets/certificat/Attestation_reconnaisance_ONG_Jade.png';
import certHackaton from '../assets/certificat/Attestation_HACKATON_entrepreunariat.png';
import certMaIDi from '../assets/certificat/Attestation_MaIDi_open_data.png';

export interface Job {
  company: string;
  url?: string;
  role: L;
  location: L;
  start: L;
  end?: L; // undefined = present
  bullets: LList;
  stack: string[];
}

export const experience: Job[] = [
  {
    company: 'DNA Webhosting',
    url: 'https://dna.mg/',
    role: { fr: 'Développeur Full-Stack', en: 'Full-Stack Developer' },
    location: { fr: 'Toamasina', en: 'Toamasina' },
    start: { fr: 'févr. 2026', en: 'Feb 2026' },
    bullets: {
      fr: [
        'Développement d’AfroJourney, plateforme TourismTech web et mobile (React Native, React, TanStack Query, Zustand, NestJS, PostgreSQL / PostGIS).',
        'Pilotage du site institutionnel et du CMS multilingue de l’entreprise (Laravel, Inertia.js, Vue 3, Tailwind CSS), avec des composants Vue réutilisables : DataTable à colonnes fixes, éditeur TinyMCE, thèmes.',
        'Mise en place du contrôle d’accès par rôles (Spatie Permission) sur toute l’administration.',
        'Revues de code et audits qualité : doublons, requêtes N+1 et conflits de logique métier corrigés avant livraison.',
      ],
      en: [
        'Building AfroJourney, a web and mobile TourismTech platform (React Native, React, TanStack Query, Zustand, NestJS, PostgreSQL / PostGIS).',
        "Leading the company's multilingual corporate website and CMS (Laravel, Inertia.js, Vue 3, Tailwind CSS), including reusable Vue components: sticky-column DataTable, TinyMCE editor, theming.",
        'Implemented role-based access control with Spatie Permission across the whole admin area.',
        'Ran code reviews and quality audits, fixing duplicate data, N+1 queries and business-logic conflicts before release.',
      ],
    },
    stack: ['TypeScript', 'React', 'React Native', 'NestJS', 'Vue 3', 'Inertia.js', 'Laravel', 'PostgreSQL', 'PostGIS'],
  },
  {
    company: 'DNA Webhosting',
    url: 'https://dna.mg/',
    role: { fr: 'Stagiaire R&D Full-Stack', en: 'R&D Full-Stack Developer Intern' },
    location: { fr: 'Toamasina', en: 'Toamasina' },
    start: { fr: 'août 2025', en: 'Aug 2025' },
    end: { fr: 'janv. 2026', en: 'Jan 2026' },
    bullets: {
      fr: [
        'Mémoire de Master : détection et suivi d’objets en temps réel sur mobile (YOLOv11 + MobileNetV3-Small + DeepSORT), inférence TensorFlow Lite dans une app Android.',
        'Fiabilisation d’un pipeline de données associant modèles IA, flux vidéo et API ; débogage d’un import Excel Laravel multi-entités.',
        'Développement de la plateforme Ranovao 1.0 (Vue.js, Laravel, MySQL).',
      ],
      en: [
        "Master's thesis: real-time mobile object detection and tracking (YOLOv11 + MobileNetV3-Small + DeepSORT) with TensorFlow Lite inference inside an Android app.",
        'Hardened a data pipeline combining AI models, video streams and APIs; debugged a multi-entity Laravel Excel import.',
        'Built the Ranovao 1.0 platform (Vue.js, Laravel, MySQL).',
      ],
    },
    stack: ['Laravel', 'Vue 3', 'MySQL', 'Python', 'TensorFlow Lite', 'Android'],
  },
  {
    company: 'Mission Madagascar',
    url: 'https://mission-madagascar.mg',
    role: { fr: 'Développeur Full-Stack Freelance', en: 'Freelance Full-Stack Developer' },
    location: { fr: 'À distance', en: 'Remote' },
    start: { fr: 'janv. 2025', en: 'Jan 2025' },
    end: { fr: 'déc. 2025', en: 'Dec 2025' },
    bullets: {
      fr: [
        'Projets web pour plusieurs clients en parallèle, du recueil des besoins au déploiement, avec contact direct et reporting régulier.',
        'Lead développeur du site de l’agence immobilière IMMO Mada Océa, en ligne sur agenceimmomadaocea.com (React, Laravel, MySQL).',
      ],
      en: [
        'Delivered web projects for several clients in parallel, from requirements to deployment, with direct client communication and regular reporting.',
        'Lead developer of the IMMO Mada Océa real-estate agency website, live at agenceimmomadaocea.com (React, Laravel, MySQL).',
      ],
    },
    stack: ['React', 'Laravel', 'MySQL'],
  },
  {
    company: 'Centre Le Cercle',
    role: { fr: 'Formateur en informatique bureautique', en: 'Office IT Trainer' },
    location: { fr: 'Toamasina', en: 'Toamasina' },
    start: { fr: 'mai 2024', en: 'May 2024' },
    end: { fr: 'déc. 2024', en: 'Dec 2024' },
    bullets: {
      fr: ['Formation d’apprenants aux outils bureautiques.'],
      en: ['Taught office software to adult learners.'],
    },
    stack: [],
  },
  {
    company: 'JIRAMA — DSI',
    role: { fr: 'Stagiaire Développeur', en: 'Developer Intern' },
    location: { fr: 'Antananarivo', en: 'Antananarivo' },
    start: { fr: 'févr. 2024', en: 'Feb 2024' },
    end: { fr: 'avr. 2024', en: 'Apr 2024' },
    bullets: {
      fr: ['API REST et application web de gestion du recrutement.'],
      en: ['Built a REST API and its web client for recruitment management.'],
    },
    stack: ['PHP', 'JavaScript', 'MySQL'],
  },
];

export const skillGroups: { title: L; items: string[] }[] = [
  { title: { fr: 'Langages', en: 'Languages' }, items: ['TypeScript', 'JavaScript', 'PHP 8', 'Python', 'Java', 'SQL'] },
  {
    title: { fr: 'Frontend', en: 'Frontend' },
    items: ['React', 'Vue 3', 'Inertia.js', 'Vite', 'TanStack Query', 'Zustand', 'Tailwind CSS', 'Ant Design Vue'],
  },
  {
    title: { fr: 'Backend & données', en: 'Backend & data' },
    items: ['Laravel', 'NestJS', 'Node.js', 'API REST', 'PostgreSQL', 'PostGIS', 'MySQL', 'SQLite', 'Firebase'],
  },
  {
    title: { fr: 'Mobile & IA', en: 'Mobile & AI' },
    items: ['React Native', 'Android (Java)', 'PyTorch', 'TensorFlow Lite', 'YOLO', 'OpenCV'],
  },
  {
    title: { fr: 'Outils & pratiques', en: 'Tools & practices' },
    items: ['Claude Code', 'Git / GitHub', 'Revue de code', 'RBAC (Spatie)', 'n8n', 'Figma', 'UML / Merise', 'Trello'],
  },
];

export const degrees: { title: L; detail: L; period: L }[] = [
  {
    title: { fr: 'Master en Mathématiques, Informatique et Applications', en: "Master's in Mathematics, Computer Science & Applications" },
    detail: { fr: 'Parcours Imagerie et Interactions · Université de Toamasina', en: 'Imaging & Interactions track · University of Toamasina' },
    period: { fr: 'mars 2024 – févr. 2026', en: 'Mar 2024 – Feb 2026' },
  },
  {
    title: { fr: 'Licence en Mathématiques, Informatique et Applications', en: "Bachelor's in Mathematics, Computer Science & Applications" },
    detail: { fr: 'Université de Toamasina', en: 'University of Toamasina' },
    period: { fr: 'nov. 2020 – oct. 2023', en: 'Nov 2020 – Oct 2023' },
  },
];

export const certifications: { title: L; issuer: string; year: string; file?: string }[] = [
  { title: { fr: 'Business Analysis & Process Management', en: 'Business Analysis & Process Management' }, issuer: 'Coursera', year: '2026', file: certCoursera1 },
  { title: { fr: 'Vision par ordinateur', en: 'Computer Vision' }, issuer: 'Orange Digital Center', year: '2025', file: certODC_CV },
  { title: { fr: 'English Connect Program', en: 'English Connect Program' }, issuer: 'Better Tomorrow Global', year: '2025', file: certEnglish },
  { title: { fr: 'Reconnaissance — Vision par ordinateur', en: 'Recognition — Computer Vision' }, issuer: 'ONG JADE', year: '2025', file: certJade },
  { title: { fr: 'Hackathon — Entrepreneuriat', en: 'Hackathon — Entrepreneurship' }, issuer: "Maison de l'Entrepreneuriat", year: '2025', file: certHackaton },
  { title: { fr: 'Programmation orientée objet en Java', en: 'Object-Oriented Programming in Java' }, issuer: 'Coursera', year: '2024', file: certCoursera2 },
  { title: { fr: 'Open Data et plaidoyer', en: 'Open Data for Advocacy' }, issuer: 'MaIDi', year: '2023', file: certMaIDi },
  { title: { fr: 'Design UX/UI', en: 'UX/UI Design' }, issuer: 'Orange Digital Center', year: '2023', file: certODC_UXUI },
];

export const engagement = {
  org: 'YES-TaFiTa',
  url: 'https://yestafita.org/',
  text: {
    fr: 'Association de jeunes, Toamasina — coordination de projets associatifs depuis 2020 ; conception et développement du site web et de l’espace collaboratif en 2026.',
    en: 'Youth association, Toamasina — community project coordination since 2020; designed and built its website and collaborative workspace in 2026.',
  } satisfies L,
};
