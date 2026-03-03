// ═══════════════════════════════════════════════════════════════════
// CONFIGURATION CLIENT — Menuisier Fenêtres & Portes
// Modifiez uniquement ce fichier pour personnaliser le site.
// ═══════════════════════════════════════════════════════════════════

export const client = {

  // ── Identité ──────────────────────────────────────────────────────
  nom: "Atelier Ferran",
  slogan: "Menuisier fenêtres & portes à Perpignan depuis 1998",
  sloganHero: "La précision au service de votre habitat.",
  metier: "Menuisier — Fenêtres & Portes",
  specialite: "Fabrication et pose de fenêtres, portes et volets sur mesure",
  ville: "Perpignan",
  departement: "Pyrénées-Orientales (66)",
  codePostal: "66000",
  adresse: "8 rue des Artisans, ZA Font Frède, 66000 Perpignan",

  // ── Coordonnées ───────────────────────────────────────────────────
  telephone: "04 68 XX XX XX",
  telephoneLink: "tel:+33468XXXXXX",
  email: "contact@atelier-ferran.fr",
  siret: "XXX XXX XXX 00000",

  // ── Horaires (tableau d'objets) ───────────────────────────────────
  horaires: [
    { jour: "Lundi",    horaire: "7h30 – 12h00 / 13h30 – 17h30" },
    { jour: "Mardi",    horaire: "7h30 – 12h00 / 13h30 – 17h30" },
    { jour: "Mercredi", horaire: "7h30 – 12h00 / 13h30 – 17h30" },
    { jour: "Jeudi",    horaire: "7h30 – 12h00 / 13h30 – 17h30" },
    { jour: "Vendredi", horaire: "7h30 – 12h00 / 13h30 – 16h30" },
    { jour: "Samedi",   horaire: "Sur rendez-vous" },
    { jour: "Dimanche", horaire: "Fermé" },
  ],
  horairesResume: "Lun – Ven : 7h30 – 17h30 | Sam sur RDV",

  // ── Réseaux sociaux (laisser "" pour masquer) ─────────────────────
  reseaux: {
    facebook:  "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin:  "",
    youtube:   "",
    tiktok:    "",
    twitter:   "",
  },

  // ── SEO ───────────────────────────────────────────────────────────
  titreSEO: "Atelier Ferran — Menuisier Fenêtres & Portes Perpignan (66) | Sur mesure depuis 1998",
  descriptionSEO: "Menuisier fabricant à Perpignan depuis 1998. Fenêtres PVC, aluminium et bois, portes d'entrée, volets, baies vitrées — sur mesure et pose comprise. Devis gratuit dans tout le 66.",
  motsCles: [
    "menuisier Perpignan",
    "fenêtres Perpignan",
    "portes Perpignan",
    "menuisier 66",
    "fenêtre PVC Perpignan",
    "fenêtre aluminium Perpignan",
    "porte d'entrée Perpignan",
    "volets Perpignan",
    "double vitrage Perpignan",
    "baie vitrée Perpignan",
    "menuisier Pyrénées-Orientales",
    "remplacement fenêtres 66",
  ],
  canonicalUrl: "https://www.atelier-ferran.fr",

  // ── Visuels ───────────────────────────────────────────────────────
  logo: "",
  ogImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=630&fit=crop",
  heroImage:  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85",
  heroImageAlt: "Atelier Ferran — menuiserie sur mesure à Perpignan",
  heroImage2: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80",
  heroImage3: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80",
  heroImage4: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80",

  // ── Google Maps ───────────────────────────────────────────────────
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47233!2d2.8954!3d42.6988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b06f1c0a1fc9c1%3A0x40819a5fd979a50!2sPerpignan!5e0!3m2!1sfr!2sfr!4v1700000000000",

  // ── Cookie ────────────────────────────────────────────────────────
  cookieConsent: true,

  // ── Stats ─────────────────────────────────────────────────────────
  stats: [
    { chiffre: 26,   suffix: " ans",  label: "d'expérience" },
    { chiffre: 1400, suffix: "+",     label: "chantiers réalisés" },
    { chiffre: 10,   suffix: " ans",  label: "de garantie décennale" },
    { chiffre: 50,   suffix: " km",   label: "de rayon d'intervention" },
  ],

  // ── Matériaux ─────────────────────────────────────────────────────
  materiaux: [
    {
      nom: "PVC",
      description: "Excellent rapport qualité-prix, isolation thermique et acoustique optimale, entretien quasi nul. Idéal pour la rénovation.",
      icone: "◻",
      avantages: ["Isolation A++", "Sans entretien", "Prix accessible", "Large choix de coloris"],
    },
    {
      nom: "Aluminium",
      description: "Robuste, élégant et moderne. Sections fines pour un maximum de lumière. Résistance accrue aux intempéries méditerranéennes.",
      icone: "◈",
      avantages: ["Profils minces", "Anti-corrosion", "Grande longévité", "Finitions RAL sur mesure"],
    },
    {
      nom: "Bois",
      description: "Chaleur, authenticité et performances thermiques naturelles. Traitement haute durabilité adapté au climat des Pyrénées-Orientales.",
      icone: "◉",
      avantages: ["Naturel & durable", "Isolation phonique", "Classement A+", "Réparable"],
    },
  ],

  // ── Services ──────────────────────────────────────────────────────
  services: [
    {
      titre: "Fenêtres sur mesure",
      description: "Fabrication et pose de fenêtres PVC, aluminium et bois. Simple, double ou triple vitrage selon votre exposition. Toutes dimensions, toutes formes — ouvrant à la française, oscillo-battant, coulissant, fixe.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      icone: "⊡",
      tags: ["PVC", "Aluminium", "Bois", "Triple vitrage", "Sur mesure"],
      featured: true,
    },
    {
      titre: "Portes d'entrée",
      description: "Portes d'entrée aluminium ou PVC pour particuliers et professionnels. Sécurité multipoints, isolation renforcée, finitions haut de gamme. Modèles vitrés, pleins, avec impostes.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
      icone: "▭",
      tags: ["Sécurité A2P", "Isolation", "Aluminium", "PVC", "Design"],
      featured: true,
    },
    {
      titre: "Volets & Stores",
      description: "Volets battants, roulants motorisés ou manuels, volets coulissants. Stores extérieurs et bannes. Solutions domotiques compatibles avec les systèmes connectés.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      icone: "⊟",
      tags: ["Motorisé", "Domotique", "Battants", "Roulants", "Stores"],
      featured: true,
    },
    {
      titre: "Baies vitrées & Coulissants",
      description: "Grandes baies coulissantes, galandage et à soufflets. Maximum de lumière et de vue sur l'extérieur. Rupture de pont thermique certifiée, sécurité anti-intrusion.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
      icone: "⊞",
      tags: ["Grande baie", "Galandage", "Thermique", "Sécurité"],
      featured: false,
    },
    {
      titre: "Portes de garage",
      description: "Portes sectionnelles, basculantes et latérales. Motorisation intégrée ou ajoutée. Isolation thermique renforcée, finitions sur mesure en aluminium ou acier.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      icone: "⊠",
      tags: ["Sectionnelle", "Motorisée", "Isolation", "Aluminium"],
      featured: false,
    },
    {
      titre: "Vérandas & Extensions vitrées",
      description: "Conception et pose de vérandas aluminium, auvents vitrés et extensions. Structures sur mesure, permis de construire si nécessaire, finitions intérieures comprises.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
      icone: "⊹",
      tags: ["Véranda", "Extension", "Aluminium", "Sur mesure"],
      featured: false,
    },
  ],

  // ── Processus ─────────────────────────────────────────────────────
  processus: [
    { num: "01", titre: "Visite & mesures",      description: "Déplacement gratuit pour prise de mesures précises, étude de l'existant, conseil sur les matériaux et performances adaptés à votre logement." },
    { num: "02", titre: "Devis détaillé",         description: "Devis chiffré sous 5 jours ouvrés. Prix ferme et définitif, fournitures et pose incluses. Aucun surcoût en cours de chantier." },
    { num: "03", titre: "Fabrication atelier",    description: "Production dans notre atelier de Perpignan. Contrôle qualité à chaque étape. Délai de fabrication : 4 à 6 semaines selon le modèle." },
    { num: "04", titre: "Pose & finitions",       description: "Pose par nos compagnons qualifiés. Jointoiement, finitions intérieures et extérieures soignées. Nettoyage et évacuation des déchets compris." },
    { num: "05", titre: "Réception & garanties",  description: "Visite de réception avec vous. Remise des attestations décennale et fabricant. Notice d'entretien et SAV réactif inclus." },
  ],

  // ── Réalisations ──────────────────────────────────────────────────
  realisations: [
    {
      titre: "Rénovation complète villa — 18 fenêtres",
      description: "Remplacement intégral sur villa des années 70. Fenêtres aluminium anthracite double vitrage 4/16/4 Ar, volets roulants motorisés.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
      categorie: "fenetres",
      materiau: "Aluminium",
      lieu: "Perpignan",
      annee: "2025",
    },
    {
      titre: "Porte d'entrée grand format aluminium",
      description: "Porte aluminium RAL 7016 vitrée, serrure multipoints A2P, poignée design inox brossé, imposte fixe vitrée.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=80",
      categorie: "portes",
      materiau: "Aluminium",
      lieu: "Canet-en-Roussillon",
      annee: "2025",
    },
    {
      titre: "Baie vitrée coulissante 4,80 m",
      description: "Grande baie coulissante 3 vantaux aluminium blanc, vitrage 44.2 mm feuilleté sécurité, stores extérieurs intégrés.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700&q=80",
      categorie: "baies",
      materiau: "Aluminium",
      lieu: "Saint-Estève",
      annee: "2025",
    },
    {
      titre: "Fenêtres bois chêne — mas catalan",
      description: "14 fenêtres et 2 portes-fenêtres en chêne naturel sur mas de caractère. Ferrures forgées, double vitrage à lame d'air.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80",
      categorie: "fenetres",
      materiau: "Bois",
      lieu: "Thuir",
      annee: "2024",
    },
    {
      titre: "Véranda aluminium 28 m²",
      description: "Extension vitrée aluminium blanc, toiture mixte polycarbonate et vitrage feuilleté, intégration volet roulant motorisé.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=80",
      categorie: "verandas",
      materiau: "Aluminium",
      lieu: "Rivesaltes",
      annee: "2024",
    },
    {
      titre: "Volets battants PVC — copropriété 24 logements",
      description: "Remplacement de 96 volets PVC blanc cassé sur immeuble R+3. Gestion de chantier, coordination syndic, délai respecté.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
      categorie: "volets",
      materiau: "PVC",
      lieu: "Perpignan",
      annee: "2024",
    },
  ],

  realisationsCategories: [
    { id: "all",       label: "Tous" },
    { id: "fenetres",  label: "Fenêtres" },
    { id: "portes",    label: "Portes" },
    { id: "baies",     label: "Baies vitrées" },
    { id: "volets",    label: "Volets" },
    { id: "verandas",  label: "Vérandas" },
  ],

  // ── Tarifs ────────────────────────────────────────────────────────
  tarifs: [
    {
      categorie: "Fenêtres",
      items: [
        { nom: "Fenêtre PVC 1 vantail (pose comprise)",      prix: "À partir de 450 €",  detail: "Double vitrage 4/16/4" },
        { nom: "Fenêtre PVC 2 vantaux (pose comprise)",      prix: "À partir de 650 €",  detail: "Double vitrage 4/16/4" },
        { nom: "Fenêtre aluminium (pose comprise)",           prix: "À partir de 750 €",  detail: "Thermique coupure de pont" },
        { nom: "Porte-fenêtre 2 vantaux (pose comprise)",    prix: "À partir de 900 €",  detail: "Toutes matières" },
      ],
    },
    {
      categorie: "Portes & Baies",
      items: [
        { nom: "Porte d'entrée aluminium (pose comprise)",   prix: "À partir de 1 800 €", detail: "Serrure multipoints" },
        { nom: "Baie vitrée coulissante 2 vantaux",          prix: "À partir de 2 200 €", detail: "Aluminium, pose comprise" },
        { nom: "Baie coulissante grand format (> 4 m)",      prix: "Sur devis",            detail: "Après visite technique" },
        { nom: "Porte de service / accès garage",            prix: "À partir de 900 €",   detail: "Aluminium ou PVC" },
      ],
    },
    {
      categorie: "Volets & Stores",
      items: [
        { nom: "Volet battant PVC (paire, pose comprise)",   prix: "À partir de 350 €",   detail: "Par fenêtre standard" },
        { nom: "Volet roulant manuel (pose comprise)",        prix: "À partir de 480 €",   detail: "Tablier alu ou PVC" },
        { nom: "Volet roulant motorisé (pose comprise)",      prix: "À partir de 680 €",   detail: "Moteur Somfy ou Nice" },
        { nom: "Store banne motorisé",                        prix: "À partir de 1 400 €", detail: "Structure alu, toile Dickson" },
      ],
    },
  ],

  // ── Aides financières ─────────────────────────────────────────────
  aides: [
    { titre: "MaPrimeRénov'",        montant: "Jusqu'à 40% du coût",   description: "Pour le remplacement de fenêtres énergivores. Cumulable avec CEE." },
    { titre: "CEE",                   montant: "Jusqu'à 15 €/m²",       description: "Certificats d'Économies d'Énergie versés par les fournisseurs d'énergie." },
    { titre: "TVA à 5,5%",           montant: "vs 20% standard",        description: "Applicable sur la fourniture et la pose pour les logements de plus de 2 ans." },
    { titre: "Éco-prêt à 0%",        montant: "Jusqu'à 30 000 €",      description: "Financement sans intérêts pour travaux de rénovation énergétique." },
  ],

  // ── Témoignages ───────────────────────────────────────────────────
  temoignages: [
    {
      nom: "Famille Bosch",
      texte: "Remplacement de 12 fenêtres et 3 portes-fenêtres. Chantier propre, équipe ponctuelle, résultat impeccable. On a économisé plus de 30% sur notre facture de chauffage dès le premier hiver.",
      note: 5,
      type: "Rénovation complète",
      ville: "Perpignan",
    },
    {
      nom: "M. et Mme Puig",
      texte: "Grande baie vitrée coulissante sur mesure. L'équipe Ferran a géré tout le chantier de A à Z, y compris les finitions intérieures. Prix transparent, délais respectés. Vraiment sérieux.",
      note: 5,
      type: "Baie vitrée 4,80 m",
      ville: "Canet-en-Roussillon",
    },
    {
      nom: "Résidence Les Corbières",
      texte: "Marché de 96 volets sur copropriété. Coordination parfaite avec le syndic, intervention propre et rapide sur chaque logement. Le conseil syndical a voté à l'unanimité pour une prochaine tranche.",
      note: 5,
      type: "Chantier copropriété",
      ville: "Perpignan",
    },
    {
      nom: "SCI Mas Catalan",
      texte: "Menuiseries bois sur mesure pour mas de caractère — fenêtres en chêne avec ferrures forgées. Atelier Ferran est le seul artisan qui a su nous proposer ce niveau de finition dans le 66.",
      note: 5,
      type: "Fenêtres bois sur mesure",
      ville: "Thuir",
    },
  ],

  // ── À propos ──────────────────────────────────────────────────────
  apropos: {
    titre: "L'artisan qui tient ses délais",
    sousTitre: "Fabricant menuisier depuis 1998 — Perpignan",
    paragraphe1: "Créé en 1998 par Éric Ferran, compagnon menuisier formé à Lyon, l'Atelier Ferran est un menuisier fabricant indépendant basé à Perpignan. Nous concevons, fabriquons et posons nos menuiseries depuis notre atelier de la ZA Font Frède. Aucune sous-traitance — vos fenêtres sortent de notre atelier, posées par nos propres compagnons.",
    paragraphe2: "En 26 ans, nous avons réalisé plus de 1 400 chantiers dans les Pyrénées-Orientales — du remplacement d'une seule fenêtre à la rénovation complète de copropriétés de 50 logements. Notre réputation repose sur une seule chose : nous faisons ce que nous disons, dans le délai annoncé, au prix convenu.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    imageAlt: "Atelier Ferran — menuiserie sur mesure Perpignan",
    certifications: [
      "Artisan Qualibat RGE 3711",
      "Certifié CSTB — Acotherm Th12",
      "Garantie décennale 10 ans",
      "Fabricant agréé Schüco & Kommerling",
      "Partenaire Somfy — pose certifiée",
    ],
    valeurs: [
      { titre: "Fabricant",       description: "Nous fabriquons dans notre propre atelier. Pas d'intermédiaire, pas de sous-traitance — maîtrise totale de la qualité.",      icone: "⚙" },
      { titre: "Précision",       description: "Chaque ouverture est mesurée au millimètre. Nos menuiseries s'ajustent parfaitement sans recourir à des mastics disgracieux.",   icone: "◎" },
      { titre: "Transparence",    description: "Devis ferme et définitif. Aucun surcoût caché, aucune mauvaise surprise en fin de chantier. Le prix annoncé est le prix final.",  icone: "▣" },
      { titre: "SAV réactif",     description: "Problème de fermeture, réglage nécessaire ? Nous intervenons sous 48h en garantie. Notre SAV reste actif bien après la pose.",   icone: "◈" },
    ],
  },

  // ── FAQ ───────────────────────────────────────────────────────────
  faq: [
    {
      question: "Quel est le délai entre la commande et la pose ?",
      reponse: "Comptez 4 à 6 semaines de fabrication, selon le modèle et la charge atelier. La pose dure généralement 1 à 2 jours pour une maison individuelle complète. Nous vous communiquons les dates précises à la signature du devis.",
    },
    {
      question: "PVC ou aluminium — que choisir pour le 66 ?",
      reponse: "Les deux matériaux sont excellents. Le PVC est plus économique et très performant thermiquement. L'aluminium offre des sections plus fines, un aspect plus contemporain et une meilleure résistance à long terme. Pour les façades exposées Tramontane, l'aluminium est souvent préférable.",
    },
    {
      question: "Puis-je bénéficier des aides MaPrimeRénov' ?",
      reponse: "Oui, si votre logement a plus de 15 ans et que les fenêtres posées atteignent le classement Acotherm Th12 (ce que nous fournissons systématiquement). Nous vous accompagnons dans le montage du dossier et pouvons déduire l'aide directement de votre facture.",
    },
    {
      question: "Intervenez-vous sur les chantiers de copropriété ?",
      reponse: "Absolument. Nous avons une solide expérience des marchés copropriété — coordination avec syndic et conseil syndical, planning par cage ou par étage, facturation conforme aux exigences comptables. Référence disponible sur demande.",
    },
    {
      question: "Faites-vous la réparation ou le réglage de fenêtres existantes ?",
      reponse: "Oui, dans la limite de notre zone d'intervention et de la disponibilité des pièces. Nous pouvons régler l'alignement, remplacer des joints, changer un vitrage fissuré ou réparer une ferrure. Appelez-nous pour un diagnostic rapide.",
    },
    {
      question: "Quelle garantie sur vos menuiseries ?",
      reponse: "10 ans de garantie décennale sur la pose, garantie fabricant de 10 ans sur les profils et de 5 ans sur la quincaillerie. Nous remettons les attestations à la réception de chantier.",
    },
  ],

  // ── Zones ─────────────────────────────────────────────────────────
  zones: [
    "Perpignan", "Canet-en-Roussillon", "Saint-Estève", "Rivesaltes",
    "Thuir", "Argelès-sur-Mer", "Cabestany", "Elne", "Le Soler",
    "Pia", "Toulouges", "Baho", "Villeneuve-de-la-Raho", "Prades",
    "Céret", "Le Boulou", "Argeles", "Collioure",
  ],
  rayonKm: 50,

  // ── Mentions légales ──────────────────────────────────────────────
  responsable: "M. Éric Ferran — EI Menuisier",
  hebergeur: "Netlify, Inc. — San Francisco, CA 94107, USA",
};
