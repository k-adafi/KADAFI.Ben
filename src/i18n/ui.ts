/** Interface labels. Content (projects, experience…) lives in src/data. */
export const ui = {
  'nav.about': { fr: 'Profil', en: 'About' },
  'nav.workflow': { fr: 'Méthode IA', en: 'AI workflow' },
  'nav.projects': { fr: 'Projets', en: 'Projects' },
  'nav.experience': { fr: 'Expérience', en: 'Experience' },
  'nav.skills': { fr: 'Compétences', en: 'Skills' },
  'nav.education': { fr: 'Formation', en: 'Education' },
  'nav.contact': { fr: 'Contact', en: 'Contact' },
  'nav.menu': { fr: 'Ouvrir le menu', en: 'Open menu' },
  'nav.close': { fr: 'Fermer le menu', en: 'Close menu' },
  'nav.skip': { fr: 'Aller au contenu', en: 'Skip to content' },
  'theme.toggle': { fr: 'Changer de thème', en: 'Toggle theme' },
  'lang.switch': { fr: 'Switch to English', en: 'Passer en français' },

  'cta.cv': { fr: 'Télécharger le CV', en: 'Download résumé' },
  'cta.projects': { fr: 'Voir les projets', en: 'View projects' },
  'cta.contact': { fr: 'Me contacter', en: 'Get in touch' },
  'cta.interactiveCv': { fr: 'CV interactif', en: 'Interactive résumé' },

  'hero.available': { fr: 'Disponible · télétravail · temps plein', en: 'Available · remote · full-time' },

  'about.eyebrow': { fr: 'Profil', en: 'About' },
  'about.title': { fr: 'Du besoin à la mise en production.', en: 'From requirements to production.' },
  'about.facts.location': { fr: 'Localisation', en: 'Location' },
  'about.facts.timezone': { fr: 'Fuseau', en: 'Time zone' },
  'about.facts.languages': { fr: 'Langues', en: 'Languages' },
  'about.facts.focus': { fr: 'Focus', en: 'Focus' },

  'workflow.eyebrow': { fr: 'Développement assisté par IA', en: 'AI-assisted development' },
  'workflow.title': { fr: "L'agent écrit, je conçois, décide et vérifie.", en: 'The agent writes. I design, decide and verify.' },

  'projects.eyebrow': { fr: 'Réalisations', en: 'Selected work' },
  'projects.title': { fr: 'Projets récents', en: 'Recent projects' },
  'projects.lead': {
    fr: 'Applications développées pour des clients, une association et en entreprise. Cliquez sur un projet pour voir le contexte, mon rôle et les choix techniques.',
    en: 'Products built for clients, a non-profit and my employer. Open a project to see the context, my role and the technical decisions.',
  },
  'projects.filter.all': { fr: 'Tous', en: 'All' },
  'projects.filter.web': { fr: 'Web', en: 'Web' },
  'projects.filter.mobile': { fr: 'Mobile', en: 'Mobile' },
  'projects.filter.ai': { fr: 'IA & vision', en: 'AI & vision' },
  'projects.more': { fr: 'Autres projets', en: 'More projects' },
  'projects.details': { fr: 'Voir le détail', en: 'View case study' },
  'projects.live': { fr: 'Site en ligne', en: 'Live site' },
  'projects.code': { fr: 'Code source', en: 'Source code' },
  'projects.video': { fr: 'Vidéo de démo', en: 'Demo video' },
  'projects.design': { fr: 'Maquette', en: 'Prototype' },
  'projects.private': { fr: 'Code source privé', en: 'Private source code' },
  'projects.aiAssisted': { fr: 'Assisté par IA', en: 'AI-assisted' },
  'projects.context': { fr: 'Contexte', en: 'Context' },
  'projects.role': { fr: 'Mon rôle', en: 'My role' },
  'projects.highlights': { fr: 'Points clés', en: 'Highlights' },
  'projects.stack': { fr: 'Stack', en: 'Stack' },
  'projects.close': { fr: 'Fermer', en: 'Close' },
  'projects.prevImage': { fr: 'Image précédente', en: 'Previous image' },
  'projects.nextImage': { fr: 'Image suivante', en: 'Next image' },

  'experience.eyebrow': { fr: 'Parcours', en: 'Career' },
  'experience.title': { fr: 'Expérience professionnelle', en: 'Professional experience' },
  'experience.present': { fr: 'présent', en: 'present' },

  'skills.eyebrow': { fr: 'Boîte à outils', en: 'Toolbox' },
  'skills.title': { fr: 'Compétences techniques', en: 'Technical skills' },

  'education.eyebrow': { fr: 'Formation', en: 'Education' },
  'education.title': { fr: 'Diplômes & certifications', en: 'Degrees & certifications' },
  'education.degrees': { fr: 'Diplômes', en: 'Degrees' },
  'education.certifications': { fr: 'Certifications', en: 'Certifications' },
  'education.view': { fr: 'Voir', en: 'View' },
  'education.engagement': { fr: 'Engagement', en: 'Volunteering' },

  'contact.eyebrow': { fr: 'Contact', en: 'Contact' },
  'contact.title': { fr: 'Travaillons ensemble.', en: "Let's work together." },
  'contact.lead': {
    fr: 'Ouvert aux postes full-stack en télétravail, à temps plein. Je réponds sous 24 h ouvrables.',
    en: 'Open to full-time remote full-stack roles. I reply within one business day.',
  },
  'contact.phone': { fr: 'Téléphone', en: 'Phone' },
  'contact.copy': { fr: "Copier l'e-mail", en: 'Copy email' },
  'contact.copied': { fr: 'Copié !', en: 'Copied!' },

  'footer.built': {
    fr: 'Conçu et développé avec React, TypeScript, Vite et Tailwind CSS — en développement assisté par IA.',
    en: 'Designed and built with React, TypeScript, Vite and Tailwind CSS — with AI-assisted development.',
  },
  'footer.top': { fr: 'Haut de page', en: 'Back to top' },
} as const;

export type UiKey = keyof typeof ui;
