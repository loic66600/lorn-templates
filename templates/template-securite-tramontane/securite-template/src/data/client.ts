// ============================================================
//  DONNÉES CLIENT — Tout le site se pilote depuis ce fichier.
//  Agence de sécurité privée & sécurité incendie.
// ============================================================

export const client = {
  // ---- Identité ----
  nom: "Tramontane Sécurité",
  activite: "Sécurité privée & sécurité incendie",
  slogan: "Veiller. Protéger. Intervenir.",
  description:
    "Agence de sécurité privée et de sécurité incendie basée à Perpignan. Gardiennage, rondes et interventions, sécurité événementielle, agents SSIAP : un dispositif opérationnel 24h/24 dans les Pyrénées-Orientales, en Occitanie et partout en France.",
  anneeFondation: 2014,

  dirigeant: {
    prenom: "Marc",
    nom: "Vidal",
    titre: "Directeur des opérations — 20 ans d'expérience terrain",
  },

  // ---- Agréments & certifications (obligatoires pour le secteur) ----
  agrements: {
    // Autorisation d'exercice CNAPS — OBLIGATOIRE sur le site (art. L612-14 CSI)
    cnaps: "AUT-066-2118-XX-XX-XXXXXXXXXX",
    // Mention légale obligatoire à afficher avec le n° d'autorisation
    mentionLegale:
      "L'autorisation d'exercice ne confère aucune prérogative de puissance publique à l'entreprise ou aux personnes qui en bénéficient.",
  },
  certifications: [
    "Autorisation CNAPS",
    "CQP APS",
    "SSIAP 1 · 2 · 3",
    "MAC à jour",
    "SST",
    "H0-B0",
    "Carte professionnelle agents",
  ],

  // ---- Chiffres clés (compteurs animés) ----
  chiffres: [
    { valeur: 45, suffixe: "+", label: "agents certifiés" },
    { valeur: 120, suffixe: "+", label: "sites protégés" },
    { valeur: 15, suffixe: " min", label: "délai moyen d'intervention" },
    { valeur: 24, suffixe: "/7", label: "PC opérationnel" },
  ],

  // ---- Coordonnées (NAP) ----
  adresse: {
    rue: "8 avenue de Grande-Bretagne",
    codePostal: "66000",
    ville: "Perpignan",
    departement: "Pyrénées-Orientales",
    region: "Occitanie",
  },
  geo: { lat: 42.7009, lng: 2.8917 },
  telephone: "04 68 00 00 00",
  telephoneLien: "+33468000000",
  urgence: "06 00 00 00 00",
  urgenceLien: "+33600000000",
  email: "contact@tramontane-securite.fr",
  siteUrl: "https://www.tramontane-securite.fr",

  // ---- Zone d'intervention (SEO local + national) ----
  zoneLocale: [
    "Perpignan",
    "Canet-en-Roussillon",
    "Cabestany",
    "Saint-Estève",
    "Rivesaltes",
    "Argelès-sur-Mer",
    "Saint-Cyprien",
    "Elne",
    "Céret",
    "Narbonne",
    "Montpellier",
    "Toulouse",
  ],
  zoneNationale:
    "Déploiement national pour l'événementiel, les tournées et les grands comptes multi-sites : Paris, Lyon, Marseille, Bordeaux et toute la France.",

  // ---- Horaires (bureaux — le PC sécurité tourne 24h/24) ----
  horaires: [
    { jour: "Lundi", horaire: "8h30 – 18h30" },
    { jour: "Mardi", horaire: "8h30 – 18h30" },
    { jour: "Mercredi", horaire: "8h30 – 18h30" },
    { jour: "Jeudi", horaire: "8h30 – 18h30" },
    { jour: "Vendredi", horaire: "8h30 – 18h30" },
    { jour: "Samedi", horaire: "Sur rendez-vous" },
    { jour: "Dimanche", horaire: "PC uniquement — 24h/24" },
  ],

  // ---- Réseaux sociaux ----
  reseaux: {
    linkedin: "https://www.linkedin.com/company/tramontane-securite",
    instagram: "https://www.instagram.com/tramontane.securite",
  },

  // ---- Formulaire (Web3Forms) ----
  web3formsKey: "VOTRE_CLE_WEB3FORMS",

  // ---- SEO ----
  seo: {
    motsCles: [
      "société de sécurité Perpignan",
      "agent de sécurité Pyrénées-Orientales",
      "gardiennage Perpignan 66",
      "sécurité incendie SSIAP Perpignan",
      "sécurité événementielle Occitanie",
      "rondes et interventions Perpignan",
      "agence de sécurité privée Occitanie",
      "société de gardiennage France",
      "agent SSIAP Montpellier Toulouse",
      "sécurité privée CNAPS",
    ],
  },

  // ---- Prestations — double pôle ----
  poles: [
    {
      id: "privee",
      nom: "Sécurité privée",
      code: "PÔLE 01",
      description:
        "Protéger les biens et les personnes, dissuader, intervenir. Des agents titulaires de la carte professionnelle, encadrés et contrôlés sur site.",
      prestations: [
        {
          titre: "Gardiennage & surveillance",
          certification: "CQP APS · Carte pro",
          description:
            "Agents de sécurité en poste fixe sur vos sites : contrôle d'accès, filtrage, surveillance de site industriel, tertiaire ou commercial, main courante électronique.",
        },
        {
          titre: "Rondes & interventions",
          certification: "PC 24/7 · Géolocalisation",
          description:
            "Rondes de sûreté aléatoires ou programmées, levée de doute sur alarme, intervention sur déclenchement en moins de 15 minutes sur le secteur de Perpignan.",
        },
        {
          titre: "Sécurité événementielle",
          certification: "CQP APS · Palpation",
          description:
            "Dispositifs complets pour concerts, salons, compétitions sportives et événements d'entreprise : contrôle d'accès, palpations, gestion de flux, équipes cynophiles sur demande. Partout en France.",
        },
      ],
    },
    {
      id: "incendie",
      nom: "Sécurité incendie",
      code: "PÔLE 02",
      description:
        "Prévenir le risque incendie et garantir la conformité de vos ERP et IGH, avec des agents SSIAP qualifiés et à jour de leurs recyclages.",
      prestations: [
        {
          titre: "Agents SSIAP 1 · 2 · 3",
          certification: "SSIAP · SST · H0-B0",
          description:
            "Mise à disposition d'agents de sécurité incendie pour vos ERP, IGH et sites industriels : rondes incendie, tenue du poste de sécurité, permis feu, assistance à personne.",
        },
        {
          titre: "Audit & conformité incendie",
          certification: "SSIAP 3 · Réglementation ERP",
          description:
            "Audit de vos installations, registre de sécurité, préparation aux commissions de sécurité, plans d'évacuation et formation de vos équipes aux premiers gestes.",
        },
        {
          titre: "Dispositifs prévisionnels",
          certification: "SSIAP · DPS",
          description:
            "Couverture incendie de vos événements et chantiers : analyse de risque, moyens humains et matériels dimensionnés, coordination avec les services de secours.",
        },
      ],
    },
  ],

  // ---- Secteurs d'activité couverts ----
  secteurs: [
    "Commerces & retail",
    "Sites industriels",
    "Tertiaire & bureaux",
    "Événementiel & spectacle",
    "Chantiers & BTP",
    "Logistique & entrepôts",
    "Hôtellerie & camping",
    "Collectivités",
  ],

  // ---- Méthode (page À propos) ----
  processus: [
    {
      titre: "Audit de sûreté gratuit",
      description:
        "Visite de votre site, analyse des risques et des flux, identification des points sensibles. Sans engagement, sous 72h sur le secteur de Perpignan.",
    },
    {
      titre: "Dispositif sur mesure",
      description:
        "Proposition chiffrée : effectifs, qualifications, consignes, moyens techniques. Chaque poste est défini dans un cahier des consignes contractuel.",
    },
    {
      titre: "Déploiement & supervision",
      description:
        "Mise en place des équipes, briefing terrain, supervision par notre PC opérationnel 24h/24 avec contrôles de poste inopinés.",
    },
    {
      titre: "Reporting & amélioration",
      description:
        "Main courante électronique, rapports d'événements en temps réel, bilan mensuel et ajustement continu du dispositif.",
    },
  ],

  // ---- Engagements ----
  engagements: [
    {
      titre: "100 % carte professionnelle",
      description:
        "Tous nos agents sont titulaires de la carte professionnelle CNAPS en cours de validité, vérifiée avant chaque prise de poste.",
    },
    {
      titre: "Encadrement terrain",
      description:
        "Un chef de secteur dédié par client, des contrôles de poste réguliers et un PC joignable à toute heure.",
    },
    {
      titre: "Réactivité contractuelle",
      description:
        "Délais d'intervention et de remplacement inscrits au contrat. Un agent absent est remplacé, jamais excusé.",
    },
  ],

  // ---- Avis clients ----
  avis: [
    {
      nom: "Direction de site logistique",
      ville: "Rivesaltes",
      note: 5,
      texte:
        "Dispositif en place depuis 3 ans : agents ponctuels, rigoureux, reporting impeccable. Le remplacement en cas d'absence est systématique et anticipé.",
    },
    {
      nom: "Organisateur de festival",
      ville: "Argelès-sur-Mer",
      note: 5,
      texte:
        "60 agents déployés sur 4 jours, coordination parfaite avec la gendarmerie et les secours. Professionnalisme remarquable sur la gestion des flux.",
    },
    {
      nom: "Gestionnaire de centre commercial",
      ville: "Perpignan",
      note: 5,
      texte:
        "Équipe SSIAP stable et compétente, commissions de sécurité passées sans réserve depuis qu'ils tiennent notre poste central.",
    },
  ],

  // ---- Partenaires & accréditations (page L'agence) ----
  partenaires: [
    {
      acronyme: "USP",
      nom: "Union des entreprises de Sécurité Privée",
      description: "Syndicat professionnel représentatif — membres agréés CNAPS",
      categorie: "Syndicat professionnel",
    },
    {
      acronyme: "CNAPS",
      nom: "Conseil National des Activités Privées de Sécurité",
      description: "Organe de contrôle et autorisation d'exercice — CNAPS",
      categorie: "Instance de contrôle",
    },
    {
      acronyme: "SDIS 66",
      nom: "Service Départemental d'Incendie et de Secours",
      description: "Coordination opérationnelle incendie — Pyrénées-Orientales",
      categorie: "Service public",
    },
    {
      acronyme: "AXA",
      nom: "AXA Assurances",
      description: "Partenaire assureur — RC Pro & garanties opérationnelles",
      categorie: "Assurance",
    },
    {
      acronyme: "GEOS",
      nom: "GEOS Sûreté & Sécurité",
      description: "Réseau partenaire pour missions et renforts nationaux",
      categorie: "Partenaire opérationnel",
    },
    {
      acronyme: "HKVS",
      nom: "Hikvision France",
      description: "Solutions vidéosurveillance & contrôle d'accès intégrés",
      categorie: "Technologie",
    },
  ],

  // ---- Postes ouverts (page Recrutement) ----
  postes: [
    {
      titre: "Agent de sécurité",
      reference: "CQP APS",
      type: "CDI — Temps plein",
      description:
        "Surveillance de site, contrôle d'accès, rondes et interventions sur alarme. Poste basé à Perpignan et la périphérie, sous supervision PC 24/7.",
      prerequis: [
        "Carte professionnelle CNAPS valide",
        "CQP APS ou équivalent",
        "Permis B apprécié",
        "Aptitude médicale à jour",
      ],
    },
    {
      titre: "Agent SSIAP 1",
      reference: "SSIAP 1 · SST",
      type: "CDI / CDD",
      description:
        "Poste de sécurité incendie en ERP et IGH. Rondes incendie, tenue du registre de sécurité, premiers secours, alerte et évacuation.",
      prerequis: [
        "Carte pro CNAPS valide",
        "SSIAP 1 à jour (recyclage ≤ 3 ans)",
        "SST à jour",
        "Habilitation H0-B0",
      ],
    },
    {
      titre: "Chef d'équipe SSIAP 2",
      reference: "SSIAP 2",
      type: "CDI — Temps plein",
      description:
        "Coordination des agents SSIAP 1, supervision du poste de sécurité, interface avec les secours. Expérience en ERP requise.",
      prerequis: [
        "Carte pro CNAPS valide",
        "SSIAP 2 à jour",
        "SST à jour",
        "Expérience confirmée en ERP type M ou R",
      ],
    },
    {
      titre: "Agent événementiel",
      reference: "CQP APS · Palpation",
      type: "CDD / Missions",
      description:
        "Concerts, salons, compétitions sportives partout en France. Palpation autorisée indispensable. Missions ponctuelles week-ends et soirées.",
      prerequis: [
        "Carte pro CNAPS valide",
        "Autorisation palpation valide",
        "Disponibilités week-ends et soirées",
        "Mobilité régionale et nationale",
      ],
    },
  ],

  // ---- Mentions légales ----
  legal: {
    formeJuridique: "SAS au capital de 50 000 €",
    siret: "000 000 000 00000",
    tva: "FR00000000000",
    assurance: "Responsabilité civile professionnelle — AXA Assurances",
    hebergeur: "Netlify, Inc. — 512 2nd Street, San Francisco, CA 94107, USA",
  },
};

export type Client = typeof client;
