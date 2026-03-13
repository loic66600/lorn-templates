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

  // ── Visuels (à placer dans public/images/) ──
  // TODO → Remplacer par le vrai logo du client (200x200 min, fond transparent de préférence)
  logo: "/images/logo.svg",
  // TODO → Remplacer par la photo de chantier principale (1920x900, plein écran hero)
  heroImage: "/images/hero.svg",
  // TODO → Remplacer par une photo 1200x630 pour les partages réseaux sociaux (og:image)
  ogImage: "/images/og.svg",

  // ── Services (photos à placer dans public/images/) ──
  // TODO → service-1.svg : photo du service "Construction neuve" (800x600)
  // TODO → service-2.svg : photo du service "Rénovation" (800x600)
  // TODO → service-3.svg : photo du service "Extension & Surélévation" (800x600)
  // TODO → service-4.svg : photo du service "Terrasse & Aménagement" (800x600)
  // Renommer en .jpg après remplacement (mettre à jour index.astro lignes service-X)
  services: [
    { titre: "Construction neuve", description: "Maison individuelle, murs, fondations. Du gros œuvre aux finitions, clé en main.", icone: "🏠" },
    { titre: "Rénovation", description: "Rénovation intérieure et extérieure, remise aux normes, transformation de vos espaces.", icone: "🔨" },
    { titre: "Extension & Surélévation", description: "Agrandissez votre maison : extension, surélévation, garage, véranda.", icone: "📐" },
    { titre: "Terrasse & Aménagement", description: "Terrasses, murets, clôtures, aménagements extérieurs pour valoriser votre bien.", icone: "🧱" },
  ],

  // ── Réalisations (photos à placer dans public/images/) ──
  // TODO → projet-1.svg : photo de la réalisation 1 — format portrait recommandé (600x800)
  // TODO → projet-2.svg : photo de la réalisation 2 — format paysage ou carré (600x600)
  // TODO → projet-3.svg : photo de la réalisation 3 — format paysage ou carré (600x600)
  // TODO → projet-4.svg : photo de la réalisation 4 — format portrait recommandé (600x800)
  // Renommer en .jpg après remplacement et mettre à jour les chemins ci-dessous
  realisations: [
    { titre: "Rénovation complète", lieu: "Perpignan centre", image: "/images/projet-1.svg" },
    { titre: "Extension maison", lieu: "Canet-en-Roussillon", image: "/images/projet-2.svg" },
    { titre: "Construction mur", lieu: "Saint-Estève", image: "/images/projet-3.svg" },
    { titre: "Terrasse extérieure", lieu: "Le Boulou", image: "/images/projet-4.svg" },
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
