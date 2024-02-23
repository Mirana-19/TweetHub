/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#5736A3',
        secondary: '#5CD3A8',
        frame: '#EBD8FF',
        whiteText: '#EBD8FF',
      },

      boxShadow: {
        shadowRectangle:
          '0px 3.437px 2.578px 0px #FBF8FF inset, 0px 3.437px 3.437px 0px rgba(0, 0, 0, 0.06), 0px -1.718px 3.437px 0px #AE7BE3 inset',
        shadowEclipse:
          '0px 4.392px 3.294px 0px #FBF8FF inset, 0px -2.196px 4.392px 0px #AE7BE3 inset',
        shadowButton: ' 0px 3.437px 3.437px 0px rgba(0, 0, 0, 0.25)',

        shadowCard: '-2.578px 6.874px 20.622px 0px rgba(0, 0, 0, 0.23)',

        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },

      dropShadow: {
        customDropShadow: '0px 4.392px 4.392px rgba(0, 0, 0, 0.06)',
      },

      backgroundImage: {
        customgradient:
          'linear-gradient(115deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)',
      },
    },
  },
  daisyui: {
    themes: ['light', 'dark'],
  },
  plugins: [require('daisyui')],
};
