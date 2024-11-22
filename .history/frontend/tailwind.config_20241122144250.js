/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: '#FFA500', // Set orange as the primary color
        primary: 'gray-900',
      },
    },
  },
  plugins: [],
}
