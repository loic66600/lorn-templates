// ══════════════════════════════════════════════════════════════
// CONFIGURATION CLIENT — Barbershop / Salon de coiffure homme
// Modifiez uniquement ce fichier pour personnaliser le site.
// ══════════════════════════════════════════════════════════════

export const client = {

  // ── Identité ────────────────────────────────────────────────
  nom: "Black & Gold Barbershop",
  slogan: "L'art du barbier, le souci du détail",
  metier: "Barbershop",
  specialite: "Coupe homme, barbe, rasage traditionnel",
  ville: "Perpignan",
  departement: "Pyrénées-Orientales (66)",

  // ── Coordonnées ─────────────────────────────────────────────
  telephone: "06 00 00 00 00",
  telephoneLink: "tel:+33600000000",
  email: "contact@blackandgold-barber.fr",
  adresse: "42 rue Mailly, 66000 Perpignan",

  // ── Horaires ────────────────────────────────────────────────
  horaires: "Mar – Ven : 9h – 19h | Sam : 9h – 18h",
  horairesFerme: "Fermé dimanche & lundi",
  horairesSemaine: [
    { jour: "Lundi", heures: "Fermé", ferme: true },
    { jour: "Mardi", heures: "9h – 19h", ferme: false },
    { jour: "Mercredi", heures: "9h – 19h", ferme: false },
    { jour: "Jeudi", heures: "9h – 19h", ferme: false },
    { jour: "Vendredi", heures: "9h – 19h", ferme: false },
    { jour: "Samedi", heures: "9h – 18h", ferme: false },
    { jour: "Dimanche", heures: "Fermé", ferme: true },
  ],

  // ── Réseaux sociaux (laisser "" pour masquer) ───────────────
  reseaux: {
    instagram: "https://instagram.com/votre-barbershop",
    facebook: "https://facebook.com/votre-barbershop",
    tiktok: "https://tiktok.com/@votre-barbershop",
    linkedin: "",
    youtube: "",
    twitter: "",
  },

  // ── SEO ─────────────────────────────────────────────────────
  titreSEO: "Black & Gold Barbershop — Coiffeur Barbier à Perpignan | Coupe, Barbe, Rasage",
  descriptionSEO: "Barbershop à Perpignan. Coupe homme, taille de barbe, rasage traditionnel au coupe-chou. Rendez-vous en ligne.",
  motsCles: "barbier perpignan, coiffeur homme 66, barbershop, taille barbe, rasage traditionnel, fade",

  // ── Visuels ─────────────────────────────────────────────────
  logo: "/images/logo.png",
  ogImage: "/images/og.jpg",
  heroImage: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&q=80",
  heroImageAlt: "Intérieur barbershop vintage avec fauteuils en cuir",
  bannerImage: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1920&q=80",

  // ── Google Maps (laisser "" pour désactiver) ────────────────
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2926!2d2.8954!3d42.6988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b06f1c0a1fc9c1%3A0x40819a5fd979a50!2sPerpignan!5e0!3m2!1sfr!2sfr",

  // ── Bannière cookies ────────────────────────────────────────
  cookieConsent: true,

  // ── Couleur dominante ───────────────────────────────────────
  couleur: "#B8860B", // or foncé

  // ── L'équipe / Barbiers ─────────────────────────────────────
  equipe: [
    { prenom: "Laure", role: "Fondatrice & Master Barber", experience: "12 ans", specialite: "Skin fade, razor art", image: "/images/laure.png" },
    { prenom: "Meech", role: "Barbier Senior", experience: "8 ans", specialite: "Barbe sculptée, hot towel", image: "/images/meech.png" },
    { prenom: "Remi", role: "Barbier", experience: "4 ans", specialite: "Coupe classique, pompadour", image: "/images/remi.png" },
  ],

  // ── Services & Tarifs ───────────────────────────────────────
  services: [
    { titre: "Coupe homme", prix: "25€", duree: "30 min", description: "Consultation, shampoing, coupe aux ciseaux ou tondeuse, coiffage.", icone: "✂️", populaire: true },
    { titre: "Coupe + Barbe", prix: "38€", duree: "50 min", description: "Coupe complète + taille de barbe précise, huile de finition.", icone: "💈", populaire: true },
    { titre: "Taille de barbe", prix: "18€", duree: "20 min", description: "Contours rasoir, taille tondeuse, baume hydratant.", icone: "🧔", populaire: false },
    { titre: "Rasage traditionnel", prix: "30€", duree: "35 min", description: "Serviette chaude, mousse au blaireau, rasage au coupe-chou, aftershave.", icone: "🪒", populaire: false },
    { titre: "Skin Fade", prix: "30€", duree: "40 min", description: "Dégradé progressif à blanc. Mid, high ou low fade.", icone: "🔥", populaire: true },
    { titre: "Coloration barbe", prix: "15€", duree: "20 min", description: "Coloration naturelle pour couvrir les premiers cheveux blancs.", icone: "🎨", populaire: false },
    { titre: "Forfait Père & Fils", prix: "40€", duree: "45 min", description: "1 coupe adulte + 1 coupe enfant (–12 ans).", icone: "👨‍👦", populaire: false },
    { titre: "Coupe enfant (–12 ans)", prix: "18€", duree: "20 min", description: "Coupe adaptée, ambiance détendue.", icone: "👦", populaire: false },
  ],

  // ── Galerie ─────────────────────────────────────────────────
  galerie: [
    { image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80", alt: "Skin fade impeccable", categorie: "Coupe" },
    { image: "https://images.unsplash.com/photo-1599351431613-18ef1fdd27e1?w=800&q=80", alt: "Rasage au coupe-chou", categorie: "Rasage" },
    { image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80", alt: "Taille de barbe sculptée", categorie: "Barbe" },
    { image: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=800&q=80", alt: "Ambiance du salon", categorie: "Ambiance" },
    { image: "https://images.unsplash.com/photo-1585747860019-8e4c2e1b1e4e?w=800&q=80", alt: "Pompadour classique", categorie: "Coupe" },
    { image: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=800&q=80", alt: "Détail dégradé", categorie: "Coupe" },
  ],

  galerieBonus: [
    { image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", alt: "Portrait client satisfait", categorie: "Résultat" },
    { image: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&q=80", alt: "Outils du barbier", categorie: "Ambiance" },
    { image: "https://images.unsplash.com/photo-1596728325395-481c8f3e5bfa?w=800&q=80", alt: "Hot towel en cours", categorie: "Rasage" },
    { image: "https://images.unsplash.com/photo-1578253859798-1e2c0e4a8e24?w=800&q=80", alt: "Barbe longue entretenue", categorie: "Barbe" },
    { image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&q=80", alt: "Fauteuil vintage", categorie: "Ambiance" },
    { image: "https://images.unsplash.com/photo-1587909209111-5097ee578ec3?w=800&q=80", alt: "Finition cire coiffante", categorie: "Coupe" },
  ],

  // ── Témoignages ─────────────────────────────────────────────
  temoignages: [
    { nom: "Karim B.", texte: "Le meilleur barbershop de Perpignan, point final. Marco est un artiste, le fade est toujours impeccable. L'ambiance est top.", note: 5 },
    { nom: "Thomas L.", texte: "J'y vais toutes les 3 semaines depuis l'ouverture. Le rasage traditionnel est une expérience incroyable, ça vaut le détour.", note: 5 },
    { nom: "David R.", texte: "Enfin un vrai barbershop qui prend le temps. Pas de rush, du bon son, un café offert. Le forfait père-fils est génial.", note: 5 },
  ],

  // ── À propos ────────────────────────────────────────────────
  apropos: {
    titre: "Plus qu'un barbershop, un rituel",
    sousTitre: "Depuis 2018 à Perpignan",
    paragraphe1: "Black & Gold est né d'une conviction : aller chez le barbier ne devrait pas être une corvée, mais un moment pour soi. Un rituel. Un espace où le temps s'arrête, où le souci du détail prime sur la cadence.",
    paragraphe2: "Notre équipe de 3 barbiers passionnés vous accueille dans un cadre authentique, entre cuir patiné, bois brut et musique soul. Ici, on prend le temps de comprendre ce que vous voulez, et on s'assure que vous repartez avec le sourire.",
    image: "/images/laure.png",
    imageAlt: "Laure, fondatrice du barbershop",
    image2: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=800&q=80",
    image2Alt: "Produits et outils de barbier",
    valeurs: [
      { titre: "Savoir-faire", description: "Techniques traditionnelles et modernes maîtrisées.", icone: "✂️" },
      { titre: "Authenticité", description: "Un cadre vintage, une ambiance vraie, pas de superflu.", icone: "💈" },
      { titre: "Précision", description: "Chaque détail compte — lignes, dégradés, contours.", icone: "🎯" },
      { titre: "Convivialité", description: "Café offert, bon son, discussions entre hommes.", icone: "☕" },
    ],
  },

  // ── Lien de réservation (laisser "" pour formulaire intégré) ─
  lienReservation: "", // ex: "https://planity.com/votre-barbershop"

  // ── Mentions légales ────────────────────────────────────────
  responsable: "M. Marco Santos",
  siret: "000 000 000 00000",
  hebergeur: "Netlify, Inc. — San Francisco, CA 94107, USA",
};
