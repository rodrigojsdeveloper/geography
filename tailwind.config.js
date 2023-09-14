/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "370": "370px",
      "500": "500px",
      "800": "800px",
      "902": "902px",
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
      },
      height: {
        "45": "45.6px",
        "74": "74px",
        "96": "96px",
        "256": "256px",
        "281": "281.6px",
      },
      maxWidth: {
        "104": "104.68px",
        "110": "110px",
        "167": "167.2px",
        "205": "205.6px",
        "261": "261.6px",
        "310": "310px",
        "406": "406.66px",
        "421": "421.4px",
        "800": "800px",
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
