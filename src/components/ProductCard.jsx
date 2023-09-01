import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import useCart from '../hooks/useCart.jsx';

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
  const { id, image, price, title, description, vimeoId, category, section } = product;
  const { addOrUpdateItem } = useCart();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${id}`, { state: { product } });
  };

  async function sendCart() {
    const cartData
      = { id, image, title, price, vimeoId, category, section, description, quantity: 1 };
    await addOrUpdateItem.mutate(cartData, {
        onSuccess: () => {
          alert('장바구니에 저장하였습니다.');
        },
      },
    );
  }

  return (
    <div className={'flex flex-col justify-center items-center flex-wrap mb-[20px]'}>
      <div>
        <img
          onClick={handleClick}
          className='w-[400px] h-56 rounded-lg hover:scale-[1.1] hover:cursor-pointer' src={image} alt={title} />
      </div>
      <div className={'w-[400px] flex flex-col justify-start items-left mt-[5px]'}>
        <div className={'flex flex-col justify-center'}>
          <p className='text-xl font-bold'># {title}</p>
          <p className='text-gold text-[12px] mt-[5px]'>{description}</p>
        </div>
        <div className='flex justify-between mt-[10px]'>
          <div
            onClick={() => sendCart()}
            className='text-gold font-semibold text-[14px] my-auto rounded-[40px] p-1 border border-yellow-500
            border-7 hover:bg-gold hover:text-white hover:cursor-pointer'>
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
