import Products from '../components/Products.jsx';
import { useParams } from 'react-router-dom';

export default function AllProducts() {
  const { category } = useParams();
  return (
    <>
      <div className="w-full h-[170px] bg-[#FCFCFC] flex justify-center items-center shadow-md">
        <span>{category}</span>
      </div>
      <Products category={category} />
    </>
  );
}
