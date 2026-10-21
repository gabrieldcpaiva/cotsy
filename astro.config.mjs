import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: 4321,
  },
  vite: {
    server: {
      host: '0.0.0.0',
      strictPort: false,
      allowedHosts: true,
    },
    preview: {
      host: '0.0.0.0',
      allowedHosts: true,
    },
  },
});
