/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-blue': '#000054',
        'brand-red': '#e61e2a',
      },
      fontFamily: {
        museo: ['Museo', 'sans-serif'], // Add Museo font with a fallback to sans-serif
        helvetica: ['Helvetica', 'Arial', 'sans-serif'], // Add Helvetica font stack
      },
    },
  plugins: [],
  },
}