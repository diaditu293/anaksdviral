import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://anaksdviral.pages.dev',
  output: 'server',
  adapter: cloudflare(),
});