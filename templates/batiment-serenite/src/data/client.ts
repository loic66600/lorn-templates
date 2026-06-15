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
  logo: "/images/logo.svg",
  heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop",
  bannerImage: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2000&auto=format&fit=crop",
  aboutImage: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1200&auto=format&fit=crop",
  aboutDetailImage: "https://images.unsplash.com/photo-1565011088671-bf2bfea79d4a?q=80&w=800&auto=format&fit=crop",
  ogImage: "/images/og.jpg",

  // ── Services ──
  services: [
    {
      titre: "Construction neuve",
      description: "Maison individuelle, murs, fondations. Du gros œuvre aux finitions, clé en main.",
      icone: "🏠",
      image: "https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=900&auto=format&fit=crop",
    },
    {
      titre: "Rénovation",
      description: "Rénovation intérieure et extérieure, remise aux normes, transformation de vos espaces.",
      icone: "🔨",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=900&auto=format&fit=crop",
    },
    {
      titre: "Extension & Surélévation",
      description: "Agrandissez votre maison : extension, surélévation, garage, véranda.",
      icone: "📐",
      image: "https://images.unsplash.com/photo-1590725140246-20acddc1ec6d?q=80&w=900&auto=format&fit=crop",
    },
    {
      titre: "Terrasse & Aménagement",
      description: "Terrasses, murets, clôtures, aménagements extérieurs pour valoriser votre bien.",
      icone: "🧱",
      image: "https://images.unsplash.com/photo-1571863533956-01c88e79957e?q=80&w=900&auto=format&fit=crop",
    },
  ],

  // ── Réalisations ──
  realisations: [
    {
      titre: "Rénovation complète",
      lieu: "Perpignan centre",
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=900&auto=format&fit=crop",
    },
    {
      titre: "Extension maison",
      lieu: "Canet-en-Roussillon",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=900&auto=format&fit=crop",
    },
    {
      titre: "Construction mur",
      lieu: "Saint-Estève",
      image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=900&auto=format&fit=crop",
    },
    {
      titre: "Terrasse extérieure",
      lieu: "Le Boulou",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=900&auto=format&fit=crop",
    },
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
