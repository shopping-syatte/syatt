import CartItem from '../components/CartItem.jsx';
import PriceCard from '../components/PriceCard.jsx';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';
import useCart from '../hooks/useCart.jsx';
import { CheckoutPage } from '../components/Checkout.jsx';
import { SHIPPING } from '../Constant/Constants.js';


// 배송비 설정

export default function MyCart() {
  const { cartQuery: { isLoading, isError, data: products } } = useCart();
  const totalPrice =
    products && products.reduce((prev, curr) =>
      prev + parseInt(curr.price) * curr.quantity, 0);

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else if (isError) {
    console.error("카트를 읽어오는데 실패하였습니다.");
  }

  const hasProducts = products && products.length > 0;

  return (
    <section className={'p-8'}>
      <p className={'text-2xl text-center font-bold pb-4 border-b border-gray-300'}>내 장바구니</p>
      {!hasProducts && <p>장바구니에 상품이 없습니다.</p>}
      {
        hasProducts &&
        <>
          <ul className={'border-b border-gray-300 mb-8 p-4 px-8'}>
            {products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </ul>
          {/*하단 계산 부분*/}
          <div className={'flex justify-between items-center'}>
            <PriceCard text={'상품 총액'} price={totalPrice} />
            <BsFillPlusCircleFill className={'text-2xl shrink-0'} />
            <PriceCard text={'배송액'} price={SHIPPING} />
            <FaEquals className={'text-2xl shrink-0'} />
            <PriceCard text={'총가격'} price={totalPrice + SHIPPING} />
          </div>
          <div >
            <CheckoutPage price={totalPrice + SHIPPING} />
          </div>
        </>}
    </section>
  );
}
