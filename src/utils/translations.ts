export type Language = 'fr' | 'en' | 'es';

export const translations = {
  fr: {
    header: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contacts',
    },
    hero: {
      greeting: "Hello 👋 !",
      roles: "Développeur et UX/UI Designer",
      description1: "Je suis développeur mobile et web full stack spécialisé en Laravel, React et Vue.js, ainsi qu'UX/UI Designer passionné, avec une expertise en Computer Vision. Je conçois des applications modernes, intuitives et centrées sur l'utilisateur.",
      description2: "Fort d'une connaissance dans la création d'expériences digitales fluides et performantes, je mets mes compétences techniques et créatives au service des projets de mes clients. Curieux, inventif et toujours à l'affût des dernières tendances technologiques, j'aime relever des défis et proposer des solutions sur mesure.",
      description3: "Disponible à distance ou sur site, je m'engage à dynamiser vos projets avec énergie, réactivité et implication.",
      viewProjects: "Voir mes projets",
    },
    about: {
      title: "À propos",
      highlight: "de moi",
      cards: {
        frontend: {
          title: "Front-End",
          desc: "HTML, CSS, JavaScript, React js, Vue js, Tailwind css"
        },
        backend: {
          title: "Back-End et base de données",
          desc: "PHP, Laravel, MySQL"
        },
        mobile: {
          title: "App Mobile",
          desc: "Java/XML, React Native"
        },
        data: {
          title: "Traitement et analyse de données",
          desc: "Python, OpenCV, Matplotlib, Keras, Tensorflow"
        },
        tools: {
          title: "Outils",
          desc: "Git, VS Code, Android Studio, Adobe XD, Figma"
        }
      }
    },
    skills: {
      title: "Mes",
      highlight: "Compétences",
      levels: {
        advanced: "(Avancé)",
        medium: "(Moyen)",
      }
    },
    projects: {
      title: "Mes",
      highlight: "projets",
      viewGithub: "Voir référentiel",
      viewDemo: "Voir démo",
      viewVideo: "Voir vidéo",
      prev: "Précédent",
      next: "Suivant",
      goToPage: "Aller à la page",
      items: {
        immo: { title: "Site web de l'agence IMMO Mada Océa", desc: "Un site web moderne et interactif pour l'agence IMMO Mada Océa à Toamasina, avec gestion des biens et services." },
        mydetector: { title: "My Detector", desc: "My DETECTOR est une application de détection et suivi d’objets en temps réel transforme la caméra de votre smartphone en un véritable outil intelligent." },
        ianatra: { title: "Iantra AI", desc: "Application de chatbot AI pour l'éduction secondaire (Lycée et collège)." },
        vente: { title: "Application web de vente", desc: "Projet académique sur la création de l'application web." },
        educ: { title: "Interface web pour une site d'éducation", desc: "Projet académique sur la création de plateforme web pour l'éducation secondaire." },
        peace: { title: "Design application PeaceMobile", desc: "Design de l'application mobile pour vulgariser les notions de droits et de dignité humaine." },
        jireh: { title: "JirehApk - Application de gestion de clientèle", desc: "Application de bureau conçue pour gérer la clientèle de l'entreprise Jireh Students." },
        github: { title: "Suivez-moi sur GitHub", desc: "Jetez un coup d'œil et découvrez mes autres projets sur GitHub." }
      }
    },
    experience: {
      title: "Expériences",
      highlight: "Professionnelles",
      items: {
        dna1: { period: "Février 2026 à aujourd’hui", title: "Développeur full stack", company: "DNA Webhosting" },
        dna2: { period: "Août 2025 à Janvier 2026", title: "Stagiaire développeur full stack", company: "DNA Webhosting" },
        mission: { period: "Janvier 2025 à aujourd’hui", title: "Freelance développeur en temps partiel", company: "Mission Madagascar" },
        immo: { period: "Avril à Juin 2025", title: "Lead Développeur : Développement de site web de gestion des biens et services pour l’agence immobilière", company: "Agence IMMO MADA Océa Toamasina" },
        formateur: { period: "Mars 2024 – Janvier 2025", title: "Formateur en informatique bureautique", company: "Centre de Formation Le Cercle Toamasina" },
        jirama: { period: "Janvier - Mai 2024", title: "Stagiaire au sein de la DSI de JIRAMA à Antananarivo", desc: "Développement d’une API REST et application web pour la gestion de recrutement" },
        rh: { period: "Janvier 2021 – présent", title: "Responsable des ressources humaines", company: "Association YES-TaFiTa à Toamasina" }
      },
      visit: "Visiter le site"
    },
    education: {
      title: "Parcours",
      highlight: "Académique",
      items: {
        orangeCV: { year: "Juin 2025", title: "Formation en Computer Vision et modélisation de l’ intelligence artificielle", institution: "Orange Digital Center Madagascar à Antananarivo" },
        master: { year: "2025", title: "Master II en informatique imageries et Interactions", institution: "Université de Toamasina" },
        licence: { year: "2023", title: "Licence en Mathématiques informatiques et Application", institution: "Université de Toamasina" },
        opendata: { year: "Septembre 2023", title: "Formation en Open Data au cœur d'un plaidoyer efficace", institution: "Madagascar Initiatives for Digital à Antananarivo" },
        orangeUX: { year: "Avril 2023", title: "Formation en UX/UI (User Experience/User Interface) design", institution: "Orange Digital Center Madagascar à Antananarivo" },
        bacc: { year: "2019", title: "Baccalauréat de l'enseignement secondaire", institution: "Lycée Mananara Nord" }
      }
    },
    contact: {
      title: "Me",
      highlight: "Contacter",
      info: "Informations de contact",
      phone: "Téléphone",
      locationTitle: "Localisation",
      location: "Région Atsinanana, Toamasina Madagascar",
      form: {
        name: "Nom",
        namePlaceholder: "Votre nom",
        email: "Email",
        emailPlaceholder: "votre@email.com",
        message: "Message",
        messagePlaceholder: "Votre message...",
        send: "Envoyer le message"
      }
    },
    footer: {
      description: "Développeur passionné créant des expériences web et mobiles innovantes.",
      rights: "Tous droits réservés."
    },
    video: {
      back: "Retour au Portfolio"
    }
  },
  en: {
    header: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hello 👋 !",
      roles: "Developer and UX/UI Designer",
      description1: "I am a full stack web and mobile developer specialized in Laravel, React, and Vue.js, as well as a passionate UX/UI Designer with expertise in Computer Vision. I design modern, intuitive, and user-centric applications.",
      description2: "With strong knowledge in creating fluid and high-performance digital experiences, I put my technical and creative skills at the service of my clients' projects. Curious, inventive, and always on the lookout for the latest technological trends, I love taking on challenges and proposing tailor-made solutions.",
      description3: "Available remotely or on-site, I am committed to boosting your projects with energy, responsiveness, and dedication.",
      viewProjects: "View my projects",
    },
    about: {
      title: "About",
      highlight: "me",
      cards: {
        frontend: {
          title: "Front-End",
          desc: "HTML, CSS, JavaScript, React js, Vue js, Tailwind css"
        },
        backend: {
          title: "Back-End and Database",
          desc: "PHP, Laravel, MySQL"
        },
        mobile: {
          title: "Mobile App",
          desc: "Java/XML, React Native"
        },
        data: {
          title: "Data Processing and Analysis",
          desc: "Python, OpenCV, Matplotlib, Keras, Tensorflow"
        },
        tools: {
          title: "Tools",
          desc: "Git, VS Code, Android Studio, Adobe XD, Figma"
        }
      }
    },
    skills: {
      title: "My",
      highlight: "Skills",
      levels: {
        advanced: "(Advanced)",
        medium: "(Intermediate)",
      }
    },
    projects: {
      title: "My",
      highlight: "Projects",
      viewGithub: "View Repository",
      viewDemo: "View Demo",
      viewVideo: "Watch Video",
      prev: "Previous",
      next: "Next",
      goToPage: "Go to page",
      items: {
        immo: { title: "IMMO Mada Océa Agency Website", desc: "A modern and interactive website for the IMMO Mada Océa agency in Toamasina, with property and service management." },
        mydetector: { title: "My Detector", desc: "My DETECTOR is a real-time object detection and tracking application that transforms your smartphone camera into a true intelligent tool." },
        ianatra: { title: "Iantra AI", desc: "AI chatbot application for secondary education (High school and middle school)." },
        vente: { title: "Sales Web Application", desc: "Academic project on the creation of a web application." },
        educ: { title: "Web Interface for an Education Site", desc: "Academic project on the creation of a web platform for secondary education." },
        peace: { title: "PeaceMobile App Design", desc: "Mobile app design to popularize the concepts of human rights and dignity." },
        jireh: { title: "JirehApk - Customer Management App", desc: "Desktop application designed to manage the customer base of the Jireh Students company." },
        github: { title: "Follow me on GitHub", desc: "Take a look and discover my other projects on GitHub." }
      }
    },
    experience: {
      title: "Professional",
      highlight: "Experience",
      items: {
        dna1: { period: "February 2026 to Present", title: "Full Stack Developer", company: "DNA Webhosting" },
        dna2: { period: "August 2025 to January 2026", title: "Full Stack Developer Intern", company: "DNA Webhosting" },
        mission: { period: "January 2025 to Present", title: "Part-time Freelance Developer", company: "Mission Madagascar" },
        immo: { period: "April to June 2025", title: "Lead Developer: Real estate agency property and service management website", company: "IMMO MADA Océa Agency Toamasina" },
        formateur: { period: "March 2024 – January 2025", title: "Office IT Trainer", company: "Le Cercle Training Center Toamasina" },
        jirama: { period: "January - May 2024", title: "Intern in the IT Department of JIRAMA in Antananarivo", desc: "Development of a REST API and web application for recruitment management" },
        rh: { period: "January 2021 – Present", title: "Human Resources Manager", company: "YES-TaFiTa Association in Toamasina" }
      },
      visit: "Visit site"
    },
    education: {
      title: "Academic",
      highlight: "Background",
      items: {
        orangeCV: { year: "June 2025", title: "Training in Computer Vision and Artificial Intelligence Modeling", institution: "Orange Digital Center Madagascar in Antananarivo" },
        master: { year: "2025", title: "Master II in Computer Science, Imaging and Interactions", institution: "University of Toamasina" },
        licence: { year: "2023", title: "Bachelor's Degree in Computer Mathematics and Application", institution: "University of Toamasina" },
        opendata: { year: "September 2023", title: "Training in Open Data at the heart of effective advocacy", institution: "Madagascar Initiatives for Digital in Antananarivo" },
        orangeUX: { year: "April 2023", title: "Training in UX/UI (User Experience/User Interface) design", institution: "Orange Digital Center Madagascar in Antananarivo" },
        bacc: { year: "2019", title: "High School Diploma", institution: "Lycée Mananara Nord" }
      }
    },
    contact: {
      title: "Contact",
      highlight: "Me",
      info: "Contact Information",
      phone: "Phone",
      locationTitle: "Location",
      location: "Atsinanana Region, Toamasina Madagascar",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "your@email.com",
        message: "Message",
        messagePlaceholder: "Your message...",
        send: "Send Message"
      }
    },
    footer: {
      description: "Passionate developer creating innovative web and mobile experiences.",
      rights: "All rights reserved."
    },
    video: {
      back: "Back to Portfolio"
    }
  },
  es: {
    header: {
      home: 'Inicio',
      about: 'Sobre mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      greeting: "¡Hola 👋 !",
      roles: "Desarrollador y Diseñador UX/UI",
      description1: "Soy desarrollador web y móvil full stack especializado en Laravel, React y Vue.js, así como un apasionado Diseñador UX/UI con experiencia en Visión por Computadora. Diseño aplicaciones modernas, intuitivas y centradas en el usuario.",
      description2: "Con un sólido conocimiento en la creación de experiencias digitales fluidas y de alto rendimiento, pongo mis habilidades técnicas y creativas al servicio de los proyectos de mis clientes. Curioso, inventivo y siempre atento a las últimas tendencias tecnológicas, me encanta asumir retos y proponer soluciones a medida.",
      description3: "Disponible de forma remota o presencial, me comprometo a impulsar sus proyectos con energía, capacidad de respuesta y dedicación.",
      viewProjects: "Ver mis proyectos",
    },
    about: {
      title: "Sobre",
      highlight: "mí",
      cards: {
        frontend: {
          title: "Front-End",
          desc: "HTML, CSS, JavaScript, React js, Vue js, Tailwind css"
        },
        backend: {
          title: "Back-End y Base de datos",
          desc: "PHP, Laravel, MySQL"
        },
        mobile: {
          title: "App Móvil",
          desc: "Java/XML, React Native"
        },
        data: {
          title: "Procesamiento y análisis de datos",
          desc: "Python, OpenCV, Matplotlib, Keras, Tensorflow"
        },
        tools: {
          title: "Herramientas",
          desc: "Git, VS Code, Android Studio, Adobe XD, Figma"
        }
      }
    },
    skills: {
      title: "Mis",
      highlight: "Habilidades",
      levels: {
        advanced: "(Avanzado)",
        medium: "(Medio)",
      }
    },
    projects: {
      title: "Mis",
      highlight: "Proyectos",
      viewGithub: "Ver repositorio",
      viewDemo: "Ver demostración",
      viewVideo: "Ver video",
      prev: "Anterior",
      next: "Siguiente",
      goToPage: "Ir a la página",
      items: {
        immo: { title: "Sitio web de la agencia IMMO Mada Océa", desc: "Un sitio web moderno e interactivo para la agencia IMMO Mada Océa en Toamasina, con gestión de propiedades y servicios." },
        mydetector: { title: "My Detector", desc: "My DETECTOR es una aplicación de detección y seguimiento de objetos en tiempo real que transforma la cámara de su teléfono inteligente en una verdadera herramienta inteligente." },
        ianatra: { title: "Iantra AI", desc: "Aplicación de chatbot de IA para educación secundaria (Secundaria y preparatoria)." },
        vente: { title: "Aplicación web de ventas", desc: "Proyecto académico sobre la creación de una aplicación web." },
        educ: { title: "Interfaz web para un sitio de educación", desc: "Proyecto académico sobre la creación de una plataforma web para la educación secundaria." },
        peace: { title: "Diseño de la aplicación PeaceMobile", desc: "Diseño de aplicación móvil para popularizar los conceptos de derechos humanos y dignidad." },
        jireh: { title: "JirehApk - App de Gestión de Clientes", desc: "Aplicación de escritorio diseñada para gestionar la base de clientes de la empresa Jireh Students." },
        github: { title: "Sígueme en GitHub", desc: "Echa un vistazo y descubre mis otros proyectos en GitHub." }
      }
    },
    experience: {
      title: "Experiencia",
      highlight: "Profesional",
      items: {
        dna1: { period: "Febrero 2026 al Presente", title: "Desarrollador Full Stack", company: "DNA Webhosting" },
        dna2: { period: "Agosto 2025 a Enero 2026", title: "Stagiaire Desarrollador Full Stack", company: "DNA Webhosting" },
        mission: { period: "Enero 2025 al Presente", title: "Desarrollador Freelance a tiempo parcial", company: "Misión Madagascar" },
        immo: { period: "Abril a Junio 2025", title: "Desarrollador Principal: Sitio web de gestión inmobiliaria y servicios", company: "Agencia IMMO MADA Océa Toamasina" },
        formateur: { period: "Marzo 2024 – Enero 2025", title: "Formador en Informática de Oficina", company: "Centro de Formación Le Cercle Toamasina" },
        jirama: { period: "Enero - Mayo 2024", title: "Pasante en el Departamento TI de JIRAMA en Antananarivo", desc: "Desarrollo de una API REST y aplicación web para la gestión de contrataciones" },
        rh: { period: "Enero 2021 – Presente", title: "Gerente de Recursos Humanos", company: "Asociación YES-TaFiTa en Toamasina" }
      },
      visit: "Visitar sitio"
    },
    education: {
      title: "Formación",
      highlight: "Académica",
      items: {
        orangeCV: { year: "Junio 2025", title: "Formación en Visión por Computadora y Modelado de Inteligencia Artificial", institution: "Orange Digital Center Madagascar en Antananarivo" },
        master: { year: "2025", title: "Máster II en Informática de Imágenes e Interacciones", institution: "Universidad de Toamasina" },
        licence: { year: "2023", title: "Licenciatura en Matemáticas Informáticas y Aplicadas", institution: "Universidad de Toamasina" },
        opendata: { year: "Septiembre 2023", title: "Formación en Datos Abiertos en el corazón de la promoción eficaz", institution: "Madagascar Initiatives for Digital en Antananarivo" },
        orangeUX: { year: "Abril 2023", title: "Formación en diseño UX/UI (Experiencia de Usuario/Interfaz de Usuario)", institution: "Orange Digital Center Madagascar en Antananarivo" },
        bacc: { year: "2019", title: "Bachillerato de escuela secundaria", institution: "Lycée Mananara Nord" }
      }
    },
    contact: {
      title: "Contácta",
      highlight: "me",
      info: "Información de Contacto",
      phone: "Teléfono",
      locationTitle: "Ubicación",
      location: "Región Atsinanana, Toamasina Madagascar",
      form: {
        name: "Nombre",
        namePlaceholder: "Tu nombre",
        email: "Correo",
        emailPlaceholder: "tu@correo.com",
        message: "Mensaje",
        messagePlaceholder: "Tu mensaje...",
        send: "Enviar Mensaje"
      }
    },
    footer: {
      description: "Desarrollador apasionado creando innovadoras experiencias web y móviles.",
      rights: "Todos los derechos reservados."
    },
    video: {
      back: "Volver al Portafolio"
    }
  }
};
