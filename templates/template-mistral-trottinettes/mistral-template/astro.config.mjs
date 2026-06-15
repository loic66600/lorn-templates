import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ⚠️ Remplacer par le domaine final avant mise en ligne
export default defineConfig({
  site: 'https://www.mistral-mobilite.fr',
  integrations: [sitemap()],
});
