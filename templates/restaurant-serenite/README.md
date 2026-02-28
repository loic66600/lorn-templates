# Template Restaurant v2 — Bistrot / Brasserie / Gastronomique

## Lancer en local

```bash
cd tpl-restaurant
npm install astro
npm run dev
# → http://localhost:4001
```

## ✅ Toutes les pages activées par défaut

| Page | URL | Désactivable ? |
|---|---|---|
| Accueil | `/` | Non (page principale) |
| Notre histoire | `/a-propos` | Oui |
| Galerie | `/galerie` | Oui |
| Mentions légales | `/mentions-legales` | Non (obligatoire RGPD) |

### Pour désactiver une page :
```bash
mv src/pages/a-propos.astro src/pages-off/a-propos.astro
mv src/pages/galerie.astro src/pages-off/galerie.astro
```
Puis retirer le lien correspondant dans la navbar (index.astro).

## Structure

```
tpl-restaurant/
├── src/data/client.ts               ← TOUTE la config ici
├── src/pages/
│   ├── index.astro                  ← Page d'accueil
│   ├── a-propos.astro               ← Notre histoire + Chef + Valeurs
│   ├── galerie.astro                ← Galerie photos masonry (12 photos)
│   └── mentions-legales.astro       ← RGPD
├── src/pages-off/                   ← Pages désactivées (vide par défaut)
├── src/layouts/Layout.astro         ← Moteur d'animations + cookie banner
└── public/images/                   ← Remplacer par vos photos
```

## Personnalisation rapide

### 1. Identité
Dans `client.ts` : nom, slogan, téléphone, email, adresse, horaires (tableau détaillé jour par jour).

### 2. Images
Toutes les images sont des liens Unsplash. Pour remplacer :
- Mettre vos images dans `public/images/`
- Changer les URLs dans `client.ts`

### 3. Réseaux sociaux
`client.ts` → `reseaux: { ... }`. Laisser `""` pour masquer. Supporte : facebook, instagram, tiktok, linkedin, youtube, twitter, tripadvisor.

### 4. Google Maps
`client.ts` → `googleMapsEmbed`. Laisser `""` pour masquer.

### 5. Bannière cookies
`client.ts` → `cookieConsent: true/false`.

### 6. Réservation
- **Formulaire intégré** : Par défaut (`lienReservation: ""`)
- **Lien externe** : Mettre l'URL TheFork/LaFourchette dans `lienReservation`

### 7. Carte / Menu
`client.ts` → `carte: [...]`. Chaque plat a : nom, description, prix, categorie, image, vegetarien (true/false).
Les catégories sont auto-détectées pour les onglets de filtrage.

### 8. Formules
`client.ts` → `formules: [...]`. Affichées en ribbon horizontal sous le hero.

## Layout unique — Structure visuelle

| Section | Design |
|---|---|
| **Hero** | Centré fullbleed (typographie display géante, overlay élégant, pas de split) |
| **Formules** | Ribbon horizontal (4 cartes icône + prix en ligne) |
| **Carte** | Grille image-texte avec onglets catégorie (Entrées/Plats/Desserts) + badge végétarien |
| **Citation** | Parallaxe citation du chef (blockquote italique) |
| **Galerie** | Preview 4 photos (1 grande + 3 petites) + lien galerie complète |
| **Témoignages** | Masonry à 2 colonnes (hauteurs variables) |
| **Horaires** | Tableau horaires jour par jour + formulaire réservation côte à côte |
| **Footer** | 3 colonnes + réseaux sociaux + TripAdvisor |

### Page À propos (unique au restaurant)
- Layout split avec 2 images superposées (chef + ambiance)
- Badge flottant nom du chef
- Valeurs : Produits locaux, Fait maison, Carte des saisons, Cave sélectionnée

### Page Galerie (unique au restaurant)
- Masonry 3 colonnes, 12 photos
- Blur→Sharp reveal + Image Zoom hover

## Effets intégrés

| Effet | Usage |
|---|---|
| Ken Burns | Hero background, citation parallaxe |
| Blur → Sharp | Galerie photos |
| Clip Reveal | Image principale à propos |
| Hover Lift | Toutes les cartes |
| Image Zoom | Galerie, carte |
| Gradient Shift | Overlay parallaxe citation |
| Scroll reveals | Toutes les sections |
| Menu tabs filter | Onglets catégorie sur la carte (JS) |

## Palette

- **Background** : #FDFBF7 (crème chaleureux)
- **Alt** : #F8F3EB (beige doux)
- **Cards** : #FFFFFF
- **Wine** : #7F1D1D (bordeaux, accent principal)
- **Gold** : #B45309 (décorations ✦, sous-titres)
- **Dark** : #1C1412 (section sombre horaires)
- **Display font** : Playfair Display (titres — serif élégant, italiques)
- **Body font** : Lora (texte — serif lisible)

## Particularités (différences vs autres templates)

- **Double serif** : Playfair Display + Lora (contrairement aux sans-serif des autres templates)
- **Décorations ✦** : Étoiles décoratives avant chaque titre de section
- **Horaires en tableau** : Grille jour/midi/soir avec ligne fermée grisée
- **Formulaire de réservation** : Date, heure, nombre de personnes, occasion (pas un formulaire de devis)
- **Onglets sur la carte** : Filtrage interactif Entrées/Plats/Desserts
- **Badge végétarien** 🌿 : Sur les plats concernés
- **Citation chef** : Section parallaxe avec blockquote
- **Support TheFork** : Lien externe pour la réservation si souhaité
- **TripAdvisor** : Icône réseau social dédiée

## Port : 4001
