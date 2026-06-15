import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ⚠️ Remplacer par le domaine final du client avant mise en ligne
export default defineConfig({
  site: 'https://www.tramontane-securite.fr',
  integrations: [sitemap()],
});
