import PropTypes from 'prop-types';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

AdminProduct.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    section: PropTypes.string,
  }).isRequired,
};

export default function AdminProduct({ product }) {
  const { image, title, category, price, section } = product;

  return (
    <li className="flex items-center pb-4 text-center">
      <div className="w-32">
        <img className="w-16 h-16 mx-auto" src={image} />
      </div>
      <div className="w-32">{title}</div>
      <div className="w-32">{category}</div>
      <div className="w-32">{price}</div>
      <div className="w-32">{section}</div>
      <div className="w-32">
        <AiOutlineEdit className="w-7 h-7 mx-auto" />
      </div>
      <div className="w-32">
        <AiOutlineDelete className="w-7 h-7 mx-auto" />
      </div>
    </li>
  );
}
