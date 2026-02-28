# Template Bâtiment — One Page Artisan (ViteMonSite)

## Lancer en local

```bash
cd tpl-batiment
npm install astro @astrojs/tailwind tailwindcss
npm run dev
# → ouvrir http://localhost:3000
```

## Personnaliser pour un client

1. **Modifier `src/data/client.ts`** — toutes les données sont là
2. **Ajouter les images** dans `public/images/` :
   - `logo.png` — Logo du client
   - `hero.jpg` — Photo bannière (1920×1080 min)
   - `service-1.jpg` à `service-4.jpg` — Photos des services
   - `projet-1.jpg` à `projet-4.jpg` — Photos de réalisations
   - `equipe.jpg` — Photo équipe/chantier
   - `detail.jpg` — Photo détail (section À propos)
   - `banner.jpg` — Photo bannière parallaxe
   - `og.jpg` — Image réseaux sociaux (1200×630)
3. **Web3Forms** : créer `.env` → `PUBLIC_WEB3FORMS_KEY=votre-clé`

## Effets intégrés

### Scroll (IntersectionObserver)
- **Reveal** — fade + translateY au scroll
- **Slide Left / Right** — glissement latéral
- **Scale In** — zoom depuis plus petit
- **Blur to Sharp** — flou vers net (galerie)
- **Clip Reveal** — masque dévoilé (section À propos)

### Images
- **Ken Burns** — zoom lent + pan (hero, bannière)
- **Image Zoom** — zoom au survol (services, galerie)
- **Masonry Reveal** — galerie en colonnes + apparition cascade

### Hover
- **Hover Lift** — soulèvement + ombre (cartes, témoignages)
- **3D Tilt** — inclinaison perspective via data-tilt (services)

### Continu
- **Float / Bobbing** — flottement lent (badge expérience)
- **Gradient Shift** — dégradé animé (bannière parallaxe)
- **Particles** — particules flottantes subtiles (hero)

### Données
- **Compteurs animés** — chiffres qui s'incrémentent (hero, stats)

## Sections incluses

- [x] Navbar glassmorphism + burger mobile
- [x] Hero fullscreen (Ken Burns + compteurs + particules)
- [x] 4 services (3D Tilt + Image Zoom)
- [x] Bannière parallaxe (Ken Burns + Gradient Shift)
- [x] Galerie masonry (Blur to Sharp)
- [x] À propos (Clip Reveal + Parallax Float)
- [x] Stats animées (compteurs)
- [x] 3 témoignages (3D Tilt + Hover Lift)
- [x] Zone d'intervention
- [x] Formulaire contact Web3Forms
- [x] Footer + badge LORN
- [x] Mentions légales RGPD
- [x] Schema.org SEO
- [x] Responsive complet
- [x] Respect prefers-reduced-motion
