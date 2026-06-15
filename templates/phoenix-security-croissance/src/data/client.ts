// ═══════════════════════════════════════════════════════════════════
// PHOENIX EVENT & FIRE SECURITY — Configuration client
// Modifiez uniquement ce fichier pour personnaliser le site.
// ═══════════════════════════════════════════════════════════════════

export const client = {

  // ── Identité ──────────────────────────────────────────────────────
  nom:        "PHOENIX",
  nomComplet: "Phoenix Event & Fire Security",
  slogan:     "Force de protection d'élite",
  tagline:    "Intervention rapide 24/7. Phoenix déploie des solutions tactiques pour la protection de vos actifs et de vos événements de prestige.",
  heroTitle1: "SÉCURITÉ PRIVÉE",
  heroTitle2: "& INCENDIE",
  heroAccroche: "SURVEILLANCE ACTIVE 24/7",

  // ── Coordonnées ───────────────────────────────────────────────────
  telephone:     "+33 (0)1 00 00 00 00",
  telephoneLink: "tel:+33100000000",
  telephoneUrgent: "01 23 45 67 89",
  email:         "contact@phoenix-security.fr",
  adresse:       "Paris, Île-de-France",
  siret:         "XXX XXX XXX 00000",

  // ── Siège social ──────────────────────────────────────────────────
  siege:         "Siège Social : Paris, FR",
  siege2:        "+33 (0)1 00 00 00 00",

  // ── Horaires ──────────────────────────────────────────────────────
  horaires: [
    { jour: "Lundi – Vendredi", horaire: "09h00 – 18h00 (bureau)" },
    { jour: "Urgences",         horaire: "24h/7j — intervention immédiate" },
  ],
  horairesResume: "Disponible 24h/24, 7j/7",
  disponibilite:  "Intervention immédiate",

  // ── Réseaux ───────────────────────────────────────────────────────
  reseaux: {
    linkedin:  "https://linkedin.com/",
    instagram: "https://instagram.com/",
    facebook:  "https://facebook.com/",
    twitter:   "",
    youtube:   "",
    tiktok:    "",
  },

  // ── SEO ───────────────────────────────────────────────────────────
  titreSEO:      "Phoenix Security — Sécurité Privée, Événementielle & Incendie | Île-de-France",
  descriptionSEO: "Phoenix Event & Fire Security : agents SSIAP certifiés, gardiennage, sécurité événementielle et incendie. Intervention 24h/7j en Île-de-France et grandes métropoles. Devis sous 24h.",
  motsCles: [
    "sécurité privée Paris",
    "gardiennage Île-de-France",
    "agent de sécurité événementiel",
    "SSIAP Paris",
    "sécurité incendie ERP",
    "société de sécurité Paris",
    "protection rapprochée",
    "sécurité concert festival",
    "agence sécurité événementielle",
    "surveillance sites sensibles",
  ],
  canonicalUrl: "https://www.phoenix-security.fr",
  ogImage: "/images/filtrage dentree.png",

  // ── Cookie ────────────────────────────────────────────────────────
  cookieConsent: true,

  // ── Google Maps ───────────────────────────────────────────────────
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167998!2d2.3488!3d48.8534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1700000000000",

  // ── Stats ─────────────────────────────────────────────────────────
  stats: [
    { chiffre: 500, suffix: "+", label: "Missions réussies" },
    { chiffre: 100, suffix: "%", label: "Conformité CNAPS" },
    { chiffre: 15,  suffix: "min", label: "Temps de réponse" },
    { chiffre: 24,  suffix: "h/7", label: "Disponibilité" },
  ],

  // ── Services ──────────────────────────────────────────────────────
  services: [
    {
      id:          "gardiennage",
      titre:       "Gardiennage",
      titreCourt:  "Gardiennage",
      icone:       "shield",
      description: "Protection physique des biens et des personnes par des agents qualifiés, de jour comme de nuit.",
      descriptionLongue: "Nos agents de gardiennage assurent la protection permanente de vos locaux, entrepôts, sites industriels et résidences. Formation rigoureuse, tenues réglementaires, rapports d'activité détaillés transmis en temps réel via notre plateforme digitale.",
      points: ["Agents certifiés CQP APS", "Rondes régulières et inopinées", "Rapports d'activité temps réel", "Surveillance statique et dynamique"],
      image: "/images/entree.png",
    },
    {
      id:          "evenementiel",
      titre:       "Sécurité Événementielle",
      titreCourt:  "Événementiel",
      icone:       "users",
      description: "Gestion des flux et contrôle d'accès pour vos salons, concerts et soirées de gala privées.",
      descriptionLongue: "Spécialistes de la sécurité des événements de prestige, nos équipes gèrent le contrôle d'accès, la surveillance des flux, la protection VIP et la logistique sécuritaire. Concerts, festivals, gala d'entreprise, sommets internationaux.",
      points: ["Contrôle d'accès intelligent", "Protection VIP et rapprochée", "Gestion des flux de foule", "Coordination avec les forces de l'ordre"],
      image: "/images/spectacle.png",
    },
    {
      id:          "incendie",
      titre:       "Sécurité Incendie",
      titreCourt:  "Incendie",
      icone:       "flame",
      description: "Agents SSIAP certifiés pour la prévention et l'intervention incendie en ERP et IGH.",
      descriptionLongue: "Nos agents SSIAP 1, 2 et 3 assurent la surveillance incendie de vos établissements recevant du public, immeubles de grande hauteur et sites industriels. Formation continue, équipements homologués, protocoles d'évacuation maîtrisés.",
      points: ["Agents SSIAP 1, 2 et 3", "Conformité ERP / IGH", "Exercices d'évacuation", "Maintenance extincteurs & SSI"],
      image: "/images/ssi.png",
    },
  ],

  // ── Pourquoi Phoenix ──────────────────────────────────────────────
  atouts: [
    {
      titre:       "Professionnels qualifiés",
      description: "Sélection rigoureuse et formation continue de nos agents terrain.",
      icone:       "badge",
      detail:      "Tous nos agents sont certifiés CNAPS, formés aux premiers secours et habilités selon le niveau de sécurité requis.",
    },
    {
      titre:       "Réactivité 24/7",
      description: "Centre de commandement spécialisé pour l'intervention en tout temps.",
      icone:       "clock",
      detail:      "Temps de réponse garanti < 15 minutes sur l'Île-de-France. Astreinte permanente.",
    },
    {
      titre:       "Conformité",
      description: "Agrément CNAPS et respect total des réglementations en vigueur.",
      icone:       "check",
      detail:      "Agréés CNAPS, assurés RC Professionnelle, conformes RGPD pour les données biométriques.",
    },
    {
      titre:       "Reporting temps réel",
      description: "Transparence totale sur les rondes et incidents via notre plateforme digitale.",
      icone:       "chart",
      detail:      "Application cliente sécurisée : consultez en direct les rapports d'activité, incidents et positions d'agents.",
    },
  ],

  // ── Clients ───────────────────────────────────────────────────────
  clients: [
    { nom: "Global Logistics Corp",    secteur: "Logistique",    icone: "building" },
    { nom: "Arena Maxima",             secteur: "Événementiel",  icone: "star" },
    { nom: "Starlight Festival",       secteur: "Festivals",     icone: "music" },
    { nom: "Ironclad Industrial",      secteur: "Industrie",     icone: "factory" },
    { nom: "Skyline Towers",           secteur: "Immobilier",    icone: "building2" },
    { nom: "Luxury Avenue",            secteur: "Luxe",          icone: "gem" },
    { nom: "Grand Palace Hotel",       secteur: "Hôtellerie",    icone: "hotel" },
    { nom: "Air Horizon Hub",          secteur: "Aérien",        icone: "plane" },
    { nom: "Federal Reserve Ouest",    secteur: "Finance",       icone: "bank" },
    { nom: "Quantum Systems",          secteur: "Tech",          icone: "cpu" },
    { nom: "Elite Jewelry EU",         secteur: "Bijouterie",    icone: "diamond" },
    { nom: "Bioshield Labs",           secteur: "Pharma",        icone: "lab" },
  ],

  // ── Témoignage ────────────────────────────────────────────────────
  temoignage: {
    texte:    "L'expertise de PHOENIX en matière de sécurité incendie a été déterminante pour l'homologation de notre nouveau centre de logistique. Leur réactivité est sans égale dans le secteur.",
    auteur:   "Jean-Pierre Lefebvre",
    fonction: "Directeur Opérationnel, Ironclad Industrial",
    note:     5,
    image:    "/images/pcsecu.png",
  },

  // ── Recrutement ───────────────────────────────────────────────────
  profils: [
    {
      titre:       "Agent de sécurité",
      description: "Surveillance, contrôle d'accès et sécurisation des sites sensibles.",
      icone:       "shield",
    },
    {
      titre:       "Événementiel",
      description: "Gestion de foules, protection VIP et logistique sécuritaire de haut niveau.",
      icone:       "users",
    },
    {
      titre:       "SSIAP (1, 2, 3)",
      description: "Spécialistes en sécurité incendie et assistance à personnes qualifiés.",
      icone:       "flame",
    },
  ],
  exigences: [
    { titre: "Ponctualité",  detail: "La rigueur opérationnelle est notre ADN" },
    { titre: "Rigueur",      detail: "Aucune marge pour l'erreur" },
    { titre: "Discrétion",   detail: "Professionnalisme absolu" },
  ],

  // ── Zone d'intervention ───────────────────────────────────────────
  zones: ["Île-de-France", "Paris", "Lyon", "Marseille", "Bordeaux", "Nantes", "Toulouse", "Nice", "Strasbourg"],
  zonesDescription: "Nous couvrons l'ensemble de la région Île-de-France et les grandes métropoles pour vos besoins spécifiques.",

  // ── À propos ──────────────────────────────────────────────────────
  apropos: {
    p1: "Fondée par d'anciens cadres opérationnels des forces de l'ordre et des services de protection spéciaux, Phoenix Event & Fire Security s'est imposée en moins de cinq ans comme une référence nationale dans le domaine de la sécurité privée.",
    p2: "Notre approche est simple : pas de compromis sur la qualité, pas de sous-traitance sauvage, pas de promesses non tenues. Chaque mission est pilotée par un chef de projet dédié, chaque agent est sélectionné sur des critères stricts et formé en interne.",
    p3: "Avec plus de 500 missions réussies, nous protégeons les actifs des plus grandes entreprises, les événements les plus exigeants et les personnalités les plus exposées.",
    photoEquipe: "/images/equipecyno.png",
    photoMission: "/images/filtrage dentree.png",
    fondation: "2019",
    equipe: "80+ agents",
  },
  certifications: [
    "Agréé CNAPS — Activité de surveillance humaine",
    "Certification SSIAP 1, 2 et 3",
    "Habilitation IGH — Immeubles de Grande Hauteur",
    "Certification ERP — Établissements Recevant du Public",
    "RC Professionnelle — Axeria Iard",
    "Formation premiers secours PSE1 & PSE2",
  ],

  // ── FAQ devis ─────────────────────────────────────────────────────
  faqDevis: [
    { q: "Quel est le délai de réponse ?",       r: "Sous 24h pour toute demande conventionnelle. En cas d'urgence opérationnelle, notre astreinte est disponible 24h/7j." },
    { q: "Proposez-vous des contrats longue durée ?", r: "Oui — contrats mensuels, annuels ou à la mission. Nos tarifs sont dégressifs selon le volume et la durée." },
    { q: "Vos agents sont-ils tous certifiés ?",  r: "Absolument. 100% de nos agents sont agréés CNAPS, assurés et formés en continu. Zéro sous-traitance non contrôlée." },
  ],

  // ── Mentions légales ──────────────────────────────────────────────
  responsable: "SAS Phoenix Event & Fire Security",
  hebergeur:   "Netlify, Inc. — San Francisco, CA 94107, USA",
};
