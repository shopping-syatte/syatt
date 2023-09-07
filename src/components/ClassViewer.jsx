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
      videoEnd: dayjs().add(ENDDAY, 'day').format('YYYY-MM-DD'),
      isWatched: true,
    });
  }
  return (
    <>
      <div className="w-full h-screen fixed left-0 top-0 flex justify-center items-center text-center">
        <div className="bg-white rounded-lg w-3/5 h-4/5 flex flex-col justify-center items-center relative z-50 p-8 gap-2">
          <div className="w-full flex justify-center items-center flex-col gap-4">
            <h3 className="font-bold text-3xl mt-5">{data.title}</h3>
            <div className="w-[40px] h-[4px] bg-gold" />
            <p className="w-72 text-fontColor whitespace-break-spaces text-xs">
              {data.description}
            </p>
          </div>
          <ReactPlayer
            url={`https://player.vimeo.com/video/${data.vimeoId}`}
            width="100%"
            height="100%"
            controls
            onStart={handleVideoStart}
          />
          <button
            onClick={() => setIsOpenModal(false)}
            className={"btn w-80 h-8 btn-ghost border-2 bg-gold text-white " +
            "text-lg hover:bg-white hover:text-gold hover:border-gold"}>
            닫기
          </button>
        </div>
      </div>
    </>
  );
}
