# Volta — Site premium VTT électriques de luxe (e-MTB)

Site vitrine e-commerce premium pour une marque de VTT électriques haut de
gamme, assemblés à la main au pied du Canigou. Identité **forêt-anthracite +
cuivre brûlé**, typo éditoriale, motif signature de **courbes de niveau
topographiques** et **profil d'altitude qui se dessine au scroll**. Tout est
piloté par `src/data/client.ts`. Marque par défaut : **Volta**, atelier à
Perpignan.

## Démarrage

```bash
npm install
npm run dev      # http://localhost:4035
npm run build
```

## Pages

| Page | URL | Rôle |
|---|---|---|
| Accueil | `/` | Hero parallax, profil d'altitude animé, collection, ingénierie, compteurs, flagship, avis |
| La collection | `/modeles` | Les 3 modèles en présentation cinématique alternée |
| **Fiche produit** | `/modeles/canigo` `…/carlit` `…/puigmal` | **Générées dynamiquement** depuis `modeles[]` |
| Essai & atelier | `/reservation` | Formulaire Web3Forms (pré-sélection modèle via URL) + carte |
| Mentions légales | `/mentions-legales` | noIndex |

> Ajouter un modèle = ajouter une entrée dans `client.modeles` → fiche produit
> complète générée automatiquement (route, SEO, schéma Product).

## ⭐ Fiches produits modernes (image + vidéo)

- **Hero plein cadre** + **configurateur de finitions** (clic = swap d'image en fondu)
- **Sélecteur de tailles** (S/M/L/XL selon le modèle)
- **Fiche technique** 6 specs (couple, batterie, autonomie, débattement…)
- **Bloc film (vidéo)** : poster image affiché tout de suite ; déposer le `.mp4`
  dans `public/videos/` et décommenter `<source>` dans `[slug].astro` pour
  activer la lecture auto en boucle (le bouton ▶ devient actif)
- **Points forts** numérotés + **galerie d'images**

## ✨ Effets « waouh » (CSS / vanilla JS, performants)

- **Profil d'altitude** SVG qui se trace au scroll (effet signature e-MTB)
- Motif **courbes de niveau** topographiques en filigrane sur plusieurs sections
- Hero **parallax**, titre monumental en cascade, compteurs animés
- Wordmark géant en outline (footer), carte Leaflet en mode nuit
- Tout respecte `prefers-reduced-motion`

## 🔁 Adapter la marque / les produits

Tout dans `src/data/client.ts` : identité, `modeles` (specs, finitions hex +
image, tailles, galerie, film, points forts, prix), `technologie`, `chiffres`,
avis, NAP, mots-clés. L'accent cuivre se change via `--cuivre` dans `Layout.astro`.

## 🖼️ Médias

Convention : `<img>` Unsplash active + chemin local commenté juste en dessous
(`imageLocale`, `galerieLocale`, `film.src`). **Images Unsplash = placeholders**,
à remplacer par les vraies photos produit avant mise en ligne.

## ✅ Checklist avant mise en ligne

- [ ] `site` (astro.config.mjs) + `siteUrl` (client.ts) + sitemap (robots.txt)
- [ ] Vraie clé `web3formsKey`
- [ ] Remplacer images placeholder + ajouter les vidéos
- [ ] SIRET / TVA dans `legal` ; NAP = fiche Google Business
- [ ] Soumettre le sitemap dans Search Console

## SEO embarqué

- Schéma **`Product`** par fiche (prix, EUR, dispo, marque, caractéristiques),
  **`ItemList`** sur la collection, **`Organization`** global
- Titles e-commerce avec prix : « Volta Canigó — VTT électrique all-mountain | 6 900 € »
- Mots-clés mixtes **national** (« VTT électrique haut de gamme », « carbone »,
  « grande autonomie ») et **local** (« VTT électrique Perpignan / Pyrénées-Orientales / Occitanie »)
- Meta geo FR-66, canonical, Open Graph, sitemap auto + robots.txt
- noIndex sur les mentions légales

## Conformité produit

Rappel VAE/EPAC (assistance bridée 25 km/h, norme EN 15194, art. R311-1 du Code
de la route) affiché sur les fiches produits et les mentions légales.

## Conventions LORN respectées

`template.json` (palette + accent) · `client.ts` central · `horaires` en
`{ jour, horaire }` · `motsCles` en tableau (`.join()` dans le Layout) ·
cookies `localStorage["cookies-choice"]` · `Object.entries(client.reseaux)` ·
Web3Forms avec `define:vars` · `noIndex` sur mentions-legales · `private: true` ·
placeholders Unsplash + chemins locaux commentés.

**Polices** : Bricolage Grotesque (display éditorial) + Geist (texte) + Geist
Mono (specs/data) — nouvelle combinaison, ajoutée au registre.

## Note de design

Identité, nom, modèles (sommets des Pyrénées-Orientales : Canigó, Carlit,
Puigmal) et contenus **100 % originaux**. Le positionnement « luxe artisanal au
pied du Canigou » ancre fortement le SEO local tout en visant le national.
