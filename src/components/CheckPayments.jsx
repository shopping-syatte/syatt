import { useState, useEffect } from 'react';
import { getPaymentList } from '../api/tossApi.js';
import usePayment from '../hooks/usePayment.jsx';

export default function CheckPayments() {
  const [paymentList, setPaymentList] = useState([]);
  const {
    paymentQuery: { isLoading, isError, data: payment },
  } = usePayment();

  let paymentId = payment && payment[0].orderId

  useEffect(() => {
    try {
      getPaymentList(paymentId).then( res => {
        setPaymentList(res);
      })
    } catch (error) {
      console.log(error);
    }
  },[])


  if(isLoading) return <p>Loading...</p>;
  if(isError) return <p>Error...</p>;

  return (
    <div>
      <div>
        <p>주문 Id: </p>
        <p>{paymentList.orderId}</p>
      </div>
      <div>
        <p>페이먼트 키 :</p>
        <p>{paymentList.paymentKey}</p>
      </div>
      <div>
        <p>주문 상태 :</p>
        <p>{paymentList.status}</p>
      </div>
      <div>
        <p>주문 상품명 :</p>
        <p>{paymentList.orderName}</p>
      </div>

    </div>
  );
}
