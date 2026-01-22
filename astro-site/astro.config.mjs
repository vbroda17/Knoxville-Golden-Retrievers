// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // No base path for local development and custom domain
  // When you get your domain (southerngoldenretrievers.com), this is perfect
  
  server: {
    port: 4321
  }
});