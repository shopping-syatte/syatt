import usePayment from '../hooks/usePayment';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router';

export default function Class() {
  const navigate = useNavigate();
  const {
    paymentQuery: { isLoading, isError, data: payment },
    removePayment,
  } = usePayment();
  const checkDate = dayjs().format('YYYY-MM-DD'); // 날짜 체크를 위한 기준

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    console.error('나의강의실 정보를 가져오는데 실패 하였습니다.');
  }

  function handleClick(index) {
    navigate(`/classview/${payment[index].vimeoId}`);
  }

  payment.map((item) => {
    if (dayjs(item.endDate).format('YYYY-MM-DD') === checkDate) {
      removePayment.mutate(item.id, {
        onSuccess: () => {
          alert(`${item.title} 강의가 종료되었습니다.`);
        },
      });
    }
  });

  return (
    <>
      {payment.map((item, index) => (
        <div key={index}>
          <div className={'flex gap-6'}>
            <div>
              <img src={item.image} alt={item.title} />
              <p className={'font-bold text-xl text-gray-700 text-center'}>
                {item.title}
              </p>
            </div>
            <div>
              <p>{item.vimeoId}</p>
              <p>수강 시작일 : {dayjs(item.startDate).format('YYYY-MM-DD')}</p>
              <p>수강 종료일 : {dayjs(item.endDate).format('YYYY-MM-DD')}</p>
              <button
                onClick={() => handleClick(index)}
                className={'btn btn-primary'}
              >
                강의보기
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
