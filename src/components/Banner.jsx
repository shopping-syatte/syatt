import './Banner.css';
import Carousel from './Carousel';
import { useNavigate } from 'react-router-dom';
import { categorySection } from '../Constant/Constants';

export default function Banner() {
  const navigate = useNavigate();
  const style = 'w-[590px] h-96 cursor-pointer';
  return (
    <section className={'flex h-100 bg-[#F6F6F6]'}>
      {/* <div className={'w-full h-full bg-cover bg-banner opacity-80'}></div>
      <div className={'absolute w-full top-32 text-center text-gray-50 drop-shadow-2xl'}>
        <h2 className={'text-6xl'}>Shop with Us</h2>
        <p className={'text-2xl'}>Best Products, High Quality</p>
      </div> */}
      <div className="flex w-[100vw] h-96 justify-center relative">
        <Carousel slides={1} color={'#000000'}>
          <div
            className={`bg-banner1 ${style}`}
            alt="banner1"
            onClick={() => navigate(`/products/category/${categorySection[0]}`)}
          />
          <div
            className={`bg-banner2 ${style}`}
            alt="banner2"
            onClick={() => navigate(`/products/category/${categorySection[1]}`)}
          />
          <div
            className={`bg-banner3 ${style}`}
            alt="banner3"
            onClick={() => navigate(`/products/category/${categorySection[2]}`)}
          />
          <div
            className={`bg-banner4 ${style}`}
            alt="banner4"
            onClick={() => navigate(`/products/category/${categorySection[3]}`)}
          />
        </Carousel>
      </div>
    </section>
  );
}
