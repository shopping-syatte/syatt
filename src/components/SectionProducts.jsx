import ProductCard from './ProductCard.jsx';
import PropTypes from 'prop-types';

Products.propTypes = {
  products: PropTypes.array.isRequired
};

export default function Products({products}) {
  return (
    <div className='flex flex-col max-w-[1200px] mx-auto mt-6 mb-20'>
      <ul className={'grid grid-cols-3 gap-x-4 mt-8'}>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </div>
  );
}
