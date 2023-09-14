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
        "primary-color": {
          "1": 	"#38BFD8"
        }
      },
      height: {
        "45": "45.6px",
        "74": "74px",
        "96": "96px",
      },
      maxWidth: {
        "110": "110px",
        "167": "167.2px",
        "205": "205.6px",
        "290": "290px",
        "261": "261.6px",
        "406": "406.66px",
      },
      brightness: {
        "1.3": "1.3"
      },
      borderRadius: {
        "def": "4px"
      }
    },
  },
  plugins: [],
};
