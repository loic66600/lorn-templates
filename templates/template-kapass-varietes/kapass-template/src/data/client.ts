// ============================================================
//  DONNÉES — Tout le site se pilote depuis ce fichier.
//  Duo de variété & show karaoké « Kapass Variétés » (Cathy & Pascal).
//  Charte fournie reproduite : fond sombre, or, touches violettes.
// ============================================================

export const client = {
  // ---- Identité ----
  nom: "Kapass Variétés",
  duo: "Duo Cathy & Pascal",
  signature: "Vivez l'excellence musicale",
  baseline:
    "L'excellence musicale pour tous vos événements prestigieux. Un duo passionné au service de votre émotion.",
  description:
    "Kapass Variétés — duo de variété, karaoké concert festif et light show à Perpignan (Occitanie). Cathy & Pascal animent mariages, repas dansants, fêtes de village, mairies, galas et soirées d'entreprise avec les meilleurs tubes de Joe Dassin, Michel Sardou, Johnny Hallyday et bien d'autres. Sonorisation pro 6 colonnes, gestion automatique du son, devis gratuit.",
  anneeFondation: 2009,

  artistes: { prenom1: "Cathy", prenom2: "Pascal" },

  // ---- Coordonnées (NAP — SEO local Perpignan / Occitanie) ----
  adresse: {
    ville: "Perpignan",
    departement: "Pyrénées-Orientales",
    region: "Occitanie",
  },
  geo: { lat: 42.6886, lng: 2.8946 },
  telephone: "06 58 80 45 89",
  telephoneLien: "+33658804589",
  email: "contact@kapass-varietes.com",
  siteUrl: "https://www.kapass-varietes.fr",
  localisation: "Basés à Perpignan — Occitanie",

  // ---- Zone d'intervention ----
  zoneIntervention: [
    "Tout le département 66",
    "Pyrénées-Orientales",
    "Perpignan",
    "Canet-en-Roussillon",
    "Argelès-sur-Mer",
    "Saint-Cyprien",
    "Rivesaltes",
    "Céret",
    "Thuir",
    "Narbonne",
    "Carcassonne",
    "Montpellier",
  ],

  // ---- Réseaux ----
  reseaux: {
    facebook: "https://www.facebook.com/groups/702814773188784",
    instagram: "https://www.instagram.com/kapass_66/",
  },

  web3formsKey: "VOTRE_CLE_WEB3FORMS",

  // ---- SEO (local) ----
  seo: {
    motsCles: [
      "duo variété Perpignan",
      "show karaoké Perpignan",
      "animation soirée Occitanie",
      "duo musical mariage Pyrénées-Orientales",
      "groupe variété repas dansant Occitanie",
      "karaoké événement Perpignan",
      "animation mariage Perpignan 66",
      "animation musicale département 66",
      "soirée dansante Occitanie",
      "duo Cathy et Pascal",
      "orchestre variété Perpignan",
      "karaoké concert festif duo",
      "light show Perpignan",
      "reprises Joe Dassin",
      "reprises Michel Sardou",
      "reprises Johnny Hallyday",
      "tubes chanson française",
    ],
  },

  noteClients: "4.9/5",

  // ---- Accueil : « Pourquoi choisir » ----
  atouts: [
    {
      icone: "star",
      titre: "Expertise Scénique",
      description:
        "Plus de 15 ans d'expérience sur les plus belles scènes de la région.",
    },
    {
      icone: "music",
      titre: "Répertoire Éclectique",
      description:
        "Les meilleurs tubes de Joe Dassin, Michel Sardou, Johnny Hallyday et bien d'autres.",
    },
    {
      icone: "sliders",
      titre: "Son & Lumières",
      description:
        "6 colonnes d'enceintes, light show et gestion automatique du son pour une ambiance maîtrisée.",
    },
    {
      icone: "shield",
      titre: "Sérénité Totale",
      description:
        "Une organisation carrée et ponctuelle pour un événement sans stress.",
    },
  ],

  immersion: {
    intro:
      "Au-delà de la musique, nous créons une expérience multisensorielle où les voix de Cathy et Pascal s'harmonisent avec un jeu de lumières sophistiqué.",
    points: [
      "Adaptation totale à l'acoustique de votre lieu",
      "Animation assurée avec participation du public",
      "Direction artistique sur-mesure",
    ],
  },

  // ---- Accueil : prestations ----
  prestations: [
    {
      titre: "Mariages de Prestige",
      description:
        "Du cocktail à la soirée dansante, une ambiance romantique et festive.",
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
      // imageLocale: "/images/presta-mariage.jpg",
    },
    {
      titre: "Soirées Corporate",
      description:
        "Gala, séminaires ou lancements de produits avec un ton juste et professionnel.",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop",
      // imageLocale: "/images/presta-corporate.jpg",
    },
    {
      titre: "Concerts Publics",
      description:
        "Festivals, mairies, fêtes de village et événements associatifs pour tous les publics.",
      image:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1200&auto=format&fit=crop",
      // imageLocale: "/images/presta-concert.jpg",
    },
    {
      titre: "Dîners de Gala",
      description:
        "Ambiance lounge et jazz feutrée pour accompagner vos repas d'exception.",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
      // imageLocale: "/images/presta-gala.jpg",
    },
    {
      titre: "Anniversaires VIP",
      description:
        "Une programmation personnalisée pour célébrer vos moments de vie importants.",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1200&auto=format&fit=crop",
      // imageLocale: "/images/presta-anniversaire.jpg",
    },
    {
      titre: "Projets Spéciaux",
      description:
        "Nous créons avec vous le concept unique qui correspond à vos rêves.",
      special: true,
    },
  ],

  // ---- Accueil : témoignages ----
  temoignages: [
    {
      texte:
        "Une soirée mémorable ! Cathy et Pascal ont su captiver nos 200 invités dès les premières notes. Leur professionnalisme et leur gentillesse ont fait l'unanimité.",
      nom: "Jean-Pierre M.",
      role: "Directeur Event · LuxCorp",
    },
    {
      texte:
        "Pour notre mariage, nous voulions l'excellence. Kapass Variétés a dépassé toutes nos attentes. La gestion des tempos entre le repas et la danse était parfaite.",
      nom: "Sophie & Marc",
      role: "Mariage Château de Bel-Air",
    },
    {
      texte:
        "Un duo exceptionnel. Leur répertoire est tellement vaste qu'ils s'adaptent à toutes les tranches d'âge. Un vrai régal pour les oreilles et les yeux.",
      nom: "Hélène D.",
      role: "Adjointe à la Culture",
    },
  ],

  // ---- Événements : types ----
  evenements: [
    {
      icone: "heart",
      titre: "Mariages",
      description:
        "L'élégance pour votre plus beau jour. Nous animons votre cocktail, votre dîner et enflammons la piste de danse avec un répertoire adapté à toutes les générations.",
      points: [
        "Sonorisation voix + instruments",
        "Éclairage d'ambiance",
        "Ouverture de bal personnalisée",
      ],
    },
    {
      icone: "cake",
      titre: "Anniversaires",
      description:
        "Célébrez une nouvelle année en beauté. Une ambiance festive et conviviale pour ravir vos invités, peu importe l'âge fêté.",
      points: [
        "Playlist sur mesure",
        "Animation interactive",
        "Souvenirs mémorables",
      ],
    },
    {
      icone: "music",
      titre: "Repas Dansants",
      description:
        "Spécialistes des comités des fêtes et CCAS. Un répertoire varié allant du rétro au moderne pour faire danser tous les convives.",
      points: [
        "Gestion des volumes sonores",
        "Répertoire intergénérationnel",
        "Amplitude modulable",
      ],
    },
    {
      icone: "flag",
      titre: "Mairies & Fêtes de Village",
      description:
        "Pour les mairies, comités des fêtes et fêtes de village, le duo Kapass apporte l'énergie nécessaire pour faire vibrer votre commune. Une présence scénique dynamique et rassembleuse.",
      points: [
        "Grande puissance sonore",
        "Spécialité musique variée",
        "Esprit de fête populaire",
      ],
    },
    {
      icone: "users",
      titre: "Associations & CE",
      description:
        "Pour vos galas, soirées caritatives ou événements d'entreprise. Nous nous adaptons à vos contraintes logistiques et budgétaires.",
      lien: true,
    },
  ],

  // ---- Événements : sono ----
  sono: {
    eyebrow: "Puissance & Clarté",
    titre: "Sonorisation Pro LD Line Array",
    intro:
      "Nous ne faisons aucun compromis sur la qualité sonore. Kapass Variétés travaille avec 6 colonnes d'enceintes pour une diffusion claire et homogène, une formule karaoké concert festif en duo, un light show immersif et un système de gestion du son automatique adapté à votre salle, votre scène ou votre fête de village.",
    image: "/images/sonos.png",
    // imageLocale: "/images/sono.jpg",
    points: [
      {
        titre: "Précision Acoustique",
        description:
          "6 colonnes d'enceintes pour couvrir la salle ou la place du village avec un son équilibré.",
      },
      {
        titre: "Show Lumière Inclus",
        description:
          "Light show, effets, projecteurs LED et gestion automatique du son pour une mise en place rapide et fiable.",
      },
    ],
  },

  // ---- Événements : déroulement ----
  etapes: [
    {
      num: "01",
      titre: "Consultation",
      description:
        "Premier contact pour comprendre vos besoins, le style de votre événement et vos attentes spécifiques.",
    },
    {
      num: "02",
      titre: "Planification",
      description:
        "Définition de la playlist, du planning horaire et repérage technique si nécessaire pour une fluidité totale.",
    },
    {
      num: "03",
      titre: "Installation",
      description:
        "Mise en place minutieuse du matériel son et lumières avant l'arrivée des premiers invités.",
    },
    {
      num: "04",
      titre: "Show Time",
      description:
        "Performance live énergique, animation de la piste de danse et gestion de l'ambiance jusqu'au bout de la nuit.",
    },
  ],

  // ---- Photos : galerie ----
  galerieIntro:
    "Revivez les moments forts de nos prestations. Du charme de la scène à l'énergie communicative de nos soirées karaoké.",
  galerieFiltres: ["Tout", "Sur scène", "Karaoké", "Ambiance", "Événements", "Matériel"],
  galerie: [
    { cat: "Sur scène", taille: "grand", image: "/images/486094790_9583633641731108_6453082604949618843_n.jpg", alt: "Kapass Variétés sur scène avec light show et fumée" },
    { cat: "Ambiance", taille: "large", image: "/images/486547797_9585284118232727_2717783085258893721_n.jpg", alt: "Public qui danse pendant une soirée Kapass Variétés" },
    { cat: "Matériel", taille: "large", image: "/images/488251075_9643722929055512_5261462237597928989_n.jpg", alt: "Scène Kapass Variétés avec colonnes d'enceintes et instruments" },
    { cat: "Sur scène", taille: "haut", image: "/images/491126225_9727116394049498_6423491373450891531_n.jpg", alt: "Cathy et Pascal en concert hommage avec micros" },
    { cat: "Matériel", taille: "haut", image: "/images/491126225_9727116394049498_6423491373450891531_n.jpg", alt: "Matériel micro et scène pendant un concert Kapass Variétés" },
    { cat: "Événements", taille: "large", image: "/images/53076476_2252998708128008_2178775542768074752_n.jpg", alt: "Événement Kapass Variétés avec public et animation musicale" },
    { cat: "Événements", taille: "large", image: "/images/491811167_9727116144049523_4440154002148358304_n.jpg", alt: "Concert festif sur scène avec effets pyrotechniques" },
    { cat: "Événements", taille: "large", image: "/images/491845113_9727116004049537_2374631385532222415_n.jpg", alt: "Fête de village avec public invité sur scène" },
    { cat: "Sur scène", taille: "large", image: "/images/493554194_9793061567454980_2090314405208112022_n.jpg", alt: "Groupe et chanteur sur scène avec éclairage coloré" },
    { cat: "Événements", taille: "large", image: "/images/502340526_10071211892973278_1017231855544835917_n.jpg", alt: "Show hommage Johnny Hallyday en extérieur" },
    { cat: "Sur scène", taille: "haut", image: "/images/503122483_10074698295957971_4210170216606618735_n.jpg", alt: "Duo Cathy et Pascal pendant un hommage Johnny Hallyday" },
    { cat: "Ambiance", taille: "large", image: "/images/510418047_23996128476721718_4673816691965845197_n.jpg", alt: "Chanteuse Kapass Variétés au milieu des lasers" },
    { cat: "Sur scène", taille: "haut", image: "/images/511139825_23996336720034227_1458241613763739129_n.jpg", alt: "Pascal chante avec jeux de lumières et boule à facettes" },
    { cat: "Sur scène", taille: "large", image: "/images/511261354_23995914120076487_1606820437146212355_n.jpg", alt: "Cathy et Pascal chantent devant la bannière Kapass Variétés" },
    { cat: "Sur scène", taille: "large", image: "/images/512649504_23996128090055090_6527871085589979864_n.jpg", alt: "Cathy chante sur scène avec éclairage rouge" },
    { cat: "Matériel", taille: "haut", image: "/images/722453970_27380337778300754_4162683398179458784_n.jpg", alt: "Installation lumière, décor et matériel Kapass Variétés" },
    { cat: "Sur scène", taille: "haut", image: "/images/724133977_27380341581633707_8735233265262827754_n.jpg", alt: "Duo Kapass Variétés en spectacle hommage" },
    { cat: "Matériel", taille: "large", image: "/images/724252315_27380339948300537_3884994886185927326_n.jpg", alt: "Plateau Kapass Variétés avec instruments et colonnes lumineuses" },
    { cat: "Karaoké", taille: "haut", image: "/images/karaoké 2025.jpg", alt: "Affiche karaoké Kapass Variétés venez chanter avec nous" },
    { cat: "Événements", taille: "haut", image: "/images/les etoile disparue.jpg", alt: "Affiche Les Étoiles Disparues, show hommage aux artistes français" },
    { cat: "Karaoké", taille: "large", image: "/images/305503263_5566357816792064_171406086113542145_n.jpg", alt: "Articles de presse et saison karaoké Kapass Variétés" },
  ],

  // ---- Contact : types d'événement (select) ----
  typesEvenement: [
    "Mariage",
    "Anniversaire",
    "Repas dansant",
    "Fête de village",
    "Mairie / événement communal",
    "Soirée d'entreprise / CE",
    "Gala / association",
    "Autre",
  ],

  // ---- Mentions légales ----
  legal: {
    nomCommercial: "Anim'Passion",
    raisonSociale: "SARL Olivier Parra Production Animations Spectacles",
    formeJuridique: "SARL",
    adresse: "40 av. Gilbert Brutus - 66000 Perpignan",
    telephone: "04 68 63 43 02",
    email: "anim.passion66@gmail.com",
    siret: "504 958 319 00033",
    ape: "9001 Z",
    hebergeur: "Netlify, Inc. — 512 2nd Street, San Francisco, CA 94107, USA",
  },
};

export type Client = typeof client;
