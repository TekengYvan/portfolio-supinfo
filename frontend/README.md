# Portfolio — Yvan Tekeng

Portfolio React/Vite bilingue FR/EN inspiré de https://kencode.dev/, avec 14 fiches projet, galeries complètes, portrait, animation du nom et thèmes clair, sombre et système.

## Démarrer

Node.js 20.19 ou supérieur est requis. Depuis la racine du portfolio, ouvrir deux terminaux :

```powershell
npm.cmd --prefix frontend ci
npm.cmd --prefix frontend run dev
```

```powershell
npm.cmd --prefix backend ci
npm.cmd --prefix backend start
```

Le frontend est disponible sur http://localhost:5173. Vite transmet les appels /api au backend sur le port 5000.

## Contact et rendez-vous

Copier backend/.env.example vers backend/.env si ce fichier est absent. Pour Gmail, renseigner EMAIL_USER et EMAIL_PASS avec un mot de passe d’application Gmail, puis redémarrer le backend. Ne jamais publier ce fichier ni partager le secret. Les paramètres SMTP_HOST, SMTP_PORT et SMTP_SECURE permettent un autre serveur SMTP.

Les messages sont adressés à tekengyvan2@gmail.com. En production, ajouter `EMAIL_USER`, `EMAIL_PASS` et `FRONTEND_ORIGIN` dans l’environnement du service backend Render (ne pas mettre ces secrets dans Git). Les rendez-vous sont des demandes avec date et heure du Cameroun (UTC+1), à confirmer personnellement ; aucun créneau n’est réservé automatiquement.

Sans serveur email configuré, le formulaire prépare un email dans la messagerie du visiteur et indique clairement qu’il reste à l’envoyer. Une confirmation d’envoi direct apparaît seulement après acceptation par le transport email.

Pour un déploiement séparé, définir VITE_API_URL à la construction du frontend et FRONTEND_ORIGIN avec son origine HTTPS exacte côté backend. render.yaml contient les deux services ; les secrets et l’origine sont à renseigner dans leur environnement.

## Modifier

- src/portfolioData.js : profil, parcours, certifications et liste des projets.
- src/projectDetails.js : descriptions bilingues, galeries, technologies et liens.
- src/ProjectDetail.jsx : fiches projet, zoom et navigation de galerie.
- src/ContactForm.jsx et ../backend/app.js : messages et demandes de rendez-vous.
- src/App.jsx et src/App.css : présentation et styles adaptatifs.
- src/useTheme.js et src/Typewriter.jsx : thème système et animation accessible.
- public/images/ : portrait et captures ; public/cv/ : les deux CV fournis.

Les fiches peuvent être partagées via /?project=slug. Le montage Lifeline associe la photographie réelle du véhicule et une capture réelle de l’application dans une composition CSS.

## Provenance

Les corrections du propriétaire priment sur les anciennes mentions des CV : trois diplômes IAI obtenus, fin de formation septembre 2026, certification IA Cisco, cybercriminalité ONU et participation aux finales africaines GCD4F.

NextLuk, Prep Concours et Mboa360 ont été revus depuis les versions GitHub disponibles pendant cette modification. Hair Salon utilise les écrans du projet local Hairsalon (marque LuxeSalon). Les galeries de SafeMarket, SmartBell, Contour et du portail d’assurance IAI proviennent des interfaces réelles. Les légendes précisent les aperçus locaux, notamment les formulaires IAI sans service de base de données disponible. Lifeline utilise les écrans du dépôt et la photographie du prototype fournie. SmartBell conserve l’attribution de son adaptation à hex4coder/bellsmkncampalagian.

Contour a été consulté avec l’authentification Git déjà présente et reste signalé comme privé. Aucun mot de passe communiqué dans la conversation n’a été utilisé ou enregistré. Les projets sans capture vérifiable n’affichent pas de fausse capture. L’ancien visuel Cosmetic Pro est identifié comme une illustration fournie.

## Vérifications

```powershell
npm.cmd --prefix frontend run lint
npm.cmd --prefix frontend run build
npm.cmd --prefix backend test
```

Vérifications effectuées : 14 fiches, plus de 130 vues de galerie, zoom et Échap, six filtres, navigation directe et historique, photos du prototype Lifeline, thèmes et changements du système, largeurs 320–1440 px, animation et réduction des mouvements, FR/EN, deux CV, formulaires et validation des dates. Sept tests backend couvrent validation, destinataire fixe, limites de requêtes et échecs SMTP. Les tests d’envoi utilisent des simulations ; aucun email réel n’a été envoyé.
