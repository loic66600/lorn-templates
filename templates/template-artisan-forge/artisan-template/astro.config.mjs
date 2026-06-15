import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ⚠️ Remplacer par le domaine final du client avant mise en ligne
// (utilisé pour le sitemap.xml et les URL canoniques)
export default defineConfig({
  site: 'https://www.atelier-ferrand-perpignan.fr',
  integrations: [sitemap()],
});
