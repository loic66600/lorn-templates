// ============================================================
//  DONNÉES CLIENT — Tout le site se pilote depuis ce fichier.
//  Pour changer de métier : modifier `metier`, `services`,
//  `realisations` et `seo.motsCles`. Aucun composant à toucher.
// ============================================================

export const client = {
  // ---- Identité ----
  nom: "Atelier Ferrand",
  metier: {
    // Libellé principal du métier (singulier) — utilisé dans les titres SEO
    nom: "Ferronnier d'art",
    // Activité générique — utilisée dans les textes courants
    activite: "Ferronnerie & métallerie",
    // Mot fort du hero (en italique braise) — 1 ou 2 mots maximum
    matiere: "le métal",
    // Verbe du savoir-faire, utilisé dans le hero
    geste: "forgé",
  },
  slogan: "Pièces sur mesure, forgées à la main dans notre atelier de Perpignan.",
  description:
    "Atelier de ferronnerie et métallerie d'art à Perpignan. Portails, garde-corps, escaliers, verrières et mobilier en acier, créés sur mesure pour les particuliers et les professionnels des Pyrénées-Orientales.",
  anneeFondation: 2011,

  artisan: {
    prenom: "Julien",
    nom: "Ferrand",
    titre: "Artisan ferronnier — Compagnon du Devoir",
  },

  // ---- Coordonnées (NAP — doit être identique partout : site, Google, annuaires) ----
  adresse: {
    rue: "14 rue des Forges",
    codePostal: "66000",
    ville: "Perpignan",
    departement: "Pyrénées-Orientales",
    region: "Occitanie",
  },
  geo: { lat: 42.6887, lng: 2.8948 },
  telephone: "04 68 00 00 00",
  telephoneLien: "+33468000000",
  email: "contact@atelier-ferrand.fr",
  siteUrl: "https://www.atelier-ferrand-perpignan.fr",

  // ---- Zone d'intervention (SEO local) ----
  zoneIntervention: [
    "Perpignan",
    "Canet-en-Roussillon",
    "Cabestany",
    "Saint-Estève",
    "Rivesaltes",
    "Argelès-sur-Mer",
    "Thuir",
    "Elne",
    "Céret",
    "Pia",
    "Saint-Cyprien",
    "Le Soler",
  ],

  // ---- Horaires ----
  horaires: [
    { jour: "Lundi", horaire: "8h00 – 18h00" },
    { jour: "Mardi", horaire: "8h00 – 18h00" },
    { jour: "Mercredi", horaire: "8h00 – 18h00" },
    { jour: "Jeudi", horaire: "8h00 – 18h00" },
    { jour: "Vendredi", horaire: "8h00 – 17h00" },
    { jour: "Samedi", horaire: "Sur rendez-vous" },
    { jour: "Dimanche", horaire: "Fermé" },
  ],

  // ---- Réseaux sociaux ----
  reseaux: {
    instagram: "https://www.instagram.com/atelierferrand",
    facebook: "https://www.facebook.com/atelierferrand",
  },

  // ---- Formulaire (Web3Forms) ----
  web3formsKey: "VOTRE_CLE_WEB3FORMS",

  // ---- SEO ----
  seo: {
    motsCles: [
      "ferronnier Perpignan",
      "ferronnerie d'art Pyrénées-Orientales",
      "métallier Perpignan",
      "portail fer forgé Perpignan",
      "garde-corps sur mesure Occitanie",
      "escalier métallique 66",
      "verrière atelier Perpignan",
      "artisan ferronnier Occitanie",
    ],
  },

  // ---- Savoir-faire / prestations ----
  services: [
    {
      titre: "Portails & clôtures",
      matiere: "Acier · Fer forgé",
      description:
        "Portails battants ou coulissants, portillons et clôtures dessinés sur mesure, motorisables, traités anticorrosion pour le climat méditerranéen.",
    },
    {
      titre: "Garde-corps & rampes",
      matiere: "Acier · Inox · Laiton",
      description:
        "Garde-corps d'escalier, de terrasse ou de mezzanine conformes aux normes NF P01-012, du dessin à la pose.",
    },
    {
      titre: "Escaliers métalliques",
      matiere: "Acier · Bois massif",
      description:
        "Escaliers droits, quart-tournant ou hélicoïdaux, structure acier et marches bois ou tôle, fabriqués à l'atelier.",
    },
    {
      titre: "Verrières d'intérieur",
      matiere: "Acier · Vitrage feuilleté",
      description:
        "Verrières style atelier, cloisons vitrées et portes acier pour structurer vos espaces sans perdre la lumière.",
    },
    {
      titre: "Mobilier & pièces uniques",
      matiere: "Acier brut · Patines",
      description:
        "Tables, consoles, luminaires, enseignes : des pièces uniques dessinées avec vous, signées de l'atelier.",
    },
    {
      titre: "Restauration de ferronnerie",
      matiere: "Fer forgé ancien",
      description:
        "Restauration de grilles, rampes et balcons anciens dans le respect des techniques traditionnelles de forge.",
    },
  ],

  // ---- Réalisations (fiches d'atelier) ----
  realisations: [
    {
      titre: "Portail deux vantaux",
      categorie: "Portails",
      matiere: "Acier thermolaqué",
      lieu: "Canet-en-Roussillon",
      annee: "2025",
      image:
        "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?q=80&w=1600&auto=format&fit=crop",
      // imageLocale: "/images/realisations/portail-canet.jpg",
    },
    {
      titre: "Verrière d'atelier sur mesure",
      categorie: "Verrières",
      matiere: "Acier brut verni",
      lieu: "Perpignan",
      annee: "2025",
      image:
        "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=1600&auto=format&fit=crop",
      // imageLocale: "/images/realisations/verriere-perpignan.jpg",
    },
    {
      titre: "Escalier hélicoïdal",
      categorie: "Escaliers",
      matiere: "Acier & chêne massif",
      lieu: "Cabestany",
      annee: "2024",
      image:
        "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=1600&auto=format&fit=crop",
      // imageLocale: "/images/realisations/escalier-cabestany.jpg",
    },
    {
      titre: "Garde-corps de terrasse",
      categorie: "Garde-corps",
      matiere: "Inox brossé",
      lieu: "Argelès-sur-Mer",
      annee: "2024",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
      // imageLocale: "/images/realisations/garde-corps-argeles.jpg",
    },
    {
      titre: "Table de réunion 12 couverts",
      categorie: "Mobilier",
      matiere: "Acier patiné & noyer",
      lieu: "Perpignan",
      annee: "2024",
      image:
        "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=1600&auto=format&fit=crop",
      // imageLocale: "/images/realisations/table-perpignan.jpg",
    },
    {
      titre: "Restauration balcon 1900",
      categorie: "Restauration",
      matiere: "Fer forgé d'époque",
      lieu: "Céret",
      annee: "2023",
      image:
        "https://images.unsplash.com/photo-1519642918688-7e43b19245d8?q=80&w=1600&auto=format&fit=crop",
      // imageLocale: "/images/realisations/balcon-ceret.jpg",
    },
  ],

  // ---- Processus (page À propos) ----
  processus: [
    {
      titre: "Visite & prise de cotes",
      description:
        "Déplacement gratuit dans un rayon de 30 km autour de Perpignan pour comprendre votre projet et relever les mesures.",
    },
    {
      titre: "Dessin & devis",
      description:
        "Croquis ou plan 3D selon le projet, devis détaillé et transparent sous 5 jours ouvrés. Rien ne part en fabrication sans votre accord.",
    },
    {
      titre: "Fabrication à l'atelier",
      description:
        "Découpe, forge, soudure, traitement et finition : chaque pièce est fabriquée dans notre atelier de Perpignan.",
    },
    {
      titre: "Pose & garantie",
      description:
        "Pose réalisée par nos soins, chantier laissé propre. Travail couvert par notre assurance décennale.",
    },
  ],

  // ---- Avis clients ----
  avis: [
    {
      nom: "Marie L.",
      ville: "Canet-en-Roussillon",
      note: 5,
      texte:
        "Un portail magnifique, exactement le dessin que nous avions imaginé ensemble. Pose soignée, délais tenus. On sent le travail d'un vrai artisan.",
    },
    {
      nom: "Thomas R.",
      ville: "Perpignan",
      note: 5,
      texte:
        "Verrière posée dans notre appartement du centre-ville : finition impeccable, conseils précieux sur le vitrage. Je recommande sans hésiter.",
    },
    {
      nom: "Sandrine P.",
      ville: "Thuir",
      note: 5,
      texte:
        "Restauration de la rampe en fer forgé de notre maison de famille. Un travail d'orfèvre, respectueux de l'ancien. Merci !",
    },
  ],

  // ---- Mentions légales ----
  legal: {
    formeJuridique: "Entreprise individuelle",
    siret: "000 000 000 00000",
    tva: "FR00000000000",
    assurance: "Assurance décennale — MAAF Assurances",
    hebergeur: "Netlify, Inc. — 512 2nd Street, San Francisco, CA 94107, USA",
  },
};

export type Client = typeof client;
