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
        'relative bg-gold p-2 rounded-full border-2 border-gold hover:bg-white ease-in-out duration-200 transition-all'
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <MdShoppingCart className={'shopping-cart text-2xl text-white'} />
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
