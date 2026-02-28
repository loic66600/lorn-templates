// ══════════════════════════════════════════════════════════════
// CONFIGURATION CLIENT — Massage / Bien-être / Spa
// Modifiez uniquement ce fichier pour personnaliser le site.
// ══════════════════════════════════════════════════════════════

export const client = {

  // ── Identité ────────────────────────────────────────────────
  nom: "Harmonie & Sens",
  slogan: "Massage bien-être, relaxation profonde, écoute du corps",
  metier: "Praticienne en massage bien-être",
  specialite: "Massage relaxant, modelage, réflexologie",
  ville: "Perpignan",
  departement: "Pyrénées-Orientales (66)",

  // ── Coordonnées ─────────────────────────────────────────────
  telephone: "06 00 00 00 00",
  telephoneLink: "tel:+33600000000",
  email: "contact@harmonie-sens.fr",
  adresse: "8 rue des Augustins, 66000 Perpignan",

  // ── Horaires ────────────────────────────────────────────────
  horaires: "Lun – Sam : 9h – 19h | Sur rendez-vous uniquement",

  // ── Réseaux sociaux (laisser "" pour masquer) ───────────────
  reseaux: {
    instagram: "https://instagram.com/votre-compte",
    facebook: "https://facebook.com/votre-page",
    tiktok: "",
    linkedin: "",
    youtube: "",
    twitter: "",
  },

  // ── SEO ─────────────────────────────────────────────────────
  titreSEO: "Harmonie & Sens — Massage Bien-être à Perpignan | Relaxation, Modelage",
  descriptionSEO: "Massage bien-être à Perpignan. Massage relaxant, modelage californien, réflexologie plantaire. Cadre apaisant, sur rendez-vous.",
  motsCles: "massage perpignan, bien-être 66, relaxation, modelage, réflexologie, spa",

  // ── Visuels ─────────────────────────────────────────────────
  logo: "/images/logo.png",
  ogImage: "/images/og.jpg",
  heroImage: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1920&q=80",
  heroImageAlt: "Ambiance zen massage bien-être",
bannerImage: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=80",

  // ── Google Maps (laisser "" pour désactiver) ────────────────
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2926!2d2.8954!3d42.6988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b06f1c0a1fc9c1%3A0x40819a5fd979a50!2sPerpignan!5e0!3m2!1sfr!2sfr",

  // ── Bannière cookies ────────────────────────────────────────
  cookieConsent: true,

  // ── Couleur dominante ───────────────────────────────────────
  couleur: "#7C3AED", // violet doux

  // ── Prestations ─────────────────────────────────────────────
  services: [
    {
      titre: "Massage Relaxant",
      description: "Massage à l'huile chaude, mouvements lents et enveloppants. Détente totale du corps et de l'esprit.",
      duree: "60 min",
      prix: "65€",
      icone: "🌿",
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&q=80",
    },
    {
      titre: "Modelage Californien",
      description: "Longs mouvements fluides et continus sur l'ensemble du corps. Libération des tensions.",
      duree: "75 min",
      prix: "80€",
      icone: "🌊",
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80",
    },
    {
      titre: "Réflexologie Plantaire",
      description: "Stimulation des zones réflexes du pied pour rééquilibrer l'organisme en profondeur.",
      duree: "45 min",
      prix: "55€",
      icone: "🦶",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80",
    },
    {
      titre: "Massage Dos & Nuque",
      description: "Ciblé sur les zones de tension : cervicales, trapèzes, lombaires. Soulagement rapide.",
      duree: "30 min",
      prix: "40€",
      icone: "💆",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80",
    },
    {
      titre: "Rituel Détente Complète",
      description: "Gommage doux + massage corps complet + soin visage. Le moment hors du temps.",
      duree: "120 min",
      prix: "130€",
      icone: "✨",
      image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&q=80",
    },
  ],

  // ── Témoignages ─────────────────────────────────────────────
  temoignages: [
    { nom: "Claire D.", texte: "Un moment de pure détente. Le cadre est magnifique, les mains expertes. Je suis ressortie comme sur un nuage. J'y retourne chaque mois.", note: 5 },
    { nom: "Sophie & Marc", texte: "Massage en duo pour notre anniversaire. Une expérience merveilleuse, à refaire absolument. Merci pour ce moment hors du temps.", note: 5 },
    { nom: "Nathalie R.", texte: "La réflexologie plantaire m'a fait un bien fou. Je dormais mal depuis des mois, après 3 séances c'est transformé.", note: 5 },
  ],

  // ── À propos (intégré dans la one-page) ─────────────────────
  apropos: {
    titre: "Prendre soin de soi, c'est essentiel",
    sousTitre: "Praticienne certifiée depuis 2017",
    texte: "Formée aux techniques de massage bien-être et de relaxation, j'ai créé Harmonie & Sens pour offrir un espace de douceur et de reconnexion à soi. Mon cabinet, situé au cœur de Perpignan, est pensé comme un cocon : lumière tamisée, huiles essentielles, musique apaisante.",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=80",
    imageAlt: "Ambiance du cabinet de massage",
    valeurs: [
      { titre: "Écoute", description: "Chaque séance commence par un échange pour comprendre vos besoins.", icone: "👂" },
      { titre: "Bienveillance", description: "Un espace sans jugement, respectueux de votre corps.", icone: "💜" },
      { titre: "Naturel", description: "Huiles bio, produits naturels, zéro chimique.", icone: "🌿" },
      { titre: "Sur-mesure", description: "Chaque massage est adapté à vous, jamais de protocole figé.", icone: "🎯" },
    ],
  },

  // ── Mentions légales ────────────────────────────────────────
  responsable: "Mme Dupont Marie",
  siret: "000 000 000 00000",
  hebergeur: "Netlify, Inc. — San Francisco, CA 94107, USA",
};
