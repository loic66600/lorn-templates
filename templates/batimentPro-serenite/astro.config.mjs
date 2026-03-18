import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.ASTRO_SITE,
  base: process.env.ASTRO_BASE,
  site: 'https://example-batiment.vitemonsite-artisan.fr',
  integrations: [sitemap()],
});
