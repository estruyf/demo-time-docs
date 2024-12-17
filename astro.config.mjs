// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://estruyf.github.io',
  base: 'demo-time-astro',
	integrations: [
		starlight({
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
        './src/styles/custom.css',
      ],
			sidebar: [
				{
					label: 'Documentation',
					items: [
						{ label: 'Get started', slug: 'docs' },
						{ label: 'Commands', slug: 'docs/commands' },
						{ label: 'Settings', slug: 'docs/settings' },
					],
				},
				{
					label: 'Actions',
					items: [
						{ label: 'File actions', slug: 'docs/actions/file' },
						{ label: 'Code actions', slug: 'docs/actions/code' },
						{ label: 'Setting actions', slug: 'docs/actions/setting' },
						{ label: 'Snippet actions', slug: 'docs/actions/snippet' },
						{ label: 'Terminal actions', slug: 'docs/actions/terminal' },
						{ label: 'Time actions', slug: 'docs/actions/time' },
						{ label: 'VS Code actions', slug: 'docs/actions/vscode' },
					],
				},
				{
					label: 'Tips & Tricks',
					items: [
						{ label: 'Adding content', slug: 'tips/adding-content' },
						{ label: 'Highlight code', slug: 'tips/highlighting' },
						{ label: 'Working with variables', slug: 'tips/variables' },
						{ label: 'Positioning', slug: 'tips/positioning' },
						{ label: 'Presentation view', slug: 'tips/presentation-view' },
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
						{ label: 'Sample projects', slug: 'examples' },
					],
				}
			],
		}),
	],
});
