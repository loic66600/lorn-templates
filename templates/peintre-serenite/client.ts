// ============================================================
// CLIENT.TS — DUPONT PEINTURE | PEINTRE EN BÂTIMENT
// Seul fichier à modifier pour personnaliser le site
// ============================================================

export const client = {
  // --- IDENTITÉ ---
  nom: "Dupont Peinture",
  slogan: "Peintre en bâtiment",
  sloganHero: "L'art de la finition, la rigueur du métier",
  metier: "Peintre en bâtiment",
  specialite: "Peinture intérieure & extérieure, ravalement, décoration",
  description: "Artisan peintre en bâtiment avec plus de 15 ans d'expérience. Peinture intérieure, extérieure, ravalement de façade, pose de papier peint et revêtements muraux.",

  // --- LOCALISATION ---
  ville: "Votre Ville",
  departement: "Votre Département",
  codePostal: "00000",
  region: "Votre Région",
  adresse: "12 Rue des Artisans, 00000 Votre Ville",
  coordonnees: { lat: 43.2965, lng: 5.3698 },
  rayonKm: 30,
  zones: ["Votre Ville", "Commune 1", "Commune 2", "Commune 3", "Commune 4", "Commune 5"],

  // --- CONTACT ---
  telephone: "06 XX XX XX XX",
  telephoneLink: "tel:+336XXXXXXXX",
  email: "contact@dupont-peinture.fr",

  // --- RÉSEAUX SOCIAUX ---
  reseaux: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "",
    youtube: "",
  },

  // --- SEO ---
  titreSEO: "Dupont Peinture — Artisan Peintre | Intérieur & Extérieur | Devis Gratuit",
  descriptionSEO: "Artisan peintre en bâtiment : peinture intérieure, extérieure, ravalement de façade, papier peint, enduit décoratif. Devis gratuit. 15 ans d'expérience. Garantie décennale.",
  motsCles: [
    "peintre en bâtiment",
    "peinture intérieure",
    "peinture extérieure",
    "ravalement de façade",
    "artisan peintre",
    "papier peint",
    "enduit décoratif",
    "devis peinture gratuit",
  ],
  horaires: "Lun – Ven : 8h – 18h | Samedi : Sur rendez-vous | Déplacement gratuit pour devis",
  canonicalUrl: "https://www.dupont-peinture.fr",

  // --- VISUELS ---
  logo: "",
  ogImage: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&h=630&fit=crop",
  heroImage: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1800&q=85",
  heroImageAlt: "Artisan peintre en bâtiment professionnel",
  heroImage2: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=85",
  heroImage3: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=85",

  // --- GOOGLE MAPS ---
  googleMapsEmbed: "",

  // --- COOKIES ---
  cookieConsent: true,

  // --- STATS ---
  stats: [
    { chiffre: 15, suffix: " ans", label: "d'expérience" },
    { chiffre: 850, suffix: "+", label: "chantiers réalisés" },
    { chiffre: 100, suffix: "%", label: "clients satisfaits" },
    { chiffre: 10, suffix: " ans", label: "garantie décennale" },
  ],

  // --- SERVICES ---
  services: [
    {
      num: "01",
      titre: "Peinture intérieure",
      description: "Murs, plafonds, boiseries, radiateurs. Préparation des supports, application soignée, finitions impeccables. Peintures écologiques disponibles.",
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80",
      tags: ["Murs & plafonds", "Boiseries", "Peintures écolo"],
    },
    {
      num: "02",
      titre: "Peinture extérieure",
      description: "Façades, volets, clôtures. Nettoyage haute pression, traitement anti-moisissures, application d'enduit et peinture de finition résistante aux intempéries.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
      tags: ["Façades", "Volets & clôtures", "Anti-moisissures"],
    },
    {
      num: "03",
      titre: "Ravalement de façade",
      description: "Diagnostic, nettoyage, réparation des fissures, application d'enduit et de peinture de finition. Remise en état complète de votre façade.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
      tags: ["Diagnostic inclus", "Traitement fissures", "Finition garantie"],
    },
    {
      num: "04",
      titre: "Papier peint & revêtements",
      description: "Pose de papier peint traditionnel, intissé ou panoramique. Revêtements muraux, toile de verre, enduit décoratif. Conseils couleurs et matières.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      tags: ["Papier peint", "Toile de verre", "Enduit déco"],
    },
    {
      num: "05",
      titre: "Sols & résines",
      description: "Peinture de sol époxy, résines décoratives, vernis parquet. Idéal pour garages, ateliers, cuisines et salles de bain.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      tags: ["Époxy garage", "Résines décoratives", "Vernis parquet"],
    },
  ],

  // --- RÉALISATIONS BEFORE/AFTER ---
  realisations: [
    {
      titre: "Salon — Transformation complète",
      before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
      after: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=700&q=80",
      categorie: "interieur",
      lieu: "Appartement T4",
    },
    {
      titre: "Façade — Ravalement complet",
      before: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80",
      after: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700&q=80",
      categorie: "exterieur",
      lieu: "Maison individuelle",
    },
    {
      titre: "Chambre — Papier peint panoramique",
      before: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=700&q=80",
      after: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=700&q=80",
      categorie: "decoration",
      lieu: "Villa",
    },
    {
      titre: "Bureau — Peinture professionnelle",
      before: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",
      after: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=700&q=80",
      categorie: "professionnel",
      lieu: "Bureaux d'entreprise",
    },
  ],

  realisationsCategories: [
    { id: "all", label: "Tous" },
    { id: "interieur", label: "Intérieur" },
    { id: "exterieur", label: "Extérieur" },
    { id: "decoration", label: "Décoration" },
    { id: "professionnel", label: "Professionnel" },
  ],

  // --- PROCESSUS ---
  processus: [
    { num: "01", titre: "Devis gratuit", description: "Je me déplace gratuitement pour évaluer votre projet, mesurer les surfaces et vous proposer un devis détaillé sous 48h." },
    { num: "02", titre: "Préparation", description: "Protection de vos meubles et sols, ponçage, rebouchage des fissures, application d'une sous-couche adaptée au support." },
    { num: "03", titre: "Travaux", description: "Application soignée de la peinture ou revêtement choisi, en respectant les délais de séchage pour une finition parfaite." },
    { num: "04", titre: "Livraison", description: "Nettoyage complet du chantier, vérification de la finition avec vous, remise des fiches techniques des produits utilisés." },
  ],

  // --- TARIFS ---
  tarifs: [
    {
      categorie: "Peinture intérieure",
      items: [
        { nom: "Peinture murs (2 couches)", prix: "dès 15€/m²", detail: "Préparation + application" },
        { nom: "Peinture plafond", prix: "dès 12€/m²", detail: "Sous-couche incluse" },
        { nom: "Peinture boiseries", prix: "dès 35€/ml", detail: "Ponçage + finition" },
        { nom: "Enduit décoratif", prix: "dès 45€/m²", detail: "Sur devis selon technique" },
      ],
    },
    {
      categorie: "Peinture extérieure",
      items: [
        { nom: "Peinture façade", prix: "dès 20€/m²", detail: "Nettoyage + 2 couches" },
        { nom: "Ravalement complet", prix: "Sur devis", detail: "Diagnostic + traitement" },
        { nom: "Volets bois", prix: "dès 80€/unité", detail: "Ponçage + finition" },
        { nom: "Clôture/portail", prix: "dès 25€/m²", detail: "Primaire + finition" },
      ],
    },
    {
      categorie: "Revêtements & sols",
      items: [
        { nom: "Pose papier peint", prix: "dès 30€/m²", detail: "Fourniture non incluse" },
        { nom: "Toile de verre", prix: "dès 25€/m²", detail: "Pose + peinture" },
        { nom: "Résine époxy sol", prix: "dès 55€/m²", detail: "Idéal garage/atelier" },
        { nom: "Vernis parquet", prix: "dès 20€/m²", detail: "Ponçage + 3 couches" },
      ],
    },
  ],

  // --- TÉMOIGNAGES ---
  temoignages: [
    {
      nom: "Michel & Françoise B.",
      texte: "Excellent travail sur notre ravalement de façade. Ponctuel, soigneux, et le résultat est vraiment bluffant. Notre maison a retrouvé sa jeunesse. Je recommande sans hésiter.",
      note: 5,
      chantier: "Ravalement façade",
      ville: "Aix-en-Provence",
    },
    {
      nom: "Sandrine P.",
      texte: "J'ai fait appel à Dupont Peinture pour refaire entièrement mon appartement. Travail impeccable, délais respectés, et un conseil en couleurs vraiment professionnel. Merci !",
      note: 5,
      chantier: "Appartement complet",
      ville: "Marseille",
    },
    {
      nom: "Groupe Immo Sud",
      texte: "Prestataire régulier pour nos remises en état entre locataires. Toujours disponible, rapide et de qualité constante. Un partenaire de confiance pour notre agence.",
      note: 5,
      chantier: "Remises en état locatives",
      ville: "Toulon",
    },
    {
      nom: "Alain R.",
      texte: "Le devis était clair et détaillé, le chantier propre et bien organisé. La peinture du salon est parfaite, les angles bien travaillés. Artisan sérieux et professionnel.",
      note: 5,
      chantier: "Peinture salon/séjour",
      ville: "Nice",
    },
  ],

  // --- À PROPOS ---
  apropos: {
    titre: "15 ans de passion pour le métier",
    sousTitre: "Artisan peintre qualifié, j'allie rigueur technique et sens du détail pour des réalisations qui durent.",
    paragraphe1: "Après une formation en CAP Peintre applicateur de revêtements et un BP Peinture, j'ai affiné mon expertise sur des chantiers variés — du simple appartement aux immeubles de standing, en passant par les façades historiques. Chaque chantier est unique et mérite une attention particulière.",
    paragraphe2: "Aujourd'hui, je travaille en artisan indépendant, avec parfois une équipe pour les grands chantiers. Pas d'intermédiaires : c'est moi qui visite, devis, travaille et livre. Cette approche garantit un suivi de qualité du début à la fin.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    imageAlt: "Artisan peintre au travail sur un chantier",
    certifications: ["CAP Peintre applicateur", "BP Peinture", "Garantie décennale", "Assurance RC Pro", "Label Qualibat"],
    valeurs: [
      { titre: "Rigueur", description: "Préparation soignée des supports, application précise, finitions au détail près", icone: "🎯" },
      { titre: "Ponctualité", description: "Délais respectés, chantier organisé, vous n'attendez pas", icone: "⏱️" },
      { titre: "Transparence", description: "Devis clair et détaillé, sans surprise. Le prix annoncé est le prix payé", icone: "📋" },
      { titre: "Propreté", description: "Protection complète avant travaux, nettoyage rigoureux après chantier", icone: "✨" },
    ],
  },

  // --- MENTIONS LÉGALES ---
  responsable: "Dupont Peinture — Artisan EI",
  siret: "XXX XXX XXX 00000",
  hebergeur: "Netlify Inc., 44 Montgomery Street Suite 300, San Francisco, CA 94104, USA",
};
