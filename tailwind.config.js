/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        brand: '#F96162',
        gold: '#CFA461',
        black: '665944',
      },
      backgroundImage: {
        banner: `url('/images/banner.jpg')`,
        logo: `url('/images/logo.png')`,
      },
    },
  },
  plugins: [require('daisyui')],
};
