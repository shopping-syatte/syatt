import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

ProductCard.propTypes = {
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

export default function ProductCard({ product }) {
  const { id, image, price, title, description } = product;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${id}`, { state: { product } });
  };

  return (
    <div className={'flex flex-col justify-center items-center flex-wrap'} onClick={handleClick}>
      <div>
        <img className='w-[400px] h-56 rounded-lg' src={image} alt={title} />
      </div>
      <div className={'w-[400px] flex flex-col justify-start items-left'}>
        <div className={'flex flex-col justify-center'}>
          <p className='text-xl font-bold'># {title}</p>
          <p className='text-coffeeBrown text-sm '>{description}</p>
        </div>
        <div className='flex justify-between'>
          <div
            className='text-gold font-semibold bg-white rounded-lg border border-yellow-500 border-7'>
            강의 바로 담기
          </div>
          <div>
            <span className='text-2xl font-semibold'>{price.toLocaleString('ko-KR', {
              style: 'currency',
              currency: 'KRW',
            })}</span>
          </div>
        </div>
      </div>

    </div>
  );
}
