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
    <div
      className={
        'flex flex-col w-[387] justify-center items-center mb-[50px]'
      }
    >
      <div>
        <img
          onClick={handleClick}
          className="w-[387px] h-[220px] rounded-[10px] cursor-pointer transition hover:scale-[0.98]"
          src={image}
          alt={title}
        />
      </div>
      <div
        className={
          'px-2 w-full flex flex-col justify-start items-left mt-[5px]'
        }
      >
        <div className={'flex flex-col justify-center'}>
          <p className="text-xl font-bold"># {title}</p>
          <p className="text-[#969696] text-[12px] font-thin mt-[5px] h-[40px]">
            {description}
          </p>
        </div>
        <div className="flex justify-between mt-[10px]">
          <div
            onClick={() => sendCart()}
            className="flex transition justify-center w-[110px] h-[30px] text-[#CFA461] text-[14px] my-auto rounded-[40px] pt-[3px] px-2 border-[1px] border-[#CFA461]
            hover:bg-[#CFA461] hover:text-white hover:cursor-pointer"
          >
            강의 바로 담기
          </div>
          <div>
            <span className="text-2xl font-semibold">
              {price.toLocaleString('ko-KR', {
                style: 'currency',
                currency: 'KRW',
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
