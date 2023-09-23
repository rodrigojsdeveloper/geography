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
      "768": "768px",
      "1024": "1024px",
    },
    extend: {
      colors: {
        "grey": {
          "1": "#090909",
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
        "43": "43.2px",
        "45": "45.6px",
        "85": "85.6px",
        "90": "90px",
        "96": "96px",
        "140": "140px",
        "200": "200px",
        "236": "236px",
        "256": "256px",
        "281": "281.6px",
        "295": "295.8px",
        "321": "321.4px",
      },
      width: {      
        "43": "43.2px",
      },
      maxWidth: {
        "104": "104.68px",
        "127": "127.6px",
        "167": "167.2px",
        "205": "205.6px",
        "261": "261.6px",
        "336": "336.61px",
        "370": "370px",
        "470": "470px",
        "800": "800px",
        "1300": "1300px",
      },
      brightness: {
        "1.3": "1.3"
      },
      gridAutoRows: {
        "1fr": "minmax(96px,auto)"
      },
      borderRadius: {
        "def": "0px"
      },
      backgroundImage: {
        "button": `url('data:image/svg+xml;utf8,<svg width="16" height="16" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 10.127L12 18.127L20 10.127H4Z" fill="%23f4f4f4"/></svg>')`
      },
      backgroundPosition: {
        "right-4": "bottom 0.9rem right 0.5rem"
      }
    },
  },
  plugins: [],
};
