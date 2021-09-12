// tailwind.config.js
module.exports = {
  prefix: 'tw-',
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundOpacity: {
        '10': '0.1',
        '20': '0.2',
        '95': '0.95',
      }
    },
    colors: {
      primary: '#FCDEC0',
      primary_lighten: '#F9E4D1',
      secondary: '#B4846C',
      subtitle: '#871900',
      darken: '#7D5A50',
      navbar: 'rgba(196, 196, 196, 0.21)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}