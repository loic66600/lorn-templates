import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://example-batiment.vitemonsite-artisan.fr',
  integrations: [sitemap()],
});
