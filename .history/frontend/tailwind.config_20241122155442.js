/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fdf6ea', // Set orange as the primary color
        darkorange: '#ff8c00',
        darktheme: '#111827',
      },
      fontFamily:{
        "Parkinsans", sans-serif
      }
    },
  },
  plugins: [],
}
