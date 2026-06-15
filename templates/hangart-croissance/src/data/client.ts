// ═══════════════════════════════════════════════════════════════════
// HANGART TATTOO STUDIO — Configuration client
// Modifiez ce fichier pour personnaliser tout le site.
// ═══════════════════════════════════════════════════════════════════

export const client = {

  // ── Identité ──────────────────────────────────────────────────────
  nom:        "HANGART",
  nomComplet: "Hangart Tattoo Studio",
  tagline:    "Tattoo Studio",
  cri:        "Art. Peau. Perpignan.",
  slogan:     "Là où l'art devient permanent.",
  heroText:   "6 artistes. Une seule exigence : l'excellence.",
  ville:      "Perpignan",
  departement:"Pyrénées-Orientales",
  codePostal: "66000",
  adresse:    "68 Avenue de Grande-Bretagne, 66000 Perpignan",
  fondation:  "2019",

  // ── Coordonnées ───────────────────────────────────────────────────
  telephone:      "04 68 XX XX XX",
  telephoneLink:  "tel:+33468XXXXXX",
  email:          "contact@hangart-tattoo.fr",
  siret:          "953 502 713 00019",

  // ── Horaires ──────────────────────────────────────────────────────
  horaires: [
    { jour: "Lundi",    horaire: "11h00 – 19h00" },
    { jour: "Mardi",    horaire: "11h00 – 19h00" },
    { jour: "Mercredi", horaire: "11h00 – 19h00" },
    { jour: "Jeudi",    horaire: "11h00 – 20h00" },
    { jour: "Vendredi", horaire: "11h00 – 20h00" },
    { jour: "Samedi",   horaire: "10h00 – 19h00" },
    { jour: "Dimanche", horaire: "Fermé" },
  ],
  horairesResume: "Lun – Sam : 10h – 20h",

  // ── Réseaux ───────────────────────────────────────────────────────
  reseaux: {
    instagram: "https://www.instagram.com/hangart.tattoo.studio/",
    facebook:  "https://facebook.com/",
    tiktok:    "",
    youtube:   "",
    twitter:   "",
    linkedin:  "",
  },

  // ── SEO ───────────────────────────────────────────────────────────
  titreSEO: "HANGART Tattoo Studio — Perpignan (66) | 6 Artistes Tatoueurs | Réalisme · Manga · Blackwork",
  descriptionSEO: "Hangart Tattoo Studio à Perpignan — 6 artistes tatoueurs aux styles variés. Manga, réalisme, blackwork, traditionnel, sur mesure. Hygiène certifiée, tatouages 100% personnalisés. 68 avenue de Grande-Bretagne, 66000 Perpignan.",
  motsCles: [
    "tatoueur Perpignan",
    "salon tatouage Perpignan",
    "Hangart tattoo Perpignan",
    "tatouage manga Perpignan",
    "tatouage réalisme Perpignan",
    "tatouage sur mesure Perpignan",
    "studio tatouage 66",
    "tatouage Pyrénées-Orientales",
    "tatoueur avenue Grande-Bretagne Perpignan",
    "meilleur tatoueur Perpignan",
    "tatouage original Perpignan",
    "convention tatouage Perpignan",
  ],
  canonicalUrl: "https://www.hangart-tattoo.fr",
  ogImage: "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=1200&h=630&fit=crop",

  // ── Cookie & RGPD ─────────────────────────────────────────────────
  cookieConsent: true,

  // ── Google Maps ───────────────────────────────────────────────────
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47233!2d2.8954!3d42.6988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b06f1c0a1fc9c1%3A0x40819a5fd979a50!2s68+Av.+de+Grande-Bretagne%2C+66000+Perpignan!5e0!3m2!1sfr!2sfr!4v1700000000000",

  // ── Stats ─────────────────────────────────────────────────────────
  stats: [
    { chiffre: 6,    suffix: "",      label: "Artistes résidents" },
    { chiffre: 5,    suffix: " ans",  label: "d'existence" },
    { chiffre: 4800, suffix: "+",     label: "tatouages réalisés" },
    { chiffre: 100,  suffix: "%",     label: "aiguilles à usage unique" },
  ],

  // ── 6 ARTISTES ────────────────────────────────────────────────────
  // ⚠️  Pour remplacer les photos :
  //     Dans chaque artiste, commentez la ligne `photo:` active
  //     et décommentez la ligne `// photo: "/images/artiste-..."`
  artistes: [
    {
      slug: "thyttoo",
      pseudo: "THYTTOO",
      prenom: "Thy",
      style: "Réalisme & Portraits",
      styleShort: "Réalisme",
      description: "Thy transforme votre peau en toile photographique. Spécialiste du réalisme hyper-détaillé, ses portraits semblent sortir de la chair elle-même. Noir et gris ou couleurs — chaque pièce est une obsession.",
      biographie: "Formée dans l'univers des arts graphiques avant de trouver sa voie dans le tatouage, Thy a développé une précision technique hors pair. Ses portraits réalistes sont reconnaissables entre mille : des dégradés imperceptibles, des textures qui donnent l'illusion de relief. Après plusieurs années en guest dans des studios de Barcelone et Montpellier, elle pose définitivement ses machines à Perpignan, au Hangart.",
      specialites: ["Portrait réaliste", "Animaux", "Noir & gris", "Couleur hyper-réaliste"],
      experience: "9 ans",
      disponibilite: "Liste d'attente : 2 mois",
      couleur: "#D4FF00",
      // ⚠️  Photo — remplacez par votre vraie photo
      photo: "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=800&q=85",
      // photo: "/images/artistes/thyttoo.jpg",
      instagram: "https://instagram.com/",
      // ⚠️  Photos du portfolio de l'artiste
      portfolio: [
        "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=600&q=80",
        // "/images/portfolios/thyttoo-1.jpg",
        "https://images.unsplash.com/photo-1590246814883-55516d489eba?w=600&q=80",
        // "/images/portfolios/thyttoo-2.jpg",
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&q=80",
        // "/images/portfolios/thyttoo-3.jpg",
        "https://images.unsplash.com/photo-1586105449897-20b5efeb3233?w=600&q=80",
        // "/images/portfolios/thyttoo-4.jpg",
        "https://images.unsplash.com/photo-1564177702909-9c80f3eb4f0d?w=600&q=80",
        // "/images/portfolios/thyttoo-5.jpg",
        "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=600&q=80",
        // "/images/portfolios/thyttoo-6.jpg",
      ],
    },
    {
      slug: "cece",
      pseudo: "CECE",
      prenom: "Cécé",
      style: "Style Signature & Dark Art",
      styleShort: "Dark Art",
      description: "Cécé crée des mondes. Son style inclassable mêle dark art, surréalisme et illustration. Chaque pièce est une œuvre narrative qui ne ressemble à aucune autre.",
      biographie: "Après un voyage d'un an à travers l'Asie et l'Europe pour rencontrer des tatoueurs et juger des conventions, Cécé est revenu à Perpignan avec un univers visuel encore plus affirmé. Reconnu dans le milieu pour ses compositions sombres et poétiques, il participe régulièrement à des conventions nationales et européennes. Son style signature est immédiatement reconnaissable.",
      specialites: ["Dark art", "Illustration", "Surréalisme", "Sur mesure"],
      experience: "8 ans",
      disponibilite: "Disponible sous 6 semaines",
      couleur: "#FF3366",
      photo: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=800&q=85",
      // photo: "/images/artistes/cece.jpg",
      instagram: "https://www.instagram.com/cedanstapeau",
      portfolio: [
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&q=80",
        "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=600&q=80",
        "https://images.unsplash.com/photo-1590246814883-55516d489eba?w=600&q=80",
        "https://images.unsplash.com/photo-1564177702909-9c80f3eb4f0d?w=600&q=80",
        "https://images.unsplash.com/photo-1586105449897-20b5efeb3233?w=600&q=80",
        "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=600&q=80",
      ],
    },
    {
      slug: "cort",
      pseudo: "CORT",
      prenom: "Cort",
      style: "Traditionnel & Old School",
      styleShort: "Traditionnel",
      description: "Cort perpétue la tradition. Lignes épaisses, couleurs franches, compositions intemporelles — le tatouage dans son essence la plus pure. Un style qui vieillit comme du vin.",
      biographie: "Passionné de culture tattoo depuis l'adolescence, Cort a grandi avec les classiques : sailor jerry, flash sheets, old school americain. Mais sa maîtrise du trait lui permet de revisiter ces codes sans les trahir. Ses pièces sont solides, lisibles à 20 mètres, et restent magnifiques 20 ans après la pose.",
      specialites: ["Old school", "Americain traditionnel", "Flash", "Sailor Jerry"],
      experience: "11 ans",
      disponibilite: "Disponible sous 3 semaines",
      couleur: "#FF8C00",
      photo: "https://images.unsplash.com/photo-1590246814883-55516d489eba?w=800&q=85",
      // photo: "/images/artistes/cort.jpg",
      instagram: "https://instagram.com/",
      portfolio: [
        "https://images.unsplash.com/photo-1590246814883-55516d489eba?w=600&q=80",
        "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=600&q=80",
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&q=80",
        "https://images.unsplash.com/photo-1586105449897-20b5efeb3233?w=600&q=80",
        "https://images.unsplash.com/photo-1564177702909-9c80f3eb4f0d?w=600&q=80",
        "https://images.unsplash.com/photo-1590246814883-55516d489eba?w=600&q=80",
      ],
    },
    {
      slug: "dctatttoo",
      pseudo: "DCTATTTOO",
      prenom: "DC",
      style: "Manga & Pop Culture",
      styleShort: "Manga",
      description: "DC maîtrise le manga et la pop culture comme personne. Des personnages qui semblent sortir de leurs pages, des couleurs saturées, un dynamisme unique. L'animé sur peau.",
      biographie: "Enfant de la culture geek et manga, DC a toujours dessiné des personnages d'animes avant de commencer à les tatouer. Son expertise couvre aussi bien les grands classiques (Dragon Ball, Naruto, One Piece) que les séries actuelles. Sa technique de rendu des couleurs vibrantes lui vaut une clientèle internationale venue exprès à Perpignan.",
      specialites: ["Manga", "Anime", "Pop Culture", "Geek Art", "Couleurs vibrantes"],
      experience: "7 ans",
      disponibilite: "Disponible sous 4 semaines",
      couleur: "#00D4FF",
      photo: "https://images.unsplash.com/photo-1586105449897-20b5efeb3233?w=800&q=85",
      // photo: "/images/artistes/dctatttoo.jpg",
      instagram: "https://instagram.com/",
      portfolio: [
        "https://images.unsplash.com/photo-1586105449897-20b5efeb3233?w=600&q=80",
        "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=600&q=80",
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&q=80",
        "https://images.unsplash.com/photo-1590246814883-55516d489eba?w=600&q=80",
        "https://images.unsplash.com/photo-1564177702909-9c80f3eb4f0d?w=600&q=80",
        "https://images.unsplash.com/photo-1586105449897-20b5efeb3233?w=600&q=80",
      ],
    },
    {
      slug: "lab-rat",
      pseudo: "LAB RAT",
      prenom: "Lab Rat",
      style: "Blackwork & Géométrie",
      styleShort: "Blackwork",
      description: "Lab Rat expérimente. Géométrie sacrée, dotwork, compositions blackwork qui repoussent les limites. Un tatoueur qui traite votre peau comme un laboratoire.",
      biographie: "Le pseudo dit tout : Lab Rat traite chaque tatouage comme une expérience. Amateur de géométrie sacrée et de mathématiques, il construit ses compositions avec une rigueur scientifique. Ses dotworks et ses mandalas blackwork sont parmi les plus demandés du studio. Il est aussi passionné de cover-up — recouvrir un tatouage raté est pour lui un défi artistique qu'il relève avec brio.",
      specialites: ["Blackwork", "Géométrie sacrée", "Dotwork", "Mandala", "Cover-up"],
      experience: "10 ans",
      disponibilite: "Disponible sous 5 semaines",
      couleur: "#A8FF78",
      photo: "https://images.unsplash.com/photo-1564177702909-9c80f3eb4f0d?w=800&q=85",
      // photo: "/images/artistes/lab-rat.jpg",
      instagram: "https://instagram.com/",
      portfolio: [
        "https://images.unsplash.com/photo-1564177702909-9c80f3eb4f0d?w=600&q=80",
        "https://images.unsplash.com/photo-1590246814883-55516d489eba?w=600&q=80",
        "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=600&q=80",
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&q=80",
        "https://images.unsplash.com/photo-1586105449897-20b5efeb3233?w=600&q=80",
        "https://images.unsplash.com/photo-1564177702909-9c80f3eb4f0d?w=600&q=80",
      ],
    },
    {
      slug: "vins-fury",
      pseudo: "VINS FURY",
      prenom: "Vins",
      style: "Néo-traditionnel & Illustratif",
      styleShort: "Néo-trad",
      description: "Vins porte le néo-traditionnel à son paroxysme. Compositions denses, couleurs explosives, trait d'une confiance absolue. Ses pièces ont une énergie qui saute aux yeux.",
      biographie: "Vins Fury est entré dans le tatouage par la peinture. Cette culture artistique se ressent dans chaque composition : les couleurs sont orchestrées, les formes s'équilibrent, rien n'est laissé au hasard. Après avoir tatoué à Lyon et Paris, il rejoint le Hangart avec l'ambition de pousser le néo-traditionnel vers quelque chose de nouveau — plus violent, plus coloré, plus vivant.",
      specialites: ["Néo-traditionnel", "Illustratif", "Couleurs vives", "Animaux stylisés"],
      experience: "8 ans",
      disponibilite: "Disponible sous 4 semaines",
      couleur: "#FF6B9D",
      photo: "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=800&q=85",
      // photo: "/images/artistes/vins-fury.jpg",
      instagram: "https://instagram.com/",
      portfolio: [
        "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=600&q=80",
        "https://images.unsplash.com/photo-1586105449897-20b5efeb3233?w=600&q=80",
        "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&q=80",
        "https://images.unsplash.com/photo-1564177702909-9c80f3eb4f0d?w=600&q=80",
        "https://images.unsplash.com/photo-1590246814883-55516d489eba?w=600&q=80",
        "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=600&q=80",
      ],
    },
  ],

  // ── VIDÉOS ────────────────────────────────────────────────────────
  // ⚠️  Ajoutez vos URLs YouTube dans ce tableau.
  // Formats acceptés :
  //   - URL complète  : "https://www.youtube.com/watch?v=XXXXXXXX"
  //   - URL courte    : "https://youtu.be/XXXXXXXX"
  //   - ID seul       : "XXXXXXXX"
  // Pour masquer une vidéo : commentez la ligne ou supprimez-la.
  videos: [
    {
      titre: "Dans les coulisses du Hangart",
      description: "Une journée avec l'équipe — entre préparation, création et pose.",
      youtubeId: "dQw4w9WgXcQ", // ← Remplacez par votre vrai ID YouTube
      // youtubeId: "VOTRE-ID-ICI",
    },
    {
      titre: "Time-lapse — Full Sleeve en 8 heures",
      description: "De l'esquisse à la pose finale, un full sleeve en accéléré.",
      youtubeId: "dQw4w9WgXcQ",
      // youtubeId: "VOTRE-ID-ICI",
    },
    {
      titre: "Convention Tattoo Perpignan 2024",
      description: "Highlights de notre participation à la convention locale.",
      youtubeId: "dQw4w9WgXcQ",
      // youtubeId: "VOTRE-ID-ICI",
    },
  ],

  // ── Tarifs ────────────────────────────────────────────────────────
  tarifs: [
    { type: "Flash / Petite pièce",   taille: "< 5 cm",           prix: "Dès 80 €",       duree: "30 min – 1h" },
    { type: "Pièce moyenne",          taille: "5 – 15 cm",         prix: "Dès 200 €",      duree: "1h30 – 3h" },
    { type: "Grande pièce",           taille: "> 15 cm",           prix: "Dès 450 €",      duree: "4h+" },
    { type: "Half sleeve",            taille: "Demi-manchette",    prix: "Dès 1 000 €",    duree: "Plusieurs séances" },
    { type: "Full sleeve",            taille: "Manchette complète",prix: "Dès 2 000 €",    duree: "Plusieurs séances" },
    { type: "Cover-up",               taille: "Selon complexité",  prix: "Devis sur mesure",duree: "Variable" },
  ],
  tauxHoraire: "Tarif horaire studio : 120 €/h (variable selon l'artiste choisi)",
  acompte: "Acompte de 30% requis à la réservation.",

  // ── Hygiene & certifications ──────────────────────────────────────
  hygiene: [
    { titre: "Aiguilles usage unique",   desc: "100% des aiguilles sont jetées après chaque séance. Jamais réutilisées, jamais stérilisées pour réutilisation.",     icone: "01" },
    { titre: "Autoclave certifié",        desc: "Tout le matériel non jetable est stérilisé à l'autoclave à vapeur saturée — norme EN 13060.",                         icone: "02" },
    { titre: "Encres certifiées CE",      desc: "Nous n'utilisons que des encres certifiées conformes aux réglementations européennes REACH. Sans métaux lourds.",      icone: "03" },
    { titre: "Surfaces protégées",        desc: "Films barrières sur toutes les surfaces de contact. Changés entre chaque client. Désinfection complète du poste.",     icone: "04" },
    { titre: "EPI pour tous",             desc: "Gants stériles, masques chirurgicaux, tabliers pour chaque artiste. Protection du client ET de l'artiste.",            icone: "05" },
    { titre: "Formation hygiène",         desc: "Tous nos artistes sont titulaires du brevet professionnel de tatoueur incluant la formation hygiène et salubrité.",    icone: "06" },
  ],

  // ── FAQ ───────────────────────────────────────────────────────────
  faq: [
    { q: "Comment prendre rendez-vous ?", r: "Via le formulaire de contact ou directement en studio. Décrivez votre projet et choisissez votre artiste — on vous répond en 24h." },
    { q: "Vos tatouages sont-ils garantis ?", r: "Oui. Si votre tatouage vieillit mal dans les 2 premières semaines en raison d'une erreur technique (pas d'un mauvais aftercare), on corrige gratuitement." },
    { q: "Peut-on voir le dessin avant la séance ?", r: "Absolument. Pour les pièces personnalisées, un échange préalable permet de valider le design avant de toucher à la peau. Le dessin final est présenté le jour J." },
    { q: "Que faire avant ma séance ?", r: "Mangez bien, hydratez-vous, portez des vêtements adaptés. Évitez l'alcool 48h avant. Hydratez la zone à tatouer les jours précédents." },
    { q: "Faites-vous du cover-up ?", r: "Oui. Lab Rat est notre spécialiste cover-up. Consultation préalable obligatoire pour évaluer la faisabilité et proposer la meilleure solution." },
    { q: "Proposez-vous des séances flash ?", r: "Régulièrement ! Suivez notre Instagram pour les annonces de flash days — pièces prêtes à poser à tarif réduit." },
  ],

  // ── À propos ──────────────────────────────────────────────────────
  apropos: {
    p1: "Le Hangart est né d'une conviction simple : un studio de tatouage peut être à la fois un espace de création artistique sérieux et un lieu où l'on se sent bien. Sur l'avenue de Grande-Bretagne à Perpignan, notre espace baigné de lumière naturelle accueille 6 artistes qui ont chacun développé un style propre.",
    p2: "Depuis 2019, nous avons réalisé plus de 4 800 tatouages. Notre réputation repose sur trois piliers : l'hygiène irréprochable, le talent des artistes, et la personnalisation systématique. Nous ne copions pas — nous créons.",
    p3: "Plusieurs de nos artistes ont participé et gagné dans des competitions de type Ink Master. Nos conventions nous amènent en France et en Europe. Mais notre ancrage reste Perpignan et le département 66.",
    // ⚠️  Photo studio
    photoStudio: "https://images.unsplash.com/photo-1590246814883-55516d489eba?w=1200&q=85",
    // photoStudio: "/images/studio/hangart-studio.jpg",
  },

  // ── Mentions légales ──────────────────────────────────────────────
  responsable: "SCM HANGART TATTOO STUDIO",
  hebergeur: "Netlify, Inc. — San Francisco, CA 94107, USA",
};
