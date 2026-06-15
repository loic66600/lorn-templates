# Tramontane — Template agence de sécurité privée & incendie

Template vitrine premium, esthétique « poste de commandement », entièrement
piloté par `src/data/client.ts`. Client par défaut : Tramontane Sécurité,
Perpignan.

## Démarrage

```bash
npm install
npm run dev      # http://localhost:4033
npm run build
```

## Pages (5)

| Page | URL | Rôle |
|---|---|---|
| Accueil | `/` | Hero radar + HUD, compteurs animés, 2 pôles, secteurs, zones, avis |
| Prestations | `/prestations` | Détail des 2 pôles (sécurité privée / incendie) |
| L'agence | `/a-propos` | Histoire, procédure en 4 étapes, engagements, habilitations, recrutement |
| Contact | `/contact` | Bandeau urgence 24/7, formulaire Web3Forms, carte Leaflet nuit |
| Mentions légales | `/mentions-legales` | noIndex + mention CNAPS |

## ⚡ Effets « waouh » embarqués

- **Radar de surveillance** animé dans le hero (conic-gradient + ping)
- **HUD temps réel** : horloge live, pastilles de statut pulsantes
- **Scanline** verticale lente sur tout le site (signature salle de contrôle)
- **Compteurs animés** au scroll (agents, sites, délai d'intervention)
- **Boutons à coins coupés** (clip-path tactique), marquee certifications
- **Carte Leaflet en mode nuit** (filtre CSS sur tuiles CARTO)
- Tous les effets respectent `prefers-reduced-motion`

## ⚖️ Conformité secteur sécurité

Le numéro d'autorisation CNAPS et la mention de l'art. L612-14 du Code de la
sécurité intérieure sont **obligatoires** sur tous les documents commerciaux,
site inclus. Ils sont affichés dans le footer (toutes pages), sur la page
agence et dans les mentions légales — pilotés par `client.agrements`.
**Remplacer impérativement le numéro placeholder par le vrai numéro CNAPS.**

## 🔁 Adapter à une autre agence

Tout dans `src/data/client.ts` : identité, `agrements.cnaps`, `poles`
(prestations des 2 pôles), `chiffres` (compteurs), `secteurs`, `zoneLocale` /
`zoneNationale`, `engagements`, `processus`, avis, mots-clés.

## 🖼️ Images

Convention habituelle : `<img>` Unsplash active + équivalent local commenté
juste en dessous (`/images/...`). Déposer les photos dans `public/images/`,
inverser les commentaires.

## ✅ Checklist SEO avant mise en ligne

- [ ] `site` dans `astro.config.mjs` + `siteUrl` dans `client.ts` + sitemap dans `robots.txt`
- [ ] Vraie clé `web3formsKey`
- [ ] Vrai numéro CNAPS dans `agrements.cnaps`
- [ ] NAP identique au profil Google Business
- [ ] SIRET / TVA / assurance dans `legal`
- [ ] Fiche Google Business Profile synchronisée + Search Console

## SEO embarqué (local + national)

- JSON-LD `LocalBusiness` avec `areaServed` à trois niveaux :
  **villes** (12 communes), **région** (Occitanie), **pays** (France)
- `knowsAbout` métier (sécurité privée, SSIAP, événementiel…)
- Meta geo FR-66 + ICBM, canonical, OG, sitemap auto + robots.txt
- Titles double cible : « … à Perpignan — {Nom} | Occitanie & France »
- Mots-clés mixtes local (« gardiennage Perpignan 66 ») et national
  (« société de gardiennage France »)

## Conventions LORN respectées

`template.json` (palette + accent) · `client.ts` central · `horaires` en
`{ jour, horaire }` · `motsCles` en tableau (`.join()` dans le Layout) ·
cookies `localStorage["cookies-choice"]` · `Object.entries(client.reseaux)` ·
Web3Forms avec `define:vars` · `noIndex` sur mentions-legales ·
`private: true` · placeholders Unsplash + chemins locaux commentés.

**Polices** : Chakra Petch (display) + Archivo (texte) + JetBrains Mono
(données/HUD) — nouvelle combinaison, ajoutée au registre.
