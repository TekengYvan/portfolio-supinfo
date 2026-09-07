import inventory from "./assets/java.jpeg";
export const profile = {
  github: "https://github.com/TekengYvan",
  linkedin:
    "https://www.linkedin.com/in/yvan-duplex-pacom-tekeng-djang-129abb336/",
  email: "tekengyvan2@gmail.com",
};
export const projects = [
  {
    name: "NextLuk",
    category: "AI",
    type: [
      "Projet collaboratif · Web & mobile",
      "Collaborative project · Web & mobile",
    ],
    description: [
      "La mode sur mesure rencontre l’intelligence artificielle. Une plateforme qui connecte clients, stylistes, tailleurs et fournisseurs : prise de mesures automatique, essayage virtuel, jumeau numérique et suivi des commandes.",
      "Custom fashion meets artificial intelligence. A platform connecting clients, stylists, tailors and suppliers through automatic body measurement, virtual try-on, a digital twin and order tracking.",
    ],
    tech: ["React", "TypeScript", "React Native", "Expo", "IA"],
    image: "/images/nextluk-logo.png",
    caption: ["Identité visuelle du projet", "Project visual identity"],
    links: [
      ["Web", "https://github.com/Rean64/NextLukFrontend"],
      ["Mobile", "https://github.com/Rean64/NextLuk"],
    ],
    restricted: true,
  },
  {
    name: "Lifeline Saver",
    category: "IoT",
    type: ["Sécurité routière · Web & mobile", "Road safety · Web & mobile"],
    description: [
      "Détection intelligente d’accidents de voiture et envoi automatique d’alertes avec coordonnées GPS aux contacts d’urgence.",
      "Intelligent car accident detection and automatic alerts with GPS coordinates sent to emergency contacts.",
    ],
    tech: ["React Native", "Python", "Node.js", "IoT"],
    image: "/images/lifeline-app.png",
    caption: ["Présentation du prototype", "Prototype presentation"],
    links: [["GitHub", "https://github.com/TekengYvan/Lifeline"]],
  },
  {
    name: "Cosmetic Pro",
    category: "Software",
    type: ["Application desktop", "Desktop application"],
    description: [
      "Une application de gestion de stocks et d’inventaires dédiée aux produits cosmétiques, développée en Java.",
      "A Java desktop application for managing cosmetic product inventory and stock.",
    ],
    tech: ["Java", "Swing", "SQL"],
    image: inventory,
    caption: [
      "Visuel de gestion de stocks fourni dans le portfolio initial",
      "Inventory management visual from the original portfolio",
    ],
    links: [["GitHub", "https://github.com/TekengYvan/cosmetic_pro"]],
  },
  {
    name: "S-CAMP",
    category: "Web",
    type: ["Projet collaboratif", "Collaborative project"],
    description: [
      "Application collaborative de gestion et d’organisation de camps scientifiques.",
      "A collaborative application for managing and organizing science camps.",
    ],
    tech: ["React", "Node.js", "Firebase"],
    visual: "S-CAMP",
    caption: ["Présentation typographique", "Typographic presentation"],
    links: [["GitHub", "https://github.com/Rean64/S-CAMP"]],
    restricted: true,
  },
  {
    name: "IAI · Portail assurance",
    category: "Web",
    type: ["Projet académique collaboratif", "Collaborative academic project"],
    description: [
      "Portail de gestion d’assurance scolaire, de suivi et de services aux étudiants.",
      "A school insurance management portal with student tracking and services.",
    ],
    tech: ["PHP", "JavaScript", "SQL"],
    links: [["GitHub", "https://github.com/Rean64/IAI-PROJECT"]],
    visual: "IAI",
    caption: ["Présentation typographique", "Typographic presentation"],
  },
  {
    name: "Contour",
    category: "Web",
    type: [
      "Projet collaboratif · Services",
      "Collaborative project · Services",
    ],
    description: [
      "Une plateforme pour commander des services de cordonnerie et de nettoyage de chaussures et de vêtements.",
      "A platform for ordering shoe repair, shoe cleaning and clothing care services.",
    ],
    tech: ["Web", "Mobile"],
    links: [["GitHub", "https://github.com/Rean64/contour"]],
    restricted: true,
    visual: "CONTOUR",
    caption: ["Présentation typographique", "Typographic presentation"],
  },
  {
    name: "Malware Detection",
    category: "Security",
    type: ["Hackathon · Février — mai 2025", "Hackathon · February — May 2025"],
    description: [
      "Analyse de fichiers suspects avec Python et utilisation d’algorithmes de classification pour identifier les menaces.",
      "Suspicious file analysis in Python using classification algorithms to identify threats.",
    ],
    tech: ["Python", "Cybersécurité", "Classification"],
    visual: "THREAT ANALYSIS",
    caption: ["Présentation typographique", "Typographic presentation"],
    links: [],
  },
];
export const certificates = [
  ["Intelligence artificielle", "Cisco Networking Academy"],
  ["Cybercriminalité", "Organisation des Nations unies (ONU)"],
  ["Junior Cybersecurity Analyst Career Path", "Cisco Networking Academy"],
  ["Ethical Hacker", "NetAcad"],
  ["Sécurité des systèmes d’information (SSI)", "SecNumAcadémie"],
  ["Introduction to Cybersecurity", "IBM SkillsBuild"],
  ["Network Support and Security", "NetAcad"],
  ["Computer System Security", "MIT · Coursera"],
  ["Computer Security", "Saylor Academy"],
  ["Python", "freeCodeCamp"],
];

const localProjects = [
  {
    name: "Munagay",
    category: "AI",
    type: [
      "Beauté & coiffure · Application web",
      "Beauty & hair styling · Web application",
    ],
    description: [
      "Une plateforme de coiffure avec découverte des salons, réservation, messagerie, carte interactive et essayage virtuel de coiffures assisté par IA.",
      "A hair styling platform with salon discovery, booking, messaging, an interactive map and AI-assisted virtual hairstyle try-on.",
    ],
    tech: ["React", "Django", "IA", "Leaflet"],
    image: "/images/munagay.png",
    caption: [
      "Capture de l’interface locale · Connexion",
      "Local interface screenshot · Sign in",
    ],
    links: [["GitHub", "https://github.com/TekengYvan/Hairsalon"]],
  },
  {
    name: "Real Estate",
    category: "Web",
    type: ["Immobilier · Plateforme web", "Real estate · Web platform"],
    description: [
      "Une plateforme immobilière avec recherche de biens, visites virtuelles, réservations, messagerie et espaces dédiés aux propriétaires, clients et prestataires de services.",
      "A real estate platform with property search, virtual tours, bookings, messaging and dedicated workspaces for landlords, clients and service providers.",
    ],
    tech: ["React", "Leaflet", "API REST"],
    image: "/images/real-estate.png",
    caption: [
      "Capture de l’interface locale · Accueil",
      "Local interface screenshot · Home page",
    ],
    links: [["GitHub", "https://github.com/TekengYvan/realestate"]],
  },
  {
    name: "Prep Concours",
    category: "Web",
    type: ["Éducation · React & Django", "Education · React & Django"],
    description: [
      "Préparation aux concours : cours, annales, examens blancs, suivi de progression et outils d’entraînement oral assistés par IA.",
      "Exam preparation with courses, past papers, practice exams, progress tracking and AI-assisted oral practice tools.",
    ],
    tech: ["React", "Django", "TypeScript", "IA"],
    image: "/images/prep-concours.png",
    caption: [
      "Capture de l’accueil local · Sans données serveur",
      "Local home page screenshot · Without server data",
    ],
    links: [["GitHub", "https://github.com/TekengYvan/concours-proj"]],
  },
  {
    name: "JobLink",
    category: "Software",
    type: [
      "Marketplace de services · Web & mobile",
      "Service marketplace · Web & mobile",
    ],
    description: [
      "Une application mobile qui connecte clients et prestataires, accompagnée d’une API Django et d’un portail d’administration React : demandes, offres, messagerie, vérification et suivi des prestations.",
      "A mobile application connecting clients and service providers, backed by a Django API and React administration portal: requests, offers, messaging, verification and service tracking.",
    ],
    tech: ["React Native", "Expo", "Django REST", "React"],
    image: "/images/joblink.png",
    caption: [
      "Capture du portail d’administration · Connexion",
      "Administration portal screenshot · Sign in",
    ],
    links: [],
  },
  {
    name: "SafeMarket",
    category: "Web",
    type: ["E-commerce · Marketplace", "E-commerce · Marketplace"],
    description: [
      "Une marketplace avec négociation en temps réel, portefeuille, vérification des vendeurs et logique de séquestre pour le suivi des transactions.",
      "A marketplace with real-time negotiation, wallet functionality, seller verification and escrow logic for transaction tracking.",
    ],
    tech: ["Laravel", "Livewire", "SQLite", "Tailwind CSS"],
    visual: "SAFEMARKET",
    caption: ["Présentation typographique", "Typographic presentation"],
    links: [["GitHub", "https://github.com/TekengYvan/SafeMarket"]],
  },
  {
    name: "SmartBell · ESP32",
    category: "IoT",
    type: ["IoT · Adaptation open source", "IoT · Open-source adaptation"],
    description: [
      "Adaptation d’un système de sonnerie scolaire Flutter avec un contrôleur ESP32 : configuration Wi-Fi, commande de deux buzzers et limite de sécurité de déclenchement. Basé sur bellsmkncampalagian de hex4coder.",
      "Adaptation of a Flutter school bell system with an ESP32 controller: Wi-Fi configuration, dual-buzzer control and a safety timeout. Based on bellsmkncampalagian by hex4coder.",
    ],
    tech: ["Flutter", "Dart", "ESP32", "IoT"],
    visual: "SMARTBELL",
    caption: ["Présentation typographique", "Typographic presentation"],
    links: [
      ["GitHub", "https://github.com/TekengYvan/Bell"],
      ["Original", "https://github.com/hex4coder/bellsmkncampalagian"],
    ],
  },
];
projects.splice(1, 0, ...localProjects.slice(0, 2));
projects.splice(4, 0, ...localProjects.slice(2));
import { projectDetails, mboa360 } from "./projectDetails";
projects.splice(3, 0, mboa360);
projects.forEach((project) => {
  const detail = projectDetails[project.name];
  if (detail) Object.assign(project, detail);
  if (project.gallery?.length) project.caption = project.gallery[0].caption;
});

import { researchedDetails } from "./researchedDetails";
projects.forEach(project => {
  const detail = researchedDetails[project.slug];
  if (!detail) return;
  const previous = project.about || project.description;
  Object.assign(project, detail);
  if (!detail.about) project.about = previous.map((text, index) => text + "\n\n" + detail.extra[index]);
});
