// ══════════════════════════════════════════════════════════════
// CONFIGURATION CLIENT — Électricien / Dépannage électrique
// Modifiez uniquement ce fichier pour personnaliser le site.
// ══════════════════════════════════════════════════════════════

export const client = {

  // ── Identité ────────────────────────────────────────────────
  nom: "Éclat Élec 66",
  slogan: "Dépannage, installation et mise aux normes — rapidité, sécurité, tranquillité",
  metier: "Électricien",
  specialite: "Dépannage électrique, installation, mise en conformité NF C 15-100",
  ville: "Perpignan",
  departement: "Pyrénées-Orientales (66)",
  region: "Occitanie",

  // ── Coordonnées ─────────────────────────────────────────────
  telephone: "06 00 00 00 00",
  telephoneLink: "tel:+33600000000",
  email: "contact@eclat-elec66.fr",
  adresse: "12 avenue du Général Leclerc, 66000 Perpignan",

  // ── Horaires ────────────────────────────────────────────────
  horaires: "Lun – Ven : 7h30 – 18h30 | Sam : 8h – 12h (sur appel)",

  // ── Urgence (true = affiche la bannière urgence en haut) ────
  urgence: true,
  urgenceTexte: "Panne électrique ? Intervention en – de 45 min",

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
  titreSEO: "Éclat Élec 66 — Électricien à Perpignan | Dépannage, Installation, Mise aux normes",
  descriptionSEO: "Électricien à Perpignan. Dépannage rapide, installation électrique, mise en conformité, tableau électrique, éclairage. Devis gratuit.",
  motsCles: "électricien perpignan, dépannage électrique 66, mise aux normes, tableau électrique, installation, urgence",

  // ── Visuels ─────────────────────────────────────────────────
  logo: "/images/logo.png",
  ogImage: "/images/og.jpg",
  heroImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80",
  heroImageAlt: "Électricien professionnel au travail sur un tableau électrique",
  bannerImage: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80",

  // ── Google Maps (laisser "" pour désactiver) ────────────────
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46500!2d2.88!3d42.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b06f1c0a1fc9c1%3A0x40819a5fd979a50!2sPerpignan!5e0!3m2!1sfr!2sfr",

  // ── Bannière cookies ────────────────────────────────────────
  cookieConsent: true,

  // ── Couleur dominante ───────────────────────────────────────
  couleur: "#2563EB", // bleu électrique

  // ── Chiffres clés ───────────────────────────────────────────
  stats: [
    { chiffre: "15", suffix: "+", label: "Années d'expérience" },
    { chiffre: "2500", suffix: "+", label: "Interventions réalisées" },
    { chiffre: "45", suffix: "min", label: "Délai moyen d'intervention" },
    { chiffre: "100", suffix: "%", label: "Clients satisfaits" },
  ],

  // ── Garanties ───────────────────────────────────────────────
  garanties: [
    { titre: "Dépannage 7j/7", description: "Urgences prises en charge rapidement, week-end inclus.", icone: "⚡" },
    { titre: "Devis gratuit", description: "Diagnostic et devis sur place, sans engagement.", icone: "📋" },
    { titre: "Certifié Qualifelec", description: "Qualification professionnelle reconnue.", icone: "🏅" },
    { titre: "Garantie 2 ans", description: "Toutes nos installations garanties 2 ans pièces et main-d'œuvre.", icone: "🛡️" },
  ],

  // ── Services ────────────────────────────────────────────────
  services: [
    {
      titre: "Dépannage électrique",
      description: "Panne de courant, court-circuit, disjoncteur qui saute, prise défaillante. Intervention rapide 7j/7.",
      icone: "⚡",
      urgence: true,
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
      details: ["Diagnostic de panne", "Remplacement disjoncteur", "Réparation court-circuit", "Remise en service"],
    },
    {
      titre: "Mise aux normes NF C 15-100",
      description: "Diagnostic de conformité et mise à niveau de votre installation électrique selon les normes en vigueur.",
      icone: "📐",
      urgence: false,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
      details: ["Diagnostic Consuel", "Remplacement tableau", "Mise à la terre", "Certification"],
    },
    {
      titre: "Installation électrique complète",
      description: "Neuf ou rénovation : câblage, tableau, prises, interrupteurs, éclairage. Du plan à la livraison.",
      icone: "🔌",
      urgence: false,
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
      details: ["Câblage complet", "Pose tableau", "Prises & interrupteurs", "Test et mise en service"],
    },
    {
      titre: "Éclairage intérieur & extérieur",
      description: "Spots, LED, luminaires, éclairage de jardin, balisage extérieur. Conseils et installation.",
      icone: "💡",
      urgence: false,
      image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80",
      details: ["Spots encastrés", "Éclairage LED", "Automatisation", "Éclairage paysager"],
    },
    {
      titre: "Tableau électrique",
      description: "Remplacement, extension ou mise à niveau de votre tableau. Ajout de rangées, différentiels, parafoudre.",
      icone: "🔧",
      urgence: false,
      image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800&q=80",
      details: ["Remplacement complet", "Ajout modules", "Parafoudre", "Étiquetage circuits"],
    },
    {
      titre: "Domotique & Connecté",
      description: "Volets roulants, thermostats connectés, prises intelligentes, contrôle à distance.",
      icone: "🏠",
      urgence: false,
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
      details: ["Volets roulants", "Thermostat connecté", "Prises WiFi", "Centralisation"],
    },
  ],

  // ── Réalisations ────────────────────────────────────────────
  realisations: [
    { image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80", alt: "Tableau électrique rénové", categorie: "Tableau" },
    { image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80", alt: "Éclairage LED salon moderne", categorie: "Éclairage" },
    { image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80", alt: "Installation domotique villa", categorie: "Domotique" },
    { image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80", alt: "Câblage neuf maison", categorie: "Installation" },
    { image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800&q=80", alt: "Dépannage urgence panne", categorie: "Dépannage" },
    { image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80", alt: "Mise aux normes appartement", categorie: "Normes" },
  ],

  realisationsBonus: [
    { image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80", alt: "Chantier électrique complet", categorie: "Installation" },
    { image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", alt: "Éclairage bureau professionnel", categorie: "Éclairage" },
    { image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80", alt: "Installation commerce", categorie: "Installation" },
    { image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80", alt: "Spots cuisine encastrés", categorie: "Éclairage" },
    { image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80", alt: "Rénovation électrique maison ancienne", categorie: "Normes" },
    { image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80", alt: "Tableau 4 rangées installé", categorie: "Tableau" },
  ],

  // ── Témoignages ─────────────────────────────────────────────
  temoignages: [
    { nom: "Sophie M.", texte: "Panne un samedi soir, intervention en 30 minutes. Professionnel, rapide, prix correct. Je recommande sans hésiter.", note: 5, type: "Dépannage" },
    { nom: "Laurent & Céline", texte: "Rénovation complète de l'électricité de notre mas. Travail impeccable, très propre, et dans les délais. L'éclairage LED est magnifique.", note: 5, type: "Rénovation" },
    { nom: "Dr. Petit", texte: "Mise aux normes de mon cabinet médical. Diagnostic précis, devis respecté, aucune interruption d'activité. Parfait.", note: 5, type: "Normes" },
    { nom: "Karim D.", texte: "Installation domotique complète : volets, thermostat, éclairage connecté. Tout fonctionne parfaitement, explications claires.", note: 5, type: "Domotique" },
  ],

  // ── À propos ────────────────────────────────────────────────
  apropos: {
    titre: "La sécurité électrique, c'est notre métier",
    sousTitre: "Depuis 2010 dans les Pyrénées-Orientales",
    paragraphe1: "Éclat Élec 66, c'est avant tout un électricien de terrain. Formé aux techniques les plus récentes et certifié Qualifelec, je mets mon savoir-faire au service des particuliers et professionnels du département depuis plus de 15 ans.",
    paragraphe2: "Mon engagement : un diagnostic honnête, un devis transparent, un travail soigné et des installations qui durent. Que ce soit pour un dépannage en urgence ou un projet d'installation complet, chaque intervention est réalisée dans le respect des normes NF C 15-100.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    imageAlt: "Électricien au travail",
    certifications: ["Qualifelec", "NF C 15-100", "Garantie décennale", "Assurance RC Pro", "Habilitation BR"],
    valeurs: [
      { titre: "Réactivité", description: "Intervention rapide, dépannage 7j/7, devis sous 24h.", icone: "⚡" },
      { titre: "Transparence", description: "Devis détaillé, pas de surprise, prix annoncé = prix facturé.", icone: "📋" },
      { titre: "Sécurité", description: "Normes respectées, matériel de qualité, installation durable.", icone: "🛡️" },
      { titre: "Propreté", description: "Chantier propre, protection des sols, nettoyage après intervention.", icone: "✨" },
    ],
  },

  // ── Zones d'intervention ────────────────────────────────────
  zones: "Perpignan, Canet-en-Roussillon, Saint-Estève, Rivesaltes, Thuir, Cabestany, Pollestres, Pia, Elne, Argelès-sur-Mer, Céret, Prades, Ille-sur-Têt, Le Soler, Bompas, Toulouges, Le Boulou, Collioure",
  rayonKm: "40 km autour de Perpignan",

  // ── Tarifs indicatifs ───────────────────────────────────────
  tarifs: [
    { categorie: "Dépannage", items: [
      { nom: "Déplacement + diagnostic", prix: "49€", detail: "Forfait fixe, déduit si intervention" },
      { nom: "Remplacement disjoncteur", prix: "80 – 150€", detail: "Selon modèle et accessibilité" },
      { nom: "Recherche de panne", prix: "90 – 200€", detail: "Diagnostic complet avec rapport" },
      { nom: "Remise en service urgence", prix: "120 – 250€", detail: "Soir, week-end et jours fériés" },
    ]},
    { categorie: "Installation", items: [
      { nom: "Pose tableau électrique", prix: "350 – 800€", detail: "Selon nombre de rangées et modules" },
      { nom: "Installation prise / interrupteur", prix: "60 – 120€", detail: "Fourniture et pose" },
      { nom: "Éclairage LED (par point)", prix: "80 – 180€", detail: "Spot, plafonnier, applique" },
      { nom: "Installation complète (neuf)", prix: "80 – 120€/m²", detail: "Câblage, tableau, prises, éclairage" },
    ]},
    { categorie: "Mise aux normes", items: [
      { nom: "Diagnostic électrique", prix: "150 – 300€", detail: "Rapport de conformité complet" },
      { nom: "Mise aux normes partielle", prix: "500 – 2 000€", detail: "Tableau + terre + différentiels" },
      { nom: "Mise aux normes complète", prix: "2 000 – 6 000€", detail: "Installation complète NF C 15-100" },
    ]},
  ],

  // ── Mentions légales ────────────────────────────────────────
  responsable: "M. Dupont Pierre",
  siret: "000 000 000 00000",
  hebergeur: "Netlify, Inc. — San Francisco, CA 94107, USA",
};
