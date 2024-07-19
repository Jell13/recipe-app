
const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        light: "#f5f5f5"
      }
    },
  },
  plugins: [plugin(function({ addVariant }) {
    addVariant('current', '&.active');
})],
}