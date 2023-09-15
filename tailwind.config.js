/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "370": "370px",
      "425": "425px",
      "500": "500px",
      "800": "800px",
      "768": "768px",
      "1024": "1024px",
    },
    extend: {
      fontFamily: {
        'sans': ['Poppins, sans-serif']
      },
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
        },
        "transparent": "transparent",
        "red": "#f04242",
        "orange": "#f86c49",
        "green": "#4feb4f",
        "shadow": "#141414d3",
        "hoverLink": "rgba(232,234,237,.08)",
        "activeLink": "rgba(255,255, 255, 0.12)",
      },
      height: {
        "40": "40px",
        "45": "45.6px",
        "74": "74px",
        "85": "85.6px",
        "96": "96px",
        "140": "140px",
        "200": "200px",
        "236": "236px",
        "256": "256px",
        "281": "281.6px",
        "295": "295.8px",
        "321": "321.4px",
      },
      maxWidth: {
        "104": "104.68px",
        "110": "110px",
        "167": "167.2px",
        "205": "205.6px",
        "261": "261.6px",
        "310": "310px",
        "480": "480px",
        "444": "444.4px",
        "421": "421.4px",
        "470": "470px",
        "800": "800px",
        "1440": "1440px",
      },
      brightness: {
        "1.3": "1.3"
      },
      borderRadius: {
        "def": "4px"
      },
      gridAutoRows: {
        "1fr": "minmax(96px,auto)"
      }
    },
  },
  plugins: [],
};
