// ============================================================
// CLIENT.TS — STREET FUSION | LE SOLER
// Seul fichier à modifier pour personnaliser le site
// ============================================================

export const client = {
  // --- IDENTITÉ ---
  nom: "Street Fusion",
  slogan: "Tacos & Burgers Maison",
  sloganHero: "Le Goût de la Rue, l'Exigence du Fait Maison",
  metier: "Fast Food",
  specialite: "Tacos Français & Burgers Artisanaux",
  description: "Fast food artisanal spécialisé en tacos français et burgers maison à Le Soler. Produits frais, sauces maison, livraison rapide.",

  // --- LOCALISATION ---
  ville: "Le Soler",
  commune: "Le Soler",
  departement: "Pyrénées-Orientales",
  codePostal: "66270",
  region: "Occitanie",
  adresse: "12 Avenue de la République, 66270 Le Soler",
  coordonnees: { lat: 42.6897, lng: 2.8234 },
  proximite: ["Perpignan", "Thuir", "Canet-en-Roussillon", "Rivesaltes", "Pia"],

  // --- CONTACT ---
  telephone: "04 68 XX XX XX",
  telephoneLink: "tel:+33468XXXXXX",
  email: "contact@streetfusion-lesoler.fr",
  whatsapp: "+33 6 XX XX XX XX",
  whatsappLink: "https://wa.me/336XXXXXXXX",

  // --- HORAIRES ---
  horaires: [
    { jour: "Monday", midi: "11:30-14:30", soir: "18:30-22:30" },
    { jour: "Tuesday", midi: "11:30-14:30", soir: "18:30-22:30" },
    { jour: "Wednesday", midi: "11:30-14:30", soir: "18:30-22:30" },
    { jour: "Thursday", midi: "11:30-14:30", soir: "18:30-22:30" },
    { jour: "Friday", midi: "11:30-14:30", soir: "18:30-22:30" },
    { jour: "Saturday", midi: "12:00-15:00", soir: "18:30-23:00" },
    { jour: "Sunday", midi: "Fermé", soir: "19:00-22:30" },
  ],
  fermeture: "Lundi midi et dimanche matin",

  // --- LIVRAISON ---
  livraison: true,
  livraisonDelai: "30 min",
  livraisonMin: "12€",
  livraisonGratuite: "25€",
  clickAndCollect: true,
  clickAndCollectDelai: "15 min",
  uberEats: "https://ubereats.com/fr",
  deliveroo: "https://deliveroo.fr",
  justEat: "",

  // --- RÉSEAUX SOCIAUX ---
  reseaux: {
    facebook: "https://facebook.com/streetfusion.lesoler",
    instagram: "https://instagram.com/streetfusion_lesoler",
    tiktok: "https://tiktok.com/@streetfusion66",
    snapchat: "",
    youtube: "",
  },

  // --- SEO PUISSANT ---
  titreSEO: "Street Fusion Le Soler | Tacos & Burgers Maison | Livraison Perpignan 66",
  descriptionSEO: "🔥 Street Fusion à Le Soler (66270) : tacos français et burgers artisanaux préparés sur place. Livraison rapide vers Perpignan, Thuir, Canet. Ouvert 7j/7. Commandez en ligne !",
  motsCles: [
    "fast food Le Soler",
    "tacos Le Soler",
    "burger Le Soler",
    "restauration rapide Le Soler 66270",
    "tacos Perpignan",
    "burger Perpignan",
    "fast food Perpignan nord",
    "livraison tacos Perpignan",
    "tacos maison Pyrénées-Orientales",
    "street food 66",
  ],
  canonicalUrl: "https://www.streetfusion-lesoler.fr",

  // --- VISUELS ---
  logo: "",
  ogImage: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=1200&h=630&fit=crop",
  heroImage: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=1800&q=85",
  heroImageAlt: "Tacos et burgers maison Street Fusion Le Soler",
  heroImage2: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=85",
  heroImage3: "https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=900&q=85",

  // --- GOOGLE MAPS ---
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912!2d2.8234!3d42.6897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDQxJzIyLjkiTiAywrA0OSczNi4yIkU!5e0!3m2!1sfr!2sfr!4v1700000000000",

  // --- COOKIES ---
  cookieConsent: true,

  // --- STATS ---
  stats: [
    { chiffre: 200, suffix: "+", label: "Avis 5 étoiles" },
    { chiffre: 15, suffix: " min", label: "Click & Collect" },
    { chiffre: 30, suffix: "+", label: "Recettes maison" },
    { chiffre: 4.8, suffix: "/5", label: "Note moyenne" },
  ],

  // --- MENU PRINCIPAL ---
  categories: [
    { id: "tacos", label: "🌯 Tacos", emoji: "🌯" },
    { id: "burgers", label: "🍔 Burgers", emoji: "🍔" },
    { id: "menus", label: "🔥 Menus", emoji: "🔥" },
    { id: "sides", label: "🍟 Sides", emoji: "🍟" },
    { id: "boissons", label: "🥤 Boissons", emoji: "🥤" },
    { id: "desserts", label: "🍨 Desserts", emoji: "🍨" },
  ],

  menu: [
    // TACOS
    {
      categorie: "tacos",
      nom: "Tacos Classic",
      description: "Poulet grillé, fromage fondu, frites, salade, tomates, sauce blanche maison",
      prix: "7,90€",
      promo: false,
      bestseller: true,
      nouveau: false,
      taille: ["Simple", "Double", "Triple"],
      image: "https://images.unsplash.com/photo-1611250188496-e966043a0629?w=600&q=80",
      allergenes: ["gluten", "lait"],
    },
    {
      categorie: "tacos",
      nom: "Tacos Viande Hachée",
      description: "Viande hachée maison, fromage, frites, oignons caramélisés, sauce samuraï",
      prix: "8,50€",
      promo: false,
      bestseller: true,
      nouveau: false,
      taille: ["Simple", "Double", "Triple"],
      image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80",
      allergenes: ["gluten", "lait"],
    },
    {
      categorie: "tacos",
      nom: "Tacos Mix",
      description: "Mélange poulet & viande hachée, double fromage, frites, sauce fusion maison",
      prix: "9,50€",
      promo: false,
      bestseller: false,
      nouveau: false,
      taille: ["Double", "Triple"],
      image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=600&q=80",
      allergenes: ["gluten", "lait"],
    },
    {
      categorie: "tacos",
      nom: "Tacos Végé",
      description: "Falafels, légumes grillés, fromage de chèvre, sauce verte fraîche",
      prix: "8,00€",
      promo: false,
      bestseller: false,
      nouveau: true,
      taille: ["Simple", "Double"],
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
      allergenes: ["gluten", "lait"],
    },
    {
      categorie: "tacos",
      nom: "Tacos Signature Street",
      description: "Notre spécialité : viande marinée 24h, fromage raclette fondu, sauce secrète maison",
      prix: "11,90€",
      promo: false,
      bestseller: false,
      nouveau: true,
      taille: ["Double", "Triple"],
      image: "https://images.unsplash.com/photo-1560781290-7dc94c0f8f4f?w=600&q=80",
      allergenes: ["gluten", "lait"],
    },

    // BURGERS
    {
      categorie: "burgers",
      nom: "Fusion Burger",
      description: "Steak haché 180g, cheddar fondu, bacon croustillant, oignons caramélisés, sauce maison",
      prix: "9,90€",
      promo: false,
      bestseller: true,
      nouveau: false,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
      allergenes: ["gluten", "lait", "oeufs"],
    },
    {
      categorie: "burgers",
      nom: "Street Burger",
      description: "Double steak 2×130g, double cheddar, pickles, ketchup & moutarde maison, pain brioché",
      prix: "11,50€",
      promo: false,
      bestseller: false,
      nouveau: false,
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80",
      allergenes: ["gluten", "lait", "oeufs"],
    },
    {
      categorie: "burgers",
      nom: "Crispy Chicken Burger",
      description: "Escalope de poulet panée et croustillante, coleslaw maison, sauce ranch, pain sésame",
      prix: "9,50€",
      promo: false,
      bestseller: true,
      nouveau: false,
      image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&q=80",
      allergenes: ["gluten", "lait", "oeufs"],
    },
    {
      categorie: "burgers",
      nom: "BBQ Smash Burger",
      description: "Smash burger façon américaine, sauce BBQ fumée, fromage swiss, oignons frits",
      prix: "10,90€",
      promo: false,
      bestseller: false,
      nouveau: true,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
      allergenes: ["gluten", "lait", "oeufs"],
    },

    // MENUS
    {
      categorie: "menus",
      nom: "Menu Tacos",
      description: "1 Tacos au choix + Frites maison + Boisson 33cl",
      prix: "11,90€",
      promo: true,
      bestseller: true,
      nouveau: false,
      image: "https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=600&q=80",
      allergenes: [],
    },
    {
      categorie: "menus",
      nom: "Menu Burger",
      description: "1 Burger au choix + Frites maison + Boisson 33cl",
      prix: "13,50€",
      promo: true,
      bestseller: false,
      nouveau: false,
      image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600&q=80",
      allergenes: [],
    },
    {
      categorie: "menus",
      nom: "Menu Duo",
      description: "2 Tacos Classic ou 2 Burgers Fusion + 2 Frites + 2 Boissons",
      prix: "21,90€",
      promo: true,
      bestseller: false,
      nouveau: true,
      image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80",
      allergenes: [],
    },

    // SIDES
    {
      categorie: "sides",
      nom: "Frites Maison",
      description: "Frites fraîches coupées sur place, assaisonnées selon votre goût",
      prix: "3,50€",
      promo: false,
      bestseller: true,
      nouveau: false,
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80",
      allergenes: [],
    },
    {
      categorie: "sides",
      nom: "Onion Rings",
      description: "Rondelles d'oignon panées croustillantes, sauce ranch",
      prix: "4,50€",
      promo: false,
      bestseller: false,
      nouveau: false,
      image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?w=600&q=80",
      allergenes: ["gluten", "lait"],
    },
    {
      categorie: "sides",
      nom: "Nuggets x6",
      description: "6 nuggets de poulet croustillants, sauce au choix",
      prix: "5,90€",
      promo: false,
      bestseller: true,
      nouveau: false,
      image: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=80",
      allergenes: ["gluten", "lait"],
    },

    // BOISSONS
    {
      categorie: "boissons",
      nom: "Boissons fraîches",
      description: "Coca-Cola, Fanta, Sprite, Ice Tea, eau minérale",
      prix: "2,50€",
      promo: false,
      bestseller: false,
      nouveau: false,
      image: "https://images.unsplash.com/photo-1534353473418-4cfa0c7b4f52?w=600&q=80",
      allergenes: [],
    },
    {
      categorie: "boissons",
      nom: "Milkshake Maison",
      description: "Milkshake frais : Vanille, Fraise, Chocolat, Caramel",
      prix: "4,90€",
      promo: false,
      bestseller: true,
      nouveau: false,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
      allergenes: ["lait"],
    },

    // DESSERTS
    {
      categorie: "desserts",
      nom: "Sundae Maison",
      description: "Glace vanille, coulis chaud chocolat ou caramel, chantilly",
      prix: "3,90€",
      promo: false,
      bestseller: false,
      nouveau: false,
      image: "https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=600&q=80",
      allergenes: ["lait"],
    },
    {
      categorie: "desserts",
      nom: "Churros Maison",
      description: "Churros frais, sucre cannelle, sauce chocolat maison",
      prix: "4,50€",
      promo: false,
      bestseller: true,
      nouveau: true,
      image: "https://images.unsplash.com/photo-1624956197048-b39e9d72c7b8?w=600&q=80",
      allergenes: ["gluten", "lait", "oeufs"],
    },
  ],

  // --- À PROPOS ---
  apropos: {
    titre: "Notre Histoire, Notre Passion",
    sousTitre: "Né dans les rues de Le Soler, Street Fusion c'est la rencontre de deux cultures culinaires",
    paragraphe1: "Fondé en 2022 par deux passionnés de street food, Street Fusion est né d'une idée simple : proposer des tacos français authentiques et des burgers artisanaux sans compromis sur la qualité. Chaque recette est développée avec soin, chaque ingrédient sélectionné localement quand c'est possible.",
    paragraphe2: "Basés à Le Soler, à deux pas de Perpignan, nous livrons dans tout le secteur nord des Pyrénées-Orientales. Notre cuisine ouverte vous permet de voir la préparation en direct — rien à cacher, tout à montrer !",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    imageAlt: "Cuisine ouverte Street Fusion Le Soler",
    valeurs: [
      { titre: "Fraîcheur", description: "Produits frais, approvisionnement quotidien", icone: "🥬" },
      { titre: "Maison", description: "Sauces et marinades préparées sur place chaque jour", icone: "👨‍🍳" },
      { titre: "Rapidité", description: "15 min en Click & Collect, 30 min en livraison", icone: "⚡" },
      { titre: "Générosité", description: "Des portions généreuses qui calent vraiment", icone: "🔥" },
    ],
  },

  // --- TÉMOIGNAGES ---
  temoignages: [
    {
      nom: "Karim B.",
      texte: "Les meilleurs tacos que j'ai mangés à Perpignan ! La viande est tendre, les sauces maison sont incroyables. Je commande au moins 2 fois par semaine.",
      note: 5,
      source: "Google",
      date: "Janvier 2026",
    },
    {
      nom: "Léa M.",
      texte: "Livraison ultra rapide, commande toujours chaude et conforme. Le burger smash est devenu mon péché mignon. Je recommande à 100% !",
      note: 5,
      source: "Google",
      date: "Février 2026",
    },
    {
      nom: "Thomas R.",
      texte: "Enfin un vrai fast food artisanal près de chez nous à Le Soler ! Les frites sont coupées fraîches, les burgers sont énormes. Rapport qualité-prix imbattable.",
      note: 5,
      source: "Google",
      date: "Décembre 2025",
    },
    {
      nom: "Sarah K.",
      texte: "Le Tacos Signature Street est une tuerie ! On a essayé presque tout le menu, pas une seule déception. Le Click & Collect en 15 min c'est parfait.",
      note: 5,
      source: "Facebook",
      date: "Janvier 2026",
    },
    {
      nom: "Amine D.",
      texte: "Meilleure adresse street food du 66. Le tacos mix double est IMMENSE. Les churros maison pour finir c'est le paradis. Top !",
      note: 5,
      source: "Google",
      date: "Février 2026",
    },
    {
      nom: "Julie F.",
      texte: "Végétarienne, j'avais peur de ne pas avoir le choix. Le tacos végé est délicieux ! Enfin une option savoureuse dans un fast food. Merci !",
      note: 5,
      source: "Google",
      date: "Janvier 2026",
    },
  ],

  // --- ZONES DE LIVRAISON ---
  zones: ["Le Soler", "Perpignan", "Pia", "Cabestany", "Bompas", "Rivesaltes", "Thuir", "Saleilles"],
  rayonKm: 10,

  // --- MENTIONS LÉGALES ---
  responsable: "Street Fusion SAS",
  siret: "XXX XXX XXX 00000",
  hebergeur: "Netlify Inc., 44 Montgomery Street Suite 300, San Francisco, CA 94104, USA",
  rcs: "Perpignan",
};
