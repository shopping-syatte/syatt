import ReactPlayer from 'react-player';
import usePayment from '../hooks/usePayment';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';

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

  // const [videoId, setVideoId] = useState('');

  // useEffect(() => {
  //   setVideoId(vimeoId);
  // }, []);

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
      videoEnd: dayjs().add(1, 'day').format('YYYY-MM-DD'),
      isWatched: true,
    });
  }
  return (
    <>
      <div className="w-full h-screen fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70 text-center">
        <div
          method="dialog"
          className="bg-white rounded w-4/5 h-4/5 flex justify-center items-center relative"
        >
          <h3 className="font-bold text-xl absolute left-2 top-2 m-10">
            {data.title}
          </h3>
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
      </div>
    </>
  );
}
