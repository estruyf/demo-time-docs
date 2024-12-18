// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://estruyf.github.io',
  base: 'demo-time-astro',
	trailingSlash: 'always',
  integrations: [starlight({
    logo: {
      src: '/src/assets/demotime.svg',
    },
    title: 'Demo Time',
    social: {
      github: 'https://github.com/estruyf/vscode-demo-time',
      blueSky: 'https://bsky.app/profile/eliostruyf.com'
    },
    components: {
      // Relative path to the custom component.
      SocialIcons: './src/components/SocialIcons.astro',
      Footer: './src/components/Footer.astro',
    },
    customCss: [
      // Relative path to your custom CSS file
      './src/styles/tailwind.css',
      './src/styles/custom.css',
    ],
    lastUpdated: true,
    editLink: {
      baseUrl: 'https://github.com/estruyf/demo-time-astro/edit/main/',
    },
    sidebar: [
      {
        label: 'Documentation',
        items: [
          { label: 'Getting started', slug: 'docs' },
          { label: 'Adding demos', slug: 'docs/adding-demos' },
        ],
      },
      {
        label: 'Actions',
        items: [
          { label: 'File actions', slug: 'docs/actions/file' },
          { label: 'Text actions', slug: 'docs/actions/text' },
          { label: 'Setting actions', slug: 'docs/actions/setting' },
          { label: 'Terminal actions', slug: 'docs/actions/terminal' },
          { label: 'Time actions', slug: 'docs/actions/time' },
          { label: 'VS Code actions', slug: 'docs/actions/vscode' },
          { label: 'Snippet actions', slug: 'docs/actions/snippet' },
        ],
      },
      {
        label: 'References',
        items: [
          { label: 'Commands', slug: 'references/commands' },
          { label: 'Settings', slug: 'references/settings' },
        ]
      },
      {
        label: 'Tips & Tricks',
        items: [
          { label: 'Adding content', slug: 'tips/adding-content' },
          { label: 'Highlight code', slug: 'tips/highlighting' },
          { label: 'Working with variables', slug: 'tips/variables' },
          { label: 'Presenter View', slug: 'tips/presenter-view' },
        ],
      },
      {
        label: 'Snippets',
        items: [
          { label: 'Snippets', slug: 'snippets' },
        ],
      },
      {
        label: 'Examples',
        items: [
          { label: 'Projects', slug: 'examples' },
        ],
      },
      {
        label: 'Support the project ❤️',
        link: 'docs/support'
      }
    ],
  }),
  tailwind({
    // Disable the default base styles:
    applyBaseStyles: false,
  })],
});