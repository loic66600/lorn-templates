// ═══════════════════════════════════════════════════════════════════
// CONFIGURATION CLIENT — Salon de Coiffure Femme
// Modifiez uniquement ce fichier pour personnaliser le site.
// ═══════════════════════════════════════════════════════════════════

export const client = {

  // ── Identité ──────────────────────────────────────────────────────
  nom: "Studio Élise",
  slogan: "Votre coiffeur femme à Perpignan depuis 2012",
  sloganHero: "L'art de sublimer vos cheveux.",
  metier: "Salon de coiffure femme",
  specialite: "Coloration, balayage, coupes & soins capillaires",
  ville: "Perpignan",
  departement: "Pyrénées-Orientales (66)",
  codePostal: "66000",
  adresse: "24 rue de la Loge, 66000 Perpignan",

  // ── Coordonnées ───────────────────────────────────────────────────
  telephone: "04 68 XX XX XX",
  telephoneLink: "tel:+33468XXXXXX",
  email: "contact@studio-elise.fr",
  siret: "XXX XXX XXX 00000",

  // ── Horaires (tableau d'objets — utilisé avec .map()) ─────────────
  horaires: [
    { jour: "Lundi",    horaire: "Fermé" },
    { jour: "Mardi",    horaire: "9h00 – 19h00" },
    { jour: "Mercredi", horaire: "9h00 – 19h00" },
    { jour: "Jeudi",    horaire: "9h00 – 20h00" },
    { jour: "Vendredi", horaire: "9h00 – 20h00" },
    { jour: "Samedi",   horaire: "8h30 – 18h00" },
    { jour: "Dimanche", horaire: "Fermé" },
  ],
  horairesResume: "Mar – Ven : 9h – 20h | Sam : 8h30 – 18h",

  // ── Réservation en ligne ──────────────────────────────────────────
  reservationUrl: "https://www.planity.com/",
  reservationLabel: "Réserver en ligne",

  // ── Réseaux sociaux (laisser "" pour masquer) ─────────────────────
  reseaux: {
    instagram: "https://instagram.com/",
    facebook:  "https://facebook.com/",
    tiktok:    "",
    linkedin:  "",
    youtube:   "",
    twitter:   "",
  },

  // ── SEO ───────────────────────────────────────────────────────────
  titreSEO: "Studio Élise — Salon de Coiffure Femme Perpignan (66) | Coloration, Balayage & Soins",
  descriptionSEO: "Salon de coiffure femme à Perpignan depuis 2012. Spécialiste coloration, balayage, mèches, coupes tendance et soins kératine. Réservation en ligne. Centre-ville Perpignan.",
  // IMPORTANT : tableau de strings — utilisé avec .join() dans Layout.astro
  motsCles: [
    "coiffeur femme Perpignan",
    "salon coiffure Perpignan",
    "coloration Perpignan",
    "balayage Perpignan",
    "coiffeur 66",
    "soin kératine Perpignan",
    "mèches Perpignan",
    "coupe cheveux femme Perpignan",
    "extension cheveux Perpignan",
    "coiffeur centre-ville Perpignan",
    "salon beauté Pyrénées-Orientales",
  ],
  canonicalUrl: "https://www.studio-elise.fr",

  // ── Visuels ───────────────────────────────────────────────────────
  logo: "",
  ogImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=630&fit=crop",
  heroImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1400&q=85",
  heroImageAlt: "Salon de coiffure Studio Élise à Perpignan — ambiance chic et épurée",
  heroImage2: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80",
  heroImage3: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
  heroImage4: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80",

  // ── Google Maps ───────────────────────────────────────────────────
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47233!2d2.8954!3d42.6988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b06f1c0a1fc9c1%3A0x40819a5fd979a50!2sPerpignan!5e0!3m2!1sfr!2sfr!4v1700000000000",

  // ── Cookie ────────────────────────────────────────────────────────
  cookieConsent: true,

  // ── Stats ─────────────────────────────────────────────────────────
  stats: [
    { chiffre: 13,   suffix: " ans",  label: "d'expérience" },
    { chiffre: 4800, suffix: "+",     label: "clientes fidèles" },
    { chiffre: 98,   suffix: "%",     label: "de satisfaction" },
    { chiffre: 5,    suffix: "★",     label: "sur Google" },
  ],

  // ── Services ──────────────────────────────────────────────────────
  services: [
    {
      titre: "Coloration & Couleur",
      description: "Coloration permanente, ton sur ton, couleur fantaisie. Utilisation exclusive de produits respectueux du cheveu : L'Oréal Professionnel, Redken, Wella. Diagnostic offert.",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
      icone: "🎨",
      tags: ["Couleur permanente", "Ton sur ton", "Couleur végétale"],
      featured: true,
    },
    {
      titre: "Balayage & Mèches",
      description: "Balayage naturel, mèches californiennes, ombré hair, tie and dye. Maîtrise des techniques de décoloration pour un résultat lumineux, personnalisé à votre morphologie.",
      image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80",
      icone: "✨",
      tags: ["Balayage", "Ombré hair", "Mèches californiennes"],
      featured: true,
    },
    {
      titre: "Coupe & Coiffage",
      description: "Coupe femme, dégradé, frange, coupe enfant. Brushing, mise en forme, lissage. Chaque coupe est pensée pour votre visage, votre morphologie et votre mode de vie.",
      image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80",
      icone: "✂️",
      tags: ["Coupe femme", "Brushing", "Mise en forme"],
      featured: true,
    },
    {
      titre: "Soins & Kératine",
      description: "Soin nutrition, lissage kératine brésilien, soin botox capillaire. Traitement anti-chute, soin couleur, masque restructurant. Cheveux visiblement transformés dès le premier soin.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
      icone: "💆",
      tags: ["Kératine", "Soin nutrition", "Botox capillaire"],
      featured: false,
    },
    {
      titre: "Chignon & Coiffures Événement",
      description: "Chignon mariée, coiffure soirée, coiffure cérémonie. Essai inclus sur rendez-vous. Déplacement possible pour les mariages dans les Pyrénées-Orientales.",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
      icone: "👰",
      tags: ["Mariage", "Soirée", "Cérémonie"],
      featured: false,
    },
    {
      titre: "Extensions Cheveux",
      description: "Extensions à la kératine, extensions ruban, extensions clips. Pose naturelle pour du volume et de la longueur. Entretien et dépose assurés.",
      image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80",
      icone: "💇",
      tags: ["Extensions kératine", "Volume", "Longueur"],
      featured: false,
    },
  ],

  // ── Engagements ───────────────────────────────────────────────────
  engagements: [
    { icon: "🌿", titre: "Produits professionnels", description: "L'Oréal Professionnel, Redken, Wella — sélectionnés pour leur qualité et leur respect du cheveu." },
    { icon: "⏱️", titre: "Respect de votre temps",  description: "Nous nous engageons sur les horaires. Pas d'attente imprévue — votre temps est précieux." },
    { icon: "💬", titre: "Diagnostic inclus",       description: "Chaque rendez-vous débute par un diagnostic cheveu et un échange sur vos envies." },
    { icon: "🔄", titre: "Satisfaction garantie",   description: "Un résultat qui ne vous convient pas ? Nous retravaillons sans frais supplémentaires." },
  ],

  // ── Prestations menu ──────────────────────────────────────────────
  tarifs: [
    {
      categorie: "Coupes & Coiffage",
      items: [
        { nom: "Coupe femme",                  prix: "À partir de 35€",  detail: "Lavage + coupe + brushing" },
        { nom: "Coupe + Brushing",             prix: "À partir de 45€",  detail: "Sur cheveux longs sur devis" },
        { nom: "Brushing seul",                prix: "À partir de 28€",  detail: "Selon longueur" },
        { nom: "Mise en forme / Lissage",      prix: "À partir de 35€",  detail: "" },
        { nom: "Coupe enfant (< 12 ans)",      prix: "À partir de 22€",  detail: "" },
      ],
    },
    {
      categorie: "Colorations",
      items: [
        { nom: "Coloration racines",           prix: "À partir de 55€",  detail: "Produits L'Oréal Pro inclus" },
        { nom: "Couleur complète",             prix: "À partir de 70€",  detail: "" },
        { nom: "Ton sur ton",                  prix: "À partir de 50€",  detail: "" },
        { nom: "Décoloration + Ton",           prix: "À partir de 85€",  detail: "" },
      ],
    },
    {
      categorie: "Balayage & Techniques",
      items: [
        { nom: "Balayage",                     prix: "À partir de 75€",  detail: "Selon longueur et technique" },
        { nom: "Mèches californiennes",        prix: "À partir de 85€",  detail: "" },
        { nom: "Ombré hair / Tie & dye",       prix: "À partir de 90€",  detail: "" },
        { nom: "Retouche balayage",            prix: "À partir de 60€",  detail: "" },
      ],
    },
    {
      categorie: "Soins & Événement",
      items: [
        { nom: "Soin nutrition / Masque",      prix: "À partir de 25€",  detail: "En complément d'une prestation" },
        { nom: "Lissage kératine brésilien",   prix: "À partir de 150€", detail: "Selon longueur" },
        { nom: "Chignon mariée / soirée",      prix: "À partir de 80€",  detail: "Essai inclus" },
        { nom: "Extensions kératine",          prix: "Sur devis",        detail: "Selon quantité" },
      ],
    },
  ],

  // ── Réalisations / Galerie ────────────────────────────────────────
  realisations: [
    {
      titre: "Balayage blond naturel",
      description: "Balayage soleil sur base châtain — effet bonne mine, technique main levée.",
      image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=700&q=80",
      categorie: "balayage",
      technique: "Balayage main levée",
    },
    {
      titre: "Couleur cuivrée intense",
      description: "Coloration rouge-cuivrée, brillance extrême, soin couleur inclus.",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=80",
      categorie: "coloration",
      technique: "Couleur complète",
    },
    {
      titre: "Coupe carré plongeant",
      description: "Carré plongeant avec mèches sur les côtés — look contemporain et affûté.",
      image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=700&q=80",
      categorie: "coupe",
      technique: "Coupe + Brushing",
    },
    {
      titre: "Ombré hair brun-blond",
      description: "Fondu brun-blond progressif sur cheveux longs — rendu ultra-naturel.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=700&q=80",
      categorie: "balayage",
      technique: "Ombré hair",
    },
    {
      titre: "Chignon tressé mariée",
      description: "Chignon romantique avec tresses intégrées — mise en beauté pour mariage.",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=80",
      categorie: "evenement",
      technique: "Chignon mariage",
    },
    {
      titre: "Lissage kératine",
      description: "Lissage brésilien sur cheveux épais et frisés — résultat 3 à 5 mois.",
      image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=700&q=80",
      categorie: "soin",
      technique: "Kératine brésilienne",
    },
  ],

  realisationsCategories: [
    { id: "all",        label: "Tous" },
    { id: "balayage",   label: "Balayage" },
    { id: "coloration", label: "Coloration" },
    { id: "coupe",      label: "Coupe" },
    { id: "soin",       label: "Soins" },
    { id: "evenement",  label: "Événement" },
  ],

  // ── Témoignages ───────────────────────────────────────────────────
  temoignages: [
    {
      nom: "Camille R.",
      texte: "Je suis cliente depuis 3 ans et je ne changerais pour rien au monde. Élise comprend exactement ce que je veux — même quand j'arrive avec juste une photo. Mes cheveux n'ont jamais été aussi beaux.",
      note: 5,
      type: "Balayage + Coupe",
    },
    {
      nom: "Marie-Claire B.",
      texte: "Un salon qui sent le vrai savoir-faire. Le lissage kératine a transformé mes cheveux frisés — je les redécouvre. Résultat impeccable et l'équipe est adorable.",
      note: 5,
      type: "Kératine brésilienne",
    },
    {
      nom: "Sophie T.",
      texte: "Confié mes cheveux pour mon mariage — chignon romantique parfait. L'essai était inclus, l'écoute exemplaire. Toutes mes invitées m'ont demandé le nom du salon.",
      note: 5,
      type: "Chignon mariée",
    },
    {
      nom: "Léa M.",
      texte: "Première fois que je ressors d'un salon sans avoir l'impression d'avoir été pressée. Le diagnostic, les conseils, l'ambiance... La coloration est sublime et exactement ce que j'avais montré.",
      note: 5,
      type: "Coloration cuivrée",
    },
  ],

  // ── À propos ──────────────────────────────────────────────────────
  apropos: {
    titre: "Un salon pensé pour vous",
    sousTitre: "Élise & son équipe — Perpignan depuis 2012",
    paragraphe1: "Diplômée de l'École Nationale de Coiffure de Lyon et formée chez plusieurs salons parisiens, j'ai ouvert Studio Élise en 2012 avec une obsession : offrir à chaque cliente une expérience sur mesure, dans un espace chaleureux et sans jugement. Ici, vous n'êtes pas un numéro — vous êtes une femme avec ses envies, sa vie, et des cheveux qui méritent le meilleur.",
    paragraphe2: "Mon équipe de 3 coiffeuses se forme chaque année aux dernières techniques — balayage nouvelle génération, coloration végétale, extensions premium. Nous sommes revendeurs officiels L'Oréal Professionnel, et nous utilisons exclusivement des produits testés et approuvés par nos clientes.",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80",
    imageAlt: "Élise, coiffeuse fondatrice du Studio Élise à Perpignan",
    certifications: [
      "BP Coiffure (mention Très Bien)",
      "Revendeur officiel L'Oréal Professionnel",
      "Formation Redken Color Tech certifiée",
      "Expert Wella Professionals",
      "Formation extensions Great Lengths",
    ],
    valeurs: [
      { titre: "Écoute",       description: "Chaque rendez-vous commence par un vrai échange. Vos envies, votre quotidien, vos contraintes — tout compte.", icone: "💬" },
      { titre: "Excellence",   description: "Des techniques maîtrisées, des produits sélectionnés, une attention constante au résultat final.",               icone: "✨" },
      { titre: "Bienveillance",description: "Un espace sans pression où vous vous sentez belle et bienvenue, à chaque visite.",                               icone: "🌸" },
      { titre: "Tendance",     description: "Formations régulières pour proposer les techniques les plus actuelles — balayage, couleur, soins.",               icone: "🎨" },
    ],
  },

  // ── FAQ ───────────────────────────────────────────────────────────
  faq: [
    {
      question: "Comment prendre rendez-vous ?",
      reponse: "Vous pouvez réserver en ligne 24h/24 via notre partenaire Planity, nous appeler directement ou nous envoyer un message Instagram. Nous vous confirmons le rendez-vous par SMS.",
    },
    {
      question: "Dois-je venir avec les cheveux propres ?",
      reponse: "Non — le lavage est inclus dans toutes nos prestations. Venez comme vous êtes. Pour les colorations et balayages, des cheveux légèrement poudreux sont même conseillés.",
    },
    {
      question: "Combien de temps dure un balayage ?",
      reponse: "Comptez entre 2h30 et 4h selon votre longueur et la technique choisie. Nous vous donnons une estimation précise lors de la réservation. Prévoyez du temps pour profiter !",
    },
    {
      question: "Faites-vous les essais coiffure mariage ?",
      reponse: "Absolument. L'essai est inclus dans le prix du chignon événement. Nous le programmons 1 à 2 mois avant le jour J pour valider la coiffure et les accessoires.",
    },
    {
      question: "Proposez-vous des produits à la vente ?",
      reponse: "Oui, nous revendons les gammes L'Oréal Professionnel, Redken et Wella. Après votre soin, nous vous conseillons les produits adaptés à votre type de cheveux pour prolonger le résultat à domicile.",
    },
    {
      question: "Le salon est-il accessible aux enfants ?",
      reponse: "Tout à fait. Nous accueillons les enfants dès 4 ans pour des coupes enfants. Un espace ludique est disponible en salle d'attente. Tarif enfant à partir de 22€.",
    },
  ],

  // ── Mentions légales ──────────────────────────────────────────────
  responsable: "Mme Élise Fontaine — EI Coiffeuse",
  hebergeur: "Netlify, Inc. — San Francisco, CA 94107, USA",
};
