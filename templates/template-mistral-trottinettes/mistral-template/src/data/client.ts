// ============================================================
//  DONNÉES — Tout le site se pilote depuis ce fichier.
//  Marque de trottinettes électriques premium « Mistral ».
//  Ajouter un modèle = ajouter une entrée dans `modeles`,
//  une page produit est générée automatiquement.
// ============================================================

export const client = {
  // ---- Identité de marque ----
  nom: "MISTRAL",
  nomComplet: "Mistral Mobilité",
  signature: "L'électrique, à la française.",
  manifeste:
    "Mistral conçoit et assemble des trottinettes électriques d'exception dans son atelier de Perpignan. Châssis monocoque, suspension pneumatique, autonomie longue distance : une ingénierie pensée comme celle d'une voiture de sport, miniaturisée pour la ville.",
  description:
    "Mistral — trottinettes électriques premium conçues et assemblées en France, à Perpignan. Trois modèles haut de gamme : la Zéphyr urbaine, la Sirocco grande autonomie et l'Autan performance. Livraison nationale, essai sur rendez-vous en Occitanie.",
  anneeFondation: 2021,

  // ---- Coordonnées (NAP — atelier & showroom) ----
  adresse: {
    rue: "3 quai Sadi-Carnot",
    codePostal: "66000",
    ville: "Perpignan",
    departement: "Pyrénées-Orientales",
    region: "Occitanie",
  },
  geo: { lat: 42.6985, lng: 2.8954 },
  telephone: "04 68 00 00 00",
  telephoneLien: "+33468000000",
  email: "contact@mistral-mobilite.fr",
  siteUrl: "https://www.mistral-mobilite.fr",

  // ---- Showroom ----
  horaires: [
    { jour: "Lundi", horaire: "Sur rendez-vous" },
    { jour: "Mardi", horaire: "10h00 – 19h00" },
    { jour: "Mercredi", horaire: "10h00 – 19h00" },
    { jour: "Jeudi", horaire: "10h00 – 19h00" },
    { jour: "Vendredi", horaire: "10h00 – 19h00" },
    { jour: "Samedi", horaire: "10h00 – 20h00" },
    { jour: "Dimanche", horaire: "Fermé" },
  ],

  // ---- Réseaux ----
  reseaux: {
    instagram: "https://www.instagram.com/mistral.mobilite",
    youtube: "https://www.youtube.com/@mistralmobilite",
    linkedin: "https://www.linkedin.com/company/mistral-mobilite",
  },

  web3formsKey: "VOTRE_CLE_WEB3FORMS",

  // ---- SEO (national + local) ----
  seo: {
    motsCles: [
      "trottinette électrique premium",
      "trottinette électrique haut de gamme",
      "trottinette électrique française",
      "trottinette électrique longue autonomie",
      "trottinette électrique puissante",
      "trottinette électrique Perpignan",
      "trottinette électrique Occitanie",
      "acheter trottinette électrique design",
      "trottinette électrique tout-chemin",
      "mobilité électrique haut de gamme France",
    ],
  },

  // ---- Chiffres de marque (compteurs) ----
  chiffres: [
    { valeur: 100, suffixe: " %", label: "assemblé en France" },
    { valeur: 3, suffixe: " ans", label: "garantie batterie" },
    { valeur: 48, suffixe: " h", label: "livraison express" },
    { valeur: 2200, suffixe: " ", label: "essais réalisés" },
  ],

  // ---- Piliers d'ingénierie (home + produit) ----
  technologie: [
    {
      code: "T-01",
      titre: "Châssis monocoque",
      description:
        "Une structure aluminium aéronautique pliée en une seule pièce : rigidité maximale, zéro jeu, un poids contenu. La même obsession que sur un châssis de sport.",
    },
    {
      code: "T-02",
      titre: "Suspension pneumatique",
      description:
        "Double amortissement à air réglable sans outil. La route disparaît : pavés, nids-de-poule et bordures sont absorbés avant d'arriver au guidon.",
    },
    {
      code: "T-03",
      titre: "Batterie longue distance",
      description:
        "Cellules haute densité certifiées, gestion thermique active et recharge rapide. L'autonomie annoncée est l'autonomie réelle, mesurée à 25 km/h.",
    },
    {
      code: "T-04",
      titre: "Freinage redondant",
      description:
        "Disques hydrauliques sur les deux roues, frein moteur régénératif et ABS. Trois systèmes indépendants pour une distance d'arrêt maîtrisée.",
    },
  ],

  // ---- Modèles (chaque entrée = une fiche produit générée) ----
  modeles: [
    {
      slug: "zephyr",
      nom: "Zéphyr",
      segment: "Urbaine",
      ordre: "01",
      accroche: "La ville, en apesanteur.",
      promesse:
        "La plus légère de la gamme. Pensée pour la densité urbaine, le pliage en trois secondes et les trajets multimodaux. Discrète, vive, indestructible.",
      prix: 1490,
      // Image principale = première finition
      finitions: [
        {
          nom: "Bleu Mistral",
          hex: "#2C5BFF",
          image:
            "https://images.unsplash.com/photo-1604868189265-219ba7bf7ea3?q=80&w=1600&auto=format&fit=crop",
          // imageLocale: "/images/zephyr-bleu.jpg",
        },
        {
          nom: "Gris Météore",
          hex: "#8A8F99",
          image:
            "https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=1600&auto=format&fit=crop",
          // imageLocale: "/images/zephyr-gris.jpg",
        },
        {
          nom: "Noir Absolu",
          hex: "#1A1A1E",
          image:
            "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=1600&auto=format&fit=crop",
          // imageLocale: "/images/zephyr-noir.jpg",
        },
      ],
      specs: [
        { label: "Vitesse", valeur: "25", unite: "km/h" },
        { label: "Autonomie", valeur: "45", unite: "km" },
        { label: "Puissance", valeur: "500", unite: "W" },
        { label: "Poids", valeur: "12,4", unite: "kg" },
        { label: "Charge", valeur: "4", unite: "h" },
        { label: "Pliage", valeur: "3", unite: "s" },
      ],
      pointsForts: [
        "Pliage une main en 3 secondes",
        "Mode bridé 25 km/h homologué route",
        "Éclairage avant/arrière intégré",
        "Application mobile & verrouillage",
      ],
      // Bloc film : poster image visible maintenant, source vidéo locale à décommenter
      film: {
        poster:
          "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1800&auto=format&fit=crop",
        // src: "/videos/zephyr.mp4",
        legende: "Zéphyr — film officiel · 0:48",
      },
      galerie: [
        "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1200&auto=format&fit=crop",
      ],
      // galerieLocale: ["/images/zephyr-1.jpg", "/images/zephyr-2.jpg", "/images/zephyr-3.jpg"],
    },
    {
      slug: "sirocco",
      nom: "Sirocco",
      segment: "Grande autonomie",
      ordre: "02",
      accroche: "Partez. Ne rentrez pas.",
      promesse:
        "Le grand tourisme électrique. Double batterie, selle optionnelle, pneus tout-chemin : la Sirocco avale la périphérie, les pistes et les week-ends sans jamais chercher une prise.",
      prix: 2290,
      finitions: [
        {
          nom: "Bleu Mistral",
          hex: "#2C5BFF",
          image:
            "https://images.unsplash.com/photo-1622185135505-2d795003994a?q=80&w=1600&auto=format&fit=crop",
          // imageLocale: "/images/sirocco-bleu.jpg",
        },
        {
          nom: "Sable Désert",
          hex: "#C9A66B",
          image:
            "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=1600&auto=format&fit=crop",
          // imageLocale: "/images/sirocco-sable.jpg",
        },
        {
          nom: "Noir Absolu",
          hex: "#1A1A1E",
          image:
            "https://images.unsplash.com/photo-1601758174039-f815c2b6e2e2?q=80&w=1600&auto=format&fit=crop",
          // imageLocale: "/images/sirocco-noir.jpg",
        },
      ],
      specs: [
        { label: "Vitesse", valeur: "25", unite: "km/h" },
        { label: "Autonomie", valeur: "90", unite: "km" },
        { label: "Puissance", valeur: "800", unite: "W" },
        { label: "Poids", valeur: "18,6", unite: "kg" },
        { label: "Charge", valeur: "6", unite: "h" },
        { label: "Étanchéité", valeur: "IPX6", unite: "" },
      ],
      pointsForts: [
        "Double batterie amovible",
        "Pneus tout-chemin 10 pouces",
        "Suspension pneumatique réglable",
        "Selle & top-case en option",
      ],
      film: {
        poster:
          "https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=1800&auto=format&fit=crop",
        // src: "/videos/sirocco.mp4",
        legende: "Sirocco — film officiel · 1:12",
      },
      galerie: [
        "https://images.unsplash.com/photo-1558980664-10e7170b5df9?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1571333250630-f0230c320b6d?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=1200&auto=format&fit=crop",
      ],
      // galerieLocale: ["/images/sirocco-1.jpg", "/images/sirocco-2.jpg", "/images/sirocco-3.jpg"],
    },
    {
      slug: "autan",
      nom: "Autan",
      segment: "Performance",
      ordre: "03",
      accroche: "La quintessence.",
      promesse:
        "Le sommet de la gamme. Bi-moteur, carbone apparent, électronique de course : l'Autan concentre tout le savoir-faire Mistral dans un objet rare, produit en série limitée et numéroté.",
      prix: 3990,
      finitions: [
        {
          nom: "Bleu Mistral",
          hex: "#2C5BFF",
          image:
            "https://images.unsplash.com/photo-1626683392024-1d6b6e1a0f8e?q=80&w=1600&auto=format&fit=crop",
          // imageLocale: "/images/autan-bleu.jpg",
        },
        {
          nom: "Carbone Nu",
          hex: "#2A2C30",
          image:
            "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=1600&auto=format&fit=crop",
          // imageLocale: "/images/autan-carbone.jpg",
        },
        {
          nom: "Blanc Glacier",
          hex: "#E7EAEF",
          image:
            "https://images.unsplash.com/photo-1612810806695-30f7a8258391?q=80&w=1600&auto=format&fit=crop",
          // imageLocale: "/images/autan-blanc.jpg",
        },
      ],
      specs: [
        { label: "Vitesse", valeur: "25*", unite: "km/h" },
        { label: "Autonomie", valeur: "110", unite: "km" },
        { label: "Puissance", valeur: "2×1000", unite: "W" },
        { label: "Poids", valeur: "21,2", unite: "kg" },
        { label: "0–25", valeur: "2,9", unite: "s" },
        { label: "Série", valeur: "199", unite: "ex." },
      ],
      pointsForts: [
        "Bi-moteur 2×1000 W",
        "Éléments en carbone apparent",
        "Série limitée numérotée (199 ex.)",
        "Plaque gravée & certificat d'authenticité",
      ],
      film: {
        poster:
          "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1800&auto=format&fit=crop",
        // src: "/videos/autan.mp4",
        legende: "Autan — film officiel · 1:34",
      },
      galerie: [
        "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
      ],
      // galerieLocale: ["/images/autan-1.jpg", "/images/autan-2.jpg", "/images/autan-3.jpg"],
    },
  ],

  // ---- Note légale vitesse ----
  noteVitesse:
    "* Vitesse bridée à 25 km/h pour un usage sur voie publique, conformément à la réglementation française (EDPM). Le débridage est réservé à un usage sur circuit privé.",

  // ---- Avis ----
  avis: [
    {
      nom: "Hélène M.",
      ville: "Montpellier",
      note: 5,
      texte:
        "J'ai essayé la Sirocco un samedi, commandée le lundi. Finition irréprochable, l'autonomie tient vraiment ses promesses. On sent l'objet conçu, pas assemblé à la va-vite.",
    },
    {
      nom: "Karim B.",
      ville: "Perpignan",
      note: 5,
      texte:
        "L'Autan est une folie. Le carbone, la plaque numérotée, le silence du bi-moteur… c'est une pièce d'exception. Le passage à l'atelier vaut le détour.",
    },
    {
      nom: "Sophie D.",
      ville: "Toulouse",
      note: 5,
      texte:
        "La Zéphyr a remplacé ma voiture en ville. Pliage instantané, je la monte dans le train sans effort. Le SAV répond en français, en une heure.",
    },
  ],

  legal: {
    formeJuridique: "SAS au capital de 100 000 €",
    siret: "000 000 000 00000",
    tva: "FR00000000000",
    hebergeur: "Netlify, Inc. — 512 2nd Street, San Francisco, CA 94107, USA",
  },
};

export type Client = typeof client;
export type Modele = (typeof client.modeles)[number];
