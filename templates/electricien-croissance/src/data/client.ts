// ══════════════════════════════════════════════════════════════
// CONFIGURATION CLIENT — Électricien / Installation électrique
// Modifiez uniquement ce fichier pour personnaliser le site.
// ══════════════════════════════════════════════════════════════

export const client = {

  // ── Identité ────────────────────────────────────────────────
  nom: "Volterra Électricité",
  slogan: "Électricien certifié depuis 2004",
  sloganHero: "L'électricité que vous méritez.",
  metier: "Électricien",
  specialite: "Installation, rénovation, domotique & dépannage électrique",
  ville: "Perpignan",
  departement: "Pyrénées-Orientales (66)",
  codePostal: "66000",
  adresse: "18 rue Maréchal Foch, 66000 Perpignan",

  // ── Coordonnées ─────────────────────────────────────────────
  telephone: "04 68 XX XX XX",
  telephoneLink: "tel:+33468XXXXXX",
  email: "contact@volterra-electricite.fr",
  siret: "XXX XXX XXX 00000",

  // ── Horaires (tableau d'objets — utilisé avec .map()) ───────
  horaires: [
    { jour: "Lundi",    horaire: "8h00 – 18h00" },
    { jour: "Mardi",    horaire: "8h00 – 18h00" },
    { jour: "Mercredi", horaire: "8h00 – 18h00" },
    { jour: "Jeudi",    horaire: "8h00 – 18h00" },
    { jour: "Vendredi", horaire: "8h00 – 17h00" },
    { jour: "Samedi",   horaire: "Sur rendez-vous" },
    { jour: "Dimanche", horaire: "Urgences uniquement" },
  ],
  horairesResume: "Lun – Ven : 8h – 18h | Urgences 24h/24 7j/7",

  // ── Urgence ─────────────────────────────────────────────────
  urgence: true,
  urgenceTel: "06 XX XX XX XX",
  urgenceTelLink: "tel:+336XXXXXXXX",
  urgenceTexte: "Panne électrique ? Intervention d'urgence 24h/24 — 7j/7",

  // ── Réseaux sociaux (laisser "" pour masquer) ───────────────
  reseaux: {
    facebook:  "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin:  "",
    youtube:   "",
    tiktok:    "",
    twitter:   "",
  },

  // ── SEO Perpignan & 66 ──────────────────────────────────────
  titreSEO: "Volterra Électricité — Électricien Perpignan (66) | Installation & Dépannage 24h/24",
  descriptionSEO: "Électricien certifié Qualifelec à Perpignan. Installation tableau électrique, mise aux normes, domotique, borne de recharge, dépannage 24h/24. Devis gratuit dans tout le 66.",
  // IMPORTANT : tableau de strings — utilisé avec .join() dans Layout.astro
  motsCles: [
    "électricien Perpignan",
    "électricien 66",
    "installation électrique Perpignan",
    "tableau électrique Perpignan",
    "mise aux normes électricité 66",
    "dépannage électrique Perpignan",
    "électricien urgence Perpignan",
    "domotique Perpignan",
    "borne recharge véhicule électrique 66",
    "Qualifelec Perpignan",
    "électricien Pyrénées-Orientales",
  ],
  canonicalUrl: "https://www.volterra-electricite.fr",

  // ── Zones d'intervention ────────────────────────────────────
  zones: [
    "Perpignan", "Canet-en-Roussillon", "Saint-Estève", "Rivesaltes",
    "Thuir", "Argelès-sur-Mer", "Cabestany", "Baho", "Toulouges",
    "Elne", "Le Boulou", "Pia", "Saleilles",
  ],
  rayonKm: 35,

  // ── Visuels ─────────────────────────────────────────────────
  logo: "",
  ogImage: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&h=630&fit=crop",
  heroImage: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&q=85",
  heroImageAlt: "Électricien professionnel travaillant sur un tableau électrique",
  heroImage2: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
  heroImage3: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",

  // ── Google Maps ─────────────────────────────────────────────
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47233!2d2.8954!3d42.6988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b06f1c0a1fc9c1%3A0x40819a5fd979a50!2sPerpignan!5e0!3m2!1sfr!2sfr!4v1700000000000",

  // ── Cookie ──────────────────────────────────────────────────
  cookieConsent: true,

  // ── Stats ────────────────────────────────────────────────────
  stats: [
    { chiffre: 20,   suffix: " ans",  label: "d'expérience" },
    { chiffre: 2400, suffix: "+",     label: "chantiers réalisés" },
    { chiffre: 35,   suffix: " km",   label: "de rayon d'action" },
    { chiffre: 2,    suffix: "h",     label: "délai urgence garanti" },
  ],

  // ── Services ─────────────────────────────────────────────────
  services: [
    {
      titre: "Tableau électrique",
      description: "Remplacement et mise aux normes de tableaux électriques NF C 15-100. Disjoncteurs différentiels, protection foudre, câblage structuré.",
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
      icone: "🔌",
      tags: ["NF C 15-100", "Mise aux normes", "Protection foudre"],
      featured: true,
    },
    {
      titre: "Installation complète",
      description: "Câblage neuf, prises, éclairage, VMC, chauffage électrique. Construction neuve ou rénovation totale — chantier propre et soigné.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      icone: "🏠",
      tags: ["Neuf & rénovation", "Câblage", "VMC"],
      featured: true,
    },
    {
      titre: "Domotique & smart home",
      description: "Volets roulants connectés, éclairage intelligent Philips Hue / Legrand Céliane, prises connectées, alarme, interphone vidéo.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      icone: "📱",
      tags: ["Volets connectés", "Smart home", "Alarme"],
      featured: false,
    },
    {
      titre: "Borne de recharge IRVE",
      description: "Installation de bornes de recharge pour véhicules électriques (IRVE). Particuliers et copropriétés. Certification IRVE obligatoire.",
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
      icone: "🔋",
      tags: ["IRVE certifié", "Wallbox", "Copropriété"],
      featured: false,
    },
    {
      titre: "Photovoltaïque",
      description: "Installation de panneaux solaires raccordés au réseau ou en autoconsommation. Étude de rentabilité offerte. Éligible MaPrimeRénov'.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      icone: "☀️",
      tags: ["Panneaux solaires", "Autoconsommation", "MaPrimeRénov'"],
      featured: false,
    },
    {
      titre: "Dépannage & urgence",
      description: "Panne totale, disjoncteur qui saute, court-circuit, choc électrique — intervention en moins de 2h, 24h/24, 7j/7 sur Perpignan et le 66.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      icone: "⚡",
      tags: ["Urgence 2h", "24h/24", "Panne totale"],
      featured: false,
    },
  ],

  // ── Processus ────────────────────────────────────────────────
  processus: [
    { num: "01", titre: "Diagnostic gratuit", description: "Je viens analyser votre installation, évaluer les risques et mesurer vos besoins. Déplacement offert sur Perpignan." },
    { num: "02", titre: "Devis précis", description: "Devis détaillé sous 24h avec fournitures, main d'œuvre et délai. Tarif fixe garanti — aucune surprise." },
    { num: "03", titre: "Travaux certifiés", description: "Chantier réalisé selon les normes NF C 15-100. Protection des meubles, propreté garantie en fin de journée." },
    { num: "04", titre: "Attestation Consuel", description: "Remise du certificat de conformité Consuel pour votre assurance et la mise en service d'EDF." },
  ],

  // ── Réalisations ─────────────────────────────────────────────
  realisations: [
    {
      titre: "Rénovation tableau 200 m²",
      description: "Remplacement tableau vétuste + mise aux normes NF C 15-100 complète dans villa.",
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=700&q=80",
      categorie: "tableau",
      lieu: "Perpignan centre",
      annee: "2025",
      detail: "Villa 200 m²",
    },
    {
      titre: "Smart home appartement neuf",
      description: "Intégration domotique complète Legrand Céliane avec application mobile.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",
      categorie: "domotique",
      lieu: "Canet-en-Roussillon",
      annee: "2025",
      detail: "Appartement T4",
    },
    {
      titre: "Borne IRVE copropriété",
      description: "Installation de 8 bornes de recharge en copropriété avec gestion RFID.",
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=700&q=80",
      categorie: "irve",
      lieu: "Saint-Estève",
      annee: "2025",
      detail: "8 bornes 22 kW",
    },
    {
      titre: "Câblage maison neuve R+1",
      description: "Installation électrique complète de A à Z — VMC, chauffage, éclairage.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
      categorie: "installation",
      lieu: "Rivesaltes",
      annee: "2024",
      detail: "Maison 145 m²",
    },
    {
      titre: "Panneaux solaires 9 kWc",
      description: "Installation 18 panneaux bifaciaux avec onduleur et suivi production.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",
      categorie: "photovoltaique",
      lieu: "Thuir",
      annee: "2024",
      detail: "9 kWc — économie 1 200€/an",
    },
    {
      titre: "Dépannage urgence nuit",
      description: "Court-circuit total résolu en 90 min, minuit. Remplacement câble endommagé.",
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=700&q=80",
      categorie: "urgence",
      lieu: "Perpignan",
      annee: "2025",
      detail: "Intervention 1h30",
    },
  ],

  realisationsCategories: [
    { id: "all",            label: "Tous" },
    { id: "tableau",        label: "Tableau électrique" },
    { id: "installation",   label: "Installation" },
    { id: "domotique",      label: "Domotique" },
    { id: "irve",           label: "Borne IRVE" },
    { id: "photovoltaique", label: "Photovoltaïque" },
    { id: "urgence",        label: "Urgence" },
  ],

  // ── Tarifs ───────────────────────────────────────────────────
  tarifs: [
    {
      categorie: "Dépannage & mise aux normes",
      items: [
        { nom: "Déplacement + diagnostic",     prix: "À partir de 60€",  detail: "Déduit du devis si travaux" },
        { nom: "Remplacement disjoncteur",      prix: "À partir de 80€",  detail: "Fourniture + pose" },
        { nom: "Réfection tableau électrique",  prix: "800€ – 2 500€",   detail: "Selon tableau et taille logement" },
        { nom: "Mise aux normes NF C 15-100",   prix: "Sur devis",        detail: "Après diagnostic complet" },
      ],
    },
    {
      categorie: "Installation & Rénovation",
      items: [
        { nom: "Point lumineux complet",        prix: "À partir de 90€",  detail: "Câblage + appareillage" },
        { nom: "Prise de courant",              prix: "À partir de 60€",  detail: "Encastrée + câble" },
        { nom: "Câblage neuf logement T2/T3",   prix: "2 000€ – 5 000€", detail: "Selon surface et norme" },
        { nom: "Installation VMC",              prix: "À partir de 350€", detail: "Pose + raccordement" },
      ],
    },
    {
      categorie: "Domotique & Photovoltaïque",
      items: [
        { nom: "Volet roulant connecté (unité)", prix: "À partir de 280€", detail: "Moteur + module wifi" },
        { nom: "Borne IRVE 7 kW (particulier)",  prix: "À partir de 600€", detail: "Wallbox + pose + Consuel" },
        { nom: "Panneaux solaires 3 kWc",        prix: "À partir de 4 500€", detail: "Fournitures + pose + raccordement" },
        { nom: "Panneaux solaires 6 kWc",        prix: "À partir de 7 800€", detail: "Éligible MaPrimeRénov'" },
      ],
    },
  ],

  // ── Témoignages ──────────────────────────────────────────────
  temoignages: [
    {
      nom: "Rémi & Isabelle T.",
      texte: "Intervention en urgence un dimanche soir — arrivé en moins d'une heure. Professionnel, efficace, honnête. Le tarif annoncé était le tarif facturé. Bravo !",
      note: 5,
      type: "Dépannage urgence",
      ville: "Perpignan",
    },
    {
      nom: "Marc A.",
      texte: "Réfection complète du tableau électrique dans ma maison de 180 m². Travail impeccable, certifié Consuel, pris en charge par mon assurance. Je recommande vivement.",
      note: 5,
      type: "Tableau électrique",
      ville: "Canet-en-Roussillon",
    },
    {
      nom: "Syndic Les Platanes",
      texte: "8 bornes IRVE installées dans notre copropriété. Gestion parfaite du chantier, coordination avec l'assemblée générale, certification livrée dans les délais.",
      note: 5,
      type: "Borne IRVE copropriété",
      ville: "Saint-Estève",
    },
    {
      nom: "Famille Bonnafous",
      texte: "Installation domotique complète dans notre maison neuve. Les volets, l'éclairage et le chauffage sont maintenant pilotés depuis notre téléphone. Magique.",
      note: 5,
      type: "Domotique smart home",
      ville: "Rivesaltes",
    },
  ],

  // ── À propos ─────────────────────────────────────────────────
  apropos: {
    titre: "20 ans à illuminer le 66",
    sousTitre: "Électricien Qualifelec, certifié IRVE et RGE",
    paragraphe1: "Formé à Lyon et installé à Perpignan depuis 2004, j'ai fondé Volterra Électricité pour apporter un service haut de gamme dans le 66 : des installations soignées, conformes aux normes NF C 15-100, avec des matériaux sélectionnés pour leur durabilité. Chaque chantier est unique — je m'adapte à votre logement, vos habitudes et votre budget.",
    paragraphe2: "Avec une équipe de 4 électriciens qualifiés, nous intervenons sur tous types de projets : de la mise aux normes urgente au câblage d'une maison neuve, en passant par la domotique et les panneaux solaires. Aucune sous-traitance : c'est toujours nous qui travaillons chez vous.",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
    imageAlt: "Électricien professionnel certifié",
    certifications: [
      "Qualifelec",
      "RGE — Reconnu Garant de l'Environnement",
      "Certification IRVE",
      "Habilitation BR — BC — B2V",
      "Consuel agréé",
    ],
    valeurs: [
      { titre: "Conformité",     description: "Chaque installation respecte la norme NF C 15-100 et donne lieu à une attestation Consuel.",   icone: "📋" },
      { titre: "Sécurité",       description: "Votre sécurité prime. On ne transige pas sur la qualité des matériaux ni sur les protections.", icone: "🛡️" },
      { titre: "Réactivité",     description: "Urgences traitées en moins de 2h. Devis sous 24h pour les projets planifiés.",                 icone: "⚡" },
      { titre: "Transparence",   description: "Devis précis, tarif fixe, facturation claire. Jamais de mauvaise surprise.",                  icone: "🤝" },
    ],
  },

  // ── FAQ ──────────────────────────────────────────────────────
  faq: [
    {
      question: "Intervenez-vous en urgence la nuit et le week-end ?",
      reponse: "Oui. Notre service d'urgence est disponible 24h/24, 7j/7, y compris les jours fériés. Appelez le numéro d'urgence — un électricien se déplace sous 2h sur Perpignan et dans un rayon de 35 km.",
    },
    {
      question: "Le devis est-il vraiment gratuit ?",
      reponse: "Oui, le déplacement pour diagnostic et l'établissement du devis sont entièrement gratuits et sans engagement. Si vous acceptez le devis, nous déduisons 60€ du montant des travaux.",
    },
    {
      question: "Êtes-vous certifié pour les bornes IRVE ?",
      reponse: "Oui, nos électriciens sont certifiés IRVE (Infrastructure de Recharge pour Véhicules Électriques), certification obligatoire pour l'installation de bornes. Nous intervenons chez les particuliers, les entreprises et les copropriétés.",
    },
    {
      question: "Faut-il être présent pendant les travaux ?",
      reponse: "Non, ce n'est pas obligatoire. Nous pouvons travailler de façon autonome avec un double de clé. Nous vous appelons à la livraison pour la réception du chantier.",
    },
    {
      question: "Mon installation est-elle aux normes ?",
      reponse: "Si votre logement a plus de 15 ans et n'a pas été rénové, il est probable que l'installation ne soit pas aux normes NF C 15-100. On vous propose un diagnostic électrique complet à partir de 90€, déductible si vous faites les travaux.",
    },
    {
      question: "Pouvez-vous installer des panneaux solaires ?",
      reponse: "Oui, nous sommes certifiés RGE pour l'installation photovoltaïque. Nous réalisons l'étude de faisabilité, l'installation complète et les démarches de raccordement Enedis. Éligible MaPrimeRénov' et TVA à 10%.",
    },
  ],

  // ── Mentions légales ─────────────────────────────────────────
  responsable: "M. Volterra Antoine — EI Électricien",
  hebergeur: "Netlify, Inc. — San Francisco, CA 94107, USA",
};
