import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import usePayment from '../hooks/usePayment';
import dayjs from 'dayjs';

export default function ClassViewer() {
  // 비디오 아이디를 가져오기 위한 useParams
  const { vimeoId } = useParams();
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
    const product = products.find((product) => product.vimeoId === vimeoId);
    if (product.isWatched) return;
    addOrUpdatePayment.mutate({
      ...product,
      videoStart: dayjs().format('YYYY-MM-DD'),
      videoEnd: dayjs().add(1, 'day').format('YYYY-MM-DD'),
      isWatched: true,
    });
    // console.log('videoStart');
  }
  return (
    <>
      <div>ClassViewer</div>
      <ReactPlayer
        url={`https://player.vimeo.com/video/${vimeoId}`}
        width="1280px"
        height="1024px"
        controls
        onStart={handleVideoStart}
      />
    </>
  );
}
