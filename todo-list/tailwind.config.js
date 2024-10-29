/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'handphone': '400px',
      // => @media (min-width: 640px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

