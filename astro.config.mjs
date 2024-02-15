import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import metaTags from "astro-meta-tags";
import icon from "astro-icon";
import starlight from "@astrojs/starlight";


// https://astro.build/config
export default defineConfig({
  redirects: {
    '/doc/[...slug]': '/docuception/[...slug]'
  },
  integrations: [
    tailwind(),
    icon(),
    starlight({
        title: 'Docs Avec Mon Logo',
        sidebar: [
          {
            label: 'Docuception',
            autogenerate: { directory: 'docuception/' },
          },
        ],
      },
    )
  ]
});