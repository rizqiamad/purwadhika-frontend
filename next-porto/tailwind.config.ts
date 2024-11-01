import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
  darkMode: ['class', '[data-theme="dark"]']
};
export default config;
