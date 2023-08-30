import ProductCard from './ProductCard.jsx';
import useProducts from '../hooks/useProducts.jsx';
import PropTypes from 'prop-types';

Products.propTypes = {
  category: PropTypes.string,
};

export default function Products({ category }) {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      <ul className={'grid grid-cols-1 md:grid-cols-3 gap-4 p-4'}>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  )
}
