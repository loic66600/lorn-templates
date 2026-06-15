# Forge — Template artisan multi-métiers

Template vitrine éditorial haut de gamme pour artisan, entièrement piloté par
`src/data/client.ts`. Métier par défaut : ferronnier-métallier à Perpignan.

## Démarrage

```bash
npm install
npm run dev      # http://localhost:4032
npm run build
```

## Pages (5)

| Page | URL | Rôle |
|---|---|---|
| Accueil | `/` | Hero, savoir-faire, fiches d'atelier, zone d'intervention, avis |
| Réalisations | `/realisations` | Galerie filtrable par catégorie |
| L'atelier | `/a-propos` | Histoire, méthode en 4 étapes, garanties |
| Contact | `/contact` | Formulaire Web3Forms, horaires, carte Leaflet |
| Mentions légales | `/mentions-legales` | noIndex |

## 🔁 Changer de métier (5 minutes)

Tout se passe dans **`src/data/client.ts`** — aucun composant à modifier :

1. **`metier`** : `nom` (ex. "Menuisier"), `activite` (ex. "Menuiserie sur mesure"),
   `matiere` (ex. "le bois") et `geste` (ex. "façonné") — ces deux derniers
   composent le titre du hero : *« le bois, façonné à la main à Perpignan. »*
2. **`services`** : 6 prestations avec leur champ `matiere` (étiquette braise)
3. **`realisations`** : les fiches d'atelier (titre, catégorie, matière, commune, année)
4. **`seo.motsCles`** : remplacer par les mots-clés du métier
   (ex. "menuisier Perpignan", "fenêtre bois sur mesure 66"…)
5. **`processus`** et **`avis`** : adapter les textes

Optionnel : ajuster l'`accent` dans `template.json` + `--braise` dans
`Layout.astro` pour une teinte propre au métier (bois → ambre, plomberie →
bleu cuivre, etc.).

## 🖼️ Images

Convention habituelle : chaque `<img>` Unsplash active a son équivalent local
commenté juste en dessous (`/images/...`). Pour passer aux photos du client :
déposer les fichiers dans `public/images/`, commenter la ligne Unsplash,
décommenter la ligne locale.

## ✅ Checklist SEO local avant mise en ligne

- [ ] Remplacer `site` dans `astro.config.mjs` par le domaine final
- [ ] Mettre à jour `siteUrl` dans `client.ts` (canonical + JSON-LD)
- [ ] Mettre à jour l'URL du sitemap dans `public/robots.txt`
- [ ] Renseigner la vraie clé dans `web3formsKey`
- [ ] Vérifier le NAP (nom/adresse/téléphone) : identique au profil Google Business
- [ ] Compléter SIRET / TVA / assurance dans `legal`
- [ ] Créer/synchroniser la fiche **Google Business Profile** (même NAP, mêmes horaires)
- [ ] Soumettre le sitemap dans Google Search Console

## SEO embarqué

- JSON-LD `LocalBusiness` complet : géolocalisation, `areaServed` (12 communes),
  horaires, avis agrégés, réseaux sociaux
- Balises `geo.region` (FR-66), `geo.position`, ICBM
- Titles structurés « {Métier} à {Ville} — {Nom} | {Département} »
- Canonical + Open Graph sur toutes les pages
- Sitemap auto (`@astrojs/sitemap`) + robots.txt
- Zone d'intervention en clair sur l'accueil, le contact et le footer
- `noIndex` sur les mentions légales

## Conventions LORN respectées

`template.json` (palette + accent) · `client.ts` central · `horaires` en
`{ jour, horaire }` · `motsCles` en tableau (`.join()` dans le Layout) ·
cookies `localStorage["cookies-choice"]` · `Object.entries(client.reseaux)` ·
Web3Forms avec `define:vars` · `noIndex` sur mentions-legales ·
`private: true` · placeholders Unsplash + chemins locaux commentés.

**Polices** : Fraunces (display) + Epilogue (texte) — nouvelle combinaison,
ajoutée au registre.
