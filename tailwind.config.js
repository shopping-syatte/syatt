/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        brand: "#F96162",
        background: "#CFA461",
      },
      backgroundImage:{
        banner: `url('/images/banner.jpg')`,
      }
    },
  },
  plugins: [require('daisyui')],
}

