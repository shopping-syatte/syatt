/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
      },
      colors: {
        brand: '#F96162',
        fontColor: '#665944',
        gold: '#CFA461',
      },
      backgroundImage: {
        banner: `url('/images/banner.jpg')`,
        logo: `url('/images/logo.png')`,
      },
    },
  },
  plugins: [require('daisyui')],
};
