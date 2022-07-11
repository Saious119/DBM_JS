import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  base: '/cringebots/',
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
  server: {
    host: '0.0.0.0',
  }
});
