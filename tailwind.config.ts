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
      },
    },
  },
  plugins: [],
}

export default config
