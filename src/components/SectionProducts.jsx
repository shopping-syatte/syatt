import ProductCard from './ProductCard.jsx';
import PropTypes from 'prop-types';

Products.propTypes = {
  products: PropTypes.array.isRequired
};

export default function Products({products}) {
  return (
    <>
      <ul className={'grid grid-cols-1 md:grid-cols-3 gap-4 p-4'}>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}
