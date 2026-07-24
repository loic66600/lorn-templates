import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.kapass-varietes-animation-66.fr',
  integrations: [sitemap()],
});
