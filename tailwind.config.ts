import { join } from 'path';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { terminal } from './theme';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			colors: {
				tmux: '#1CB920',
				pWhite: '#BECAF9',
				pBlue: '#5ED2FF',
				pPurp: '#C198FD',
				pGreen: '#90D05A',
				pRed: '#FF6C8D'
			},
			fontFamily: {
				jbm: ['JetBrainsMono', 'monospace']
			}
		}
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				custom: [terminal]
			}
		})
	]
} satisfies Config;
