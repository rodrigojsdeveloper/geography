/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "grey": {
          "1": "#111111",
          "2": "#171717",
          "3": "#242424",
        },
        "white": {
          "1": "#F2F2F2"
        },
        "red": {
          "1": 	"#FF0000"
        }
      },
      maxWidth: {
        "290": "290px"
      }
    },
  },
  plugins: [],
};
