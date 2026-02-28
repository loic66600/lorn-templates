// ══════════════════════════════════════════════════════════════
// CONFIGURATION CLIENT — Restaurant / Bistrot / Brasserie
// Modifiez uniquement ce fichier pour personnaliser le site.
// ══════════════════════════════════════════════════════════════

export const client = {

  // ── Identité ────────────────────────────────────────────────
  nom: "Le Comptoir Catalan",
  slogan: "Cuisine méditerranéenne, produits locaux, ambiance chaleureuse",
  metier: "Restaurant",
  specialite: "Cuisine méditerranéenne & produits du terroir",
  ville: "Perpignan",
  departement: "Pyrénées-Orientales (66)",

  // ── Coordonnées ─────────────────────────────────────────────
  telephone: "04 68 00 00 00",
  telephoneLink: "tel:+33468000000",
  email: "contact@comptoircatalan.fr",
  adresse: "15 place de la Loge, 66000 Perpignan",

  // ── Horaires ────────────────────────────────────────────────
  horaires: [
    { jour: "Lundi", midi: "Fermé", soir: "Fermé", ferme: true },
    { jour: "Mardi", midi: "12h – 14h", soir: "19h – 22h", ferme: false },
    { jour: "Mercredi", midi: "12h – 14h", soir: "19h – 22h", ferme: false },
    { jour: "Jeudi", midi: "12h – 14h", soir: "19h – 22h", ferme: false },
    { jour: "Vendredi", midi: "12h – 14h", soir: "19h30 – 23h", ferme: false },
    { jour: "Samedi", midi: "12h – 14h30", soir: "19h30 – 23h", ferme: false },
    { jour: "Dimanche", midi: "12h – 15h (brunch)", soir: "Fermé", ferme: false },
  ],

  // ── Réseaux sociaux (laisser "" pour masquer) ───────────────
  reseaux: {
    instagram: "https://instagram.com/votre-restaurant",
    facebook: "https://facebook.com/votre-restaurant",
    tiktok: "",
    linkedin: "",
    youtube: "",
    twitter: "",
    tripadvisor: "https://tripadvisor.fr/votre-restaurant",
  },

  // ── SEO ─────────────────────────────────────────────────────
  titreSEO: "Le Comptoir Catalan — Restaurant Perpignan | Cuisine Méditerranéenne",
  descriptionSEO: "Restaurant à Perpignan. Cuisine méditerranéenne, produits locaux, terrasse ombragée. Formule déjeuner 18€. Réservation en ligne.",
  motsCles: "restaurant perpignan, cuisine méditerranéenne, bistrot 66, terrasse perpignan, brunch dimanche",

  // ── Visuels ─────────────────────────────────────────────────
  logo: "/images/logo.png",
  ogImage: "/images/og.jpg",
  heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80",
  heroImageAlt: "Intérieur chaleureux du restaurant avec éclairage tamisé",
  bannerImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80",

  // ── Google Maps (laisser "" pour désactiver) ────────────────
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2926!2d2.8954!3d42.6988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b06f1c0a1fc9c1%3A0x40819a5fd979a50!2sPerpignan!5e0!3m2!1sfr!2sfr",

  // ── Bannière cookies ────────────────────────────────────────
  cookieConsent: true,

  // ── Couleur dominante ───────────────────────────────────────
  couleur: "#7F1D1D", // bordeaux profond

  // ── Formules ────────────────────────────────────────────────
  formules: [
    { nom: "Formule Midi", prix: "18€", description: "Entrée + Plat ou Plat + Dessert", detail: "Du mardi au vendredi, le midi uniquement", icone: "☀️" },
    { nom: "Menu Terroir", prix: "32€", description: "Entrée + Plat + Fromage ou Dessert", detail: "Soir et week-end", icone: "🍷" },
    { nom: "Menu Dégustation", prix: "48€", description: "Amuse-bouche + Entrée + Poisson + Viande + Dessert", detail: "5 temps, accord mets-vins possible (+18€)", icone: "⭐" },
    { nom: "Brunch Dimanche", prix: "28€", description: "Viennoiseries, œufs, salade, fromage, dessert, boissons", detail: "Chaque dimanche de 12h à 15h", icone: "🥐" },
  ],

  // ── Carte / Menu ────────────────────────────────────────────
  carte: [
    { nom: "Burrata crémeuse", description: "Tomates anciennes, pesto basilic, roquette, huile d'olive de Banyuls", prix: "14€", categorie: "Entrées", image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=600&q=80", vegetarien: true },
    { nom: "Tartare de thon rouge", description: "Avocat, sésame, gingembre frais, sauce ponzu maison", prix: "16€", categorie: "Entrées", image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=600&q=80", vegetarien: false },
    { nom: "Velouté de butternut", description: "Noisettes torréfiées, crème de coco, huile de truffe", prix: "12€", categorie: "Entrées", image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=600&q=80", vegetarien: true },
    { nom: "Souris d'agneau confite", description: "12h de cuisson, jus au romarin, purée maison, légumes du marché", prix: "26€", categorie: "Plats", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80", vegetarien: false },
    { nom: "Filet de bar rôti", description: "Risotto aux asperges, beurre citronné, chips de parmesan", prix: "24€", categorie: "Plats", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80", vegetarien: false },
    { nom: "Risotto aux cèpes", description: "Parmesan 24 mois, roquette sauvage, éclats de noix", prix: "20€", categorie: "Plats", image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80", vegetarien: true },
    { nom: "Entrecôte grillée 300g", description: "Frites maison, sauce au poivre ou béarnaise, salade", prix: "28€", categorie: "Plats", image: "https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80", vegetarien: false },
    { nom: "Crème brûlée catalane", description: "Vanille de Madagascar, caramélisée au chalumeau", prix: "10€", categorie: "Desserts", image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600&q=80", vegetarien: true },
    { nom: "Fondant au chocolat", description: "Cœur coulant, glace vanille, tuile dentelle", prix: "12€", categorie: "Desserts", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80", vegetarien: true },
    { nom: "Assiette de fromages", description: "5 fromages affinés, confiture de figues, pain aux noix", prix: "14€", categorie: "Desserts", image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=600&q=80", vegetarien: true },
  ],

  // ── Galerie ─────────────────────────────────────────────────
  galerie: [
    { image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "Salle du restaurant" },
    { image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "Terrasse ombragée" },
    { image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Plat signature du chef" },
    { image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80", alt: "Le chef en cuisine" },
    { image: "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=800&q=80", alt: "Dessert signature" },
    { image: "https://images.unsplash.com/photo-1592861956120-e524fc739696?w=800&q=80", alt: "Bar à vins" },
  ],

  galerieBonus: [
    { image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Dressage du plat" },
    { image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80", alt: "Planche apéro" },
    { image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Ambiance soirée" },
    { image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80", alt: "Brunch du dimanche" },
    { image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80", alt: "Salade fraîcheur" },
    { image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&q=80", alt: "Tapas à partager" },
  ],

  // ── Témoignages ─────────────────────────────────────────────
  temoignages: [
    { nom: "Claire & Thomas", texte: "Un dîner exceptionnel pour notre anniversaire. Chaque plat était une surprise, le service irréprochable. La crème catalane en dessert est un pur bonheur.", note: 5 },
    { nom: "Jean-Marc D.", texte: "Le meilleur rapport qualité-prix de Perpignan. La formule midi à 18€ est imbattable. Produits frais, cuisine généreuse, terrasse agréable.", note: 5 },
    { nom: "Sophie R.", texte: "Brunch du dimanche incontournable ! Copieux, varié, dans un cadre magnifique. Les enfants ont adoré aussi. On revient chaque mois.", note: 5 },
    { nom: "Patrick & Martine", texte: "Nous y allons régulièrement depuis l'ouverture. La carte change avec les saisons, on ne se lasse jamais. La cave à vins est remarquable.", note: 5 },
  ],

  // ── À propos ────────────────────────────────────────────────
  apropos: {
    titre: "Notre histoire, notre cuisine",
    sousTitre: "Depuis 2015 au cœur de Perpignan",
    paragraphe1: "Le Comptoir Catalan est né d'une passion commune pour la cuisine méditerranéenne et les produits de notre terroir. Installés place de la Loge depuis 2015, nous proposons une cuisine de marché, renouvelée chaque semaine au gré des saisons et des arrivages.",
    paragraphe2: "Notre chef, formé dans de grandes maisons du sud de la France, met un point d'honneur à travailler des produits locaux : légumes de producteurs de la plaine du Roussillon, poissons de la criée de Port-Vendres, viandes sélectionnées chez des éleveurs de la région.",
    chef: "Marc Fontaine",
    chefTitre: "Chef de cuisine — 15 ans d'expérience",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80",
    imageAlt: "Le chef en cuisine",
    ambiance: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    ambianceAlt: "Ambiance du restaurant le soir",
    valeurs: [
      { titre: "Produits locaux", description: "Circuit court, producteurs partenaires du Roussillon.", icone: "🌿" },
      { titre: "Fait maison", description: "De l'entrée au dessert, tout est préparé sur place.", icone: "👨‍🍳" },
      { titre: "Carte des saisons", description: "Menu renouvelé chaque semaine selon les arrivages.", icone: "🍂" },
      { titre: "Cave sélectionnée", description: "Plus de 80 références, vins du Roussillon et d'ailleurs.", icone: "🍷" },
    ],
    equipe: [
      { nom: "Marc Fontaine", poste: "Chef de cuisine", description: "15 ans d'expérience, formé dans de grandes maisons du Sud.", image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80" },
      { nom: "Sofia Ramos", poste: "Cheffe pâtissière", description: "Spécialisée en desserts méditerranéens et créations chocolatées.", image: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=600&q=80" },
      { nom: "Julien Mas", poste: "Sommelier", description: "Passionné des vins du Roussillon, cave de 80 références.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80" },
      { nom: "Amira Benali", poste: "Responsable de salle", description: "Accueil chaleureux et service irréprochable depuis 2018.", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80" },
    ],
  },

  // ── Réservation (laisser "" pour formulaire intégré) ────────
  lienReservation: "", // ex: "https://www.thefork.fr/votre-restaurant"

  // ── Mentions légales ────────────────────────────────────────
  responsable: "M. Fontaine Marc",
  siret: "000 000 000 00000",
  hebergeur: "Netlify, Inc. — San Francisco, CA 94107, USA",
};
