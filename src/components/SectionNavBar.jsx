import { categorySection } from '../Constant/Constants';
import { AiFillHome } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';

export default function SectionNavBar() {
  const navigate = useNavigate();
  const { category } = useParams();

  const handleLink = (section) => {
    navigate(`/products/category/${section}`);
  };

  return (
    <div className='border-b-[1px]'>
      <div
        className={
          'max-w-[1200px] mx-auto h-16 flex flex-row justify-start items-center gap-3'
        }
      >
        <div
          className="flex rounded-[50px] transition cursor-pointer w-[30px] h-[30px] text-white hover:border-gold bg-[#CFA461] hover:bg-goldHover hover:text-white "
          onClick={() => navigate('/')}
        >
          <AiFillHome className="text-[18px] m-auto mt-[5px]" />
        </div>
        {categorySection.map((section, index) => (
          <div
            className={`flex transition leading-7 h-[30px] px-[10px] rounded-3xl text-[14px] cursor-pointer hover:bg-[#CFA461] hover:text-white ${
              category === section
                ? 'flex bg-[#CFA461] text-white'
                : 'text-[#CFA461]'
            }`}
            key={index}
            onClick={() => handleLink(section)}
          >
            #{section}
          </div>
        ))}
      </div>
    </div>
  );
}
