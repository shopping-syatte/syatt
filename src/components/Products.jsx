import ProductCard from './ProductCard.jsx';
import useProducts from '../hooks/useProducts.jsx';
// import PropTypes from 'prop-types';

/*Products.propTypes = {
  category: PropTypes.string,
};*/

export default function Products() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  const category = ['기초포페인팅','메탈이펙트','메탈플러스터']

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {
        category.map((category)=>(
          <div key={category}>
            <h2>{category}</h2>
            <ul className={'grid grid-cols-1 md:grid-cols-3 gap-4 p-4'}>
            {products && products.filter((product) => product.section === category)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </ul>
          </div>
        ))
      }
      {/*
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>*/}
    </>
  )
}
