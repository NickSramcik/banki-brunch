/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      display: ['Lato', 'sans-serif'],
      body: ['Roboto', 'sans-serif']
    }
  },
  plugins: [require("@tailwindcss/typography"), require('daisyui')],
}
