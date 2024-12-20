// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://demotime.elio.dev',
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
      baseUrl: 'https://github.com/estruyf/demo-time-docs/edit/main/',
    },
    sidebar: [
      {
        label: 'Documentation',
        items: [
          { label: 'Getting started', slug: 'getting-started' },
          { label: 'Adding demos', slug: 'adding-demos' },
          { label: 'Presentation mode', slug: 'presentation-mode' },
        ],
      },
      {
        label: 'Actions',
        items: [
          { label: 'File actions', slug: 'actions/file' },
          { label: 'Text actions', slug: 'actions/text' },
          { label: 'Setting actions', slug: 'actions/setting' },
          { label: 'Terminal actions', slug: 'actions/terminal' },
          { label: 'Time actions', slug: 'actions/time' },
          { label: 'VS Code actions', slug: 'actions/vscode' },
          { label: 'Snippet actions', slug: 'actions/snippet' },
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
          { label: 'Presenter view', slug: 'tips/presenter-view' },
          { label: 'Activity bar action', slug: 'tips/move-to-activity-bar' },
          { label: 'Using clock and timer', slug: 'tips/time-your-presentation' },
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
          { label: 'Showcases', slug: 'examples/showcases' },
        ],
      },
      {
        label: 'Contributing',
        link: 'contribute'
      },
      {
        label: 'Support the project ❤️',
        link: 'support'
      }
    ],
  }),
  tailwind({
    // Disable the default base styles:
    applyBaseStyles: false,
  })],
});