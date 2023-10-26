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
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#1B2D39",
          "secondary": "#E1EBF6",
          "accent": "#BA2829",
          "neutral": "#1B2D39",
          "base-100": "#2F4858",
          "base-200": '#2F4858',
        },
        light: {
          "primary": "#8CADCE",
          "secondary": "#2F4858",
          "accent": "#BA2829",
          "neutral": "#1B2D39",
          "base-100": "#E1EBF6",
          "base-200": '#2F4858',
      },
      },
    ],
  },
plugins: [require("@tailwindcss/typography"), require('daisyui')],
}
