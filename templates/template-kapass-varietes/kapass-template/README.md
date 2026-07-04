# Kapass Variétés — Site mobile-first (duo show & karaoké)

Site vitrine **mobile-first** pour le duo de variété et show karaoké Kapass
Variétés (Cathy & Pascal). Reproduction fidèle de la charte fournie : fond
sombre, or doré, dégradés violets, typo ronde. Tout le contenu se pilote depuis
`src/data/client.ts`. SEO local **Perpignan / Occitanie**.

## Démarrage

```bash
npm install
npm run dev      # http://localhost:4036
npm run build
```

## Pages (5)

| Page | URL | Contenu |
|---|---|---|
| Accueil | `/` | Hero, « Pourquoi choisir », immersion + note 4.9/5, prestations, témoignages, CTA |
| Événements | `/evenements` | Types d'événements, sonorisation pro, déroulement en 4 étapes, CTA |
| Photos | `/photos` | Galerie filtrable (Tout / Sur scène / Karaoké / Ambiance / Événements / Matériel) |
| Contact | `/contact` | Coordonnées, zone d'intervention, formulaire complet + devis |
| Mentions légales | `/mentions-legales` | noIndex |

## 📱 Mobile-first

Le CSS est écrit pour mobile d'abord, puis enrichi aux breakpoints `560px`,
`640px`, `768px`, `980px`, `1024px`. Sur mobile : menu plein écran (burger),
grilles en 1 colonne, témoignages en carrousel à défilement tactile (scroll-snap),
galerie en 1 colonne (masonry CSS), CTA empilés. Les maquettes desktop fournies
sont reproduites aux grands breakpoints.

## 🎨 Charte graphique (fidèle aux maquettes)

- Fond `#100F12`, cartes `#1A181E`
- Or `#EFC662` (accent principal, boutons « Réserver », titres en surbrillance)
- Violet `#8A6AD0` (dégradés de hero, boutons secondaires « Voir les prestations / tarifs »)
- Texte `#F6F4EF`, gris `#9B97A1`
- **Polices** : Poppins (titres, ronde et bold comme la maquette) + Inter (texte)
- Boutons pleins or et boutons à bordure violette, coins arrondis pill
- Logo Kapass intégré dans le header et le footer (`public/logo-kapass.png`)

## 🔁 Modifier le contenu

Tout dans `src/data/client.ts` : coordonnées (NAP), zone d'intervention,
atouts, prestations, témoignages, types d'événements, étapes, galerie (avec
catégories pour le filtre), types d'événement du formulaire, mots-clés.

## 🖼️ Images

Les photos de scène/ambiance sont des **placeholders Unsplash** (chemins locaux
commentés dessous dans `client.ts`). Remplacez-les par les vraies photos de
Cathy & Pascal : déposez-les dans `public/images/` et inversez les commentaires.
Le **logo** est déjà le vrai logo Kapass fourni.

## ✅ Checklist avant mise en ligne

- [ ] `site` (astro.config.mjs) + `siteUrl` (client.ts) + sitemap (robots.txt)
- [ ] Vrais téléphone / email dans `client.ts`
- [ ] Vraie clé `web3formsKey` (formulaire de contact)
- [ ] Remplacer les images placeholder par les vraies photos
- [ ] SIRET dans `legal`
- [ ] Créer / synchroniser la fiche Google Business Profile (même NAP) + Search Console

## SEO embarqué (local Perpignan / Occitanie)

- Schéma **`LocalBusiness` + `MusicGroup`** : membres (Cathy, Pascal), genres,
  géolocalisation, `areaServed` (10 communes), avis agrégés **4.9/5**
- Titles localisés : « … à Perpignan (Occitanie) »
- Mots-clés ciblés : « duo variété Perpignan », « show karaoké Perpignan »,
  « animation mariage Pyrénées-Orientales », « repas dansant Occitanie »…
- Meta geo FR-66 + ICBM, canonical, Open Graph (avec logo), sitemap + robots
- noIndex sur les mentions légales
- `theme-color` sombre pour l'UI mobile

## Conventions LORN respectées

`template.json` (palette + accent + accentSecondaire) · `client.ts` central ·
`horaires`/listes structurées · `motsCles` en tableau (`.join()` dans le Layout) ·
cookies `localStorage["cookies-choice"]` · `Object.entries(client.reseaux)` ·
Web3Forms avec `define:vars` · `noIndex` sur mentions-legales · `private: true` ·
placeholders Unsplash + chemins locaux commentés.

**Polices** : Poppins + Inter — choisies pour coller à la charte fournie.
