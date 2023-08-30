import SectionProducts from '../components/SectionProducts.jsx';
import { useParams } from 'react-router-dom';
import useProducts from '../hooks/useProducts.jsx';

export default function AllProducts() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();
  const { category } = useParams();

  const filteredProducts = products?.filter(product => product.section === category).sort((a,b) =>{
    const aNumber = parseInt(a.title.split('.')[0]);
    const bNumber = parseInt(b.title.split('.')[0]);
    return aNumber - bNumber;
  })

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      <div className="w-full h-[170px] bg-[#FCFCFC] flex justify-center items-center shadow-md">
        <span className='text-2xl border-gold text-fontColor'>{category}</span>
      </div>
      {products && <SectionProducts products={filteredProducts}/>}
    </>
  );
}
