// ══════════════════════════════════════════════════════════════
// CONFIGURATION CLIENT — Plombier / Chauffagiste
// Modifiez uniquement ce fichier pour personnaliser le site.
// ══════════════════════════════════════════════════════════════

export const client = {

  // ── Identité ────────────────────────────────────────────────
  nom: "Aqua Pro 66",
  slogan: "Plomberie, chauffage et sanitaire — réactif, fiable, transparent",
  metier: "Plombier Chauffagiste",
  specialite: "Dépannage plomberie, installation sanitaire, chauffage",
  ville: "Perpignan",
  departement: "Pyrénées-Orientales (66)",

  // ── Coordonnées ─────────────────────────────────────────────
  telephone: "06 00 00 00 00",
  telephoneLink: "tel:+33600000000",
  email: "contact@aquapro66.fr",
  adresse: "28 rue de la Fusterie, 66000 Perpignan",

  // ── Horaires ────────────────────────────────────────────────
  horaires: "Lun – Ven : 7h30 – 19h | Sam : 8h – 13h",
  urgence: true,
  urgenceTexte: "Fuite d'eau ? On arrive en – de 1h",
  urgenceHoraires: "Urgences 7j/7 — 7h à 21h",

  // ── Réseaux sociaux (laisser "" pour masquer) ───────────────
  reseaux: {
    facebook: "https://facebook.com/votre-page",
    instagram: "https://instagram.com/votre-compte",
    linkedin: "",
    tiktok: "",
    youtube: "",
    twitter: "",
  },

  // ── SEO ─────────────────────────────────────────────────────
  titreSEO: "Aqua Pro 66 — Plombier Chauffagiste à Perpignan | Dépannage, Installation, Sanitaire",
  descriptionSEO: "Plombier chauffagiste à Perpignan. Dépannage fuite, débouchage, installation sanitaire, chauffe-eau, chauffage. Devis gratuit, intervention rapide.",
  motsCles: "plombier perpignan, chauffagiste 66, dépannage fuite, débouchage, chauffe-eau, sanitaire, urgence plomberie",

  // ── Visuels ─────────────────────────────────────────────────
  logo: "/images/logo.png",
  ogImage: "/images/og.jpg",
    heroImage: "/images/hero-plombier.jpg",
    heroImageAlt: "Photo d'un plombier en action dans une salle de bain moderne",
  bannerImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80",

  // ── Google Maps (laisser "" pour désactiver) ────────────────
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46500!2d2.88!3d42.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b06f1c0a1fc9c1%3A0x40819a5fd979a50!2sPerpignan!5e0!3m2!1sfr!2sfr",

  // ── Bannière cookies ────────────────────────────────────────
  cookieConsent: true,

  // ── Couleur dominante ───────────────────────────────────────
  couleur: "#0F766E", // teal profond

  // ── Chiffres clés ───────────────────────────────────────────
  stats: [
    { chiffre: "12", suffix: "+", label: "Années d'expérience" },
    { chiffre: "3200", suffix: "+", label: "Interventions" },
    { chiffre: "60", suffix: "min", label: "Délai moyen d'arrivée" },
    { chiffre: "98", suffix: "%", label: "Clients satisfaits" },
  ],

  // ── Comment ça marche — Étapes ──────────────────────────────
  etapes: [
    { num: "01", titre: "Vous appelez", description: "Décrivez votre problème par téléphone ou via le formulaire. Diagnostic rapide." },
    { num: "02", titre: "On arrive", description: "Intervention dans l'heure pour les urgences, ou rendez-vous planifié selon vos disponibilités." },
    { num: "03", titre: "Diagnostic sur place", description: "Inspection, recherche de panne, devis clair et détaillé avant toute intervention." },
    { num: "04", titre: "Réparation", description: "Travail soigné, matériel de qualité, nettoyage du chantier, explication de l'intervention." },
  ],

  // ── Services ────────────────────────────────────────────────
  services: [
    {
      titre: "Dépannage fuite d'eau",
      description: "Fuite visible ou cachée, canalisation percée, joint usé, robinet qui goutte. Recherche de fuite par caméra ou gaz traceur.",
      icone: "💧",
      urgence: true,
      image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=80",
      details: ["Recherche de fuite", "Réparation canalisation", "Remplacement joints", "Fuite encastrée"],
    },
    {
      titre: "Débouchage",
      description: "Évier, WC, douche, baignoire, colonne d'immeuble. Débouchage mécanique ou haute pression.",
      icone: "🔧",
      urgence: true,
      image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80",
      details: ["Débouchage WC", "Évier bouché", "Haute pression", "Caméra inspection"],
    },
    {
      titre: "Installation sanitaire",
      description: "Salle de bain, cuisine, WC : pose de lavabo, douche, baignoire, meuble vasque, robinetterie.",
      icone: "🚿",
      urgence: false,
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
      details: ["Salle de bain complète", "Douche italienne", "Robinetterie", "WC suspendu"],
    },
    {
      titre: "Chauffe-eau / Ballon",
      description: "Installation, remplacement, détartrage. Chauffe-eau électrique, thermodynamique ou solaire.",
      icone: "🔥",
      urgence: false,
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
      details: ["Remplacement ballon", "Détartrage", "Thermodynamique", "Groupe de sécurité"],
    },
    {
      titre: "Chauffage",
      description: "Installation et dépannage de radiateurs, plancher chauffant, chaudière gaz ou PAC.",
      icone: "♨️",
      urgence: false,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
      details: ["Radiateurs", "Plancher chauffant", "Chaudière gaz", "Pompe à chaleur"],
    },
    {
      titre: "Rénovation plomberie",
      description: "Remplacement complet des canalisations, reprise réseau cuivre ou PER, mise en conformité.",
      icone: "🏠",
      urgence: false,
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
      details: ["Remplacement canalisations", "Cuivre / PER", "Collecteur", "Mise en conformité"],
    },
  ],

  // ── Réalisations ────────────────────────────────────────────
  realisations: [
    { image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80", alt: "Salle de bain moderne rénovée", categorie: "Sanitaire" },
    { image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=80", alt: "Réparation fuite sous évier", categorie: "Dépannage" },
    { image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80", alt: "Douche italienne installée", categorie: "Sanitaire" },
    { image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80", alt: "Chauffe-eau thermodynamique posé", categorie: "Chauffage" },
    { image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80", alt: "Réseau plomberie neuf", categorie: "Rénovation" },
    { image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80", alt: "Débouchage haute pression colonne", categorie: "Dépannage" },
  ],

  realisationsBonus: [
    { image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80", alt: "Robinetterie cuisine design", categorie: "Sanitaire" },
    { image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80", alt: "Rénovation salle d'eau studio", categorie: "Rénovation" },
    { image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80", alt: "Pose radiateur design", categorie: "Chauffage" },
    { image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80", alt: "WC suspendu posé", categorie: "Sanitaire" },
    { image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", alt: "Plomberie commerce", categorie: "Rénovation" },
    { image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80", alt: "Cuisine raccordement complet", categorie: "Sanitaire" },
  ],

  // ── Témoignages ─────────────────────────────────────────────
  temoignages: [
    { nom: "Nathalie P.", texte: "Fuite d'eau un dimanche matin, intervention en 40 minutes. Rapide, efficace, poli. Facture conforme au devis annoncé par téléphone.", note: 5, type: "Urgence" },
    { nom: "Michel & Christiane", texte: "Rénovation complète de notre salle de bain. Du sol au plafond, tout est parfait. Douche italienne, meuble vasque, WC suspendu — on est ravis.", note: 5, type: "Rénovation" },
    { nom: "Stéphane R.", texte: "Remplacement du chauffe-eau qui avait lâché. Diagnostic honnête, pas de vente forcée. Installation propre, explications claires.", note: 5, type: "Chauffe-eau" },
    { nom: "Amira B.", texte: "Débouchage d'urgence de la colonne de mon immeuble. Problème résolu en 30 minutes avec la haute pression. Très professionnel.", note: 5, type: "Débouchage" },
  ],

  // ── À propos ────────────────────────────────────────────────
  apropos: {
    titre: "Votre plombier de quartier, en mieux",
    sousTitre: "Artisan depuis 2013 dans le 66",
    paragraphe1: "Aqua Pro 66, c'est un plombier chauffagiste indépendant qui fait les choses bien. Pas de surfacturation, pas de pièce changée sans raison, pas de devis surprise. Juste un artisan qui aime son métier et qui respecte ses clients.",
    paragraphe2: "Formé en alternance puis aguerri sur le terrain pendant 12 ans, j'interviens sur tout le département pour du dépannage, de l'installation et de la rénovation. Mon engagement : arriver à l'heure, expliquer avant d'agir, nettoyer avant de partir.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    imageAlt: "Plombier au travail",
    certifications: ["Qualibat RGE", "Garantie décennale", "Assurance RC Pro", "Agrément PG (gaz)"],
    valeurs: [
      { titre: "Réactivité", description: "Intervention rapide, urgences 7j/7, réponse sous 30 min.", icone: "⚡" },
      { titre: "Honnêteté", description: "Devis clair, prix annoncé = prix facturé. Zéro surprise.", icone: "🤝" },
      { titre: "Propreté", description: "Bâches, aspiration, nettoyage — votre logement est respecté.", icone: "✨" },
      { titre: "Garantie", description: "Toutes nos interventions garanties. Matériel de marque.", icone: "🛡️" },
    ],
  },

  // ── Zone d'intervention ────────────────────────────────────
  zones: "Perpignan, Canet-en-Roussillon, Saint-Estève, Rivesaltes, Thuir, Cabestany, Pollestres, Pia, Elne, Argelès-sur-Mer, Le Soler, Bompas, Toulouges, Claira, Saint-Cyprien, Le Boulou, Céret, Prades",
  rayonKm: "35 km autour de Perpignan",

  // ── Tarifs indicatifs ───────────────────────────────────────
  tarifs: [
    { categorie: "Dépannage", items: [
      { nom: "Déplacement + diagnostic", prix: "39€", detail: "Forfait fixe, déduit si intervention" },
      { nom: "Réparation fuite simple", prix: "80 – 150€", detail: "Joint, raccord, robinet" },
      { nom: "Recherche de fuite", prix: "150 – 350€", detail: "Caméra, gaz traceur, rapport" },
      { nom: "Débouchage", prix: "90 – 250€", detail: "Selon méthode et accessibilité" },
    ]},
    { categorie: "Installation", items: [
      { nom: "Pose WC", prix: "200 – 400€", detail: "Standard ou suspendu, fourniture en option" },
      { nom: "Pose lavabo / vasque", prix: "150 – 350€", detail: "Avec robinetterie et raccordement" },
      { nom: "Douche complète", prix: "1 500 – 4 000€", detail: "Receveur ou italienne, faïence, robinetterie" },
      { nom: "Salle de bain clé en main", prix: "4 000 – 12 000€", detail: "Dépose + pose complète, plomberie + carrelage" },
    ]},
    { categorie: "Chauffage & Eau chaude", items: [
      { nom: "Remplacement chauffe-eau", prix: "600 – 1 500€", detail: "Électrique ou thermodynamique, pose incluse" },
      { nom: "Détartrage chauffe-eau", prix: "120 – 200€", detail: "Vidange, nettoyage, remplacement anode" },
      { nom: "Pose radiateur", prix: "200 – 500€", detail: "Par radiateur, raccordement inclus" },
      { nom: "Installation chaudière gaz", prix: "3 000 – 6 000€", detail: "Fourniture + pose + mise en service" },
    ]},
  ],

  // ── Mentions légales ────────────────────────────────────────
  responsable: "M. Durand Julien",
  siret: "000 000 000 00000",
  hebergeur: "Netlify, Inc. — San Francisco, CA 94107, USA",
};
