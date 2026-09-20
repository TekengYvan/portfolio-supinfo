const screenshot = (src, fr, en) => ({
  src: "/images/" + src,
  caption: [fr, en],
});
const galleryScreens = (project, files) =>
  files.map((file) => {
    const label = file
      .replace(/\.(jpg|jpeg|png)$/i, "")
      .replace(/^[^-]+-/, "")
      .replaceAll("-", " ");
    return screenshot(
      "gallery/" + file,
      `${project} · ${label}`,
      `${project} · ${label}`,
    );
  });
export const projectDetails = {
  NextLuk: {
    slug: "nextluk",
    domain: ["Fashion Tech · IA", "Fashion Tech · AI"],
    tech: [
      "React",
      "TypeScript",
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "MongoDB",
      "IA",
    ],
    links: [["GitHub", "https://github.com/TekengYvan/Nextluk"]],
    restricted: false,
    image: "/images/nextluk.png",
    about: [
      "NextLuk réunit une application mobile, une interface web et une API Node.js autour de la mode et des services de beauté. Le parcours connecte les clients aux professionnels, avec gestion des produits, commandes, réservations, portfolios et échanges. L’expérience mobile explore la prise de mesures, l’essayage virtuel et le jumeau numérique. Des espaces distincts accompagnent les professionnels et l’administration.",
      "NextLuk brings together a mobile app, a web interface and a Node.js API for fashion and beauty services. It connects clients with professionals through products, orders, bookings, portfolios and messaging. The mobile experience explores body measurement, virtual try-on and digital twins. Dedicated workspaces support professionals and administrators.",
    ],
    highlights: [
      [
        "Applications web et mobile complémentaires",
        "Essayage virtuel et jumeau numérique",
        "Commandes, produits et réservations",
        "Portfolios et messagerie entre clients et professionnels",
        "Espaces professionnels et administration",
      ],
      [
        "Complementary web and mobile applications",
        "Virtual try-on and digital twin",
        "Orders, products and bookings",
        "Portfolios and client–professional messaging",
        "Professional workspaces and administration",
      ],
    ],
    gallery: [
      screenshot(
        "nextluk.png",
        "Accueil web NextLuk · Version du dépôt TekengYvan",
        "NextLuk web home · TekengYvan repository version",
      ),
      screenshot(
        "nextluk-features.png",
        "Présentation des fonctionnalités NextLuk",
        "NextLuk feature overview",
      ),
      screenshot(
        "nextluk-app.jpg",
        "Application mobile · Jumeau numérique",
        "Mobile application · Digital twin",
      ),
      screenshot(
        "nextluk-app-dark.jpg",
        "Application mobile · Vue sombre du jumeau numérique",
        "Mobile application · Dark digital twin view",
      ),
      ...galleryScreens("NextLuk", [
        "nextluk-home.jpg", "nextluk-signup.jpg", "nextluk-DashboardHome.jpg",
        "nextluk-ProfessionalStats.jpg", "nextluk-Services.jpg", "nextluk-Bookings.jpg",
        "nextluk-Portfolio.jpg", "nextluk-Products.jpg", "nextluk-Orders.jpg",
        "nextluk-Messages.jpg", "nextluk-Settings.jpg",
      ]),
    ],
  },
  Munagay: {
    name: "Hair Salon",
    slug: "hair-salon",
    domain: ["Beauté · Services", "Beauty · Services"],
    image: "/images/hair-salon.png",
    about: [
      "Hair Salon est une plateforme de découverte et de réservation de services de coiffure. L’interface React s’appuie sur une API Django et propose des espaces adaptés aux clients, coiffeurs et responsables de salons. L’essayage virtuel aide à explorer des styles ; les réservations, la carte et la messagerie prolongent le parcours jusqu’au rendez-vous. Le code local utilise aussi la marque LuxeSalon.",
      "Hair Salon is a platform for discovering and booking hair styling services. Its React interface connects to a Django API and provides workspaces for clients, hairdressers and salon managers. Virtual try-on helps users explore styles, while bookings, maps and messaging support the journey to an appointment. The local interface also uses the LuxeSalon brand.",
    ],
    highlights: [
      [
        "Découverte des salons et des coiffures",
        "Essayage virtuel assisté par IA",
        "Réservation et suivi des rendez-vous",
        "Carte interactive et recherche de proximité",
        "Messagerie et gestion des salons",
      ],
      [
        "Salon and hairstyle discovery",
        "AI-assisted virtual try-on",
        "Appointment booking and tracking",
        "Interactive map and nearby search",
        "Messaging and salon management",
      ],
    ],
    gallery: [
      screenshot(
        "hair-salon.png",
        "Écran d’accueil réel · Aperçu local sans compte connecté",
        "Actual home screen · Local preview without a signed-in account",
      ),
      screenshot(
        "hair-tryon.png",
        "Écran d’essayage virtuel · Aperçu local",
        "Virtual try-on screen · Local preview",
      ),
      ...galleryScreens("Hair Salon", [
        "hair-salon-home.jpg", "hair-salon-register.jpg", "hair-salon-profile.jpg",
        "hair-salon-map.jpg", "hair-salon-salon.jpg", "hair-salon-booking.jpg",
        "hair-salon-appointments.jpg", "hair-salon-dashboard.jpg",
        "hair-salon-chats.jpg", "hair-salon-tryon.jpg",
      ]),
    ],
  },
  "Real Estate": {
    slug: "real-estate",
    domain: ["Immobilier · PropTech", "Real estate · PropTech"],
    about: [
      "Real Estate organise la recherche de biens et la mise en relation entre clients, propriétaires et prestataires. Les parcours comprennent le catalogue, les fiches détaillées, les visites virtuelles, les réservations et les messages. La carte permet une exploration géographique, tandis que les tableaux de bord distinguent les rôles de propriétaire, prestataire et administrateur.",
      "Real Estate supports property discovery and connections between clients, landlords and service providers. Its flows include a property catalogue, detail pages, virtual tours, bookings and messages. Maps enable geographical exploration, while dashboards distinguish landlord, provider and administrator roles.",
    ],
    highlights: [
      [
        "Recherche et fiches de biens immobiliers",
        "Cartographie interactive Leaflet",
        "Parcours de visites virtuelles",
        "Réservations et messagerie",
        "Espaces propriétaires, prestataires et administration",
      ],
      [
        "Property search and detail pages",
        "Interactive Leaflet maps",
        "Virtual tour workflows",
        "Bookings and messaging",
        "Landlord, provider and administration workspaces",
      ],
    ],
    gallery: [
      screenshot(
        "real-estate.png",
        "Accueil de la plateforme immobilière",
        "Real estate platform home",
      ),
      ...galleryScreens("Real Estate", [
        "real-estate-home.jpg", "real-estate-login.jpg", "real-estate-register.jpg",
        "real-estate-CLIENT.jpg", "real-estate-LANDLORD.jpg", "real-estate-ADMIN.jpg",
        "real-estate-Demandes.jpg", "real-estate-Contrats.jpg", "real-estate-chat.jpg",
      ]),
    ],
  },
  "Lifeline Saver": {
    slug: "lifeline-saver",
    domain: ["IoT · Sécurité routière", "IoT · Road safety"],
    image: "/images/lifeline-app.png",
    about: [
      "Lifeline Saver associe un prototype automobile connecté à une application mobile de sécurité. Le projet comprend les parcours de compte, le profil d’urgence, les contacts, les alertes et les rapports. L’objectif est de détecter les situations critiques et de faciliter le partage d’informations de localisation avec les personnes à prévenir. La galerie associe la photo du véhicule fournie et les écrans issus du dépôt de l’application.",
      "Lifeline Saver combines a connected vehicle prototype with a mobile safety application. The project includes account flows, an emergency profile, contacts, alerts and reports. Its goal is to detect critical situations and help share location information with emergency contacts. The gallery pairs the supplied vehicle photo with screens from the application repository.",
    ],
    highlights: [
      [
        "Prototype automobile connecté",
        "Application React Native pour les parcours de sécurité",
        "Profil et contacts d’urgence",
        "Alertes, localisation et rapports",
        "Parcours d’inscription et de configuration",
      ],
      [
        "Connected vehicle prototype",
        "React Native application for safety workflows",
        "Emergency profile and contacts",
        "Alerts, location and reports",
        "Registration and setup flows",
      ],
    ],
    gallery: [
      {
        ...screenshot(
          "lifeline-car.jpeg",
          "Lifeline Saver · Prototype et application réunis",
          "Lifeline Saver · Prototype and application together",
        ),
        composite: true,
      },
      screenshot(
        "lifeline-app.png",
        "Interface mobile Lifeline Saver · Écran issu du dépôt",
        "Lifeline Saver mobile interface · Screen from the repository",
      ),
      screenshot(
        "lifeline-car.jpeg",
        "Photo du prototype automobile fournie par Yvan Tekeng",
        "Vehicle prototype photo supplied by Yvan Tekeng",
      ),
      screenshot(
        "lifeline-login.png",
        "Lifeline Saver · Écran de connexion",
        "Lifeline Saver · Sign-in screen",
      ),
      screenshot(
        "gallery/lifeline-presentation.jpeg",
        "Présentation publique du prototype automobile Lifeline Saver",
        "Public presentation of the Lifeline Saver vehicle prototype",
      ),
      screenshot(
        "gallery/lifeline-sensor-car.jpeg",
        "Prototype automobile · Capteurs montés à l’avant du véhicule",
        "Vehicle prototype · Sensors mounted at the front of the vehicle",
      ),
    ],
  },
  "Prep Concours": {
    slug: "prep-concours",
    domain: [
      "Éducation · Préparation aux concours",
      "Education · Exam preparation",
    ],
    about: [
      "La version récente de Prep Concours associe React et Django pour structurer les révisions : catalogue de concours, programmes, cours, ressources, quiz, examens blancs et progression. Des outils accompagnent les entraînements oraux et l’analyse de documents. Les interfaces distinguent étudiants, enseignants et administrateurs. Les inscriptions, échanges, résultats et abonnements sont persistés côté serveur ; les services externes restent dépendants de leur configuration.",
      "The latest Prep Concours version combines React and Django to structure revision through an exam catalogue, syllabuses, courses, resources, quizzes, practice exams and progress tracking. Tools support oral practice and document analysis. Separate interfaces serve students, teachers and administrators. Registration, discussions, results and subscriptions persist on the server; external services depend on their configuration.",
    ],
    highlights: [
      [
        "Catalogue de concours et ressources sourcées",
        "Cours, quiz, annales et examens blancs",
        "Entraînement oral et outils d’analyse de documents",
        "Suivi de progression et résultats",
        "Espaces étudiants, enseignants et administration",
      ],
      [
        "Exam catalogue and sourced resources",
        "Courses, quizzes, past papers and practice exams",
        "Oral practice and document analysis tools",
        "Progress and results tracking",
        "Student, teacher and administration workspaces",
      ],
    ],
    gallery: [
      screenshot(
        "prep-concours.png",
        "Dernière version de Prep Concours · Accueil local",
        "Latest Prep Concours version · Local home page",
      ),
      screenshot(
        "prep-tools.png",
        "Outils et parcours de préparation",
        "Preparation tools and learning paths",
      ),
      ...galleryScreens("Prep Concours", [
        "prep-concours-CatalogueView.jpg", "prep-concours-ResourceLibraryView.jpg",
        "prep-concours-PastPapersView.jpg", "prep-concours-AiQuizGenView.jpg",
        "prep-concours-FlashcardsView.jpg", "prep-concours-OralSimulatorView.jpg",
        "prep-concours-OrientationView.jpg", "prep-concours-CalendarView.jpg",
        "prep-concours-ForumView.jpg", "prep-concours-MentalHealthView.jpg",
        "prep-concours-PricingView.jpg",
      ]),
    ],
  },
  JobLink: {
    slug: "joblink",
    domain: ["Marketplace · Services", "Marketplace · Services"],
    about: [
      "JobLink relie une application Expo destinée aux clients et prestataires, une API Django REST et un portail d’administration React. Les parcours couvrent la découverte de prestataires, les demandes, offres, accords, messages et évaluations. L’administration suit la vérification, les signalements et les litiges. Le projet utilise un processus de paiement de test, qui nécessite une intégration dédiée avant une utilisation réelle.",
      "JobLink connects an Expo app for clients and providers, a Django REST API and a React administration portal. Workflows cover provider discovery, requests, offers, agreements, messages and ratings. Administration handles verification, reports and disputes. The project uses a sandbox payment workflow that needs a dedicated integration before real transactions.",
    ],
    highlights: [
      [
        "Application mobile clients et prestataires",
        "Demandes, offres et suivi des prestations",
        "Messagerie et évaluations",
        "Vérification, litiges et signalements",
        "Administration React avec API Django REST",
      ],
      [
        "Client and provider mobile app",
        "Requests, offers and service tracking",
        "Messaging and ratings",
        "Verification, disputes and reports",
        "React administration with a Django REST API",
      ],
    ],
    gallery: [
      screenshot(
        "joblink.png",
        "Portail administrateur · Connexion",
        "Administration portal · Sign in",
      ),
      ...galleryScreens("JobLink", [
        "joblink-overview.jpg", "joblink-users.jpg", "joblink-categories.jpg",
        "joblink-verification.jpg", "joblink-payments.jpg", "joblink-cases.jpg",
        "joblink-settings.jpg",
      ]),
    ],
  },
  SafeMarket: {
    slug: "safemarket",
    domain: ["Marketplace · E-commerce", "Marketplace · E-commerce"],
    image: "/images/safemarket.png",
    about: [
      "SafeMarket est une marketplace Laravel avec catalogue, espace vendeur et parcours de commande. Le projet prévoit la négociation des prix par messagerie, un portefeuille et un mécanisme de séquestre pour suivre la libération des fonds. La vérification des vendeurs, les litiges et les outils d’administration complètent la gestion des échanges. Les captures présentent l’interface locale de la marketplace.",
      "SafeMarket is a Laravel marketplace with a catalogue, vendor workspace and order flows. It includes price negotiation through messaging, wallet functionality and an escrow mechanism to track fund release. Seller verification, disputes and administration tools support the trading workflows. The screenshots show the local marketplace interface.",
    ],
    highlights: [
      [
        "Catalogue, panier et parcours de commande",
        "Négociation des prix par messagerie",
        "Portefeuille et logique de séquestre",
        "Vérification des vendeurs et gestion des litiges",
        "Espaces vendeur et administrateur",
      ],
      [
        "Catalogue, cart and order workflows",
        "Price negotiation through messaging",
        "Wallet functionality and escrow logic",
        "Seller verification and dispute management",
        "Vendor and administrator workspaces",
      ],
    ],
    gallery: [
      screenshot(
        "safemarket.png",
        "SafeMarket · Accueil de la marketplace",
        "SafeMarket · Marketplace home",
      ),
      screenshot(
        "safemarket-catalogue.png",
        "SafeMarket · Catalogue public",
        "SafeMarket · Public catalogue",
      ),
      ...galleryScreens("SafeMarket", [
        "safemarket-home.jpg", "safemarket-marketplace.jpg", "safemarket-spotlight.jpg",
        "safemarket-sale.jpg", "safemarket-about.jpg", "safemarket-blog.jpg",
        "safemarket-contact.jpg", "safemarket-login.jpg", "safemarket-register.jpg",
        "safemarket-reset.jpg",
      ]),
    ],
  },
  "SmartBell · ESP32": {
    slug: "smartbell",
    domain: ["IoT · Gestion scolaire", "IoT · School management"],
    image: "/images/smartbell-dashboard.png",
    about: [
      "SmartBell adapte une application Flutter de sonnerie scolaire et ajoute un contrôleur IoT ESP32. L’ensemble permet de planifier les sonneries et de commander des buzzers via le réseau local. Le firmware comporte une configuration Wi-Fi et une limite de déclenchement pour éviter une sonnerie continue. Le code conserve l’origine open source bellsmkncampalagian et ajoute les contrôleurs liés à cette adaptation.",
      "SmartBell adapts a Flutter school bell application and adds an ESP32 IoT controller. It supports bell schedules and buzzer control over the local network. The firmware includes Wi-Fi setup and a timeout to prevent a continuously active buzzer. The code preserves the bellsmkncampalagian open-source origin and adds the controllers for this adaptation.",
    ],
    highlights: [
      [
        "Planification des sonneries scolaires",
        "Commande de deux buzzers avec ESP32",
        "Configuration Wi-Fi et découverte locale",
        "Historique et notifications dans l’application",
        "Limite de sécurité sur le déclenchement",
      ],
      [
        "School bell scheduling",
        "Dual-buzzer control with ESP32",
        "Wi-Fi setup and local discovery",
        "In-app history and notifications",
        "Safety timeout for bell activation",
      ],
    ],
    gallery: [
      screenshot(
        "smartbell-dashboard.png",
        "SmartBell · Tableau de bord local",
        "SmartBell · Local dashboard",
      ),
      screenshot(
        "smartbell.png",
        "SmartBell · Accès à l’application",
        "SmartBell · Application access",
      ),
      ...galleryScreens("SmartBell", [
        "smartbell-dashboard.jpg", "smartbell-setjadwal.jpg", "smartbell-history.jpg",
        "smartbell-notification.jpg", "smartbell-profile.jpg", "smartbell-statistic.jpg",
        "smartbell-sound-management.jpg", "smartbell-user-management.jpg",
        "smartbell-audit-log.jpg",
      ]),
    ],
  },
  "Cosmetic Pro": {
    slug: "cosmetic-pro",
    domain: [
      "Gestion · Application desktop",
      "Management · Desktop application",
    ],
    period: ["Projet présenté · 2025", "Project presented · 2025"],
    about: [
      "Cosmetic Pro est une application Java de gestion de produits cosmétiques. Le projet porte sur l’organisation des produits, des stocks et des inventaires dans une interface desktop Swing reliée à une base SQL. Il illustre le passage d’un besoin de gestion à une application structurée, avec modélisation des données et interface utilisateur.",
      "Cosmetic Pro is a Java application for managing cosmetic products. It focuses on products, stock and inventory in a Swing desktop interface connected to an SQL database. It illustrates turning a management need into a structured application with data modelling and a user interface.",
    ],
    highlights: [
      [
        "Gestion des produits cosmétiques",
        "Suivi des stocks et inventaires",
        "Interface desktop Java Swing",
        "Persistance des données SQL",
      ],
      [
        "Cosmetic product management",
        "Stock and inventory tracking",
        "Java Swing desktop interface",
        "SQL data persistence",
      ],
    ],
    gallery: galleryScreens("Cosmetic Pro", [
      "cosmetic-pro-Login.png", "cosmetic-pro-pass.png", "cosmetic-pro-Regular1.png",
      "cosmetic-pro-regular.png", "cosmetic-pro-add.png", "cosmetic-pro-Manage.png",
      "cosmetic-pro-ManageP.png", "cosmetic-pro-ManagePR.png", "cosmetic-pro-admin.png",
      "cosmetic-pro-Superadmin.png", "cosmetic-pro-stock.png", "cosmetic-pro-ware.png",
      "cosmetic-pro-financial.png",
    ]),
  },
  "S-CAMP": {
    slug: "s-camp",
    domain: [
      "Collaboration · Projet académique",
      "Collaboration · Academic project",
    ],
    about: [
      "S-CAMP est un projet collaboratif présenté dans mon parcours académique. Il concerne l’organisation et la gestion de camps scientifiques, avec une interface web et une structure orientée vers la collaboration. Cette réalisation met en avant le travail d’équipe et la transformation de besoins d’organisation en fonctionnalités numériques.",
      "S-CAMP is a collaborative project from my academic work. It concerns science camp organization and management through a web interface designed for collaboration. It highlights teamwork and translating organizational requirements into digital features.",
    ],
    highlights: [
      [
        "Organisation de camps scientifiques",
        "Interface web collaborative",
        "Travail de conception en équipe",
      ],
      [
        "Science camp organization",
        "Collaborative web interface",
        "Team-based software design",
      ],
    ],
    gallery: galleryScreens("S-CAMP", [
      "s-camp-landingPage.jpg", "s-camp-about.jpg", "s-camp-register.jpg",
      "s-camp-signup.jpg", "s-camp-editprofile.jpg", "s-camp-payment.jpg",
      "s-camp-portfolio-landingPage-php.jpg", "s-camp-portfolio-about-php.jpg",
    ]),
  },
  "IAI · Portail assurance": {
    slug: "iai-assurance",
    domain: ["Assurance · Projet académique", "Insurance · Academic project"],
    image: "/images/iai-assurance.png",
    about: [
      "Ce portail académique présente des services d’assurance et un parcours utilisateur comprenant inscription, connexion, produits, contrats et paiement. Il est développé en PHP avec une interface HTML/CSS/JavaScript et une base SQL. Il met en pratique la modélisation d’un système d’information et la construction de parcours web liés aux services d’assurance.",
      "This academic portal presents insurance services and user flows for registration, sign in, products, contracts and payment. It uses PHP, HTML/CSS/JavaScript and an SQL database. It puts information system modelling and insurance-related web workflows into practice.",
    ],
    highlights: [
      [
        "Présentation des services et produits d’assurance",
        "Inscription et connexion des utilisateurs",
        "Parcours de contrat et de paiement",
        "Interface PHP, HTML/CSS et JavaScript",
      ],
      [
        "Insurance service and product presentation",
        "User registration and sign in",
        "Contract and payment workflows",
        "PHP, HTML/CSS and JavaScript interface",
      ],
    ],
    gallery: [
      screenshot(
        "iai-assurance.png",
        "Portail IAI · Écran de connexion, aperçu local",
        "IAI portal · Sign-in screen, local preview",
      ),
      screenshot(
        "iai-services.png",
        "Portail IAI · Écran d’inscription",
        "IAI portal · Registration screen",
      ),
      ...galleryScreens("Portail assurance IAI", [
        "iai-assurance-portfolio-index-php.jpg", "iai-assurance-portfolio-home-php.jpg",
        "iai-assurance-portfolio-login-php.jpg", "iai-assurance-signup-php.jpg",
        "iai-assurance-pdf-html.jpg",
      ]),
    ],
  },
  Contour: {
    slug: "contour",
    domain: ["Services · Site vitrine", "Services · Showcase website"],
    image: "/images/contour.png",
    tech: ["PHP", "JavaScript", "Bootstrap", "MySQL"],
    about: [
      "Contour est un site de présentation de services de collecte, lavage, réparation, entretien et livraison. La version examinée comprend des pages d’accueil, de présentation et de services, ainsi qu’un parcours d’inscription et d’abonnement. L’interface est proposée en français et en anglais. Cette version annonce le lancement du service ; elle n’est pas présentée comme une marketplace déjà en exploitation.",
      "Contour is a showcase website for pickup, washing, repair, care and delivery services. The reviewed version contains home, about and services pages, plus registration and subscription flows. The interface supports French and English. This version announces the service launch; it is not presented as an already operating marketplace.",
    ],
    highlights: [
      [
        "Présentation des services de collecte et livraison",
        "Lavage, entretien et cordonnerie",
        "Interface française et anglaise",
        "Pages de services et parcours d’inscription",
      ],
      [
        "Pickup and delivery service presentation",
        "Washing, care and shoe repair",
        "French and English interface",
        "Service pages and registration flows",
      ],
    ],
    gallery: [
      screenshot(
        "contour.png",
        "Contour · Présentation des services",
        "Contour · Service presentation",
      ),
      screenshot(
        "contour-about.png",
        "Contour · À propos du service",
        "Contour · About the service",
      ),
      ...galleryScreens("Contour", [
        "contour-portfolio-home-php.jpg", "contour-about-php.jpg",
        "contour-services-php.jpg", "contour-signup-php.jpg",
      ]),
    ],
  },
  "Malware Detection": {
    slug: "malware-detection",
    domain: ["Cybersécurité · Analyse", "Cybersecurity · Analysis"],
    period: ["Février — mai 2025", "February — May 2025"],
    about: [
      "Réalisé dans un contexte de hackathon, ce travail explore l’analyse de fichiers suspects avec Python. L’approche mobilise des algorithmes de classification pour identifier des menaces et développe les compétences de recherche, d’analyse et de présentation de résultats. Il s’agit d’un projet d’apprentissage en cybersécurité, décrit dans mon CV.",
      "Developed in a hackathon setting, this work explores suspicious file analysis with Python. It uses classification algorithms to identify threats and develops research, analysis and result presentation skills. It is a cybersecurity learning project described in my CV.",
    ],
    highlights: [
      [
        "Analyse de fichiers suspects",
        "Classification pour l’identification de menaces",
        "Mise en pratique de Python en cybersécurité",
      ],
      [
        "Suspicious file analysis",
        "Classification for threat identification",
        "Practical Python use in cybersecurity",
      ],
    ],
    gallery: [
      screenshot(
        "gallery/malware-cybersecurity-lab.jpeg",
        "Environnement d’expérimentation en cybersécurité",
        "Cybersecurity experimentation environment",
      ),
    ],
    galleryNote: [
      "Photo de travail issue du portfolio initial. Les captures de l’outil d’analyse ne sont pas disponibles actuellement.",
      "Work photo from the original portfolio. Screenshots of the analysis tool are not currently available.",
    ],
  },
};
export const mboa360 = {
  name: "Mboa360",
  slug: "mboa360",
  category: "Web",
  type: [
    "Patrimoine culturel · Application web",
    "Cultural heritage · Web application",
  ],
  domain: [
    "Culture · Expériences immersives",
    "Culture · Immersive experiences",
  ],
  description: [
    "Une plateforme pour découvrir le patrimoine camerounais : lieux culturels, collections, traditions, événements et visites virtuelles.",
    "A platform to explore Cameroonian heritage through cultural sites, collections, traditions, events and virtual tours.",
  ],
  about: [
    "Mboa360 propose une exploration numérique du patrimoine camerounais. Les parcours réunissent sites culturels, collections, événements, langues, communauté et quiz. L’interface React intègre des expériences 3D avec Three.js et React Three Fiber, ainsi qu’une carte Leaflet. L’application comprend également des comptes utilisateurs et un espace d’administration.",
    "Mboa360 offers a digital exploration of Cameroonian heritage. Its flows bring together cultural sites, collections, events, languages, community and quizzes. The React interface includes 3D experiences with Three.js and React Three Fiber, plus a Leaflet map. The application also includes user accounts and an administration workspace.",
  ],
  highlights: [
    [
      "Découverte de sites et de traditions du Cameroun",
      "Collections culturelles et événements",
      "Visites virtuelles et expériences 3D",
      "Carte interactive, quiz et parcours de langues",
      "Communauté, profils et administration",
    ],
    [
      "Discovery of Cameroonian sites and traditions",
      "Cultural collections and events",
      "Virtual tours and 3D experiences",
      "Interactive map, quizzes and language flows",
      "Community, profiles and administration",
    ],
  ],
  tech: ["React", "Three.js", "React Three Fiber", "Leaflet", "Django"],
  image: "/images/mboa360.png",
  caption: [
    "Accueil Mboa360 · Version du dépôt TekengYvan",
    "Mboa360 home · TekengYvan repository version",
  ],
  links: [["GitHub", "https://github.com/TekengYvan/Mboa360"]],
  gallery: [
    screenshot(
      "mboa360.png",
      "Mboa360 · Découverte du patrimoine camerounais",
      "Mboa360 · Cameroonian heritage discovery",
    ),
    screenshot(
      "mboa-culture.png",
      "Mboa360 · Parcours culturels de l’accueil",
      "Mboa360 · Cultural paths on the home page",
    ),
    ...galleryScreens("Mboa360", [
      "mboa360-home.jpg", "mboa360-explore.jpg", "mboa360-culture.jpg",
      "mboa360-events.jpg", "mboa360-collections.jpg", "mboa360-tour.jpg",
      "mboa360-languages.jpg", "mboa360-community.jpg", "mboa360-profile.jpg",
      "mboa360-admin.jpg",
    ]),
  ],
};
