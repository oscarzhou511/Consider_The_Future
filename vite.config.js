import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: './', // Relative base path for GitHub Pages compatibility
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
  server: {
    port: 3000,
    open: false,
  }
});
