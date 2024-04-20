import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const pdTheme: CustomThemeConfig = {
	name: 'pdTheme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		'--theme-font-family-heading': `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '2px',
		'--theme-rounded-container': '4px',
		'--theme-border-base': '2px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #F49FBC
		'--color-primary-50': '253 241 245', // #fdf1f5
		'--color-primary-100': '253 236 242', // #fdecf2
		'--color-primary-200': '252 231 238', // #fce7ee
		'--color-primary-300': '251 217 228', // #fbd9e4
		'--color-primary-400': '247 188 208', // #f7bcd0
		'--color-primary-500': '244 159 188', // #F49FBC
		'--color-primary-600': '220 143 169', // #dc8fa9
		'--color-primary-700': '183 119 141', // #b7778d
		'--color-primary-800': '146 95 113', // #925f71
		'--color-primary-900': '120 78 92', // #784e5c
		// secondary | #805D93
		'--color-secondary-50': '236 231 239', // #ece7ef
		'--color-secondary-100': '230 223 233', // #e6dfe9
		'--color-secondary-200': '223 215 228', // #dfd7e4
		'--color-secondary-300': '204 190 212', // #ccbed4
		'--color-secondary-400': '166 142 179', // #a68eb3
		'--color-secondary-500': '128 93 147', // #805D93
		'--color-secondary-600': '115 84 132', // #735484
		'--color-secondary-700': '96 70 110', // #60466e
		'--color-secondary-800': '77 56 88', // #4d3858
		'--color-secondary-900': '63 46 72', // #3f2e48
		// tertiary | #FFD3BA
		'--color-tertiary-50': '255 248 245', // #fff8f5
		'--color-tertiary-100': '255 246 241', // #fff6f1
		'--color-tertiary-200': '255 244 238', // #fff4ee
		'--color-tertiary-300': '255 237 227', // #ffede3
		'--color-tertiary-400': '255 224 207', // #ffe0cf
		'--color-tertiary-500': '255 211 186', // #FFD3BA
		'--color-tertiary-600': '230 190 167', // #e6bea7
		'--color-tertiary-700': '191 158 140', // #bf9e8c
		'--color-tertiary-800': '153 127 112', // #997f70
		'--color-tertiary-900': '125 103 91', // #7d675b
		// success | #9EBD6E
		'--color-success-50': '240 245 233', // #f0f5e9
		'--color-success-100': '236 242 226', // #ecf2e2
		'--color-success-200': '231 239 219', // #e7efdb
		'--color-success-300': '216 229 197', // #d8e5c5
		'--color-success-400': '187 209 154', // #bbd19a
		'--color-success-500': '158 189 110', // #9EBD6E
		'--color-success-600': '142 170 99', // #8eaa63
		'--color-success-700': '119 142 83', // #778e53
		'--color-success-800': '95 113 66', // #5f7142
		'--color-success-900': '77 93 54', // #4d5d36
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #ec276c
		'--color-error-50': '252 223 233', // #fcdfe9
		'--color-error-100': '251 212 226', // #fbd4e2
		'--color-error-200': '250 201 218', // #fac9da
		'--color-error-300': '247 169 196', // #f7a9c4
		'--color-error-400': '242 104 152', // #f26898
		'--color-error-500': '236 39 108', // #ec276c
		'--color-error-600': '212 35 97', // #d42361
		'--color-error-700': '177 29 81', // #b11d51
		'--color-error-800': '142 23 65', // #8e1741
		'--color-error-900': '116 19 53', // #741335
		// surface | #1B1B3A
		'--color-surface-50': '221 221 225', // #dddde1
		'--color-surface-100': '209 209 216', // #d1d1d8
		'--color-surface-200': '198 198 206', // #c6c6ce
		'--color-surface-300': '164 164 176', // #a4a4b0
		'--color-surface-400': '95 95 117', // #5f5f75
		'--color-surface-500': '27 27 58', // #1B1B3A
		'--color-surface-600': '24 24 52', // #181834
		'--color-surface-700': '20 20 44', // #14142c
		'--color-surface-800': '16 16 35', // #101023
		'--color-surface-900': '13 13 28' // #0d0d1c
	}
};
