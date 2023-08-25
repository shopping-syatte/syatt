import dayjs from 'dayjs';
import ClassViewer from './ClassViewer.jsx';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function ClassList({ item }) {
  // modal상태 관리
  const [isOpenModal, setIsOpenModal] = useState(false);
  // 날짜 체크 부분
  // 수강종료일 조건을 체크하고 else 시청스타트 체크해서 시작되었으면  시청종료일 조건부 체크해서
  // 시청 또는 구매내역으로 데이터 입력하고 기존 페이먼트에서 삭제한다.
  function handleClick() {
    setIsOpenModal(true);
  }
  const data = item; // es-Lint error 때문에 data로 넘겨 줌
  console.log(data);
  return (
    <>
      <div className={'flex gap-6'}>
        <div>
          <img src={data.image} alt={data.title} />
          <p className={'font-bold text-xl text-gray-700 text-center'}>
            {data.title}
          </p>
        </div>
        <div>
          <p>{data.vimeoId}</p>
          <p>수강 시작일 : {dayjs(data.startDate).format('YYYY-MM-DD')}</p>
          <p>수강 종료일 : {dayjs(data.endDate).format('YYYY-MM-DD')}</p>
          <p>비디오 수강 시작일 : {data.videoStart}</p>
          <p>비디오 수강 종료일 : {data.videoEnd}</p>
          {/*<p>비디오 수강 시작일 : {dayjs(data.videoStartDate).format('YYYY-MM-DD')}</p>*/}
          {/*<p>비디오 수강 종료일 : {dayjs(data.videoEndDate).format('YYYY-MM-DD')}</p>*/}
          <button onClick={() => handleClick()} className={'btn btn-primary'}>
            강의보기
          </button>
          {isOpenModal && (
            <ClassViewer data={data} setIsOpenModal={setIsOpenModal} />
          )}
        </div>
      </div>
    </>
  );
}
