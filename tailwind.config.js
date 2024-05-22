/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: 'rgb(37, 47, 156)', // Or use the hex value: '#252F9C'
      },
    },
  },
  plugins: [],
}

