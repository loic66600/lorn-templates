// ══════════════════════════════════════════════
// CONFIGURATION CLIENT — Modifier ce fichier pour personnaliser
// ══════════════════════════════════════════════

export const client = {
  // ── Identité ──
  nom: "Dupont Maçonnerie",
  slogan: "Votre artisan de confiance depuis 2010",
  metier: "Maçon",
  ville: "Perpignan",
  departement: "Pyrénées-Orientales (66)",
  region: "Occitanie",

  // ── Coordonnées ──
  telephone: "06 00 00 00 00",
  telephoneLink: "tel:+33600000000",
  email: "contact@dupont-maconnerie.fr",
  adresse: "12 rue des Artisans, 66000 Perpignan",
  horaires: "Lun - Ven : 7h30 - 18h | Sam : 8h - 12h",

  // ── SEO ──
  titreSEO: "Dupont Maçonnerie — Maçon à Perpignan | Rénovation & Construction 66",
  descriptionSEO: "Artisan maçon à Perpignan. Construction, rénovation, extension, terrasse. Devis gratuit. Pyrénées-Orientales (66).",
  motsCles: "maçon perpignan, maçonnerie 66, rénovation perpignan, construction pyrénées orientales",

  // ── Visuels ──
  // TODO CLIENT → Remplacer logo.svg par le vrai logo (200x200 min, fond transparent)
  logo: "/images/logo.svg",
  // TODO CLIENT → Remplacer hero.jpg par la photo de chantier principale du client
  heroImage: "/images/hero.jpg",
  // TODO CLIENT → Remplacer og.jpg par une photo représentative pour les réseaux sociaux
  ogImage: "/images/og.jpg",

  // ── Services ──
  // TODO CLIENT → Remplacer service-1..4.jpg par de vraies photos des chantiers du client
  services: [
    { titre: "Construction neuve", description: "Maison individuelle, murs, fondations. Du gros œuvre aux finitions, clé en main.", icone: "🏠" },
    { titre: "Rénovation", description: "Rénovation intérieure et extérieure, remise aux normes, transformation de vos espaces.", icone: "🔨" },
    { titre: "Extension & Surélévation", description: "Agrandissez votre maison : extension, surélévation, garage, véranda.", icone: "📐" },
    { titre: "Terrasse & Aménagement", description: "Terrasses, murets, clôtures, aménagements extérieurs pour valoriser votre bien.", icone: "🧱" },
  ],

  // ── Réalisations ──
  // TODO CLIENT → Remplacer projet-1..4.jpg par les vraies photos de chantiers du client
  realisations: [
    { titre: "Rénovation complète", lieu: "Perpignan centre", image: "/images/projet-1.jpg" },
    { titre: "Extension maison", lieu: "Canet-en-Roussillon", image: "/images/projet-2.jpg" },
    { titre: "Construction mur", lieu: "Saint-Estève", image: "/images/projet-3.jpg" },
    { titre: "Terrasse extérieure", lieu: "Le Boulou", image: "/images/projet-4.jpg" },
  ],

  // ── Témoignages ──
  temoignages: [
    { nom: "Marie L.", texte: "Travail soigné, équipe ponctuelle et à l'écoute. Je recommande vivement pour tous vos travaux.", note: 5 },
    { nom: "Pierre D.", texte: "Rénovation de notre façade réalisée dans les délais. Résultat impeccable, tarifs corrects.", note: 5 },
    { nom: "Sophie M.", texte: "Très professionnel du devis à la réalisation. Notre terrasse est exactement comme on l'imaginait.", note: 5 },
  ],

  // ── Chiffres clés ──
  atouts: [
    { chiffre: "15+", label: "Années d'expérience" },
    { chiffre: "200+", label: "Chantiers réalisés" },
    { chiffre: "98%", label: "Clients satisfaits" },
    { chiffre: "66", label: "Interventions dans le dept" },
  ],

  // ── Zone d'intervention ──
  zones: "Perpignan, Canet-en-Roussillon, Saint-Estève, Rivesaltes, Thuir, Ille-sur-Têt, Le Boulou, Argelès-sur-Mer, Elne, Prades",

  // ── Mentions légales ──
  responsable: "M. / Mme Dupont",
  siret: "000 000 000 00000",
  hebergeur: "Netlify, Inc. — San Francisco, CA 94107, USA",
};
