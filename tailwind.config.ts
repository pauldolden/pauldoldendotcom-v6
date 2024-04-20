import { join } from 'path';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { pdTheme } from './theme';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			colors: {
				thefa: '#011e41',
				svelte: '#f96743',
				tailwind: '#06B6D4',
				go: '#79D4FD',
				typescript: '#3078C6'
			},
			fontFamily: {
				teko: ['Teko', 'sans-serif'],
				ubuntu: ['Ubuntu', 'sans-serif']
			}
		}
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				custom: [pdTheme]
			}
		})
	]
} satisfies Config;
