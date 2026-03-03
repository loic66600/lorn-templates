// ══════════════════════════════════════════════════════════════════════
// CONFIGURATION CLIENT — Paysagiste / Élagueur / Jardinier paysager
// Modifiez uniquement ce fichier pour personnaliser le site.
// ══════════════════════════════════════════════════════════════════════

export const client = {

  // ── Identité ──────────────────────────────────────────────────────
  nom: "Verde Paysage",
  slogan: "Paysagiste élagueur depuis 2005",
  sloganHero: "Votre jardin, notre passion.",
  metier: "Paysagiste élagueur",
  specialite: "Création de jardins, élagage, entretien, arboriculture",
  ville: "Perpignan",
  departement: "Pyrénées-Orientales (66)",
  codePostal: "66000",
  adresse: "12 chemin des Oliviers, 66000 Perpignan",

  // ── Coordonnées ───────────────────────────────────────────────────
  telephone: "04 68 XX XX XX",
  telephoneLink: "tel:+33468XXXXXX",
  email: "contact@verde-paysage.fr",
  siret: "XXX XXX XXX 00000",

  // ── Horaires (tableau d'objets — utilisé avec .map()) ─────────────
  horaires: [
    { jour: "Lundi",    horaire: "7h30 – 18h00" },
    { jour: "Mardi",    horaire: "7h30 – 18h00" },
    { jour: "Mercredi", horaire: "7h30 – 18h00" },
    { jour: "Jeudi",    horaire: "7h30 – 18h00" },
    { jour: "Vendredi", horaire: "7h30 – 17h00" },
    { jour: "Samedi",   horaire: "8h00 – 12h00" },
    { jour: "Dimanche", horaire: "Fermé" },
  ],
  horairesResume: "Lun – Ven : 7h30 – 18h | Sam : 8h – 12h",

  // ── Urgence (tempête, arbre tombé) ────────────────────────────────
  urgence: true,
  urgenceTel: "06 XX XX XX XX",
  urgenceTelLink: "tel:+336XXXXXXXX",
  urgenceTexte: "Arbre tombé ou dangereux ? Intervention d'urgence 7j/7",

  // ── Réseaux sociaux (laisser "" pour masquer) ─────────────────────
  reseaux: {
    facebook:  "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin:  "",
    youtube:   "",
    tiktok:    "",
    twitter:   "",
  },

  // ── SEO Perpignan & Pyrénées-Orientales ───────────────────────────
  titreSEO: "Verde Paysage — Paysagiste Élagueur Perpignan (66) | Jardins & Élagage",
  descriptionSEO: "Paysagiste élagueur certifié à Perpignan depuis 2005. Création de jardins, élagage, abattage, entretien, taille de haies. Devis gratuit dans tout le 66. Éco-responsable.",
  // IMPORTANT : tableau de strings — utilisé avec .join() dans Layout.astro
  motsCles: [
    "paysagiste Perpignan",
    "élagueur Perpignan",
    "élagage Perpignan",
    "paysagiste 66",
    "entretien jardin Perpignan",
    "création jardin Perpignan",
    "abattage arbre Pyrénées-Orientales",
    "taille haies Perpignan",
    "jardinier paysager Perpignan",
    "arboriste Perpignan",
    "paysagiste Pyrénées-Orientales",
  ],
  canonicalUrl: "https://www.verde-paysage.fr",

  // ── Zones d'intervention ──────────────────────────────────────────
  zones: [
    "Perpignan", "Canet-en-Roussillon", "Saint-Estève", "Rivesaltes",
    "Thuir", "Argelès-sur-Mer", "Cabestany", "Elne", "Le Soler",
    "Pia", "Toulouges", "Baho", "Villeneuve-de-la-Raho",
  ],
  rayonKm: 40,

  // ── Visuels ───────────────────────────────────────────────────────
  logo: "",
  ogImage: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&h=630&fit=crop",
  heroImage: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=85",
  heroImageAlt: "Paysagiste élagueur au travail dans un jardin méditerranéen à Perpignan",
  heroImage2: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=900&q=80",
  heroImage3: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
  heroImage4: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=900&q=80",

  // ── Google Maps ───────────────────────────────────────────────────
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47233!2d2.8954!3d42.6988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b06f1c0a1fc9c1%3A0x40819a5fd979a50!2sPerpignan!5e0!3m2!1sfr!2sfr!4v1700000000000",

  // ── Cookie ────────────────────────────────────────────────────────
  cookieConsent: true,

  // ── Stats ─────────────────────────────────────────────────────────
  stats: [
    { chiffre: 20,   suffix: " ans",  label: "d'expérience" },
    { chiffre: 850,  suffix: "+",     label: "jardins créés & entretenus" },
    { chiffre: 3200, suffix: "+",     label: "arbres élaguées" },
    { chiffre: 40,   suffix: " km",   label: "de rayon d'intervention" },
  ],

  // ── Éco badge ─────────────────────────────────────────────────────
  eco: {
    badge: "Éco-responsable",
    engagements: [
      "Compostage des déchets verts sur site",
      "Matériel électrique & thermique basse émission",
      "Espèces locales et méditerranéennes privilégiées",
      "Broyage sur place pour paillage naturel",
    ],
  },

  // ── Services ──────────────────────────────────────────────────────
  services: [
    {
      titre: "Élagage & Taille",
      description: "Élagage raisonné, taille de formation, taille d'entretien. Respect de la physiologie de l'arbre, travail en hauteur avec nacelle ou cordiste selon accès.",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
      icone: "✂️",
      tags: ["Élagage raisonné", "Taille en hauteur", "Cordiste"],
      featured: true,
    },
    {
      titre: "Création de jardins",
      description: "Étude, conception et réalisation de jardins méditerranéens, contemporains ou naturels. Plantations, allées, terrasses, pergolas, rocailles, bassins.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
      icone: "🌿",
      tags: ["Jardin méditerranéen", "Conception 3D", "Plantation"],
      featured: true,
    },
    {
      titre: "Entretien annuel",
      description: "Contrat d'entretien sur mesure : tonte, désherbage, taille de haies, arrosage, traitement phytosanitaire. Passage hebdomadaire, bimensuel ou mensuel.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&q=80",
      icone: "📅",
      tags: ["Contrat annuel", "Tonte", "Taille haies"],
      featured: true,
    },
    {
      titre: "Abattage & Dessouchage",
      description: "Abattage dirigé ou par démontage en hauteur. Dessouchage à la fraiseuse. Évacuation complète ou broyage sur place pour paillage.",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
      icone: "🪓",
      tags: ["Abattage sécurisé", "Dessouchage", "Broyage"],
      featured: false,
    },
    {
      titre: "Arrosage automatique",
      description: "Conception et installation de systèmes d'arrosage automatique goutte-à-goutte ou aspersion. Programmateur connecté, économie d'eau garantie.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
      icone: "💧",
      tags: ["Goutte-à-goutte", "Programmateur", "Économie eau"],
      featured: false,
    },
    {
      titre: "Diagnostic arboricole",
      description: "Bilan sanitaire et mécanique de vos arbres. Détection de maladies, risques de chute, prescription de soins. Rapport écrit pour votre assurance.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&q=80",
      icone: "🔍",
      tags: ["Arboriste certifié", "Rapport écrit", "Assurance"],
      featured: false,
    },
  ],

  // ── Processus ─────────────────────────────────────────────────────
  processus: [
    { num: "01", titre: "Visite & diagnostic",  description: "Je visite votre terrain gratuitement, analyse l'état de vos arbres et espaces verts, et écoute votre projet." },
    { num: "02", titre: "Étude & devis",        description: "Devis détaillé sous 48h avec plan pour les créations. Prix fixe garanti, aucune surprise en fin de chantier." },
    { num: "03", titre: "Réalisation soignée",  description: "Équipe qualifiée, matériel professionnel, chantier propre. Protection des massifs et terrasses existants." },
    { num: "04", titre: "Livraison & conseils", description: "Visite de réception avec vous. Conseils personnalisés d'entretien selon les saisons du jardin méditerranéen." },
  ],

  // ── Saisons intervention ──────────────────────────────────────────
  saisons: [
    { saison: "Printemps", icon: "🌸", travaux: "Taille de printemps, plantation, préparation massifs, mise en route arrosage" },
    { saison: "Été",       icon: "☀️", travaux: "Entretien, désherbage, tonte, arrosage, taille palmiers" },
    { saison: "Automne",   icon: "🍂", travaux: "Élagage, abattage, dessouchage, plantation arbres & arbustes, engrais" },
    { saison: "Hiver",     icon: "❄️", travaux: "Taille de formation, travaux de structure, création de jardins, terrassement" },
  ],

  // ── Réalisations ──────────────────────────────────────────────────
  realisations: [
    {
      titre: "Jardin méditerranéen 600 m²",
      description: "Création complète avec allées calcaire, oliviers centenaires, bassin et terrasse bois.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=80",
      categorie: "creation",
      lieu: "Perpignan",
      surface: "600 m²",
      annee: "2025",
    },
    {
      titre: "Élagage 12 platanes",
      description: "Taille en rideau et épuration couronnes — travail en nacelle, broyage sur place.",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=700&q=80",
      categorie: "elagage",
      lieu: "Canet-en-Roussillon",
      surface: "12 arbres",
      annee: "2025",
    },
    {
      titre: "Jardin contemporain avec piscine",
      description: "Aménagement paysager autour d'une piscine — plantes non allergènes, arrosage goutte-à-goutte.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=700&q=80",
      categorie: "creation",
      lieu: "Thuir",
      surface: "350 m²",
      annee: "2024",
    },
    {
      titre: "Entretien domaine viticole",
      description: "Contrat annuel sur mas de 2 ha — entretien allées, oliviers, cyprès de frontière.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=80",
      categorie: "entretien",
      lieu: "Rivesaltes",
      surface: "2 ha",
      annee: "2024",
    },
    {
      titre: "Abattage chêne 25 m",
      description: "Démontage par tronçons en hauteur, désouchage fraiseuse, évacuation complète.",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=700&q=80",
      categorie: "abattage",
      lieu: "Saint-Estève",
      surface: "25 m de haut",
      annee: "2025",
    },
    {
      titre: "Arrosage automatique villa",
      description: "Réseau 6 zones, programmateur connecté wifi, économie 40% eau vs arrosage manuel.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=700&q=80",
      categorie: "arrosage",
      lieu: "Cabestany",
      surface: "280 m²",
      annee: "2024",
    },
  ],

  realisationsCategories: [
    { id: "all",       label: "Tous" },
    { id: "creation",  label: "Création" },
    { id: "elagage",   label: "Élagage" },
    { id: "entretien", label: "Entretien" },
    { id: "abattage",  label: "Abattage" },
    { id: "arrosage",  label: "Arrosage" },
  ],

  // ── Tarifs ────────────────────────────────────────────────────────
  tarifs: [
    {
      categorie: "Élagage & Abattage",
      items: [
        { nom: "Élagage petit arbre (< 6 m)",    prix: "À partir de 150€",  detail: "Fournitures + évacuation" },
        { nom: "Élagage arbre moyen (6 – 15 m)", prix: "À partir de 350€",  detail: "Nacelle ou cordiste" },
        { nom: "Élagage grand arbre (> 15 m)",   prix: "Sur devis",         detail: "Après diagnostic" },
        { nom: "Abattage + dessouchage",          prix: "À partir de 400€",  detail: "Évacuation ou broyage" },
      ],
    },
    {
      categorie: "Entretien & Taille",
      items: [
        { nom: "Tonte pelouse (< 200 m²)",         prix: "À partir de 60€",   detail: "Ramassage inclus" },
        { nom: "Taille de haie (linéaire)",         prix: "À partir de 3€/ml", detail: "Ramassage inclus" },
        { nom: "Contrat entretien mensuel",         prix: "Sur devis",         detail: "Selon surface et missions" },
        { nom: "Désherbage massifs",                prix: "À partir de 0,5€/m²", detail: "Manuel ou thermique" },
      ],
    },
    {
      categorie: "Création & Équipement",
      items: [
        { nom: "Création jardin clé en main",    prix: "À partir de 25€/m²", detail: "Etude + fournitures + pose" },
        { nom: "Arrosage automatique",           prix: "À partir de 15€/m²", detail: "Programmateur + pose" },
        { nom: "Engazonnement",                  prix: "À partir de 8€/m²",  detail: "Gazon en rouleaux" },
        { nom: "Diagnostic arboricole",          prix: "À partir de 180€",   detail: "Rapport écrit inclus" },
      ],
    },
  ],

  // ── Témoignages ───────────────────────────────────────────────────
  temoignages: [
    {
      nom: "Sylvie & Marc D.",
      texte: "Nous avons fait appel à Verde Paysage pour la création complète de notre jardin. Résultat bluffant — un véritable jardin méditerranéen que nous n'aurions jamais imaginé. L'équipe est sérieuse, propre et passionnée.",
      note: 5,
      type: "Création jardin",
      ville: "Perpignan",
    },
    {
      nom: "EARL Mas des Albères",
      texte: "Contrat d'entretien depuis 3 ans sur notre domaine. Verde Paysage connaît nos oliviers, nos cyprès, notre terrain. Un partenaire indispensable et ponctuel en toutes saisons.",
      note: 5,
      type: "Entretien domaine",
      ville: "Rivesaltes",
    },
    {
      nom: "Laurent P.",
      texte: "Un chêne de 20 mètres menaçait ma maison. Intervention en 2 jours, démontage parfait, pas une tuile cassée. Travail sécurisé, professionnel, prix honnête. Je recommande vivement.",
      note: 5,
      type: "Abattage sécurisé",
      ville: "Saint-Estève",
    },
    {
      nom: "Résidence La Garrigue",
      texte: "Verde Paysage gère l'entretien de nos espaces verts depuis 4 ans. Rapport qualité-prix excellent, toujours présents quand il faut. Les copropriétaires sont très satisfaits.",
      note: 5,
      type: "Entretien copropriété",
      ville: "Canet-en-Roussillon",
    },
  ],

  // ── À propos ──────────────────────────────────────────────────────
  apropos: {
    titre: "20 ans à cultiver le 66",
    sousTitre: "Arboriste certifié, passionné du jardin méditerranéen",
    paragraphe1: "Formé en arboriculture et paysagisme à Montpellier, j'ai fondé Verde Paysage à Perpignan en 2005 avec une idée simple : créer des jardins beaux, durables et adaptés au climat méditerranéen. Espèces locales résistantes à la sécheresse, arrosage raisonné, élagage respectueux de la physiologie des arbres — la nature guide chaque décision.",
    paragraphe2: "Avec une équipe de 5 paysagistes et arboristes qualifiés, j'interviens sur tous types de jardins : villas, domaines viticoles, copropriétés, espaces publics. Pas de sous-traitance — mes compagnons connaissent votre jardin depuis le premier jour.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
    imageAlt: "Paysagiste arboriste certifié au travail",
    certifications: [
      "Arboriste Certifié ISA",
      "CS Taille & Soins des Arbres",
      "Certificat phytosanitaire",
      "CACES Nacelle R486",
      "Assurance décennale paysage",
    ],
    valeurs: [
      { titre: "Respect du vivant",   description: "Chaque arbre est unique. Nos interventions preservent la vitalité et l'esthétique naturelle de vos végétaux.", icone: "🌳" },
      { titre: "Savoir-faire",        description: "20 ans de terrain, certifications arboristes ISA, formation continue sur les nouvelles techniques.",           icone: "🎓" },
      { titre: "Éco-responsabilité",  description: "Déchets compostés ou broyés en paillage, espèces locales, produits phytosanitaires certifiés bio.",           icone: "♻️" },
      { titre: "Engagement client",   description: "Devis honnête, tarif fixe, chantier propre. Vous êtes contacté avant, pendant et après les travaux.",          icone: "🤝" },
    ],
  },

  // ── FAQ ───────────────────────────────────────────────────────────
  faq: [
    {
      question: "Faut-il un arrêté pour couper un arbre ?",
      reponse: "Cela dépend de votre commune et du PLU. Dans certains secteurs (abords de monuments historiques, zones protégées), une autorisation préalable est nécessaire. Nous vous guidons dans les démarches administratives gratuitement.",
    },
    {
      question: "Quelle est la bonne saison pour élaguer ?",
      reponse: "En zone méditerranéenne, l'automne (octobre–novembre) est idéal pour la plupart des arbres. Évitez les fortes chaleurs estivales qui stressent les végétaux. Certaines espèces (oliviers, palmiers) ont leurs propres fenêtres d'intervention.",
    },
    {
      question: "Que faites-vous des déchets verts ?",
      reponse: "Selon votre préférence : broyage sur place pour paillage naturel (gratuit et écologique) ou évacuation complète vers une déchetterie végétaux. Le broyat enrichit votre sol et limite l'arrosage.",
    },
    {
      question: "Proposez-vous des contrats d'entretien ?",
      reponse: "Oui, nos contrats annuels incluent le nombre de passages souhaité (hebdomadaire, bimensuel ou mensuel), les missions définies ensemble, et un tarif fixe mensuel. Idéal pour les particuliers, copropriétés et professionnels.",
    },
    {
      question: "Intervenez-vous en urgence ?",
      reponse: "Oui. En cas d'arbre tombé, de branche menaçante après tempête ou de risque immédiat, nous intervenons en urgence 7j/7. Appelez notre numéro d'urgence — un arboriste se déplace sous 4h.",
    },
    {
      question: "Mon jardin est-il adapté au climat du 66 ?",
      reponse: "Notre spécialité est le jardin méditerranéen — nous sélectionnons des espèces parfaitement adaptées à la sécheresse et à la Tramontane. Un jardin bien conçu peut être beau en consommant 50% moins d'eau qu'un jardin standard.",
    },
  ],

  // ── Mentions légales ──────────────────────────────────────────────
  responsable: "M. Verde Antoine — EI Paysagiste",
  hebergeur: "Netlify, Inc. — San Francisco, CA 94107, USA",
};
