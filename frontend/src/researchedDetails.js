// Verified against repository source, manifests and supplied CVs.
export const researchedDetails = {
  "nextluk": {
    "tech": [
      "React",
      "TypeScript",
      "React Native",
      "Expo",
      "Expo Router",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Socket.IO",
      "JWT",
      "Gemini API",
      "MapLibre GL",
      "Recharts",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "Tailwind CSS",
      "Radix UI",
      "Framer Motion",
      "Vite"
    ],
    "extra": [
      "Les professionnels disposent de leurs propres parcours pour publier leur travail, gérer les produits et services, organiser les rendez-vous et suivre leur activité. L’administration vérifie les comptes et supervise les utilisateurs, commandes, produits et réservations. La séparation des rôles relie ces métiers autour du parcours du client.\n\nL’API Express s’appuie sur Mongoose et MongoDB pour les données métier, JWT pour les comptes et Socket.IO pour les échanges. Le backend intègre Gemini pour les traitements IA et comprend un parcours de génération 3D. Les fonctions d’essayage et de jumeau numérique dépendent des services externes configurés. Le web et le mobile partagent la même API.",
      "Professionals have dedicated workflows to showcase their work, manage products and services, organize appointments and follow their activity. Administration verifies accounts and oversees users, orders, products and bookings. Role separation connects these professions around the customer journey.\n\nThe Express API uses Mongoose and MongoDB for business data, JWT for accounts and Socket.IO for conversations. The backend integrates Gemini for AI processing and includes a 3D generation flow. Try-on and digital twin capabilities depend on configured external services. Web and mobile share the same API."
    ],
    "highlights": [
      [
        "Une plateforme commune pour plusieurs métiers de la mode et de la beauté",
        "Jumeau numérique et essayage virtuel dans le parcours client",
        "Messagerie client–professionnel avec Socket.IO",
        "Commandes et rendez-vous suivis dans des espaces dédiés",
        "Portfolios pour valoriser le travail des professionnels",
        "Vérification des comptes et outils de supervision",
        "Web et mobile reliés à une API commune",
        "Statistiques et visualisation de l’activité"
      ],
      [
        "One platform for multiple fashion and beauty professions",
        "Digital twin and virtual try-on customer workflows",
        "Socket.IO client–professional messaging",
        "Dedicated order and appointment tracking",
        "Portfolios that showcase professional work",
        "Account verification and supervision tools",
        "Web and mobile connected through a shared API",
        "Activity statistics and visualization"
      ]
    ]
  },
  "hair-salon": {
    "tech": [
      "React",
      "JavaScript",
      "Django",
      "Django REST Framework",
      "Python",
      "SQLite",
      "Leaflet",
      "React Leaflet",
      "Gradio Client",
      "Gemini API",
      "Pillow",
      "NumPy",
      "React Router",
      "CSS",
      "Vite"
    ],
    "extra": [
      "Le parcours relie la découverte de publications et de prestations à la réservation effective : le client repère un salon, explore un style, puis prépare son rendez-vous. Le coiffeur organise son salon, ses services et ses disponibilités dans un espace distinct. Les avis et les échanges accompagnent le choix d’une prestation.\n\nLe backend Django REST organise utilisateurs, salons, services, publications, disponibilités, rendez-vous et conversations. L’essayage travaille à partir d’une photographie et d’une coiffure de référence : validation, traitement Pillow/NumPy, client Gradio et appels Gemini sont présents dans le code. Le résultat IA dépend du fournisseur disponible et de sa configuration.",
      "The journey connects posts and service discovery to booking: customers locate a salon, explore a hairstyle and prepare an appointment. Hairdressers organize their salon, services and availability in a separate workspace. Reviews and conversations support the choice of service.\n\nThe Django REST backend structures users, salons, services, posts, availability, appointments and conversations. Try-on works from a photograph and reference hairstyle: the code includes validation, Pillow/NumPy processing, a Gradio client and Gemini calls. AI results depend on the available provider and its configuration."
    ],
    "highlights": [
      [
        "Passer de la découverte d’un style à sa réservation",
        "Explorer une coiffure à partir de sa propre photo",
        "Repérer les salons sur une carte interactive",
        "Centraliser disponibilités et rendez-vous des coiffeurs",
        "Échanger directement autour d’une prestation",
        "Séparer les espaces client, coiffeur et administration"
      ],
      [
        "From hairstyle discovery to an appointment",
        "Explore a hairstyle using a personal photograph",
        "Locate salons on an interactive map",
        "Centralize hairdresser availability and bookings",
        "Discuss a service through direct messaging",
        "Separate customer, hairdresser and administration spaces"
      ]
    ]
  },
  "real-estate": {
    "tech": [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "Prisma",
      "SQLite",
      "JWT",
      "bcryptjs",
      "Multer",
      "Axios",
      "Leaflet",
      "React Leaflet",
      "Pannellum",
      "Tailwind CSS",
      "React Router",
      "Vite"
    ],
    "extra": [
      "L’interface utilise la marque myhouz. La recherche filtre les biens par budget, type et statut ; les fiches peuvent présenter des photographies, une carte et une visite panoramique Pannellum à 360°. Le projet couvre aussi les demandes, visites, baux et signatures, ainsi que les interventions de prestataires associés aux locations.\n\nLe frontend React communique avec une API Express. Prisma relie propriétés, images, utilisateurs, contrats, visites, messages et interventions dans une base SQLite. JWT gère l’authentification et Multer les fichiers. L’objectif est de prolonger la recherche immobilière par un suivi du cycle locatif, depuis la première demande jusqu’au contrat et aux services après location.",
      "The interface uses the myhouz brand. Search filters properties by budget, type and status; detail pages can show photographs, a map and a Pannellum 360° panorama. The project also covers enquiries, visits, leases and signatures, plus provider interventions associated with rentals.\n\nThe React frontend communicates with an Express API. Prisma connects properties, images, users, contracts, visits, messages and service requests in SQLite. JWT handles authentication and Multer uploads. The aim is to extend property discovery into rental lifecycle tracking, from the first enquiry to the lease and subsequent maintenance."
    ],
    "highlights": [
      [
        "Recherche avec filtres de budget, type et statut",
        "Visites panoramiques à 360° avant le déplacement",
        "Cycle locatif suivi : demande, visite, bail et signature",
        "Interventions de prestataires liées aux biens",
        "Messages et notifications dans une même plateforme",
        "Modélisation relationnelle des contrats et locations"
      ],
      [
        "Search with budget, type and status filters",
        "360° panoramas before an in-person visit",
        "Rental workflow from enquiry to visit and lease signature",
        "Property-linked maintenance provider requests",
        "Messaging and notifications in the same platform",
        "Relational modelling of contracts and rentals"
      ]
    ]
  },
  "mboa360": {
    "tech": [
      "React",
      "JavaScript",
      "Three.js",
      "React Three Fiber",
      "Drei",
      "Leaflet",
      "Django",
      "Django REST Framework",
      "Python",
      "SQLite",
      "Simple JWT",
      "Django Filter",
      "OpenAPI",
      "React Router",
      "CSS",
      "Vite"
    ],
    "extra": [
      "Les objets 3D sont présentés avec Three.js et React Three Fiber ; les panoramas servent aux visites virtuelles. Le volet apprentissage comprend cours de langues, leçons, prononciation, quiz et progression. Les groupes, publications, réactions et commentaires permettent aux membres de contribuer à la découverte culturelle.\n\nL’API Django REST distingue sites, objets, visites, questions, scores, événements, groupes et leçons. Elle suit également les activités, les séries de participation et les leçons terminées. L’authentification utilise JWT et une documentation OpenAPI accompagne les endpoints. Les contenus consultables dépendent des éléments effectivement publiés dans la base.",
      "Three.js and React Three Fiber present 3D objects, while panoramas support virtual tours. Learning includes language courses, lessons, pronunciation, quizzes and progress. Groups, posts, reactions and comments let members contribute to cultural discovery.\n\nThe Django REST API separates sites, artifacts, tours, questions, scores, events, groups and lessons. It also tracks activities, participation streaks and completed lessons. Authentication uses JWT and OpenAPI documents the endpoints. Available content depends on items actually published to the database."
    ],
    "highlights": [
      [
        "Patrimoine camerounais réuni dans une expérience numérique",
        "Objets 3D et visites panoramiques immersives",
        "Exploration culturelle avec repérage géographique",
        "Apprentissage des langues et suivi des leçons",
        "Quiz et progression pour encourager la découverte",
        "Groupes et contributions de la communauté"
      ],
      [
        "Cameroonian heritage in a unified digital experience",
        "Immersive 3D objects and panoramic tours",
        "Cultural discovery with geographical exploration",
        "Language learning and lesson completion tracking",
        "Quizzes and progress to support discovery",
        "Community groups and contributions"
      ]
    ]
  },
  "prep-concours": {
    "tech": [
      "React",
      "TypeScript",
      "Django",
      "Django REST Framework",
      "Python",
      "SQLite",
      "Tailwind CSS",
      "Motion",
      "Vite",
      "pypdf",
      "API REST",
      "IA générative"
    ],
    "extra": [
      "Le candidat organise son travail avec un calendrier, des fiches de mémorisation, des objectifs et des statistiques. Les enseignants publient et suivent les contenus ; l’administration supervise les utilisateurs, les concours et la structure pédagogique. Les contrôles de rôle sont appliqués côté serveur, au-delà des liens visibles dans la navigation.\n\nLes outils assistés par IA comprennent la génération de quiz à partir de documents, l’orientation et l’entraînement oral. Le backend extrait les PDF avec pypdf et distingue les ressources publiées des banques de questions encore vides. Un forum et un espace de bien-être complètent les révisions. L’API persiste également les résultats et les sessions de travail pour suivre la préparation dans le temps.",
      "Candidates organize work with a calendar, flashcards, checkpoints and statistics. Teachers publish and manage content; administrators oversee users, exams and the learning structure. Role checks are applied on the server, beyond the links shown in navigation.\n\nAI-assisted tools include quiz generation from documents, guidance and oral practice. The backend extracts PDF content with pypdf and distinguishes published resources from question banks that are still empty. A forum and wellbeing area complement revision. The API also persists results and study sessions to track preparation over time."
    ],
    "highlights": [
      [
        "Un parcours complet : cours, annales, quiz et examens blancs",
        "Révisions organisées avec calendrier et fiches de mémorisation",
        "Génération de quiz à partir des documents de travail",
        "Résultats et temps de préparation suivis côté serveur",
        "Espaces candidat, enseignant et administrateur",
        "Forum, orientation et outils de bien-être intégrés"
      ],
      [
        "A complete path through lessons, past papers, quizzes and mock exams",
        "Revision organized with calendars and flashcards",
        "Quiz generation from study documents",
        "Server-side tracking of results and preparation time",
        "Candidate, teacher and administrator workspaces",
        "Integrated discussion, guidance and wellbeing tools"
      ]
    ]
  },
  "lifeline-saver": {
    "tech": [
      "React Native",
      "Expo",
      "JavaScript",
      "React Navigation",
      "AsyncStorage",
      "Expo Location",
      "Expo Notifications",
      "Expo Contacts",
      "React Native Maps",
      "Axios",
      "Django",
      "Django REST Framework",
      "Python",
      "Simple JWT",
      "Redis",
      "IoT",
      "GPS"
    ],
    "extra": [
      "L’application accompagne la création du compte, la vérification de l’email et la préparation des informations du conducteur. Le profil médical et les contacts d’urgence centralisent les éléments utiles avant un incident ; les écrans d’alertes, de rapports et de paramètres prolongent le parcours. Les modules Expo assurent notamment les accès à la localisation, aux contacts et aux notifications.\n\nLe dépôt comprend une API Django REST pour les utilisateurs et les alertes, avec authentification JWT et configuration Redis. AsyncStorage conserve les informations locales de l’application React Native. La réalisation relie ainsi dispositif connecté, géolocalisation et conception de parcours d’urgence ; ses capacités de détection restent présentées au niveau du prototype.",
      "The app supports account creation, email verification and driver information setup. A medical profile and emergency contacts centralize useful information before an incident, while alerts, reports and settings complete the workflow. Expo modules provide access to location, contacts and notifications.\n\nThe repository contains a Django REST API for users and alerts, with JWT authentication and Redis configuration. AsyncStorage stores local React Native information. The project connects a physical device, geolocation and emergency workflow design; accident detection capabilities are presented at prototype level."
    ],
    "highlights": [
      [
        "Prototype reliant véhicule connecté et application mobile",
        "Localisation intégrée au parcours d’alerte",
        "Informations médicales préparées dans un profil d’urgence",
        "Contacts à prévenir centralisés avant un incident",
        "Parcours de compte et de permissions guidé",
        "Écrans dédiés aux alertes et aux rapports"
      ],
      [
        "Prototype connecting a vehicle device and mobile app",
        "Location integrated into the alert workflow",
        "Medical information prepared in an emergency profile",
        "Emergency contacts centralized before an incident",
        "Guided account and permission setup",
        "Dedicated alert and report screens"
      ]
    ]
  },
  "joblink": {
    "tech": [
      "React Native",
      "Expo",
      "Expo Router",
      "TypeScript",
      "Zustand",
      "React",
      "JavaScript",
      "Django",
      "Django REST Framework",
      "Python",
      "Simple JWT",
      "SQLite",
      "Pillow",
      "Vite"
    ],
    "extra": [
      "Le client publie un besoin, compare les offres reçues et échange avec les prestataires avant de formaliser un accord. Le modèle métier distingue demandes, offres, conversations, accords, paiements, avis et notifications. Des favoris permettent de retrouver les professionnels enregistrés.\n\nLe portail de supervision regroupe la vue d’ensemble, les vérifications, les utilisateurs, les catégories, les transactions et les paramètres de commission. La séparation application mobile/API/administration rend les responsabilités de chaque interface explicites. Les parcours de vérification, de signalement et de litige apportent un suivi autour de la prestation ; l’intégration de paiement reste un scénario de test dans cette version.",
      "Customers publish a need, compare offers and discuss the work with providers before forming an agreement. The domain model separates requests, offers, conversations, agreements, payments, reviews and notifications. Saved providers let users return to bookmarked professionals.\n\nThe supervision portal combines an overview, verification queues, users, categories, transactions and commission settings. Separating mobile, API and administration clarifies each interface’s responsibility. Verification, reporting and dispute workflows provide oversight around service delivery; payments remain a test scenario in this version."
    ],
    "highlights": [
      [
        "Un besoin transformé en demande, offre puis accord",
        "Vérification des prestataires avant mise en confiance",
        "Conversations associées aux échanges de services",
        "Litiges et signalements suivis par l’administration",
        "Commissions et catégories configurables",
        "Application mobile et portail de supervision complémentaires"
      ],
      [
        "From customer need to request, offer and agreement",
        "Provider verification workflows",
        "Conversations supporting service discussions",
        "Administration for disputes and reports",
        "Configurable commissions and categories",
        "Complementary mobile and supervision interfaces"
      ]
    ]
  },
  "safemarket": {
    "tech": [
      "PHP",
      "Laravel",
      "Livewire",
      "Blade",
      "Alpine.js",
      "Laravel Sanctum",
      "Spatie Permission",
      "Spatie Media Library",
      "SQLite",
      "Tailwind CSS",
      "JavaScript",
      "Axios",
      "Vite"
    ],
    "extra": [
      "Les visiteurs explorent les produits et les offres ; les acheteurs connectés disposent du panier, des commandes et de la négociation. Les vendeurs gèrent leurs publications et leurs échanges dans un espace dédié. Le cycle de commande comprend l’expédition, la livraison et la clôture, en lien avec le portefeuille et la logique de séquestre.\n\nL’interface combine Blade, Livewire et Alpine.js. Spatie gère les permissions et les médias, tandis que Sanctum accompagne les accès API. La supervision regroupe les comptes, les vérifications et les signalements. Ces parcours cherchent à rendre l’échange commercial plus lisible, en donnant à chaque acteur accès aux informations de sa transaction.",
      "Visitors explore products and offers; signed-in buyers use cart, order and negotiation workflows. Sellers manage listings and conversations in a dedicated workspace. Orders progress through shipping, delivery and completion, alongside wallet and escrow logic.\n\nThe interface combines Blade, Livewire and Alpine.js. Spatie manages permissions and media, while Sanctum supports API access. Supervision covers accounts, verification and reports. These workflows aim to make transactions easier to follow by giving each participant access to the relevant information."
    ],
    "highlights": [
      [
        "Catalogue et parcours vendeur réunis dans une marketplace",
        "Prix négociables au fil d’une conversation",
        "Suivi des commandes jusqu’à leur clôture",
        "Portefeuille et logique de séquestre des transactions",
        "Vérification des vendeurs et traitement des signalements",
        "Gestion des rôles et médias intégrée au backend"
      ],
      [
        "Catalogue and seller workflows in one marketplace",
        "Prices negotiated through conversations",
        "Order tracking through completion",
        "Wallet and transaction escrow logic",
        "Seller verification and report handling",
        "Backend role and media management"
      ]
    ]
  },
  "smartbell": {
    "tech": [
      "Flutter",
      "Dart",
      "GetX",
      "GetStorage",
      "ESP32",
      "C++ / Arduino",
      "HTTP",
      "Wi-Fi",
      "Audioplayers",
      "Flutter Soloud",
      "Flutter Form Builder"
    ],
    "extra": [
      "L’application comporte également une bibliothèque sonore, des écrans d’historique, des notifications, des statistiques et un journal d’actions. GetX organise la navigation et l’état, et GetStorage conserve les données locales. Les formulaires structurent les réglages du système.\n\nL’intérêt de cette adaptation est de relier la planification logicielle à un équipement physique sur le réseau local. La configuration Wi-Fi et la commande HTTP accompagnent le pilotage des buzzers ; le firmware limite leur durée d’activation. Les captures montrent uniquement la navigation de l’application : aucune commande matérielle ni sonnerie réelle n’a été déclenchée pour les produire.",
      "The application also includes a sound library, history screens, notifications, statistics and an audit log. GetX organizes navigation and state, while GetStorage retains local data. Forms structure system settings.\n\nThe adaptation connects software scheduling to a physical device on the local network. Wi-Fi setup and HTTP commands support buzzer control, with the firmware limiting activation duration. Screenshots show application navigation only: no hardware command or real bell was triggered to produce them."
    ],
    "highlights": [
      [
        "Planifier les horaires scolaires dans une interface dédiée",
        "Relier le planning à un contrôleur physique ESP32",
        "Commander deux buzzers sur le réseau local",
        "Limiter la durée d’activation dans le firmware",
        "Gérer les sons et consulter l’historique",
        "Adaptation open source avec attribution conservée"
      ],
      [
        "Plan school schedules in a dedicated interface",
        "Connect scheduling to a physical ESP32 controller",
        "Control two buzzers over a local network",
        "Limit activation duration in the firmware",
        "Manage sounds and review history",
        "Open-source adaptation with retained attribution"
      ]
    ]
  },
  "cosmetic-pro": {
    "tech": [
      "Java",
      "Java Swing",
      "JDBC",
      "MySQL",
      "Maven",
      "NetBeans GUI Builder"
    ],
    "extra": [
      "L’interface distingue plusieurs espaces : administration, superadministration, stock, entrepôt et finance. Les centres de gestion des prix, produits et quantités sont séparés. Les formulaires permettent de saisir et de modifier les données, tandis que les tableaux accompagnent les opérations de gestion. Les écrans de connexion et de changement de mot de passe complètent ces parcours.\n\nLe code emploie Swing pour les composants visuels, JDBC et le connecteur MySQL pour la persistance, ainsi que Maven pour la construction. Les images de cette galerie proviennent directement des fenêtres Java du dépôt, rendues localement sans connexion à la base : ce sont les formulaires réels dans leur état initial.",
      "The interface separates administration, superadministration, stock, warehouse and finance workspaces. Price, product and quantity management use distinct windows. Forms support data entry and updates, while tables support management operations. Sign-in and password-change screens complete these workflows.\n\nThe code uses Swing for visual components, JDBC and the MySQL connector for persistence, and Maven for builds. Gallery images come directly from the repository’s Java windows, rendered locally without a database connection: these are the real forms in their initial state."
    ],
    "highlights": [
      [
        "Produits, stocks et prix gérés dans des espaces distincts",
        "Formulaires de saisie et tableaux de gestion dédiés",
        "Espaces administration, entrepôt et finance",
        "Persistance relationnelle avec JDBC et MySQL",
        "Application desktop utilisable hors du navigateur",
        "Véritables interfaces Java présentées dans la galerie"
      ],
      [
        "Separate product, stock and price management",
        "Dedicated input forms and management tables",
        "Administration, warehouse and finance workspaces",
        "Relational persistence through JDBC and MySQL",
        "Desktop application outside the browser",
        "Genuine Java interfaces shown in the gallery"
      ]
    ]
  },
  "s-camp": {
    "tech": [
      "PHP",
      "MySQL",
      "Composer",
      "Architecture MVC",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "PHPMailer",
      "HTML",
      "CSS"
    ],
    "extra": [
      "",
      ""
    ],
    "highlights": [
      [
        "Présentation des formations et activités de l’institut",
        "Inscription des candidats depuis une interface web",
        "Contenus disponibles en français et en anglais",
        "Séparation du code en modèles, vues et contrôleurs",
        "Parcours candidats et événements dans le même projet",
        "Envoi d’emails prévu avec PHPMailer"
      ],
      [
        "Institute training and activity presentation",
        "Web-based candidate registration",
        "French and English content",
        "Code separated into models, views and controllers",
        "Candidate and event workflows in one project",
        "Email support through PHPMailer"
      ]
    ],
    "description": [
      "Portail de l’Institut Einstein : présentation des formations linguistiques, activités et inscription des candidats.",
      "Institut Einstein portal for language training, activities and candidate registration."
    ],
    "domain": [
      "Formation · Portail institutionnel",
      "Training · Institutional portal"
    ],
    "about": [
      "Le dépôt S-CAMP consulté présente un portail pour l’Institut Einstein, consacré aux formations linguistiques, aux activités et à l’inscription des candidats. Le site comprend un accueil, une présentation de l’institut, un catalogue d’activités et des formulaires d’inscription et de connexion. Les contenus sont notamment proposés en français et en anglais.\n\nLes vues couvrent également le suivi des candidats, les événements, le profil et un parcours de paiement. Le code suit une architecture MVC : les contrôleurs traitent les demandes, les modèles accèdent aux données et les vues PHP présentent les parcours. Composer gère l’autoloading et les dépendances, dont PHPMailer pour les emails.\n\nCette fiche décrit la version effectivement présente dans le dépôt, dont la marque affichée est Institut Einstein. Les captures locales présentent les pages et formulaires accessibles ; les fonctions liées à MySQL nécessitent leur environnement applicatif complet.",
      "The reviewed S-CAMP repository presents an Institut Einstein portal for language training, activities and candidate registration. It includes a landing page, institute information, an activity catalogue, registration and sign-in forms, with French and English content.\n\nIts views also cover candidates, events, profiles and a payment workflow. The code follows an MVC structure: controllers handle requests, models access data and PHP views present the workflows. Composer manages autoloading and dependencies, including PHPMailer for email.\n\nThis page describes the version actually present in the repository, branded Institut Einstein. Local screenshots show accessible pages and forms; MySQL-dependent functions require the complete application environment."
    ]
  },
  "iai-assurance": {
    "tech": [
      "PHP",
      "MySQL",
      "JavaScript",
      "Bootstrap",
      "HTML",
      "CSS",
      "Sessions PHP"
    ],
    "extra": [
      "",
      ""
    ],
    "highlights": [
      [
        "Parcours d’assurance de la découverte à la souscription",
        "Informations du contrat réunies dans un formulaire",
        "Modèle de contrat d’assurance vie intégré au projet",
        "Espaces clients et responsabilités de gestion distincts",
        "Modélisation des offres, utilisateurs et contrats",
        "Projet académique reliant analyse et développement PHP"
      ],
      [
        "Insurance journey from discovery to subscription",
        "Contract information gathered in a dedicated form",
        "Life insurance contract template included",
        "Distinct customer and management responsibilities",
        "Modelling of offers, users and contracts",
        "Academic project connecting analysis and PHP development"
      ]
    ],
    "description": [
      "Portail académique d’assurance : comptes utilisateurs, offres, souscription et préparation de contrats sous la marque ASSURELIFECAMER.",
      "Academic insurance portal for user accounts, offers, subscriptions and contract preparation, branded ASSURELIFECAMER."
    ],
    "about": [
      "Le portail académique IAI présente une plateforme d’assurance sous la marque ASSURELIFECAMER. Les utilisateurs peuvent créer un compte, se connecter, découvrir les offres publiées et préparer une souscription. Le code distingue des comptes clients et des espaces de gestion liés à plusieurs responsabilités dans l’organisation.\n\nLa souscription recueille les informations utiles au contrat : assuré, bénéficiaire, montant, prime, durée et éléments de situation personnelle. Un modèle de contrat d’assurance vie est également présent. Des pages de paiement et une messagerie complètent les parcours prévus dans le projet.\n\nL’application est développée en PHP avec une base MySQL, des sessions et une interface Bootstrap/JavaScript. Elle met en pratique la modélisation des utilisateurs, offres et contrats d’un système d’information. Les captures locales montrent les formulaires et documents disponibles dans cette réalisation académique.",
      "The IAI academic portal presents an insurance platform branded ASSURELIFECAMER. Users can register, sign in, discover published offers and prepare a subscription. The code separates customer accounts and management spaces for several organizational responsibilities.\n\nSubscription collects contract information such as the insured person, beneficiary, amount, premium, duration and personal circumstances. A life insurance contract template is included. Payment pages and messaging complement the intended workflows.\n\nThe application uses PHP, MySQL, sessions and a Bootstrap/JavaScript interface. It applies user, offer and contract modelling to an information system. Local captures show the forms and documents available in this academic project."
    ]
  },
  "contour": {
    "tech": [
      "PHP",
      "MySQL",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "Owl Carousel",
      "PHPMailer",
      "Composer",
      "HTML",
      "CSS"
    ],
    "extra": [
      "Les pages expliquent les prestations de collecte, lavage, entretien et réparation, avec une présentation visuelle du service. Les galeries, informations de localisation et liens de contact aident le visiteur à comprendre l’offre avant de prendre contact. Le site propose également une présentation de l’équipe et de sa mission.\n\nL’interface combine Bootstrap, JavaScript et des galeries Owl Carousel. Les traitements PHP s’appuient sur MySQL, Composer et PHPMailer pour les fonctionnalités de compte, d’abonnement et d’email. La réalisation met surtout en valeur la présentation et l’accès au service ; elle n’est pas décrite comme un système complet de commandes déjà en exploitation.",
      "Pages explain pickup, washing, care and repair services through visual presentation. Galleries, location information and contact links help visitors understand the offering before making an enquiry. The site also introduces the team and its mission.\n\nThe interface combines Bootstrap, JavaScript and Owl Carousel galleries. PHP processing uses MySQL, Composer and PHPMailer for account, subscription and email functionality. This realization primarily presents and provides access to the service; it is not described as a complete operating order management system."
    ],
    "highlights": [
      [
        "Une offre de collecte et d’entretien expliquée visuellement",
        "Services de lavage, réparation et livraison réunis",
        "Site disponible en français et en anglais",
        "Galeries pour présenter les prestations",
        "Parcours de contact, inscription et abonnement",
        "Présentation de l’équipe et de la mission du service"
      ],
      [
        "Visual explanation of pickup and care services",
        "Washing, repair and delivery offerings together",
        "French and English website",
        "Galleries presenting service activities",
        "Contact, registration and subscription workflows",
        "Team and service mission presentation"
      ]
    ]
  },
  "malware-detection": {
    "tech": [
      "Python",
      "Analyse de fichiers",
      "Classification",
      "Cybersécurité"
    ],
    "extra": [
      "Les éléments conservés dans mon CV décrivent un travail en Python et une démarche de classification appliquée à des fichiers suspects. Le projet s’inscrit dans mon intérêt pour la cybersécurité et l’analyse de données. Le dépôt, les résultats mesurés et les captures ne sont pas disponibles actuellement ; cette fiche ne précise donc pas de bibliothèque, de modèle ni de taux de détection non vérifiés.",
      "The material retained in my CV describes Python work and classification applied to suspicious files. The project connects my interests in cybersecurity and data analysis. The repository, measured results and screenshots are not currently available; this page therefore does not specify unverified libraries, models or detection rates."
    ],
    "highlights": [
      [
        "Application de Python à l’analyse de fichiers suspects",
        "Mise en pratique d’une démarche de classification",
        "Travail de cybersécurité réalisé dans un cadre de hackathon"
      ],
      [
        "Applying Python to suspicious file analysis",
        "Practical classification methodology",
        "Cybersecurity work completed in a hackathon setting"
      ]
    ]
  }
};
