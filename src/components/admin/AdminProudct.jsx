import PropTypes from 'prop-types';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
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
  const { image, title, category, price, section, id, description, videoId } = product;

  const navigate = useNavigate();

  const toEdit = () => {
    navigate(`/productEdit/${id}`, { state: { product } })
  }

  return (
    <li className="flex items-center pb-4 text-center">
      <div className="w-32">
        <img className="w-16 h-16 mx-auto" src={image} />
      </div>
      <div className="w-32">{title}</div>
      <div className="w-32">{category}</div>
      <div className="w-32">{price}</div>
      <div className="w-32">{section}</div>
      <div className="w-32" onClick={toEdit}>
        <AiOutlineEdit className="w-7 h-7 mx-auto" />
      </div>
      <div className="w-32">
        <AiOutlineDelete className="w-7 h-7 mx-auto" />
      </div>
    </li>
  );
}
