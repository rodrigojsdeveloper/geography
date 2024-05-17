import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          100: '#4feb4f',
          200: '#00875F',
          300: 'rgb(0, 135, 95, 0.6)',
          400: 'rgb(0, 135, 95, 0.40)',
        },
        gray: {
          100: '#202024',
          200: '#171717',
          300: '#090909',
        },
        red: {
          100: '#f04242',
        },
        orange: {
          100: '#f86c49',
        },
      },
    },
  },
  plugins: [],
}

export default config
