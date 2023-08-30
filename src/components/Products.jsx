import ProductCard from './ProductCard.jsx';
import useProducts from '../hooks/useProducts.jsx';

export default function Products() {
  const { productsQuery : {isLoading, error, data: products}} = useProducts();

 // 과목에 맞게 뿌려 준다

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      <ul className={'grid gird-cols-1 md:grid-cols-3 gap-4 p-4'}>
        {products && products.map((product)=> (
          <ProductCard key={product.id} product={product} />))}
      </ul>
    </>
  )
}
