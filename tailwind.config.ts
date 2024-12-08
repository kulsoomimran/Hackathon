import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		fontFamily: {
			helveticaNeue: ['"Helvetica Neue"', 'sans-serif'],
            helvetica: ['Helvetica', 'sans-serif'],
		  },
		colors: {
			'custom-gray': '#E5E5E5',
			'custom-dgray': '#8D8D8D',
			'deepBlack': '#111111',
			'softGray': '#F5F5F5',
			'darkGray': '#7E7E7E'

		  },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
