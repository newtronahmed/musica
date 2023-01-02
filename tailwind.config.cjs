/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: '#1d2123',
        secondary:'#1a1e1f',
        blue:'#609eaf',
        "primary-yellow": "#facd66"
      }
    },
  },
  plugins: [],
}
