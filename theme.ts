import type { CustomThemeConfig } from "@skeletonlabs/tw-plugin";

export const terminal: CustomThemeConfig = {
	name: "terminal",
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-family-heading": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "0px",
		"--theme-rounded-container": "0px",
		"--theme-border-base": "0px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #90D05A
		"--color-primary-50": "238 248 230", // #eef8e6
		"--color-primary-100": "233 246 222", // #e9f6de
		"--color-primary-200": "227 243 214", // #e3f3d6
		"--color-primary-300": "211 236 189", // #d3ecbd
		"--color-primary-400": "177 222 140", // #b1de8c
		"--color-primary-500": "144 208 90", // #90D05A
		"--color-primary-600": "130 187 81", // #82bb51
		"--color-primary-700": "108 156 68", // #6c9c44
		"--color-primary-800": "86 125 54", // #567d36
		"--color-primary-900": "71 102 44", // #47662c
		// secondary | #6EA3FE
		"--color-secondary-50": "233 241 255", // #e9f1ff
		"--color-secondary-100": "226 237 255", // #e2edff
		"--color-secondary-200": "219 232 255", // #dbe8ff
		"--color-secondary-300": "197 218 255", // #c5daff
		"--color-secondary-400": "154 191 254", // #9abffe
		"--color-secondary-500": "110 163 254", // #6EA3FE
		"--color-secondary-600": "99 147 229", // #6393e5
		"--color-secondary-700": "83 122 191", // #537abf
		"--color-secondary-800": "66 98 152", // #426298
		"--color-secondary-900": "54 80 124", // #36507c
		// tertiary | #E9AD5B
		"--color-tertiary-50": "252 243 230", // #fcf3e6
		"--color-tertiary-100": "251 239 222", // #fbefde
		"--color-tertiary-200": "250 235 214", // #faebd6
		"--color-tertiary-300": "246 222 189", // #f6debd
		"--color-tertiary-400": "240 198 140", // #f0c68c
		"--color-tertiary-500": "233 173 91", // #E9AD5B
		"--color-tertiary-600": "210 156 82", // #d29c52
		"--color-tertiary-700": "175 130 68", // #af8244
		"--color-tertiary-800": "140 104 55", // #8c6837
		"--color-tertiary-900": "114 85 45", // #72552d
		// success | #9EBD6E
		"--color-success-50": "240 245 233", // #f0f5e9
		"--color-success-100": "236 242 226", // #ecf2e2
		"--color-success-200": "231 239 219", // #e7efdb
		"--color-success-300": "216 229 197", // #d8e5c5
		"--color-success-400": "187 209 154", // #bbd19a
		"--color-success-500": "158 189 110", // #9EBD6E
		"--color-success-600": "142 170 99", // #8eaa63
		"--color-success-700": "119 142 83", // #778e53
		"--color-success-800": "95 113 66", // #5f7142
		"--color-success-900": "77 93 54", // #4d5d36
		// warning | #EAB308
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #ec276c
		"--color-error-50": "252 223 233", // #fcdfe9
		"--color-error-100": "251 212 226", // #fbd4e2
		"--color-error-200": "250 201 218", // #fac9da
		"--color-error-300": "247 169 196", // #f7a9c4
		"--color-error-400": "242 104 152", // #f26898
		"--color-error-500": "236 39 108", // #ec276c
		"--color-error-600": "212 35 97", // #d42361
		"--color-error-700": "177 29 81", // #b11d51
		"--color-error-800": "142 23 65", // #8e1741
		"--color-error-900": "116 19 53", // #741335
		// surface | #1A1B27
		"--color-surface-50": "221 221 223", // #dddddf
		"--color-surface-100": "209 209 212", // #d1d1d4
		"--color-surface-200": "198 198 201", // #c6c6c9
		"--color-surface-300": "163 164 169", // #a3a4a9
		"--color-surface-400": "95 95 104", // #5f5f68
		"--color-surface-500": "26 27 39", // #1A1B27
		"--color-surface-600": "23 24 35", // #171823
		"--color-surface-700": "20 20 29", // #14141d
		"--color-surface-800": "16 16 23", // #101017
		"--color-surface-900": "13 13 19", // #0d0d13
	},
};
