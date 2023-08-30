import ProductCard from './ProductCard.jsx';
import useProducts from '../hooks/useProducts.jsx';

import { categorySection } from '../Constant/Constants.js';

export default function Products() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {
        categorySection.map((category)=>(
          <div key={category} className={'mt-[60px]'}>
            <div>
              <p className={'border-left border-4px border-gold text-fontColor font-bold text-[30px] mb-[20px]'}>{category}</p>
            </div>
            <ul className={'grid grid-cols-1 md:grid-cols-3 lg:gird-cols-4 gap-3 p-4'}>
            {products && products.filter((product) => product.section === category)
              .sort((a,b) =>{
                const aNumber = parseInt(a.title.split('.')[0]);
                const bNumber = parseInt(b.title.split('.')[0]);
                return aNumber - bNumber;
              })
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </ul>
            <dir className={'divider mb-[80px]'} />
          </div>
        ))
      }
    </>
  )
}
