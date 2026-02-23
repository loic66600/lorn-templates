# LORN Templates

Dépôt centralisé de tous les templates ViteMonSite — LORN Digital Studio.

## Structure

```
lorn-templates/
├── manifest.json              ← Catalogue JSON (auto-généré)
├── templates/
│   ├── massage-starter/       ← 1 dossier = 1 template
│   ├── plombier-serenite/
│   ├── electricien-starter/
│   └── ...
├── previews/                  ← Screenshots des templates
└── scripts/
    └── generate-manifest.js   ← Génère manifest.json
```

## Convention de nommage

Chaque template : `{métier}-{formule}`

Exemples : `massage-starter`, `plombier-serenite`, `restaurant-croissance`

## Formules

| Formule | Pages max | Prix |
|---|---|---|
| Starter | 1 (one-page) | 19€/mois |
| Sérénité | 5 | 39€/mois |
| Croissance | 10 | 79€/mois |

## Ajouter un template

1. Copier un template existant dans `templates/`
2. Modifier `client.ts`, les pages, et `template.json`
3. `npm run manifest`
4. `git add . && git commit -m "feat: add xxx" && git push`

## Lancer un template en local

```bash
cd templates/massage-starter
npm install astro
npm run dev
```

## Consommation par ViteMonSite

```
https://raw.githubusercontent.com/loic66600/lorn-templates/main/manifest.json
```

---
LORN Digital Studio — lorn-digital-studio.fr
