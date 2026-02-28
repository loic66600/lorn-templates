# Template Électricien v2 — Dépannage / Installation / Mise aux normes

## Lancer en local

```bash
cd tpl-electricien
npm install astro
npm run dev
# → http://localhost:4003
```

## ✅ Toutes les pages activées par défaut

| Page | URL | Désactivable ? |
|---|---|---|
| Accueil | `/` | Non (page principale) |
| À propos | `/a-propos` | Oui |
| Réalisations | `/realisations` | Oui |
| Tarifs | `/tarifs` | Oui |
| Zone d'intervention | `/zone` | Oui |
| Mentions légales | `/mentions-legales` | Non (obligatoire RGPD) |

### Pour désactiver une page :
```bash
mv src/pages/a-propos.astro src/pages-off/a-propos.astro
mv src/pages/realisations.astro src/pages-off/realisations.astro
mv src/pages/tarifs.astro src/pages-off/tarifs.astro
mv src/pages/zone.astro src/pages-off/zone.astro
```
Puis retirer le lien correspondant dans la navbar (index.astro).

## Structure

```
tpl-electricien/
├── src/data/client.ts               ← TOUTE la config ici
├── src/pages/
│   ├── index.astro                  ← Page d'accueil
│   ├── a-propos.astro               ← À propos + certifications + valeurs
│   ├── realisations.astro           ← Galerie avec filtres catégorie
│   ├── tarifs.astro                 ← Grille tarifs + FAQ
│   ├── zone.astro                   ← Zone d'intervention + communes
│   └── mentions-legales.astro       ← RGPD
├── src/pages-off/                   ← Pages désactivées (vide par défaut)
├── src/layouts/Layout.astro         ← Moteur d'animations + cookie banner
└── public/images/                   ← Remplacer par vos photos
```

## Personnalisation rapide

### 1. Identité & Contact
`client.ts` : nom, slogan, téléphone, email, adresse, horaires, zone, rayon km.

### 2. Bannière urgence
`client.ts` → `urgence: true/false`. Affiche une barre fixe rouge pulsante en haut du site avec le numéro de téléphone.

### 3. Images Unsplash
15+ images intégrées. Pour remplacer : `public/images/` et modifier les URLs dans `client.ts`.

### 4. Réseaux sociaux
`client.ts` → `reseaux: { ... }`. Laisser `""` pour masquer.

### 5. Google Maps
`client.ts` → `googleMapsEmbed`. Laisser `""` pour masquer. Filtre dark inversé.

### 6. Bannière cookies
`client.ts` → `cookieConsent: true/false`.

### 7. Services détaillés
`client.ts` → `services: [...]`. Chaque service a : titre, description, icone, urgence (badge rouge), image, details (chips techniques).

### 8. Tarifs indicatifs
`client.ts` → `tarifs: [...]`. Organisés par catégorie (Dépannage, Installation, Normes), avec prix et détails.

### 9. Zone d'intervention
`client.ts` → `zones` (liste de communes), `rayonKm`. Page dédiée avec badges cliquables.

## Layout unique — Structure visuelle

| Section | Design spécifique |
|---|---|
| **Urgence** | **Barre fixe pulsante** rouge en haut — pastille qui pulse + numéro de téléphone monospace |
| **Hero** | **Diagonal clip** en bas + **grille technique** overlay (lignes bleues semi-transparentes) |
| **Stats** | **Ticker bar** — 4 compteurs animés monospace (15+ ans, 2500+ interventions, 45min, 100%) |
| **Garanties** | **Badges inline** — 4 cartes icône + texte (Dépannage 7j/7, Devis gratuit, Qualifelec, Garantie 2 ans) |
| **Services** | **Cards image + chips** — chaque service a une photo, des tags techniques, badge urgence rouge clignotant |
| **Réalisations** | Preview 4 photos (1 grande + 3 petites) + lien vers page complète |
| **Témoignages** | **Alternating** — cartes décalées gauche/droite + badge type d'intervention (Dépannage, Rénovation, Normes...) |
| **Devis** | Formulaire avec champ urgence (dropdown) + contact cards empilées |
| **Footer** | 4 colonnes |

### Pages complémentaires uniques

- **Page Zone** : Carte Google Maps dark + grille de badges communes (unique à l'électricien)
- **Page Tarifs** : 3 catégories détaillées + FAQ 4 cartes
- **Page Réalisations** : Galerie filtres catégories (Tableau, Éclairage, Domotique, Installation...)
- **Page À propos** : Badges certifications monospace (Qualifelec, NF C 15-100, Garantie décennale...)

## Effets intégrés

| Effet | Usage |
|---|---|
| **Urgence Pulse** | Pastille rouge pulsante dans la barre urgence (unique à ce template) |
| **Electric Flicker** | Badge urgence qui clignote sur les services 7j/7 (unique à ce template) |
| **Grid overlay** | Lignes bleues techniques sur le hero (unique à ce template) |
| **Diagonal clip** | Transition diagonale hero → stats |
| Ken Burns | Hero background, bannière |
| Animated counters | Compteurs stats avec easing cubic |
| Blur → Sharp | Galerie photos |
| Clip Reveal | Image à propos |
| Hover Lift | Toutes les cartes |
| Image Zoom | Galerie, services |
| Gradient Shift | Overlay bannière |
| Scroll reveals | Toutes les sections |

## Palette

- **Background** : #0B0F1A (bleu nuit profond)
- **Alt** : #0F1420
- **Cards** : #131825
- **Blue** : #2563EB (accent principal — bleu électrique)
- **Blue light** : #3B82F6 (highlights)
- **Blue pale** : #93C5FD (labels, chips)
- **Cyan** : #06B6D4 (badges type témoignages)
- **Red** : #EF4444 (urgence, badges)
- **Text** : #C8D0E0 (gris bleuté)
- **Display font** : Space Grotesk (titres — tech, geometric)
- **Mono font** : JetBrains Mono (tags, stats, certifications — monospace technique)

## Particularités (différences vs autres templates)

- **Thème bleu nuit technique** : Fond #0B0F1A avec lignes de grille, esthétique électrique
- **Space Grotesk + JetBrains Mono** : Duo de polices techniques (vs serif restaurant, condensed barbershop)
- **Barre urgence** : Fixe en haut avec pulse rouge (unique aux métiers d'urgence)
- **Grille technique** : Overlay de lignes sur le hero
- **Diagonal clip** : Transition angulaire du hero
- **Chips techniques** : Tags détaillés par service (Diagnostic de panne, Remplacement disjoncteur...)
- **Page Zone** : Communes desservies en badges (unique aux artisans itinérants)
- **Badge type sur témoignages** : Identifie le type d'intervention (Dépannage, Rénovation, Normes, Domotique)
- **Champ urgence** : Dropdown dans le formulaire (Planifié / Sous 48h / Urgence immédiate)
- **Compteurs animés** : Stats monospace avec animation sur scroll
- **6 pages** : Le template le plus riche en pages (index, à propos, réalisations, tarifs, zone, mentions)

## Port : 4003
