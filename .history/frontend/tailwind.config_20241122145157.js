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
        // primary: '#111827',
      },
    },
  },
  plugins: [],
}