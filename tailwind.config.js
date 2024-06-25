/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px,',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightRed: 'hsl(12,88%,59%)',
        polymerAsh: '#f4f4f4',
        polymerWhiteButtonBg: '#E7E7E7',
        white: '#ffffff',
        darkGrayishBlue: 'hsl(227,12%, 61%)',
        polymerPurple: '#FBD7FF',
        polymerYellow: '#FFDEC1',
      },

      fontFamily: {
        lato: ['Lato', 'sans-serif'],

        mukta: ['Mukta', 'sans-serif'],
      },

      backgroundImage: (theme) => ({
        customGradient:
          'linear-gradient(to bottom right, #fbd7ff 10%, #ffdec1 80%)',
      }),
    },
  },
  plugins: [],
};
