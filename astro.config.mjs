// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://demotime.elio.dev',
  trailingSlash: 'always',
  integrations: [
    starlight({
      logo: {
        src: '/src/assets/demotime-bg.svg',
      },
      title: 'Demo Time',
      social: {
        // github: 'https://github.com/estruyf/vscode-demo-time',
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
      head: [
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: 'https://demotime.elio.dev/demo-time-og.png',
          }
        },
        {
          tag: "link",
          attrs: {
            href: "https://fonts.googleapis.com",
            rel: "preconnect"
          }
        },
        {
          tag: "link",
          attrs: {
            href: "https://fonts.gstatic.com",
            crossorigin: true,
            rel: "preconnect"
          }
        },
        {
          tag: "link",
          attrs: {
            href: "https://fonts.googleapis.com/css2?family=Hubot+Sans:ital,wght@0,600;1,900&family=Mona+Sans:ital,wght@0,400..900;1,400..900&display=swap",
            rel: "stylesheet"
          }
        }
      ],
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
            { label: 'Preview actions', slug: 'actions/preview' },
            { label: 'Patch actions', slug: 'actions/patch' },
            { label: 'Setting actions', slug: 'actions/setting' },
            { label: 'Terminal actions', slug: 'actions/terminal' },
            { label: 'Time actions', slug: 'actions/time' },
            { label: 'VS Code actions', slug: 'actions/vscode' },
            { label: 'Snippet actions', slug: 'actions/snippet' },
          ],
        },
        {
          label: 'Slides',
          items: [
            { label: 'Present your slides', slug: 'slides' },
            { label: 'Layouts', slug: 'slides/layouts' },
            { label: 'Themes', slug: 'slides/themes' },
            { label: '- Default theme', slug: 'slides/themes/default' },
            { label: '- Minimal theme', slug: 'slides/themes/minimal' },
            { label: '- Monomi theme', slug: 'slides/themes/monomi' },
            { label: '- Unnamed theme', slug: 'slides/themes/unnamed' },
            { label: '- Quantum theme', slug: 'slides/themes/quantum' },
            { label: '- Frost theme', slug: 'slides/themes/frost' },
            { label: '- Custom theme', slug: 'slides/themes/custom' },
            { label: 'Animations & Components', slug: 'slides/components' },
            { label: 'Transitions', slug: 'slides/transitions' },
            { label: 'Exporting slides', slug: 'slides/export' },
          ]
        },
        {
          label: 'References',
          items: [
            { label: 'Commands', slug: 'references/commands' },
            { label: 'Settings', slug: 'references/settings' },
            { label: 'API', slug: 'references/api' },
            { label: 'JSON schema', slug: 'references/json-schema' },
          ]
        },
        {
          label: 'Tips & Tricks',
          items: [
            { label: 'Adding content', slug: 'tips/adding-content' },
            { label: 'Adding steps to your demo', slug: 'tips/adding-steps' },
            { label: 'Highlight code', slug: 'tips/highlighting' },
            { label: 'Working with variables', slug: 'tips/variables' },
            { label: 'Presenter view', slug: 'tips/presenter-view' },
            { label: 'Activity bar action', slug: 'tips/move-to-activity-bar' },
            { label: 'Using clock and timer', slug: 'tips/time-your-presentation' },
            { label: 'Providing demo notes', slug: 'tips/providing-demo-notes' },
            { label: 'Trigger from a link', slug: 'tips/uri-handler' },
          ],
        },
        {
          label: 'Integrations',
          items: [
            { label: 'Slidev', slug: 'integrations/slidev' },
          ]
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
    }), 
    react()
  ],
});