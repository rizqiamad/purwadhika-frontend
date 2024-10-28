/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'donker':'#0f172a'
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
        rightIn: 'rightIn 2s linear',
        leftIn: 'leftIn 2s linear',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        rightIn:{
          '0%':{transform:'translateX(100%)',opacity:'0'},
          '100%': { transform: 'translateX(0)',opacity:'1' },
        },
        leftIn:{
          '0%':{transform:'translateX(-100%)',opacity:'0'},
          '100%': { transform: 'translateX(0)',opacity:'1' },
        },
      },
    },
  },
  plugins: [daisyui,],
  daisyui: {
    themes: ["light", "dark"],
  },
  darkMode: ['class', '[data-theme="dark"]']
}

