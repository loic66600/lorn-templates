// ============================================================
//  DONNÉES — Tout le site se pilote depuis ce fichier.
//  Marque de VTT électriques (e-MTB) de luxe « Volta ».
//  Ajouter un modèle = ajouter une entrée dans `modeles` :
//  une fiche produit complète est générée automatiquement.
// ============================================================

export const client = {
  // ---- Identité de marque ----
  nom: "VOLTA",
  nomComplet: "Volta Cycles",
  signature: "Forgés au pied du Canigou.",
  manifeste:
    "Volta dessine et assemble à la main des VTT électriques d'exception dans son atelier des Pyrénées-Orientales. Cadres carbone, moteurs à fort couple, géométries pensées sur les sentiers du Canigou : des machines rares, faites pour durer une vie de montagne.",
  description:
    "Volta — VTT électriques (e-MTB) de luxe assemblés à la main au pied du Canigou, à Perpignan. Trois modèles : le Canigó all-mountain, le Carlit enduro et le Puigmal expédition longue distance. Essai sur les sentiers, livraison nationale.",
  anneeFondation: 2019,

  // ---- Coordonnées (NAP — atelier & showroom) ----
  adresse: {
    rue: "12 route du Canigou",
    codePostal: "66000",
    ville: "Perpignan",
    departement: "Pyrénées-Orientales",
    region: "Occitanie",
  },
  geo: { lat: 42.6912, lng: 2.8806 },
  telephone: "04 68 00 00 00",
  telephoneLien: "+33468000000",
  email: "atelier@volta-cycles.fr",
  siteUrl: "https://www.volta-cycles.fr",

  // ---- Atelier / showroom ----
  horaires: [
    { jour: "Lundi", horaire: "Sur rendez-vous" },
    { jour: "Mardi", horaire: "9h30 – 18h30" },
    { jour: "Mercredi", horaire: "9h30 – 18h30" },
    { jour: "Jeudi", horaire: "9h30 – 18h30" },
    { jour: "Vendredi", horaire: "9h30 – 18h30" },
    { jour: "Samedi", horaire: "9h00 – 19h00 · essais sentier" },
    { jour: "Dimanche", horaire: "Fermé" },
  ],

  // ---- Réseaux ----
  reseaux: {
    instagram: "https://www.instagram.com/volta.cycles",
    youtube: "https://www.youtube.com/@voltacycles",
    strava: "https://www.strava.com/clubs/volta-cycles",
  },

  web3formsKey: "VOTRE_CLE_WEB3FORMS",

  // ---- SEO (national + local + montagne) ----
  seo: {
    motsCles: [
      "VTT électrique haut de gamme",
      "VTT électrique de luxe",
      "vélo électrique carbone",
      "e-MTB premium France",
      "VTT électrique enduro",
      "VTT électrique Perpignan",
      "vélo électrique Pyrénées-Orientales",
      "VTT électrique Occitanie",
      "VTT électrique grande autonomie",
      "VTT électrique assemblé en France",
    ],
  },

  // ---- Chiffres de marque (compteurs) ----
  chiffres: [
    { valeur: 100, suffixe: " %", label: "assemblé à la main" },
    { valeur: 5, suffixe: " ans", label: "garantie cadre" },
    { valeur: 85, suffixe: " Nm", label: "couple moteur" },
    { valeur: 2800, suffixe: " m", label: "dénivelé d'une charge" },
  ],

  // ---- Piliers d'ingénierie (home + produit) ----
  technologie: [
    {
      code: "01",
      titre: "Cadre carbone monocoque",
      description:
        "Drapé carbone haut module moulé en une pièce, pensé pour absorber les chocs sans rien céder en rigidité. Chaque cadre est pesé, contrôlé et numéroté à l'atelier.",
    },
    {
      code: "02",
      titre: "Motorisation à fort couple",
      description:
        "Moteur central jusqu'à 85 Nm, silencieux et progressif. L'assistance se fait oublier : il ne reste que la sensation de grimper plus fort, plus loin.",
    },
    {
      code: "03",
      titre: "Batterie longue distance",
      description:
        "Cellules haute densité intégrées au cadre, amovibles sans outil. Une charge avale un col, ses variantes, et le chemin du retour.",
    },
    {
      code: "04",
      titre: "Géométrie sentier",
      description:
        "Angles dessinés et validés sur les single-tracks du Canigou. Stable dans le raide, joueur dans les épingles, taillé pour la vraie montagne.",
    },
  ],

  // ---- Modèles (chaque entrée = une fiche produit générée) ----
  modeles: [
    {
      slug: "canigo",
      nom: "Canigó",
      segment: "All-Mountain",
      ordre: "01",
      accroche: "Le sommet, à portée de mollet.",
      promesse:
        "Le polyvalent. Léger, vif, à l'aise partout : la montée comme la descente, le bitume comme la caillasse. Le VTT électrique d'une vie, taillé pour le terrain de jeu pyrénéen.",
      prix: 6900,
      tailles: ["S", "M", "L", "XL"],
      finitions: [
        {
          nom: "Cuivre Roussillon",
          hex: "#C97A45",
          image:
            "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?q=80&w=1600&auto=format&fit=crop",
          // imageLocale: "/images/canigo-cuivre.jpg",
        },
        {
          nom: "Vert Forêt",
          hex: "#3C4A3A",
          image:
            "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?q=80&w=1600&auto=format&fit=crop",
          // imageLocale: "/images/canigo-vert.jpg",
        },
        {
          nom: "Anthracite",
          hex: "#1C2220",
          image:
            "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1600&auto=format&fit=crop",
          // imageLocale: "/images/canigo-anthracite.jpg",
        },
      ],
      specs: [
        { label: "Couple", valeur: "85", unite: "Nm" },
        { label: "Batterie", valeur: "750", unite: "Wh" },
        { label: "Autonomie", valeur: "120", unite: "km" },
        { label: "Débattement", valeur: "150", unite: "mm" },
        { label: "Roues", valeur: "29", unite: "″" },
        { label: "Poids", valeur: "21,4", unite: "kg" },
      ],
      pointsForts: [
        "Cadre carbone monocoque numéroté",
        "Transmission électronique sans fil",
        "Freins 4 pistons, disques 203 mm",
        "Batterie 750 Wh amovible sans outil",
      ],
      film: {
        poster:
          "https://images.unsplash.com/photo-1544191696-15693072e0b5?q=80&w=1800&auto=format&fit=crop",
        // src: "/videos/canigo.mp4",
        legende: "Canigó — film officiel · 1:02",
      },
      galerie: [
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1571333250630-f0230c320b6d?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?q=80&w=1200&auto=format&fit=crop",
      ],
      // galerieLocale: ["/images/canigo-1.jpg", "/images/canigo-2.jpg", "/images/canigo-3.jpg"],
    },
    {
      slug: "carlit",
      nom: "Carlit",
      segment: "Enduro",
      ordre: "02",
      accroche: "Pour ceux qui visent le bas.",
      promesse:
        "La machine de descente. Gros débattement, géométrie agressive, châssis qui ne flanche jamais : le Carlit transforme les pentes les plus raides en terrain de jeu. Montée sereine, descente sans limite.",
      prix: 8400,
      tailles: ["S", "M", "L", "XL"],
      finitions: [
        {
          nom: "Cuivre Roussillon",
          hex: "#C97A45",
          image:
            "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=1600&auto=format&fit=crop",
          // imageLocale: "/images/carlit-cuivre.jpg",
        },
        {
          nom: "Noir Mat",
          hex: "#151917",
          image:
            "https://images.unsplash.com/photo-1511994298241-608e28f14fde?q=80&w=1600&auto=format&fit=crop",
          // imageLocale: "/images/carlit-noir.jpg",
        },
        {
          nom: "Rouille",
          hex: "#9E5532",
          image:
            "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=1600&auto=format&fit=crop",
          // imageLocale: "/images/carlit-rouille.jpg",
        },
      ],
      specs: [
        { label: "Couple", valeur: "85", unite: "Nm" },
        { label: "Batterie", valeur: "800", unite: "Wh" },
        { label: "Autonomie", valeur: "95", unite: "km" },
        { label: "Débattement", valeur: "180", unite: "mm" },
        { label: "Roues", valeur: "27,5", unite: "″" },
        { label: "Poids", valeur: "23,8", unite: "kg" },
      ],
      pointsForts: [
        "Débattement 180 mm avant/arrière",
        "Suspension pilotée à compression réglable",
        "Géométrie enduro angle de direction 63°",
        "Pneus gravité tubeless renforcés",
      ],
      film: {
        poster:
          "https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=1800&auto=format&fit=crop",
        // src: "/videos/carlit.mp4",
        legende: "Carlit — film officiel · 1:28",
      },
      galerie: [
        "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1530143584546-02191bc84eb5?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1559348349-86f1f65817fe?q=80&w=1200&auto=format&fit=crop",
      ],
      // galerieLocale: ["/images/carlit-1.jpg", "/images/carlit-2.jpg", "/images/carlit-3.jpg"],
    },
    {
      slug: "puigmal",
      nom: "Puigmal",
      segment: "Expédition",
      ordre: "03",
      accroche: "Partez plus loin que la carte.",
      promesse:
        "Le grand raid électrique. Double batterie, porte-bagages intégré, autonomie record : le Puigmal est conçu pour les traversées de plusieurs jours, là où la route s'arrête. Série spéciale numérotée.",
      prix: 9900,
      tailles: ["M", "L", "XL"],
      finitions: [
        {
          nom: "Cuivre Roussillon",
          hex: "#C97A45",
          image:
            "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?q=80&w=1600&auto=format&fit=crop",
          // imageLocale: "/images/puigmal-cuivre.jpg",
        },
        {
          nom: "Sable Cerdagne",
          hex: "#B8A079",
          image:
            "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=1600&auto=format&fit=crop",
          // imageLocale: "/images/puigmal-sable.jpg",
        },
        {
          nom: "Vert Sapin",
          hex: "#2F3B30",
          image:
            "https://images.unsplash.com/photo-1544191696-15693072e0b5?q=80&w=1600&auto=format&fit=crop",
          // imageLocale: "/images/puigmal-vert.jpg",
        },
      ],
      specs: [
        { label: "Couple", valeur: "85", unite: "Nm" },
        { label: "Batterie", valeur: "2×750", unite: "Wh" },
        { label: "Autonomie", valeur: "210", unite: "km" },
        { label: "Débattement", valeur: "140", unite: "mm" },
        { label: "Charge utile", valeur: "30", unite: "kg" },
        { label: "Série", valeur: "75", unite: "ex." },
      ],
      pointsForts: [
        "Double batterie 2×750 Wh (1500 Wh)",
        "Porte-bagages & sacoches intégrés",
        "Pneus tout-terrain 4 saisons",
        "Série limitée numérotée (75 ex.)",
      ],
      film: {
        poster:
          "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=1800&auto=format&fit=crop",
        // src: "/videos/puigmal.mp4",
        legende: "Puigmal — film officiel · 1:45",
      },
      galerie: [
        "https://images.unsplash.com/photo-1448387473223-5c37445527e7?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop",
      ],
      // galerieLocale: ["/images/puigmal-1.jpg", "/images/puigmal-2.jpg", "/images/puigmal-3.jpg"],
    },
  ],

  // ---- Note légale VAE ----
  noteVae:
    "Vélos à assistance électrique (VAE / EPAC) conformes à la norme EN 15194 : assistance limitée à 25 km/h et coupée au-delà, conformément à l'article R311-1 du Code de la route. Au-delà, l'usage est réservé aux espaces privés fermés.",

  // ---- Avis ----
  avis: [
    {
      nom: "Antoine R.",
      ville: "Prades",
      note: 5,
      texte:
        "J'ai monté le Canigou jusqu'au refuge sans forcer, et la descente est un régal. La finition est d'un autre monde — on sent l'objet pensé par des gens qui roulent vraiment.",
    },
    {
      nom: "Léa V.",
      ville: "Font-Romeu",
      note: 5,
      texte:
        "Le Puigmal a tenu trois jours de raid en Cerdagne sans une seule recharge complète. L'autonomie est réelle, le SAV répond en une heure. Du vrai haut de gamme.",
    },
    {
      nom: "Marc T.",
      ville: "Perpignan",
      note: 5,
      texte:
        "Essai sur les sentiers au départ de l'atelier, puis cadre numéroté livré six semaines plus tard. Le Carlit avale tout. Une pièce d'exception, française qui plus est.",
    },
  ],

  legal: {
    formeJuridique: "SAS au capital de 80 000 €",
    siret: "000 000 000 00000",
    tva: "FR00000000000",
    hebergeur: "Netlify, Inc. — 512 2nd Street, San Francisco, CA 94107, USA",
  },
};

export type Client = typeof client;
export type Modele = (typeof client.modeles)[number];
