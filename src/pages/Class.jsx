import usePayment from '../hooks/usePayment';
import dayjs from 'dayjs';
import useOrderList from '../hooks/useOrderList.jsx';
import ClassList from '../components/ClassList.jsx';
import OrderList from '../components/OrderList.jsx';

export default function Class() {

  const { paymentQuery: { isLoading, isError, data: payment }, removePayment  } = usePayment();
  const { orderListQuery : { data: orderList }, addOrUpdateOrderList,} = useOrderList();
  const checkDate = dayjs().format('YYYY-MM-DD'); // 날짜 체크를 위한 기준 (오늘 날짜)

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    console.error('나의강의실 정보를 가져오는데 실패 하였습니다.');
  }

  // 날짜 체크 부분
  // 수강종료일 조건을 체크하고 else 시청스타트 체크해서 시작되었으면  시청종료일 조건부 체크해서
  // 시청 또는 구매내역으로 데이터 입력하고 기존 페이먼트에서 삭제한다.

  payment.forEach((item) => {
    const endDatePassed = dayjs(item.endDate).format('YYYY-MM-DD') <= checkDate;
    const videoEndDatePassed =
      item.videoStart && dayjs(item.videoEnd).format('YYYY-MM-DD') <= checkDate;
    if(endDatePassed || videoEndDatePassed) {
      addOrUpdateOrderList.mutate(item,{
        onSuccess: () => {
          removePayment.mutate(item.id);
        }
      })
    }
  })

  return (
    <>
      { payment &&
        payment.map((item, index) => (
        <div key={index}>
          <ClassList item={item} />
        </div>
      ))}
      <p className={'text-center text-3xl font-bold'}>수강내역</p>
      { orderList &&
        orderList.map((item, index) => (
        <div key={index}>
          <OrderList item={item} />
        </div>
      ))}
    </>
  );
}
