// ============================================================
// CLIENT.TS — LES FLEURS DE MARIE | FLEURISTE
// Seul fichier à modifier pour personnaliser le site
// ============================================================

export const client = {
  // --- IDENTITÉ ---
  nom: "Les Fleurs de Marie",
  slogan: "Fleuriste artisanale",
  sloganHero: "Des fleurs qui racontent vos émotions",
  metier: "Fleuriste",
  specialite: "Bouquets, compositions florales & événementiel",
  description: "Fleuriste artisanale proposant bouquets sur mesure, compositions pour mariages et événements, livraison à domicile. Fleurs fraîches et de saison.",

  // --- LOCALISATION ---
  ville: "Votre Ville",
  departement: "Votre Département",
  codePostal: "00000",
  region: "Votre Région",
  adresse: "12 Rue des Jardins, 00000 Votre Ville",
  coordonnees: { lat: 43.2965, lng: 5.3698 },

  // --- CONTACT ---
  telephone: "06 XX XX XX XX",
  telephoneLink: "tel:+336XXXXXXXX",
  email: "contact@lesfleursdmarie.fr",

  // --- HORAIRES ---
  horaires: [
    { jour: "Lundi", horaire: "Fermé" },
    { jour: "Mardi", horaire: "09h00 – 19h00" },
    { jour: "Mercredi", horaire: "09h00 – 19h00" },
    { jour: "Jeudi", horaire: "09h00 – 19h00" },
    { jour: "Vendredi", horaire: "09h00 – 19h00" },
    { jour: "Samedi", horaire: "09h00 – 19h30" },
    { jour: "Dimanche", horaire: "09h00 – 13h00" },
  ],

  // --- RÉSEAUX SOCIAUX ---
  reseaux: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    pinterest: "https://pinterest.fr/",
    tiktok: "",
  },

  // --- SEO ---
  titreSEO: "Les Fleurs de Marie — Fleuriste Artisanale | Bouquets & Mariage",
  descriptionSEO: "Fleuriste artisanale : bouquets sur mesure, compositions pour mariages et événements, livraison à domicile. Fleurs fraîches et de saison.",
  motsCles: [
    "fleuriste",
    "bouquets sur mesure",
    "fleurs mariage",
    "compositions florales",
    "livraison fleurs",
    "décoration florale mariage",
  ],
  canonicalUrl: "https://www.lesfleursdmarie.fr",

  // --- VISUELS ---
  logo: "/logo.svg",
  ogImage: "https://images.unsplash.com/photo-1487530811015-780780101700?w=1200&h=630&fit=crop",
  heroImage: "https://images.unsplash.com/photo-1628456676381-cf822e3c3f9f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  heroImageAlt: "Bouquets de fleurs fraîches artisanaux",
  heroImage2: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=900&q=85",
  heroImage3: "https://images.unsplash.com/photo-1579198314865-955573957799?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  heroImage4: "https://images.unsplash.com/photo-1490750967868-88df5691cc0d?w=900&q=85",

  // --- GOOGLE MAPS ---
  googleMapsEmbed: "",

  // --- COOKIES ---
  cookieConsent: true,

  // --- STATS ---
  stats: [
    { chiffre: 12, suffix: " ans", label: "d'expertise florale" },
    { chiffre: 500, suffix: "+", label: "mariages fleuris" },
    { chiffre: 48, suffix: "h", label: "livraison express" },
    { chiffre: 100, suffix: "%", label: "fleurs de saison" },
  ],

  // --- SERVICES ---
  services: [
    {
      titre: "Bouquets sur mesure",
      description: "Chaque bouquet est unique, composé selon vos envies, l'occasion et les fleurs de saison. Du romantique au contemporain.",
      icone: "💐",
      image: "https://images.unsplash.com/photo-1646909966616-096d6b7491dc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Sur mesure", "Toutes occasions", "Livraison possible"],
      featured: true,
    },
    {
      titre: "Mariage & Cérémonie",
      description: "Bouquets de mariée, boutonnières, centres de table, arches florales et décoration complète de votre lieu de réception.",
      icone: "💍",
      image: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=800&q=80",
      tags: ["Consultation gratuite", "Devis personnalisé", "Jour J garanti"],
      featured: true,
    },
    {
      titre: "Événementiel",
      description: "Décoration florale pour vos événements professionnels, anniversaires, baptêmes, soirées d'entreprise. Livraison et installation incluses.",
      icone: "🎉",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      tags: ["Entreprises", "Particuliers", "Installation incluse"],
      featured: false,
    },
    {
      titre: "Abonnements fleurs",
      description: "Recevez chaque semaine ou mois une composition florale fraîche et de saison à votre domicile ou bureau.",
      icone: "🌿",
      image: "https://images.unsplash.com/photo-1490750967868-88df5691cc0d?w=800&q=80",
      tags: ["Hebdomadaire", "Mensuel", "Sans engagement"],
      featured: false,
    },
    {
      titre: "Deuil & Condoléances",
      description: "Couronnes, gerbes et compositions florales pour accompagner vos proches dans les moments difficiles avec respect et délicatesse.",
      icone: "🕊️",
      image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&q=80",
      tags: ["Livraison rapide", "Discrétion", "7j/7"],
      featured: false,
    },
    {
      titre: "Plantes & Cadeaux",
      description: "Plantes d'intérieur, succulentes, terrariums et paniers cadeaux fleuris pour offrir la nature à ceux que vous aimez.",
      icone: "🌱",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
      tags: ["Plantes vertes", "Paniers cadeaux", "Emballage premium"],
      featured: false,
    },
  ],

  // --- RÉALISATIONS ---
  realisations: [
    { image: "https://images.unsplash.com/photo-1487530811015-780780101700?w=800&q=80", alt: "Bouquet romantique roses et pivoines", categorie: "bouquet", wide: true },
    { image: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=600&q=80", alt: "Décoration florale mariage champêtre", categorie: "mariage", wide: false },
    { image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", alt: "Centre de table soirée de gala", categorie: "evenement", wide: false },
    { image: "https://images.unsplash.com/photo-1490750967868-88df5691cc0d?w=600&q=80", alt: "Composition florale moderne", categorie: "bouquet", wide: false },
    { image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600&q=80", alt: "Arche florale cérémonie", categorie: "mariage", wide: false },
    { image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80", alt: "Abonnement fleurs de saison", categorie: "abonnement", wide: true },
    { image: "https://images.unsplash.com/photo-1453531704665-c800ad4c6e1e?w=600&q=80", alt: "Bouquet de mariée blanc", categorie: "mariage", wide: false },
    { image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&q=80", alt: "Terrarium plantes grasses", categorie: "plantes", wide: false },
  ],

  realisationsCategories: [
    { id: "all", label: "Toutes" },
    { id: "bouquet", label: "Bouquets" },
    { id: "mariage", label: "Mariages" },
    { id: "evenement", label: "Événements" },
    { id: "abonnement", label: "Abonnements" },
    { id: "plantes", label: "Plantes" },
  ],

  // --- TARIFS ---
  tarifs: [
    {
      categorie: "Bouquets",
      items: [
        { nom: "Petite Attention", prix: "25€", detail: "Format compact, fleurs de saison" },
        { nom: "Bouquet Romantique", prix: "45€", detail: "Roses, pivoines, verdure" },
        { nom: "Bouquet Généreux", prix: "75€", detail: "Grand format, composition mixte" },
        { nom: "Bouquet Prestige", prix: "120€+", detail: "Sur mesure, fleurs rares" },
      ],
    },
    {
      categorie: "Mariage",
      items: [
        { nom: "Consultation mariage", prix: "Gratuit", detail: "Rendez-vous conseil 1h" },
        { nom: "Bouquet de mariée", prix: "dès 150€", detail: "Selon composition et fleurs" },
        { nom: "Pack cérémonie", prix: "dès 500€", detail: "Bouquet + boutonnières" },
        { nom: "Décoration complète", prix: "Sur devis", detail: "Lieu de réception inclus" },
      ],
    },
    {
      categorie: "Abonnements",
      items: [
        { nom: "Abonnement Hebdo", prix: "55€/mois", detail: "1 bouquet/semaine livré" },
        { nom: "Bi-mensuel", prix: "35€/mois", detail: "1 bouquet tous les 15 jours" },
        { nom: "Mensuel", prix: "20€/mois", detail: "1 bouquet par mois" },
        { nom: "Abonnement Bureau", prix: "Sur devis", detail: "Composition pour entreprise" },
      ],
    },
  ],

  // --- TÉMOIGNAGES ---
  temoignages: [
    {
      nom: "Sophie & Thomas",
      texte: "Marie a fleuri notre mariage comme dans nos rêves. Les bouquets étaient absolument magnifiques, exactement ce que nous voulions. Un grand merci pour votre talent et votre écoute.",
      note: 5,
      occasion: "Mariage",
    },
    {
      nom: "Camille R.",
      texte: "Je m'abonne depuis 6 mois et chaque semaine c'est une surprise magnifique. Les fleurs sont toujours fraîches et les compositions créatives. Je recommande vivement !",
      note: 5,
      occasion: "Abonnement",
    },
    {
      nom: "Laurent M.",
      texte: "Bouquet commandé en urgence pour un anniversaire, livré en 3h. Superbe qualité, ma femme était ravie. Service impeccable et fleurs fraîches garanties.",
      note: 5,
      occasion: "Bouquet",
    },
    {
      nom: "Isabelle P.",
      texte: "La décoration florale de notre gala d'entreprise était somptueuse. Marie a su interpréter notre vision avec brio. Professionnalisme et créativité au rendez-vous.",
      note: 5,
      occasion: "Événementiel",
    },
  ],

  // --- À PROPOS ---
  apropos: {
    titre: "Artisane fleurie depuis 12 ans",
    sousTitre: "Passionnée par les fleurs depuis l'enfance, je crée des compositions qui parlent au cœur",
    paragraphe1: "Après une formation à l'École Nationale Supérieure de Fleuristerie, j'ai ouvert ma boutique avec une conviction : les fleurs ne sont pas un simple décor, elles racontent des histoires, transmettent des émotions, marquent les moments importants de la vie.",
    paragraphe2: "Je travaille exclusivement avec des producteurs locaux et des fleurs de saison. Pas de fleurs importées sous vide — ici, tout est frais, local quand c'est possible, et assemblé avec soin le jour même de votre commande.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    imageAlt: "Marie dans sa boutique de fleurs",
    certifications: ["CAP Fleuriste", "BM Fleuristerie", "Formation Ikebana Japon"],
    valeurs: [
      { titre: "Fraîcheur", description: "Approvisionnement quotidien, fleurs coupées le matin même", icone: "🌸" },
      { titre: "Local", description: "Producteurs régionaux privilégiés, circuits courts", icone: "🌿" },
      { titre: "Sur mesure", description: "Chaque composition est unique, selon vous et la saison", icone: "✨" },
      { titre: "Durable", description: "Emballages recyclables, fleurs de saison, zéro gaspillage", icone: "♻️" },
    ],
  },

  // --- MENTIONS LÉGALES ---
  responsable: "Marie Dupont — Fleuriste EI",
  siret: "XXX XXX XXX 00000",
  hebergeur: "Netlify Inc., 44 Montgomery Street Suite 300, San Francisco, CA 94104, USA",
};
