/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'violet-shade': '#ddd6fe',
				'light-purple': '#a899dc',
				'orange': '#f6b768',
				'dark-purple': '#6b58aa',
				'dimgrey': 'rgb(105, 105, 105)',
			},
		},
		fontFamily: {
			roboto: ['roboto', 'system-ui'],
			inter: ['inter', 'Georgia'],
			Cairo: ['Cairo', 'Georgia'],
			Abril_Fatface: ['Abril Fatface', 'sans'],
		},
		screens: {
			sm: { max: '450px' },
			// => @media (min-width: 640px and max-width: 767px) { ... }

			md: { min: '451px', max: '767px' },
			max_md: { max: '767px' },
			lg: { min: '768px' },
			min_lg: { min: '768px', max: '886px' },
			max_lg: { min: '886px', max: '980px' },
			// => @media (min-width: 768px and max-width: 1023px) { ... }

			lg_screen: { min: '887px', max: '1238px' },
			lg_screen2: { min: '887px', max: '1238px' },
			// => @media (min-width: 1024px and max-width: 1279px) { ... }

			xl: { min: '1080px' },
			// xl: { min: '1080px', max: '1535px' },
			// => @media (min-width: 1280px and max-width: 1535px) { ... }

			// '2xl': { min: '1536px' },
			// => @media (min-width: 1536px) { ... }
		},
	},
	// eslint-disable-next-line no-undef
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['light', 'dark'],
	},
}
