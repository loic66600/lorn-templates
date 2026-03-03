import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const projectDir = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.resolve(projectDir, '..', '..');

export default defineConfig({
  output: 'static',
  vite: {
    server: {
      fs: {
        allow: [workspaceRoot],
      },
    },
  },
});
