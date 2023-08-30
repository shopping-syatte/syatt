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
    <>
      <div
        className={
          'w-full h-16 flex flex-row justify-start items-center gap-3 ml-2'
        }
      >
        <div
          className="btn btn-circle cursor-pointer w-7 h-7 min-h-0 text-white hover:border-gold  bg-gold hover:bg-white hover:text-gold "
          onClick={() => navigate('/')}
        >
          <AiFillHome />
        </div>
        {categorySection.map((section, index) => (
          <div
            className={`text-gold rounded-3xl text-sm font-bold p-2 cursor-pointer hover:border-gold hover:border ${
              category === section ? 'bg-gold text-white' : 'bg-white'
            }`}
            key={index}
            onClick={() => handleLink(section)}
          >
            #{section}
          </div>
        ))}
      </div>
    </>
  );
}
