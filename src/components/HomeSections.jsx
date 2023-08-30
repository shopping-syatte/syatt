import { useNavigate } from 'react-router-dom';
import { categorySection } from '../Constant/Constants';

export default function ButtomSections() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 w-[1180px] h-[320px] place-items-center gap-3 cursor-pointer">
          {categorySection.map((section, index) => (
            <div
              key={index}
              className={`w-[590px] h-[160px] bg-section${index + 1}`}
              onClick={() => navigate(`/products/category/${section}`)}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
