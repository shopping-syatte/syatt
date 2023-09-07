import CartItem from '../components/CartItem.jsx';
import useCart from '../hooks/useCart.jsx';
import { CheckoutPage } from '../components/Checkout.jsx';
import { SHIPPING } from '../Constant/Constants.js';
import SubTitleBar from '../components/ui/SubTitleBar.jsx';
import MiniTitleBar from '../components/ui/MiniTitleBar.jsx';

// 배송비 설정

export default function MyCart() {
  const {
    cartQuery: { isLoading, isError, data: products },
  } = useCart();
  const totalPrice =
    products &&
    products.reduce(
      (prev, curr) => prev + parseInt(curr.price) * curr.quantity,
      0
    );

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else if (isError) {
    console.error('카트를 읽어오는데 실패하였습니다.');
  }

  const hasProducts = products && products.length > 0;

  return (
    <section>
      <SubTitleBar title={'내 장바구니'} />
      <div className="flex flex-col max-w-[1200px] mr-auto ml-auto">
        <MiniTitleBar title={'리스트'} />
        {!hasProducts && (
          <div className="flex w-full h-[300px] justify-center items-center">
            장바구니에 상품이 없습니다.
          </div>
        )}
        {hasProducts && (
          <>
            <ul className={'p-4 px-4'}>
              {products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </ul>
            {/*하단 계산 부분*/}
            <div className="flex flex-col border-[1px] w-full h-[200px] rounded-[10px] bg-[#FCFCFC]">
              <div className="flex flex-col w-full border-b-[1px] h-[50%] pt-4">
                <div className="flex justify-between text-[20px] mx-[6%]">
                  <span>상품 합계</span>
                  <span>{totalPrice.toLocaleString()}원</span>
                </div>
                <div className="flex justify-between text-[20px] mx-[6%] pt-1">
                  <span>배송비</span>
                  <span>{SHIPPING.toLocaleString()}원</span>
                </div>
              </div>
              <div className="flex h-[50%] justify-between text-[30px] mx-[6%] pt-6">
                <span>최종 금액</span>
                <span>{(totalPrice + SHIPPING).toLocaleString()}원</span>
              </div>
            </div>
            <div className="mb-[100px]">
              <MiniTitleBar title={'결제 진행'} />
              <CheckoutPage price={totalPrice + SHIPPING} />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
