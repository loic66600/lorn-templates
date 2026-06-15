# Mistral — Site premium trottinettes électriques (esthétique hypercar)

Site vitrine e-commerce premium pour une marque de trottinettes électriques
haut de gamme, dans un langage visuel cinéma noir inspiré de l'univers des
hypercars (canvas noir, type condensé monumental en capitales, bleu lumineux
comme seul accent, médias plein cadre). Tout est piloté par
`src/data/client.ts`. Marque par défaut : **Mistral**, atelier à Perpignan.

## Démarrage

```bash
npm install
npm run dev      # http://localhost:4034
npm run build
```

## Pages

| Page | URL | Rôle |
|---|---|---|
| Accueil | `/` | Hero parallax plein cadre, gamme, compteurs animés, ingénierie, flagship, avis |
| La gamme | `/modeles` | Les 3 modèles en présentation cinématique alternée |
| **Fiche produit** | `/modeles/zephyr` `…/sirocco` `…/autan` | **Générées dynamiquement** depuis `modeles[]` |
| Essai & réservation | `/reservation` | Formulaire Web3Forms (pré-sélection modèle via URL) + carte |
| Mentions légales | `/mentions-legales` | noIndex |

> Ajouter un modèle = ajouter une entrée dans `client.modeles` → une nouvelle
> fiche produit complète est générée automatiquement (route, SEO, schéma Product).

## ⭐ Fiches produits modernes (image + vidéo)

Chaque fiche produit contient :
- **Hero plein cadre** avec le modèle + **configurateur de finitions** : cliquer
  une pastille de couleur change l'image du produit (fondu) sans rechargement
- **Fiche technique** en grille (6 specs)
- **Bloc film (vidéo)** : le `poster` (image) s'affiche immédiatement ; déposer
  le `.mp4` dans `public/videos/` et décommenter `<source>` dans `[slug].astro`
  pour activer la lecture auto en boucle. Le bouton ▶ devient fonctionnel.
- **Points forts** numérotés
- **Galerie d'images** (première en pleine largeur)
- Suggestions des autres modèles

## ✨ Effets « waouh » (tous CSS / vanilla JS, performants)

- Hero **parallax** au scroll + apparition en cascade du titre monumental
- **Compteurs animés** (easing) au scroll
- Wordmark géant en outline dans le footer
- Reveals au scroll, hovers cinétiques, configurateur live
- Carte Leaflet **en mode nuit** (filtre CSS sur tuiles CARTO)
- Tout respecte `prefers-reduced-motion`

## 🔁 Adapter la marque / les produits

Tout dans `src/data/client.ts` : identité, `modeles` (specs, finitions avec
hex + image, galerie, film, points forts, prix), `technologie`, `chiffres`,
avis, NAP, mots-clés. Les noms de modèles (vents) et l'accent bleu se changent
en quelques lignes.

## 🖼️ Médias

Convention : `<img>` Unsplash active + chemin local commenté juste en dessous
(`imageLocale`, `galerieLocale`, `film.src`). Déposer les fichiers dans
`public/images/` et `public/videos/`, puis inverser les commentaires.
**Les images Unsplash sont des placeholders** — à remplacer par les vraies
photos produit avant mise en ligne.

## ✅ Checklist avant mise en ligne

- [ ] `site` (astro.config.mjs) + `siteUrl` (client.ts) + sitemap (robots.txt)
- [ ] Vraie clé `web3formsKey`
- [ ] Remplacer les images placeholder par les photos produit + ajouter les vidéos
- [ ] SIRET / TVA dans `legal` ; vérifier le NAP = fiche Google Business
- [ ] Soumettre le sitemap dans Search Console

## SEO embarqué

- Schéma **`Product`** par fiche (prix, devise EUR, disponibilité, marque,
  caractéristiques), **`ItemList`** sur la gamme, **`Organization`** global
- Titles e-commerce avec prix : « Mistral Autan — Trottinette électrique
  performance | 3 990 € »
- Mots-clés mixtes **national** (« trottinette électrique premium française »,
  « longue autonomie ») et **local** (« trottinette électrique Perpignan /
  Occitanie »)
- Meta geo FR-66, canonical, Open Graph, sitemap auto + robots.txt
- noIndex sur les mentions légales

## Conformité produit

Page mentions légales : rappel du cadre EDPM (bridage 25 km/h, âge minimal,
assurance RC). La note de bridage s'affiche automatiquement sur les fiches dont
une spec contient un astérisque (ici l'Autan).

## Conventions LORN respectées

`template.json` (palette + accent) · `client.ts` central · `horaires` en
`{ jour, horaire }` · `motsCles` en tableau (`.join()` dans le Layout) ·
cookies `localStorage["cookies-choice"]` · `Object.entries(client.reseaux)` ·
Web3Forms avec `define:vars` · `noIndex` sur mentions-legales · `private: true` ·
placeholders Unsplash + chemins locaux commentés.

**Polices** : Saira Condensed (display caps) + Manrope (texte) + Spline Sans
Mono (specs/HUD) — nouvelle combinaison, ajoutée au registre.

## Note de design

Le site reprend les **principes** de mise en page et la **gamme chromatique**
de l'univers hypercar premium (noir + bleu, type monumental, photo plein cadre)
comme demandé, mais avec une identité, un nom, des modèles et des contenus
**100 % originaux** — aucun logo, nom ou visuel d'une marque existante n'est
réutilisé.
