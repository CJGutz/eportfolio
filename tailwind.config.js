/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {

      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(farthest-corner at 300px 400px, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('tailwindcss')],
};
