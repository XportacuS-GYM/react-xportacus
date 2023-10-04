/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'mainColor': '#1046AA',
        'hardColor': '#0F3172'
      }
    },
  },
  plugins: [],
}

