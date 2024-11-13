/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base': '#A690D9'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

