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
    <div className="product-card" onClick={handleClick}>
      <img className="w-96 h-56 rounded-lg" src={image} alt={title} />
      <p className="text-xl font-bold"># {title}</p>
      <p className="text-coffeeBrown text-sm font-noto-sans font-normal break-words">권장 강의는 협회에서 엄선한 강의를 추가하였습니다.</p>
      <div className="flex">
      <div className="text-yellow-600 font-semibold text-base font-inter bg-white rounded-lg border border-yellow-500 border-7">
  강의 바로 담기
</div>
<div className="flex flex-grow justify-end items-center ml-3">
  <span className="text-2xl font-semibold">200,000</span>
  <span className="text-sm font-light mt-2">원</span>
</div>
</div>
</div>
  );
}
