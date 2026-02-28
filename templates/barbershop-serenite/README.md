# Template Barbershop v2 — Coiffeur Barbier / Salon Homme

## Lancer en local

```bash
cd tpl-barbershop
npm install astro
npm run dev
# → http://localhost:4002
```

## ✅ Toutes les pages activées par défaut

| Page | URL | Désactivable ? |
|---|---|---|
| Accueil | `/` | Non (page principale) |
| L'histoire | `/a-propos` | Oui |
| Galerie | `/galerie` | Oui |
| Mentions légales | `/mentions-legales` | Non (obligatoire RGPD) |

### Pour désactiver une page :
```bash
mv src/pages/a-propos.astro src/pages-off/a-propos.astro
mv src/pages/galerie.astro src/pages-off/galerie.astro
```

## Personnalisation rapide

### 1. Identité & Contact
`client.ts` : nom, slogan, téléphone, email, adresse, horaires.

### 2. Images Unsplash
15 images intégrées. Pour remplacer : mettre vos images dans `public/images/` et changer les URLs dans `client.ts`.

### 3. Réseaux sociaux
`client.ts` → `reseaux: { ... }`. Laisser `""` pour masquer. Supporte : instagram, facebook, tiktok, linkedin, youtube, twitter.

### 4. Google Maps
`client.ts` → `googleMapsEmbed`. Laisser `""` pour masquer. Carte avec filtre dark inversé.

### 5. Bannière cookies
`client.ts` → `cookieConsent: true/false`.

### 6. L'équipe
`client.ts` → `equipe: [...]`. Chaque barbier a : prenom, role, experience, specialite, image.

### 7. Services & tarifs
`client.ts` → `services: [...]`. Chaque prestation a : titre, prix, duree, description, icone, populaire (true/false).

### 8. Réservation
- **Formulaire intégré** par défaut (`lienReservation: ""`) avec choix barbier + créneau
- **Lien externe** : mettre l'URL Planity/Treatwell dans `lienReservation`

## Layout unique — Structure visuelle

| Section | Design spécifique |
|---|---|
| **Hero** | Plein écran avec **bande dorée verticale** à gauche, overlay gradient diagonal, titre Bebas Neue géant avec **Gold Shimmer** |
| **Équipe** | **Cards barbiers** (photo 3/4, nom, spécialité, expérience) — section unique au barbershop |
| **Tarifs** | **Menu board** — liste verticale avec lignes pointillées entre nom et prix (style tableau barbier), badge "Populaire" |
| **Parallaxe** | Citation typographique géante Bebas Neue + Shimmer doré |
| **Galerie** | **Strip horizontal scroll** (défilement latéral, pas de masonry) |
| **Témoignages** | **Stacked** — cartes empilées verticalement, largeur max 700px, centrées |
| **RDV** | Formulaire avec choix du barbier + créneau horaire, contact avec map dark inversée |
| **Footer** | 3 colonnes, logo shimmer doré, headings Bebas Neue |

## Effets intégrés

| Effet | Usage |
|---|---|
| **Gold Shimmer** | Nom dans le hero, logo footer (unique à ce template) |
| Ken Burns | Hero background, bannière |
| Blur → Sharp | Galerie photos |
| Clip Reveal | Image à propos |
| Hover Lift | Toutes les cartes |
| Image Zoom | Galerie, équipe |
| Gradient Shift | Overlay bannière |
| Scroll reveals | Toutes les sections |

## Palette

- **Background** : #0A0A0A (noir profond)
- **Alt** : #111111
- **Cards** : #161616
- **Gold** : #B8860B (accent principal)
- **Gold light** : #D4A017 (highlights)
- **Gold pale** : #F5D380 (shimmer)
- **Text** : #D4D0C8 (beige clair)
- **Display font** : Bebas Neue (titres — condensed, uppercase, impactant)
- **Body font** : Barlow (texte — clean sans-serif)

## Particularités (différences vs autres templates)

- **Thème sombre** : Fond noir avec accents dorés (vs clair pour bâtiment/restaurant)
- **Bebas Neue** : Typographie condensée majuscule pour l'impact visuel
- **Gold Shimmer** : Animation gradient doré sur le texte du hero et footer
- **Bande dorée verticale** : Accent visuel unique sur le hero
- **Section Équipe** : Cards barbiers avec photo, spécialité et expérience
- **Menu board** : Tarifs en liste avec lignes pointillées (esthétique barbershop classique)
- **Gallery strip** : Scroll horizontal au lieu de masonry (sensation de portfolio défilant)
- **Témoignages stacked** : Empilés verticalement, pas en grille
- **Choix du barbier** : Dans le formulaire de RDV
- **Map dark** : Google Maps avec filtre inversé pour matcher le thème sombre

## Port : 4002
