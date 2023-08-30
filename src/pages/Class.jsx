import usePayment from '../hooks/usePayment';
import dayjs from 'dayjs';
import useOrderList from '../hooks/useOrderList.jsx';
import ClassList from '../components/ClassList.jsx';
import OrderList from '../components/OrderList.jsx';
import { useEffect, useState } from 'react';

export default function Class() {
  const [choice, setChoice] = useState('all');
  const [filter, setFilter] = useState('');
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
      }
      if (item.endDate <= checkDate) {
        addRemove(item);
      }
    });
  }, [payment]);

  useEffect(() => {
    if (choice === 'all') {
      setFilter(payment);
    } else {
      const temp =
        payment &&
        payment.filter((item) => item.section === choice);
      setFilter(temp);
    }
  }, [choice, payment]);

  const categoryList = payment && payment.map((item) => item.section);

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    console.error('나의강의실 정보를 가져오는데 실패 하였습니다.');
  }

  return (
    <div className={'flex flex-col justify-content items-center'}>
      <div className={'w-full h-[170] '}>
        <p className={'text-[40px] pt-[46px] pb-[70px] text-center'}>마이 페이지</p>
      </div>
      <div className={'w-full h-[262px] bg-background  mb-[50px]'}>
        배너
      </div>

      <div className={'w-full'}>
        <ul className={'flex justify-start items-center'}>
          <li
            className={'border border-solid border-1 border-gray-300 rounded-[30px] p-1 hover:bg-background hover:text-white ml-[10px]'}
            onClick={() => setChoice('all')}>강의전체</li>
          {categoryList.map((item, index) => (
            <li
              className={'border border-solid border-1 border-gray-300 rounded-[30px] p-1 hover:bg-background hover:text-white ml-[10px]'}
              onClick={() => setChoice(item)}
              key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={'divider mb-[40px]'} />
      <div className={'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[16px]'}>
        {filter &&
          filter.map((item, index) => (
            <div
              key={index}>
              <ClassList item={item} />
            </div>
          ))}
      </div>
      <div className={'divider mb-[40px]'} />
      <p className={'text-center text-3xl font-bold'}>수강내역</p>
      <div className={'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[16px]'}>
        {orderList &&
          orderList.map((item, index) => (
            <div key={index}>
              <OrderList item={item} />
            </div>
          ))}
      </div>
    </div>
  );
}



