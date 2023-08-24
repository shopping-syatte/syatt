import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';

export default function ClassViewer() {
  const { vimeoId } = useParams();
  return (
    <>
      <div>ClassViewer</div>
      <ReactPlayer
        url={`https://player.vimeo.com/video/${vimeoId}`}
        width="1280px"
        height="1024px"
        controls
      />
    </>
  );
}
