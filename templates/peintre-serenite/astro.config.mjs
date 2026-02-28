import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    server: {
      fs: {
        allow: [
          '/media/utilisateur/SSD externe loic/Dev/lorn-templates',
          '/media/utilisateur/SSD externe loic/Dev/lorn-templates/templates/peintre-sernite',
        ],
      },
    },
  },
});
