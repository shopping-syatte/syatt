import { useNavigate } from 'react-router-dom';
import { categorySection } from '../Constant/Constants';

export default function ButtomSections() {
  const navigate = useNavigate();
  const style = 'w-[590px] h-[160px] transition hover:scale-[0.98]'
  return (
    <>
      <div className="flex justify-center mt-10 mb-20">
        <div className="grid grid-cols-2 w-[1180px] h-[320px] place-items-center gap-x-10 gap-y-5 cursor-pointer">
          <div
            className={`bg-section1 ${style}`}
            onClick={() => navigate(`/products/category/${categorySection[0]}`)}
          />
          <div
            className={`bg-section2 ${style}`}
            onClick={() => navigate(`/products/category/${categorySection[1]}`)}
          />
          <div
            className={`bg-section3 ${style}`}
            onClick={() => navigate(`/products/category/${categorySection[2]}`)}
          />
          <div
            className={`bg-section4 ${style}`}
            onClick={() => navigate(`/products/category/${categorySection[3]}`)}
          />
        </div>
      </div>
    </>
  );
}
