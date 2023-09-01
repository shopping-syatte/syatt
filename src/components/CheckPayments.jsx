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
    getPaymentList(paymentId).then(response => setPaymentList(response));
  },[])

  if(isLoading) return <p>Loading...</p>;
  if(isError) return <p>Error...</p>;

  return (
    <div>
      {paymentList}
    </div>
  );
}
