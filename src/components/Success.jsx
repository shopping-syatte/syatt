import { useNavigate, useSearchParams } from 'react-router-dom';
import useCart from '../hooks/useCart.jsx';
import dayjs from 'dayjs';


export function SuccessPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { cartQuery: { isLoading, isError, data: products }, addOrUpdatePayment, removeItem }
    = useCart();
  // 강의 종료 날짜 설정
  const DATECHECK = 1;


  const handleClick = async () => {

    // 결재 후 카트에 저장된 상품을 payment db로 옮기는 작업
    // 시작 날짜와 강의 종료 날짜를 설정한다.
    // 파이어베이스엔 날짜 데이터가 바로 들어가지 않아 스티링으로 변환

    const currentDate = new Date();
    const endDate = new Date();
    endDate.setDate(currentDate.getDate() + DATECHECK); // 7일 뒤 강의 종료

    products.map(product => {
      addOrUpdatePayment.mutate({
        id: product.id,
        image: product.image,
        title: product.title,
        section: product.section,
        vimeoId: product.vimeoId,
        startDate: dayjs(currentDate).format('YYYY-MM-DD'),
        endDate: dayjs(endDate).format('YYYY-MM-DD'),
        videoStart:"",
        videoEnd:""
      });
      removeItem.mutate(product.id, {
        onSuccess: () => {
          console.log('removed');
        },
      });
    });
    navigate('/class');
  };

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    console.log('error');
  }

  return (
    <>
      <div>
        <h1>결제 성공</h1>
        <div>{`주문 아이디: ${searchParams.get('orderId')}`}</div>
        <div className={'text-[20px]'}>
          {`결제 금액: ${Number(
            searchParams.get('amount'),
          ).toLocaleString()}원`}
        </div>
      </div>
      <div>
        <button
          onClick={handleClick}
          className={'btn btn-success mt-3'}>결재완료
        </button>
      </div>
    </>
  );
}

//작업해야할것 : 디비 정리해서 payment로 넘기는 db작업
//나의 강의실 작업 - 강의보기
//관리자페이지: n일 시청기간 설정 - 나의 강의실 안보이기, 수정,삭제 리스트 보기
//퍼블리싱
//회원 가입, 인증
