/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themePrimary: '#A4A7BF',
        themeSecondary: '#FF748E',
        pText: '#091153',
        gText: '#E4E5EC',
      },
      backgroundImage: theme => ({
        'main-bg': "url('../src/assets/images/Background.svg')",
        'why': "url('../src/assets/images/why.png')",
      }),
    },
  },
  plugins: [],
}
