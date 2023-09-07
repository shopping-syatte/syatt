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
        goldHover: '#B28237'
      },
      backgroundImage: {
        banner: `url('/images/banner.jpg')`,
        logo: `url('/images/logo.png')`,
        logomini: `url('/images/logo_mini.png')`,
        logofooter: `url('/images/logo_footer.png')`,
        section1: `url('/images/section1.png')`,
        section2: `url('/images/section2.png')`,
        section3: `url('/images/section3.png')`,
        section4: `url('/images/section4.png')`,
        banner1: `url('/images/banner1_basic_technique.png')`,
        banner2: `url('/images/banner2_metal_plaster.png')`,
        banner3: `url('/images/banner3_metal_paint.png')`,
        banner4: `url('/images/banner4_metallic_effect.png')`,
      },
    },
  },
  plugins: [require('daisyui')],
};
