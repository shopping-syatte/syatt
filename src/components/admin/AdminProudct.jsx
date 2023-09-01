import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

AdminProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    vimeoId: PropTypes.string,
    image: PropTypes.string.isRequired,
    section: PropTypes.string,
  }).isRequired,
};

export default function AdminProduct({ product }) {
  const { image, title, category, price, section, id } = product;

  const navigate = useNavigate();

  const toEdit = () => {
    navigate(`/productEdit/${id}`, { state: { product } });
  };

  return (
    <li className="flex items-center pb-4 text-center">
      <div className="w-32">
        <img className="w-16 h-16 mx-auto" src={image} />
      </div>
      <div className="w-32">{title}</div>
      <div className="w-32">{category}</div>
      <div className="w-32">{price}</div>
      <div className="w-32">{section}</div>
      <div className="w-32 flex flex-col justify-center items-center">
        <div
          className="btn btn-sm bg-white border-gold text-gold hover:bg-blue-400 hover:text-white hover:border-blue-400"
          onClick={toEdit}
        >
          수정
        </div>
        <div
          className="btn btn-sm bg-gold text-white mt-1 hover:bg-white hover:text-red-400 hover:border-red-400"
          onClick={toEdit}
        >
          삭제
        </div>
      </div>
    </li>
  );
}
