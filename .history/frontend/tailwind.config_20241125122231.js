/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fdf6ea',
        darkorange: '#ff8c00',
        navbarbg: '#595f6d',
        darktheme: '#111827',
      },
      fontFamily:{
        parkinsans: "Parkinsans",
        fira: "Fira Sans", sans-serif;
      }
    },
  },
  plugins: [],
}
