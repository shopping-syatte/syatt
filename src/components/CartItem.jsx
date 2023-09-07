import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import useCart from '../hooks/useCart.jsx';

const ICON_CLASS = 'flex transition-all cursor-pointer hover:text-brand hover:scale-200 mx-1 hidden';
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

  const formattedNumber = price.toLocaleString();

  return (
    <li className={'flex justify-between items-center my-6'}>
      <img
        className={'w-[200px] h-[115px] rounded-[10px]'}
        src={image}
        alt={title}
      />
      <div className={'flex-1 flex justify-between ml-4'}>
        <div className={'flex w-full ml-5 mr-16 justify-between'}>
          <div className={'flex text-lg'}>{title}</div>
          {/*<p className={'text-xl font-bold text-blue-700'}>{options}</p>*/}
          <div className={'flex text-lg'}>{formattedNumber}원</div>
        </div>
        <div className={'text-2xl flex items-center'}>
          <AiOutlineMinusSquare className={ICON_CLASS} onClick={handleMinus} />
          {/* <span>{quantity}</span> */}
          <AiOutlinePlusSquare className={ICON_CLASS} onClick={handlePlus} />
          <AiOutlineClose
            className={
              'text-[20px] transition-all cursor-pointer hover:text-[#CFA461] hover: mx-1'
            }
            onClick={handleDelete}
          />
        </div>
      </div>
    </li>
  );
}
