import dayjs from 'dayjs';

// eslint-disable-next-line react/prop-types
export default function ClassList({ item }) {
  function handleClick () {
    console.log("영상보기");
  }
  const data = item // es-Lint error 때문에 data로 넘겨 줌
  return (
    <>
      <div className={'flex gap-6'}>
        <div>
          <img src={data.image} alt={data.title} />
          <p className={'font-bold text-xl text-gray-700 text-center'}>{data.title}</p>
        </div>
        <div>
          <p>{data.vimeoId}</p>
          <p>수강 시작일 : {dayjs(data.startDate).format('YYYY-MM-DD')}</p>
          <p>수강 종료일 : {dayjs(data.endDate).format('YYYY-MM-DD')}</p>
          <p>비디오 수강 시작일 : {data.videoStart}</p>
          <p>비디오 수강 종료일 : {data.videoEnd}</p>
          {/*<p>비디오 수강 시작일 : {dayjs(data.videoStartDate).format('YYYY-MM-DD')}</p>*/}
          {/*<p>비디오 수강 종료일 : {dayjs(data.videoEndDate).format('YYYY-MM-DD')}</p>*/}
          <button
            onClick={handleClick}
            className={'btn btn-primary'}>강의보기
          </button>
        </div>
      </div>
    </>
  );
}
