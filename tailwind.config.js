/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'closeAccord': 'cubic-bezier(0,1,0,1)',
        'openAccord': 'cubic-bezier(1,0,1,0)',
      }
    },
    fontFamily: {
      'sans': ['Cormorant', 'sans-serif'],
      'SP': ['SF Pro Display', 'sans-serif'],
    }
  },
  plugins: [],
}