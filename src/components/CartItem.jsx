import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import useCart from '../hooks/useCart.jsx';

const ICON_CLASS = 'transition-all cursor-pointer hover:text-brand hover:scale-200 mx-1';
export default function CartItem(
  {
    // eslint-disable-next-line react/prop-types
    product,
    // eslint-disable-next-line react/prop-types
    product: { id, image, price, title, quantity },
  }) {
  const {addOrUpdateItem, removeItem} = useCart()
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateItem.mutate({ ...product, quantity: quantity - 1 });
  };
  const handlePlus = () =>
    addOrUpdateItem.mutate( { ...product, quantity: quantity + 1 });
  const handleDelete = () => removeItem.mutate(id);

  return (
    <li className={'flex justify-between items-center my-2'}>
      <img className={'w-24 md:w-48 rounded-lg'} src={image} alt={title} />
      <div className={'flex-1 flex justify-between ml-4'}>
        <div className={'basis-3/5'}>
          <p className={'text-lg'}>{title}</p>
          {/*<p className={'text-xl font-bold text-blue-700'}>{options}</p>*/}
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
