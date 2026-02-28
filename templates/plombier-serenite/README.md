# Template Plombier v2 — Plombier / Chauffagiste / Sanitaire

## Lancer en local

```bash
cd tpl-plombier
npm install astro
npm run dev
# → http://localhost:4004
```

## ✅ Toutes les pages activées par défaut

| Page | URL | Désactivable ? |
|---|---|---|
| Accueil | `/` | Non (page principale) |
| À propos | `/a-propos` | Oui |
| Réalisations | `/realisations` | Oui |
| Tarifs | `/tarifs` | Oui |
| Mentions légales | `/mentions-legales` | Non (obligatoire RGPD) |

### Pour désactiver une page :
```bash
mv src/pages/a-propos.astro src/pages-off/a-propos.astro
mv src/pages/realisations.astro src/pages-off/realisations.astro
mv src/pages/tarifs.astro src/pages-off/tarifs.astro
```

## Personnalisation rapide

### 1. Identité & Contact
`client.ts` : nom, slogan, téléphone, email, adresse, horaires, zone, rayon km.

### 2. Bannière urgence
`client.ts` → `urgence: true/false`. Affiche barre fixe avec ripple rouge + numéro + horaires urgence.

### 3. Images Unsplash
15+ images intégrées. Pour remplacer : `public/images/` et modifier les URLs dans `client.ts`.

### 4. Réseaux sociaux
`client.ts` → `reseaux: { ... }`. Laisser `""` pour masquer.

### 5. Google Maps
`client.ts` → `googleMapsEmbed`. Laisser `""` pour masquer. Rendu avec filtre saturé léger.

### 6. Bannière cookies
`client.ts` → `cookieConsent: true/false`.

### 7. Comment ça marche
`client.ts` → `etapes: [...]`. 4 étapes affichées en timeline verticale numérotée.

### 8. Services
`client.ts` → `services: [...]`. Chaque service a : titre, description, icone, urgence (badge rouge), image, details (chips).

### 9. Tarifs indicatifs
`client.ts` → `tarifs: [...]`. Organisés par catégorie (Dépannage, Installation, Chauffage), avec prix et détails.

## Layout unique — Structure visuelle

| Section | Design spécifique |
|---|---|
| **Urgence** | Barre fixe blanche avec **ripple animé** rouge (onde qui s'élargit, pas juste un pulse) |
| **Hero** | **Side-by-side** (texte gauche / image droite) avec **floating trust badges** superposés sur l'image + **pills stats** en dessous du texte + badge "Disponible aujourd'hui" avec pastille verte |
| **Process** | **Vertical numbered timeline** avec connecteur (01 → 02 → 03 → 04), numéros teal dans carrés arrondis |
| **Services** | **3 colonnes** de cards (pas 2 comme électricien) avec image top + chips techniques + badge urgence |
| **CTA Band** | **Full-width gradient** navy→teal, texte + boutons blancs (unique à ce template) |
| **Réalisations** | **Mosaic** asymétrique (1 grande + 4 petites sur grille 4 colonnes) |
| **Témoignages** | **Carousel avec dots** navigation (auto-scroll 6s + clic) + badge type intervention |
| **Devis** | Formulaire + cards info empilées, card urgence avec fond gradient teal |
| **Footer** | Fond navy sombre, 4 colonnes |

## Effets intégrés

| Effet | Usage |
|---|---|
| **Ripple** | Animation onde rouge dans la barre urgence (unique à ce template) |
| **Availability badge** | Pastille verte pulsante "Disponible aujourd'hui" dans le hero |
| **Floating trust cards** | Badges superposés sur l'image hero (intervention rapide, garantie) |
| **Vertical timeline** | Process 4 étapes avec connecteur et numéros carrés |
| **Testimonial carousel** | Slider avec dots et auto-scroll (unique parmi tous les templates) |
| **Full-width CTA band** | Gradient navy→teal (unique à ce template) |
| Animated counters | Stats dans les pills du hero |
| Clip Reveal | Image hero |
| Blur → Sharp | Galerie photos |
| Hover Lift | Toutes les cartes |
| Image Zoom | Galerie, services |
| Scroll reveals | Toutes les sections |

## Palette

- **Background** : #F8FAFB (gris bleuté très clair — THÈME CLAIR, unique parmi électricien/barbershop)
- **Alt** : #EFF4F6
- **Cards** : #FFFFFF
- **Navy** : #0C2340 (titres, footer, hero)
- **Teal** : #0F766E (accent principal — "eau")
- **Teal light** : #14B8A6 (highlights)
- **Teal pale** : #99F6E4 (badges galerie)
- **Red** : #DC2626 (urgence uniquement)
- **Text** : #1E293B (slate, très lisible)
- **Display font** : Inter (titres — géométrique, ultra-lisible, 900 weight)
- **Body font** : DM Sans (texte — friendly sans-serif)

## Particularités (différences vs TOUS les autres templates)

| Élément | Plombier | vs Bâtiment | vs Restaurant | vs Barbershop | vs Électricien |
|---|---|---|---|---|---|
| **Thème** | Clair bleuté | Clair ambre | Clair crème | Sombre noir | Sombre bleu nuit |
| **Accent** | Teal/turquoise | Amber/or | Bordeaux | Or | Bleu électrique |
| **Polices** | Inter + DM Sans | Syne + Outfit | Playfair + Lora | Bebas Neue + Barlow | Space Grotesk + JetBrains Mono |
| **Hero** | Split + floating cards | Split asymétrique | Centré fullbleed | Bande dorée | Diagonal + grille |
| **Timeline** | Vertical numéroté | Horizontal | — | — | — |
| **Témoignages** | Carousel dots | Horizontal scroll | Masonry | Stacked | Alternating |
| **CTA** | Full-width band gradient | — | — | — | — |
| **Urgence** | Ripple | — | — | — | Pulse |
| **Galerie** | Mosaic asymétrique | 1 large + 2 petites | Preview 4 | Strip horizontal | Preview 4 |

## Port : 4004
