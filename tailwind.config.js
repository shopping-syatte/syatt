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
        section1: `url('/images/section1.png')`,
        section2: `url('/images/section2.png')`,
        section3: `url('/images/section3.png')`,
        section4: `url('/images/section4.png')`,
      },
    },
  },
  plugins: [require('daisyui')],
};
