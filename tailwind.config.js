/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        brand: "#F96162",
      },
      backgroundImage:{
        banner: `url('/images/banner.jpg')`,
      }
    },
  },
  plugins: [],
}

