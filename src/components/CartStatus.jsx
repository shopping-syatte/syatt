import useCart from '../hooks/useCart.jsx';
import { MdShoppingCart } from 'react-icons/md';

export default function CartStatus() {
  const {
    cartQuery: { data: products },
  } = useCart();

  const handleMouseEnter = (event) => {
    const icon = event.currentTarget.querySelector('.shopping-cart');
    if (icon) {
      icon.style.color = '#CFA461';
    }
  };

  const handleMouseLeave = (event) => {
    const icon = event.currentTarget.querySelector('.shopping-cart');
    if (icon) {
      icon.style.color = '';
    }
  };

  return (
    <div
      className={
        'flex relative justify-center items-center w-[44px] h-[44px] bg-gold rounded-full hover:bg-goldHover duration-200 transition'
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <MdShoppingCart className={'flex text-white text-[26px]'} />
      {products && (
        <p
          className={
            'w-6 h-6 text-center bg-brand text-white ' +
            'rounded-full absolute -top-1 -right-2 drop-shadow-md'
          }
        >
          {products.length}
        </p>
      )}
    </div>
  );
}
