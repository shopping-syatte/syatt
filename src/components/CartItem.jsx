import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { addOrUpdateToCart, removeFromCart } from '../api/firebase.js';

const ICON_CLASS = 'transition-all cursor-pointer hover:text-brand hover:scale-200 mx-1';
export default function CartItem(
  {
    product, uid,
    product: { id, image, price, title, options, quantity },
  }) {
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateToCart(uid, { ...product, quantity: quantity - 1 });
  };
  const handlePlus = () =>
    addOrUpdateToCart(uid, { ...product, quantity: quantity + 1 });
  const handleDelete = () => removeFromCart(uid, id);

  return (
    <li className={'flex justify-between items-center my-2'}>
      <img className={'w-24 md:w-48 rounded-lg'} src={image} alt={title} />
      <div className={'flex-1 flex justify-between ml-4'}>
        <div className={'basis-3/5'}>
          <p className={'text-lg'}>{title}</p>
          <p className={'text-xl font-bold text-blue-700'}>{options}</p>
          <p className={'text-2xl text-brand font-bold'}>w {price}</p>
        </div>
        <div className={'text-2xl flex items-center'}>
          <AiOutlineMinusSquare
            className={ICON_CLASS}
            onClick={handleMinus} />
          <span>{quantity}</span>
          <AiOutlinePlusSquare
            className={ICON_CLASS}
            onClick={handlePlus} />
          <RiDeleteBin5Fill
            className={ICON_CLASS}
            onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
}
