/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
    },
    extend: {
      colors: {
        primary: '#fdf6ea',
        darkorange: '#ff8c00',
        navbarbg: '#595f6d',
        darktheme: '#111827',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      fontFamily:{
        parkinsans: "Parkinsans",
        fira: "Fira Sans",
      }
    },
  },
  plugins: [],
}