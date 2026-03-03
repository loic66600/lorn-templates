// ══════════════════════════════════════════════════════════════
// CONFIGURATION CLIENT — Charpentier / Couvreur / Zingueur
// Modifiez uniquement ce fichier pour personnaliser le site.
// ══════════════════════════════════════════════════════════════

export const client = {

  // ── Identité ────────────────────────────────────────────────
  nom: "Roca Charpente & Couverture",
  slogan: "Charpentier couvreur depuis 1998",
  metier: "Charpentier couvreur",
  specialite: "Charpente, couverture, zinguerie, isolation toiture",
  ville: "Perpignan",
  departement: "Pyrénées-Orientales (66)",
  codePostal: "66000",
  region: "Occitanie",
  adresse: "24 avenue du Palais des Rois de Majorque, 66000 Perpignan",

  // ── Coordonnées ─────────────────────────────────────────────
  telephone: "04 68 XX XX XX",
  telephoneLink: "tel:+33468XXXXXX",
  email: "contact@roca-charpente.fr",
  siret: "XXX XXX XXX 00000",

  // ── Horaires ─────────────────────────────────────────────────
  // IMPORTANT : tableau d'objets, utilisé avec .map() dans le HTML
  horaires: [
    { jour: "Lundi",    horaire: "7h30 – 17h30" },
    { jour: "Mardi",    horaire: "7h30 – 17h30" },
    { jour: "Mercredi", horaire: "7h30 – 17h30" },
    { jour: "Jeudi",    horaire: "7h30 – 17h30" },
    { jour: "Vendredi", horaire: "7h30 – 16h30" },
    { jour: "Samedi",   horaire: "Sur devis urgent" },
    { jour: "Dimanche", horaire: "Fermé" },
  ],
  horairesResume: "Lun – Ven : 7h30 – 17h30 | Urgences 7j/7",

  // ── Urgence ─────────────────────────────────────────────────
  urgence: true,
  urgenceTel: "06 XX XX XX XX",
  urgenceTelLink: "tel:+336XXXXXXXX",
  urgenceTexte: "Fuite toiture ? Intervention d'urgence sous 2h",

  // ── Réseaux sociaux (laisser "" pour masquer) ───────────────
  reseaux: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "",
    youtube: "",
    tiktok: "",
    twitter: "",
  },

  // ── SEO — Perpignan & Pyrénées-Orientales ──────────────────
  titreSEO: "Roca Charpente & Couverture — Charpentier Couvreur Perpignan (66) | Devis Gratuit",
  descriptionSEO: "Charpentier couvreur à Perpignan depuis 1998. Charpente, couverture tuile, zinguerie, isolation toiture. Intervention dans tout le 66. Devis gratuit, garantie décennale.",
  // IMPORTANT : tableau de strings, utilisé avec .join() dans Layout.astro
  motsCles: [
    "charpentier couvreur Perpignan",
    "couvreur 66",
    "charpente Perpignan",
    "toiture Perpignan",
    "couverture tuile Pyrénées-Orientales",
    "réfection toiture Perpignan",
    "zinguerie Perpignan",
    "isolation toiture 66",
    "réparation toiture urgence Perpignan",
    "charpentier couvreur Pyrénées-Orientales",
  ],
  canonicalUrl: "https://www.roca-charpente.fr",

  // ── Zones d'intervention ────────────────────────────────────
  zones: [
    "Perpignan", "Canet-en-Roussillon", "Saint-Estève", "Rivesaltes",
    "Thuir", "Argelès-sur-Mer", "Le Boulou", "Elne", "Ille-sur-Têt",
    "Prades", "Cabestany", "Baho", "Toulouges",
  ],
  rayonKm: 40,

  // ── Visuels ─────────────────────────────────────────────────
  logo: "",
  ogImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=630&fit=crop",
  heroImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=85",
  heroImageAlt: "Couvreur professionnel sur toiture à Perpignan",
  heroImage2: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
  heroImage3: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=80",

  // ── Google Maps ─────────────────────────────────────────────
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47233!2d2.8954!3d42.6988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b06f1c0a1fc9c1%3A0x40819a5fd979a50!2sPerpignan!5e0!3m2!1sfr!2sfr!4v1700000000000",

  // ── Cookie ──────────────────────────────────────────────────
  cookieConsent: true,

  // ── Stats ────────────────────────────────────────────────────
  stats: [
    { chiffre: 26,   suffix: " ans", label: "d'expérience" },
    { chiffre: 1200, suffix: "+",    label: "toitures réalisées" },
    { chiffre: 40,   suffix: " km",  label: "de rayon d'intervention" },
    { chiffre: 10,   suffix: " ans", label: "garantie décennale" },
  ],

  // ── Services ─────────────────────────────────────────────────
  services: [
    {
      titre: "Charpente traditionnelle",
      description: "Construction et rénovation de charpentes en bois massif. Fermes, faîtage, pannes, chevrons — travail traditionnel à la règle de l'art.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      icone: "🪵",
      tags: ["Bois massif", "Rénovation", "Construction neuve"],
      featured: true,
    },
    {
      titre: "Couverture tuile",
      description: "Pose et réfection de toiture en tuile canal, tuile plate, tuile romaine. Spécialiste des toitures méditerranéennes typiques du 66.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      icone: "🏠",
      tags: ["Tuile canal", "Tuile romaine", "Méditerranéen"],
      featured: true,
    },
    {
      titre: "Couverture ardoise",
      description: "Pose d'ardoises naturelles ou synthétiques. Toitures à forte pente, pigeons, noues, faîtages avec solin et bande de rives.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
      icone: "⬛",
      tags: ["Ardoise naturelle", "Forte pente", "Prestige"],
      featured: false,
    },
    {
      titre: "Zinguerie",
      description: "Pose de gouttières zinc, bavettes, solins, chéneaux, descentes EP. Étanchéité garantie. Zinc naturel pré-patiné ou zinc titane.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      icone: "🔩",
      tags: ["Zinc naturel", "Gouttières", "Étanchéité"],
      featured: false,
    },
    {
      titre: "Isolation toiture",
      description: "Isolation par soufflage, rouleaux ou projection — par l'extérieur (sarking) ou par l'intérieur. Éligible CEE et MaPrimeRénov'.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      icone: "🌡️",
      tags: ["Sarking", "MaPrimeRénov'", "Économies énergie"],
      featured: false,
    },
    {
      titre: "Réparation & Urgence",
      description: "Intervention rapide sous 2h sur fuite toiture, tuile cassée, chêneau bouché, dégât tempête. 7j/7 pour les urgences.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
      icone: "🚨",
      tags: ["Urgence 2h", "Fuite toiture", "Tempête"],
      featured: false,
    },
  ],

  // ── Processus ────────────────────────────────────────────────
  processus: [
    { num: "01", titre: "Visite & diagnostic", description: "Je viens sur place examiner votre toiture gratuitement, évaluer l'état de la charpente et prendre les mesures précises." },
    { num: "02", titre: "Devis détaillé",      description: "Devis clair sous 48h : matériaux, main d'œuvre, délai. Pas de surprise en fin de chantier." },
    { num: "03", titre: "Travaux soignés",     description: "Chantier protégé, respect du voisinage, travail dans les règles de l'art et selon les DTU toiture." },
    { num: "04", titre: "Livraison garantie",  description: "Réception chantier avec vous, nettoyage complet, remise PV de fin de travaux et certificat décennal." },
  ],

  // ── Réalisations ─────────────────────────────────────────────
  realisations: [
    {
      titre: "Réfection toiture tuile canal",
      description: "Dépose complète, pose d'écran sous-toiture HPV, tuile canal neuve.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80",
      categorie: "couverture",
      lieu: "Perpignan centre",
      annee: "2025",
      surface: "280 m²",
    },
    {
      titre: "Charpente maison individuelle",
      description: "Charpente traditionnelle en douglas pour maison R+1.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
      categorie: "charpente",
      lieu: "Canet-en-Roussillon",
      annee: "2025",
      surface: "180 m²",
    },
    {
      titre: "Couverture ardoise naturelle",
      description: "Toiture ardoise sur mas catalan rénové — 340 m².",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700&q=80",
      categorie: "couverture",
      lieu: "Thuir",
      annee: "2024",
      surface: "340 m²",
    },
    {
      titre: "Isolation sarking + tuile",
      description: "Isolation par l'extérieur + nouvelle couverture tuile plate.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80",
      categorie: "isolation",
      lieu: "Rivesaltes",
      annee: "2024",
      surface: "210 m²",
    },
    {
      titre: "Zinguerie zinc naturel",
      description: "Remplacement gouttières + chéneaux + descentes EP intégral.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
      categorie: "zinguerie",
      lieu: "Saint-Estève",
      annee: "2024",
      surface: "Linéaire 85 ml",
    },
    {
      titre: "Réparation urgence tempête",
      description: "Intervention sous 2h après Tramontane. Sécurisation + bâche + tuiles.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700&q=80",
      categorie: "urgence",
      lieu: "Argelès-sur-Mer",
      annee: "2025",
      surface: "60 m²",
    },
  ],

  realisationsCategories: [
    { id: "all",       label: "Tous" },
    { id: "couverture",label: "Couverture" },
    { id: "charpente", label: "Charpente" },
    { id: "isolation", label: "Isolation" },
    { id: "zinguerie", label: "Zinguerie" },
    { id: "urgence",   label: "Urgence" },
  ],

  // ── Tarifs ───────────────────────────────────────────────────
  tarifs: [
    {
      categorie: "Couverture",
      items: [
        { nom: "Tuile canal pose complète",      prix: "dès 80€/m²",  detail: "Pose + écran HPV" },
        { nom: "Réfection partielle tuile",      prix: "dès 45€/m²",  detail: "Selon état existant" },
        { nom: "Couverture ardoise naturelle",   prix: "dès 120€/m²", detail: "Ardoise 30×20 cm" },
        { nom: "Couverture ardoise synthétique", prix: "dès 75€/m²",  detail: "Fibrociment qualité+" },
      ],
    },
    {
      categorie: "Charpente",
      items: [
        { nom: "Charpente traditionnelle neuve", prix: "dès 60€/m²",  detail: "Douglas ou sapin séché" },
        { nom: "Rénovation charpente",           prix: "Sur devis",    detail: "Après diagnostic" },
        { nom: "Remplacement pannes/chevrons",   prix: "dès 35€/ml",  detail: "Pièce par pièce" },
        { nom: "Traitement fongique insecticide", prix: "dès 12€/m²", detail: "Injection + badigeon" },
      ],
    },
    {
      categorie: "Zinguerie & Isolation",
      items: [
        { nom: "Gouttière zinc demi-ronde",       prix: "dès 45€/ml", detail: "Zinc naturel 0.65" },
        { nom: "Chéneau zinc sur mesure",         prix: "dès 90€/ml", detail: "Zinc prépatiné" },
        { nom: "Isolation sarking",               prix: "dès 95€/m²", detail: "ITE + écran + tuile" },
        { nom: "Isolation soufflage combles",     prix: "dès 30€/m²", detail: "Ouate cellulose" },
      ],
    },
  ],

  // ── Témoignages ──────────────────────────────────────────────
  temoignages: [
    {
      nom: "Jean-Pierre M.",
      texte: "Intervention rapide après la Tramontane. Équipe sérieuse, chantier propre. Toiture parfaite depuis 2 ans. Je recommande sans hésiter pour toute la région.",
      note: 5,
      type: "Urgence tempête",
      ville: "Perpignan",
    },
    {
      nom: "Famille Sanchez",
      texte: "Réfection complète de notre mas du 17e. Roca a su respecter l'authenticité de la charpente tout en modernisant l'isolation. Travail exceptionnel.",
      note: 5,
      type: "Charpente + isolation",
      ville: "Thuir",
    },
    {
      nom: "SCI Les Palmiers",
      texte: "3 immeubles locatifs gérés par Roca depuis 6 ans. Ponctualité, qualité constante, tarifs transparents. Un partenaire indispensable pour notre patrimoine.",
      note: 5,
      type: "Entretien immeuble",
      ville: "Canet-en-Roussillon",
    },
    {
      nom: "Martine & Claude R.",
      texte: "Devis honnête, travaux dans les délais, maison protégée pour 20 ans. Notre toiture en tuile canal est magnifique. Merci à toute l'équipe Roca !",
      note: 5,
      type: "Couverture tuile canal",
      ville: "Rivesaltes",
    },
  ],

  // ── À propos ─────────────────────────────────────────────────
  apropos: {
    titre: "26 ans sur les toits du 66",
    sousTitre: "Artisan compagnon du tour de France, passionné de charpente traditionnelle",
    paragraphe1: "Formé au compagnonnage, j'ai travaillé sur des chantiers d'exception — cathédrales, mas catalans historiques, villas contemporaines — avant de créer Roca Charpente & Couverture en 1998. Mon entreprise allie savoir-faire traditionnel et techniques modernes pour des toitures durables sous le soleil du 66.",
    paragraphe2: "Avec une équipe de 6 compagnons qualifiés, j'interviens sur tous types de toiture dans les Pyrénées-Orientales. Chaque chantier est suivi personnellement, du devis à la livraison. Pas de sous-traitance : votre toit est entre les mains de mes compagnons.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    imageAlt: "Artisan couvreur sur chantier",
    certifications: [
      "Compagnon du Tour de France",
      "Qualibat 2111",
      "RGE Eco Artisan",
      "Garantie décennale",
      "Assurance RC Pro",
    ],
    valeurs: [
      { titre: "Savoir-faire",    description: "Techniques traditionnelles du compagnonnage, transmises de chantier en chantier depuis 26 ans", icone: "🪵" },
      { titre: "Transparence",    description: "Devis détaillé, prix fixe, pas de surprise. Le contrat signé est respecté à la lettre",           icone: "📋" },
      { titre: "Rapidité",        description: "Délai de réponse sous 48h, intervention urgence sous 2h, chantier dans les délais annoncés",      icone: "⚡" },
      { titre: "Durabilité",      description: "Matériaux sélectionnés pour leur longévité. Une toiture Roca, c'est 30 ans de tranquillité",      icone: "🛡️" },
    ],
  },

  // ── FAQ ──────────────────────────────────────────────────────
  faq: [
    {
      question: "Intervenez-vous en urgence ?",
      reponse: "Oui. Pour toute fuite toiture ou dégât après tempête (Tramontane, Marin), nous intervenons sous 2h dans un rayon de 40 km autour de Perpignan. Appelez le numéro d'urgence 7j/7.",
    },
    {
      question: "Êtes-vous éligibles aux aides MaPrimeRénov' ?",
      reponse: "Oui, nous sommes certifiés RGE Eco Artisan. Vos travaux d'isolation toiture sont éligibles à MaPrimeRénov', CEE, TVA à 5.5% et éco-prêt à taux zéro. Nous vous accompagnons dans les démarches.",
    },
    {
      question: "Quelle est votre zone d'intervention ?",
      reponse: "Nous intervenons dans tout le département des Pyrénées-Orientales (66) : Perpignan et son agglomération, la Côte Vermeille, les Aspres, le Conflent, la Cerdagne et le Vallespir.",
    },
    {
      question: "Combien de temps dure une toiture ?",
      reponse: "Tuile canal bien posée : 40 à 60 ans. Ardoise naturelle : 80 à 100 ans. Tout dépend de l'entretien. Nous recommandons un contrôle annuel après les tempêtes pour préserver votre garantie décennale.",
    },
    {
      question: "La visite de diagnostic est-elle gratuite ?",
      reponse: "Oui, la visite sur site et l'établissement du devis sont entièrement gratuits et sans engagement. Nous nous déplaçons du lundi au vendredi, et le samedi matin sur rendez-vous.",
    },
    {
      question: "Faites-vous de la sous-traitance ?",
      reponse: "Non. Tous nos chantiers sont réalisés par nos 6 compagnons salariés. Pas de sous-traitance, pas d'intérimaires sur vos toits. Vous rencontrez le même chef d'équipe du devis à la livraison.",
    },
  ],

  // ── Mentions légales ─────────────────────────────────────────
  responsable: "M. Roca Jean — Artisan EI",
  hebergeur: "Netlify, Inc. — San Francisco, CA 94107, USA",
};
