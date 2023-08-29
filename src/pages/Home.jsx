import Products from '../components/Products.jsx';
import Banner from '../components/Banner.jsx';

export default function Home() {

  return (
    <section>
      <Banner />
      <div className={'text-sm  text-rose-900'}>Hot Item</div>
      <h1 className={'text-4xl text-rose-900'}>인기 강의</h1>
      <Products />
    </section>
  );
}
