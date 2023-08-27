import usePayment from '../hooks/usePayment';
import dayjs from 'dayjs';
import useOrderList from '../hooks/useOrderList.jsx';
import ClassList from '../components/ClassList.jsx';
import OrderList from '../components/OrderList.jsx';
import { useEffect } from 'react';

export default function Class() {
  const {
    paymentQuery: { isLoading, isError, data: payment },
    removePayment,
  } = usePayment();
  const {
    orderListQuery: { data: orderList },
    addOrUpdateOrderList,
  } = useOrderList();
  const checkDate = dayjs().format('YYYY-MM-DD'); // 날짜 체크를 위한 기준 (오늘 날짜)

  async function addRemove(item) {
    await addOrUpdateOrderList.mutate(item);
    await removePayment.mutate(item.id);
  }

useEffect(() => {
  payment &&
  payment.forEach((item) => {
    if (item.isWatched) {
      if (item.videoEnd <= checkDate) {
        addRemove(item);
      }
    } else if (item.endDate <= checkDate) {
      addRemove(item);
    }
  });
}, [payment, orderList]);


if (isLoading) {
  return <div>Loading...</div>;
} else if (isError) {
  console.error('나의강의실 정보를 가져오는데 실패 하였습니다.');
}

return (
  <>
    {payment &&
      payment.map((item, index) => (
        <div key={index}>
          <ClassList item={item} />
        </div>
      ))}
    <p className={'text-center text-3xl font-bold'}>수강내역</p>
    {orderList &&
      orderList.map((item, index) => (
        <div key={index}>
          <OrderList item={item} />
        </div>
      ))}
  </>
);
}

