// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://extraordinary-horse-4eec8c.netlify.app/',
  integrations: [react()]
});