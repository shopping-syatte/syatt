import { useNavigate } from 'react-router-dom';
import { categorySection } from '../Constant/Constants';

export default function ButtomSections() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 w-[1180px] h-[320px] place-items-center gap-3 cursor-pointer">
          <div
            className="w-[590px] h-[160px] bg-section1"
            onClick={() => navigate(`/products/category/${categorySection[0]}`)}
          />
          <div
            className="w-[590px] h-[160px] bg-section2"
            onClick={() => navigate(`/products/category/${categorySection[1]}`)}
          />
          <div
            className="w-[590px] h-[160px] bg-section3"
            onClick={() => navigate(`/products/category/${categorySection[2]}`)}
          />
          <div
            className="w-[590px] h-[160px] bg-section4"
            onClick={() => navigate(`/products/category/${categorySection[3]}`)}
          />
        </div>
      </div>
    </>
  );
}
