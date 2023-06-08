/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "mainBg": '#1F2A48',
        "mainBlue": '#0079FE'
      }
    },
  },
  plugins: [require("daisyui")],
}