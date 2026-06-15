// ═══════════════════════════════════════════════════════════════════
// CONFIGURATION CLIENT — Salon de Tatouage Collectif
// Modifiez uniquement ce fichier pour personnaliser le site.
// ═══════════════════════════════════════════════════════════════════

export const client = {

  // ── Identité ──────────────────────────────────────────────────────
  nom: "INK COLLECTIVE",
  tagline: "Studio de Tatouage",
  slogan: "5 artistes. Un seul lieu. Votre peau, leur toile.",
  sloganHero: "L'art sous la peau.",
  metier: "Salon de tatouage",
  ville: "Perpignan",
  departement: "Pyrénées-Orientales (66)",
  codePostal: "66000",
  adresse: "12 rue des Fabriques, 66000 Perpignan",
  fondation: "2018",

  // ── Coordonnées ───────────────────────────────────────────────────
  telephone: "04 68 XX XX XX",
  telephoneLink: "tel:+33468XXXXXX",
  email: "contact@ink-collective.fr",
  siret: "XXX XXX XXX 00000",

  // ── Horaires (tableau d'objets) ───────────────────────────────────
  horaires: [
    { jour: "Lundi",    horaire: "Fermé" },
    { jour: "Mardi",    horaire: "11h00 – 19h00" },
    { jour: "Mercredi", horaire: "11h00 – 19h00" },
    { jour: "Jeudi",    horaire: "11h00 – 20h00" },
    { jour: "Vendredi", horaire: "11h00 – 20h00" },
    { jour: "Samedi",   horaire: "10h00 – 18h00" },
    { jour: "Dimanche", horaire: "Fermé" },
  ],
  horairesResume: "Mar – Sam : 10h – 20h | Lun & Dim fermés",

  // ── Réseaux sociaux ───────────────────────────────────────────────
  reseaux: {
    instagram: "https://instagram.com/",
    facebook:  "https://facebook.com/",
    tiktok:    "https://tiktok.com/",
    linkedin:  "",
    youtube:   "",
    twitter:   "",
  },

  // ── SEO ───────────────────────────────────────────────────────────
  titreSEO: "INK COLLECTIVE — Studio de Tatouage Perpignan (66) | 5 Artistes Tatoueurs",
  descriptionSEO: "Studio de tatouage premium à Perpignan. 5 artistes tatoueurs spécialisés en réalisme, néo-traditionnel, japonais, blackwork et fine line. Sur rendez-vous. Perpignan (66).",
  motsCles: [
    "salon tatouage Perpignan",
    "tatoueur Perpignan",
    "studio tatouage 66",
    "tatouage réalisme Perpignan",
    "tatouage japonais Perpignan",
    "tatouage blackwork Perpignan",
    "tatouage fine line Perpignan",
    "tatouage néo-traditionnel Perpignan",
    "tatoueur professionnel Pyrénées-Orientales",
    "rendez-vous tatouage Perpignan",
  ],
  canonicalUrl: "https://www.ink-collective.fr",

  // ── Visuels héros ─────────────────────────────────────────────────
  // ⚠️  PHOTOS LIBRES DE DROIT — Remplacez par vos propres photos.
  // Voir les commentaires dans index.astro pour chaque emplacement.
  ogImage: "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=1200&h=630&fit=crop",

  // ── Google Maps ───────────────────────────────────────────────────
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47233!2d2.8954!3d42.6988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b06f1c0a1fc9c1%3A0x40819a5fd979a50!2sPerpignan!5e0!3m2!1sfr!2sfr!4v1700000000000",

  // ── Cookie ────────────────────────────────────────────────────────
  cookieConsent: true,

  // ── Stats ─────────────────────────────────────────────────────────
  stats: [
    { chiffre: 5,    suffix: "",     label: "Artistes résidents" },
    { chiffre: 6,    suffix: " ans", label: "d'existence" },
    { chiffre: 3200, suffix: "+",    label: "tatouages réalisés" },
    { chiffre: 100,  suffix: "%",    label: "hygiène certifiée" },
  ],

  // ── Artistes ──────────────────────────────────────────────────────
  // ⚠️  Photo : remplacez le champ `photo` par le chemin de votre image.
  // Exemple : photo: "/images/artiste-marco.jpg"
  artistes: [
    {
      prenom: "Marco",
      nom: "Delgado",
      pseudo: "@marco.ink",
      style: "Réalisme noir & gris",
      description: "Spécialiste du réalisme portrait et nature. Marco travaille exclusivement en noir et gris avec des dégradés d'une précision chirurgicale. Chaque pièce est pensée comme une photo sur peau.",
      specialites: ["Portrait réaliste", "Animaux", "Architectures", "Noir & gris"],
      experience: "12 ans",
      disponibilite: "Liste d'attente : 3 mois",
      // ── Photo : décommentez et remplacez ──
      photo: "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=600&q=80",
      // photo: "/images/artiste-marco.jpg",
      couleur: "#E63946",
      instagram: "https://instagram.com/",
    },
    {
      prenom: "Léa",
      nom: "Fontaine",
      pseudo: "@lea.tattoo",
      style: "Néo-traditionnel & couleurs",
      description: "Léa pousse le néo-traditionnel vers un univers féminin et botanique. Ses compositions sont denses, colorées, avec un trait fort et des remplissages vibrants qui vieillissent superbement.",
      specialites: ["Fleurs", "Animaux stylisés", "Mandalas", "Couleurs vives"],
      experience: "8 ans",
      disponibilite: "Disponible sous 6 semaines",
      photo: "https://images.unsplash.com/photo-1590246814883-55516d489eba?w=600&q=80",
      // photo: "/images/artiste-lea.jpg",
      couleur: "#FF6B6B",
      instagram: "https://instagram.com/",
    },
    {
      prenom: "Kanji",
      nom: "Morita",
      pseudo: "@kanji.irezumi",
      style: "Traditionnel japonais",
      description: "Formé à Tokyo pendant 4 ans, Kanji maîtrise l'irezumi dans toute sa rigueur : compositions full body, carpes koï, dragons et chrysanthèmes. Un style immuable, une technique irréprochable.",
      specialites: ["Irezumi", "Dragons", "Carpes koï", "Full sleeve"],
      experience: "15 ans",
      disponibilite: "Liste d'attente : 5 mois",
      photo: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&q=80",
      // photo: "/images/artiste-kanji.jpg",
      couleur: "#4ECDC4",
      instagram: "https://instagram.com/",
    },
    {
      prenom: "Axel",
      nom: "Noir",
      pseudo: "@axel.blackwork",
      style: "Blackwork & Géométrique",
      description: "Axel construit des architectures graphiques sur peau. Blackwork pur, géométrie sacrée, dotwork — son travail est immédiatement reconnaissable. Pas de couleur, pas de compromis.",
      specialites: ["Géométrie sacrée", "Dotwork", "Mandalas", "Cover-up"],
      experience: "10 ans",
      disponibilite: "Disponible sous 4 semaines",
      photo: "https://images.unsplash.com/photo-1586105449897-20b5efeb3233?w=600&q=80",
      // photo: "/images/artiste-axel.jpg",
      couleur: "#A8DADC",
      instagram: "https://instagram.com/",
    },
    {
      prenom: "Sofia",
      nom: "Ramos",
      pseudo: "@sofia.fineline",
      style: "Fine Line & Minimaliste",
      description: "Lignes d'une finesse extrême, compositions minimalistes et illustratives. Sofia dessine des tatouages qui ressemblent à des esquisses au crayon — discrets, précis, intemporels.",
      specialites: ["Micro-tatouage", "Fine line", "Illustratif", "Botaniques"],
      experience: "6 ans",
      disponibilite: "Disponible sous 3 semaines",
      photo: "https://images.unsplash.com/photo-1564177702909-9c80f3eb4f0d?w=600&q=80",
      // photo: "/images/artiste-sofia.jpg",
      couleur: "#FFE66D",
      instagram: "https://instagram.com/",
    },
  ],

  // ── Styles / Services ─────────────────────────────────────────────
  styles: [
    { nom: "Réalisme",            description: "Portraits, paysages, animaux en trompe-l'œil. Technique de dégradé extrême.",        icone: "◉" },
    { nom: "Japonais / Irezumi",  description: "Traditions millénaires, compositions full body, symbolisme fort.",                     icone: "⛩" },
    { nom: "Néo-traditionnel",    description: "Trait épais, couleurs vives, compositions denses héritées du traditionnel américain.", icone: "⚡" },
    { nom: "Blackwork",           description: "Noir pur, géométrie, dotwork. Maximal ou minimaliste — toujours radical.",            icone: "▲" },
    { nom: "Fine Line",           description: "Lignes ultrafines, micro-tatouages, illustratif délicat. Discret et précis.",          icone: "✦" },
    { nom: "Cover-up",            description: "Recouvrement de tatouages existants. Diagnostic gratuit. Résultats garantis.",         icone: "◈" },
  ],

  // ── Galerie ───────────────────────────────────────────────────────
  // ⚠️  Chaque entrée a un champ `image` (placeholder) ET un commentaire pour votre photo.
  galerie: [
    {
      titre: "Portrait réaliste — Frida",
      style: "realisme",
      artiste: "Marco",
      image: "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=600&q=80",
      // image: "/images/galerie/portrait-frida.jpg",
    },
    {
      titre: "Sleeve japonais — Dragon rouge",
      style: "japonais",
      artiste: "Kanji",
      image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&q=80",
      // image: "/images/galerie/sleeve-dragon.jpg",
    },
    {
      titre: "Mandala géométrique",
      style: "blackwork",
      artiste: "Axel",
      image: "https://images.unsplash.com/photo-1590246814883-55516d489eba?w=600&q=80",
      // image: "/images/galerie/mandala.jpg",
    },
    {
      titre: "Roses néo-traditionnel",
      style: "neo-trad",
      artiste: "Léa",
      image: "https://images.unsplash.com/photo-1586105449897-20b5efeb3233?w=600&q=80",
      // image: "/images/galerie/roses.jpg",
    },
    {
      titre: "Fine line — Botaniques",
      style: "fineline",
      artiste: "Sofia",
      image: "https://images.unsplash.com/photo-1564177702909-9c80f3eb4f0d?w=600&q=80",
      // image: "/images/galerie/botaniques.jpg",
    },
    {
      titre: "Loup réaliste noir & gris",
      style: "realisme",
      artiste: "Marco",
      image: "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=600&q=80",
      // image: "/images/galerie/loup.jpg",
    },
    {
      titre: "Carpe koï — full color",
      style: "japonais",
      artiste: "Kanji",
      image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&q=80",
      // image: "/images/galerie/carpe-koi.jpg",
    },
    {
      titre: "Dotwork — Fleur de vie",
      style: "blackwork",
      artiste: "Axel",
      image: "https://images.unsplash.com/photo-1590246814883-55516d489eba?w=600&q=80",
      // image: "/images/galerie/dotwork.jpg",
    },
    {
      titre: "Micro-tatouage — Constellation",
      style: "fineline",
      artiste: "Sofia",
      image: "https://images.unsplash.com/photo-1564177702909-9c80f3eb4f0d?w=600&q=80",
      // image: "/images/galerie/constellation.jpg",
    },
  ],

  galerieCategories: [
    { id: "all",       label: "Tout" },
    { id: "realisme",  label: "Réalisme" },
    { id: "japonais",  label: "Japonais" },
    { id: "blackwork", label: "Blackwork" },
    { id: "neo-trad",  label: "Néo-trad" },
    { id: "fineline",  label: "Fine Line" },
  ],

  // ── Tarifs ────────────────────────────────────────────────────────
  tarifs: [
    {
      type: "Petite pièce",
      detail: "Moins de 5 cm",
      prix: "À partir de 80 €",
      duree: "30 min – 1h",
    },
    {
      type: "Pièce moyenne",
      detail: "5 à 15 cm",
      prix: "À partir de 180 €",
      duree: "1h30 – 3h",
    },
    {
      type: "Grande pièce",
      detail: "15 cm et plus",
      prix: "À partir de 400 €",
      duree: "4h et plus",
    },
    {
      type: "Half sleeve",
      detail: "Demi-manchette",
      prix: "À partir de 1 000 €",
      duree: "Plusieurs séances",
    },
    {
      type: "Full sleeve",
      detail: "Manchette complète",
      prix: "À partir de 2 000 €",
      duree: "Plusieurs séances",
    },
    {
      type: "Cover-up",
      detail: "Recouvrement existant",
      prix: "Devis après diagnostic",
      duree: "Variable",
    },
  ],
  tauxHoraire: "120 €/heure (tarif studio — peut varier selon l'artiste)",
  acompte: "30% d'acompte demandé à la réservation.",

  // ── FAQ ───────────────────────────────────────────────────────────
  faq: [
    {
      question: "Comment prendre rendez-vous ?",
      reponse: "Via le formulaire de contact en choisissant votre artiste et en joignant une référence visuelle. Nous vous recontactons sous 48h pour confirmer et fixer la date.",
    },
    {
      question: "Combien coûte un tatouage ?",
      reponse: "Le tarif dépend de la taille, du style, de la complexité et de l'artiste choisi. Comptez à partir de 80€ pour une petite pièce. Un devis précis vous est fourni après étude du projet.",
    },
    {
      question: "Faut-il verser un acompte ?",
      reponse: "Oui, un acompte de 30% est demandé à la réservation. Il est non remboursable en cas d'annulation à moins de 48h. Il est déduit du montant total le jour du rendez-vous.",
    },
    {
      question: "Peut-on choisir n'importe quel artiste pour n'importe quel style ?",
      reponse: "Chaque artiste a sa spécialité. Nous vous conseillons de choisir l'artiste dont le style correspond le mieux à votre projet — c'est la garantie d'un résultat optimal.",
    },
    {
      question: "Comment préparer sa séance ?",
      reponse: "Hydratez-vous bien, mangez avant la séance, portez des vêtements confortables qui permettent d'accéder facilement à la zone à tatouer. Évitez l'alcool 24h avant.",
    },
    {
      question: "Comment entretenir son tatouage ?",
      reponse: "Un film protecteur (Dermalize) est appliqué en fin de séance. Consignes précises remises à chaque client. Pas d'exposition solaire les 3 premières semaines, hydratation quotidienne.",
    },
  ],

  // ── Mentions légales ──────────────────────────────────────────────
  responsable: "SARL INK COLLECTIVE",
  hebergeur: "Netlify, Inc. — San Francisco, CA 94107, USA",
};
