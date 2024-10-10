const defaultTheme = require('tailwindcss/defaultTheme')

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
			colors: {
				'primary': {
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
				'secondary': {
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
				'gray': {
					'50':  '#f8faf9',
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
    
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui'),
	],
};
