import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    vimeoId: PropTypes.string,
    image: PropTypes.string.isRequired,
    section:PropTypes.string
  }).isRequired,
}

export default function ProductCard({ product }) {
  const { id, image, title, category, price, vimeoId, section } = product;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${id}`, { state: { product } });
  };

  return (
    <li onClick={handleClick}
      className={'rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105'}>
      <img className={'w-full'} src={image} alt={title} />
      <div className={'mt-2 px-2 text-lg flex justify-between items-center '}>
        <h3 className={'truncate'}>{title}</h3>
        <p>{`W${price}`}</p>
      </div>
    </li>
  )
}

