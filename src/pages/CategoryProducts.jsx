import SectionProducts from '../components/SectionProducts.jsx';
import { useParams } from 'react-router-dom';
import useProducts from '../hooks/useProducts.jsx';
import SubTitleBar from '../components/ui/SubTitleBar.jsx';

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
      <SubTitleBar title={category}/>
      {products && <SectionProducts products={filteredProducts}/>}
    </>
  );
}
