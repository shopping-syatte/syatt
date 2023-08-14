import {useQuery} from '@tanstack/react-query'
import { getProducts } from '../api/firebase.js';
import ProductCard from './ProductCard.jsx';

export default function Products() {
  const {isLoading, error, data:products} =
    useQuery(['products'],()=> getProducts())

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
