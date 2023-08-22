import { useNavigate, } from 'react-router-dom';
import useCart from '../hooks/useCart.jsx';

export function SuccessPage() {
  // const [searchParams] = useSearchParams();

  const navigate = useNavigate();
  const { cartQuery: { isLoading, isError, data: products }, addOrUpdatePayment, removeItem }
    = useCart();



  // 결재 후 카트에 저장된 상품을 payment db로 옮기는 작업
  const handleClick = async () => {
    products.map(product => {
      addOrUpdatePayment.mutate({
        productId: product.id,
        // startDate: startDate,
        // endDate: endDate
      });
      removeItem.mutate(product.id, {
        onSuccess: () => {
          console.log('removed');
        },
      });
    });
    navigate('/carts'); // 이후 나의 강의장으로 이동 시킴
  };

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    console.log('error');
  }

  return (
    <>
      {/*<div>
        <h1>결제 성공</h1>
        <div>{`주문 아이디: ${searchParams.get('orderId')}`}</div>
        <div className={'text-[20px]'}>
          {`결제 금액: ${Number(
            searchParams.get('amount'),
          ).toLocaleString()}원`}
        </div>
      </div>*/}
      <div>
        <button
          onClick={handleClick}
          className={'btn btn-success mt-3'}>결재완료
        </button>
      </div>
    </>
  );
}