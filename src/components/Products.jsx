import ProductCard from './ProductCard.jsx';
import useProducts from '../hooks/useProducts.jsx';

export default function Products() {
  const { productsQuery: { isLoading, error, data: products } } = useProducts();
  const {category} = products

  console.log(category);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {/*<div>
        <p>{}</p>
      </div>*/}
      <ul className={'grid gird-cols-1 md:grid-cols-3 gap-4 p-4'}>
        {products && products.map((product) => (
          <ProductCard key={product.id} product={product} />))}
      </ul>
    </>
  );
}
