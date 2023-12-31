/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      370: '370px',
      425: '425px',
      500: '500px',
      768: '768px',
      1024: '1024px',
    },
    extend: {
      colors: {
        grey: {
          1: '#090909',
          2: '#171717',
          3: '#202024',
        },
        white: {
          1: '#F2F2F2',
        },
        primaryColor: {
          1: '#00875F',
          2: 'rgb(0, 135, 95, 0.6)',
          3: 'rgb(0, 135, 95, 0.40)',
        },
        red: '#f04242',
        orange: '#f86c49',
        green: '#4feb4f',
        shadow: '#141414d3',
      },
      height: {
        40: '40px',
        43: '43.2px',
        45: '45.6px',
        85: '85.6px',
        90: '90px',
        96: '96px',
        140: '140px',
        200: '200px',
        236: '236px',
        256: '256px',
        281: '281.6px',
        295: '295.8px',
        321: '321.4px',
      },
      width: {
        43: '43.2px',
      },
      maxWidth: {
        104: '104.68px',
        127: '127.6px',
        167: '167.2px',
        205: '205.6px',
        261: '261.6px',
        336: '336.61px',
        400: '400px',
        470: '470px',
        800: '800px',
        1200: '1200px',
        1300: '1300px',
      },
      brightness: {
        1.3: '1.3',
      },
      gridAutoRows: {
        '1fr': 'minmax(96px,auto)',
      },
      borderRadius: {
        def: '6px',
      },
      backgroundImage: {
        arrow: `url('data:image/svg+xml;utf8,<svg width="16" height="16" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 10.127L12 18.127L20 10.127H4Z" fill="%23f4f4f4"/></svg>')`,
        arrowClick: `url('data:image/svg+xml;utf8,<svg width="16" height="16" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 15.873L12 7.873L20 15.873H4Z" fill="%23f4f4f4"/></svg>')`,
      },
      backgroundPosition: {
        'right-4': 'bottom 0.9rem right 0.5rem',
      },
      margin: {
        5: '5px',
        20: '-20px',
      },
      boxShadow: {
        def: '0px 4px 30px 0px #00000040',
      },
    },
  },
  plugins: [],
}
