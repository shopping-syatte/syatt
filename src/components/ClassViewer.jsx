import ReactPlayer from 'react-player';
import usePayment from '../hooks/usePayment';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { ENDDAY } from '../Constant/Constants.js';

ClassViewer.propTypes = {
  data: PropTypes.object.isRequired,
  setIsOpenModal: PropTypes.func.isRequired,
};


export default function ClassViewer({ data, setIsOpenModal }) {
  // 강의 정보를 뿌려주기 위한 구매 정보
  const {
    paymentQuery: { isLoading, isError, data: products },
    addOrUpdatePayment,
  } = usePayment();

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    console.error('나의강의 정보를 가져오는데 실패했습니다.');
  }

  // firebase db payment에 videoStart, videoEnd 업데이트
  function handleVideoStart() {
    const product = products.find(
      (product) => product.vimeoId === data.vimeoId
    );
    if (product.isWatched) return;
    addOrUpdatePayment.mutate({
      ...product,
      videoStart: dayjs().format('YYYY-MM-DD'),
      videoEnd: dayjs().add( ENDDAY, 'day').format('YYYY-MM-DD'),
      isWatched: true,
    });
  }
  return (
    <>
      <div className="w-full h-screen fixed left-0 top-0 flex justify-center items-center text-center">
        <div className="bg-white rounded w-4/5 h-4/5 flex flex-col justify-center items-center relative z-50">
          <div className="w-full flex justify-center items-center flex-col gap-4">
            <h3 className="font-bold text-xl mt-5">{data.title}</h3>
            <div className="w-[40px] h-[4px] bg-gold" />
            <p className="text-sm text-fontColor">{data.description}</p>
          </div>
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => setIsOpenModal(false)}
          >
            ✕
          </button>
          <ReactPlayer
            url={`https://player.vimeo.com/video/${data.vimeoId}`}
            width="100%"
            height="100%"
            controls
            onStart={handleVideoStart}
          />
        </div>
        <div
          className="fixed w-full h-full bg-black bg-opacity-30 backdrop-blur-sm top-0 left-0 z-40"
          onClick={() => {
            setIsOpenModal(false);
            console.log('클릭');
          }}
        ></div>
      </div>
    </>
  );
}
