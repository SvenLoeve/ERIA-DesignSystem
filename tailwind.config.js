const defaultTheme = require('tailwindcss/defaultTheme')

const colors = {
	primary: {
		'50': '#f9fafb',
		'100': '#edeffb',
		'200': '#e0d6fc',
		'300': '#c2b0f3',
		'400': '#ab82e4',
		'500': '#955ddb',
		'600': '#7940c9',
		'700': '#592ea5',
		'800': '#3e2177',
		'900': '#221446',
		'950': '#140b2d',
	},
	secondary: {
		'50': '#edf5f3',
		'100': '#c9eef1',
		'200': '#8ae2f0',
		'300': '#42c5dd',
		'400': '#00a4bd',
		'500': '#03889e',
		'600': '#086d82',
		'700': '#075466',
		'800': '#053b49',
		'900': '#03212b',
		'950': '#01141b',
	},
	gray: {
		'50': '#f8faf9',
		'100': '#edf1f6',
		'200': '#d8ddeb',
		'300': '#b2bad2',
		'400': '#8792b1',
		'500': '#6b6f93',
		'600': '#565475',
		'700': '#423f58',
		'800': '#2d2a3d',
		'900': '#1b1a26',
		'950': '#0e0d15',
	},
	white: '#ffffff',
};

module.exports = {
	content: ["./src/**/*.{html,njk}"],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Inter var',
					...defaultTheme.fontFamily.sans,
				]
			},
			colors: colors,
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui'),
	],
	daisyui: {
		styled: true,
		themes: [
				{
					light: {
						primary: colors.primary['600'],
						'primary-content': colors.white,
						secondary: colors.secondary['500'],
						'secondary-content': colors.white,
						'base-100': colors.white,
						'base-200': colors.gray['100'],
						'base-300': colors.gray['200'],
						'base-content': colors.gray['900'],
					},
					dark: {
						primary: colors.primary['400'],
						'primary-content': colors.primary['950'],
						secondary: colors.secondary['300'],
						'secondary-content': colors.secondary['950'],
						'base-100': colors.gray['950'],
						'base-200': colors.gray['900'],
						'base-300': colors.gray['800'],
						'base-content': colors.gray['100'],
					},
				},
			],
	},
	darkMode: ['class', '[data-theme="dark"]']
};
