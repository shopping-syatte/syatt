import Products from '../components/Products.jsx';
import Banner from '../components/Banner.jsx';
import HomeSections from '../components/HomeSections.jsx';

export default function Home() {
  return (
    <section>
      <Banner />
      <Products />
      <HomeSections />
    </section>
  );
}
