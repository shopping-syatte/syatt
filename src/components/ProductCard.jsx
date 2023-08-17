import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const { id, image, title, category, price } = product; // 구조 분해 할당
  // const vimeoId = "798314628"
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${id}`, { state: { product } });
  };

  return (
    <li onClick={handleClick}
      className={'rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105'}>
     {/* <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          title="1-Description of the Tools.mp4"
        ></iframe>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>*/}
      <img className={'w-full'} src={image} alt={title} />
      <div className={'mt-2 px-2 text-lg flex justify-between items-center '}>
        <h3 className={'truncate'}>{title}</h3>
        <p>{`W${price}`}</p>
      </div>
      <p className={'mb-2 px-2 text-gray-600'}>{category}</p>
    </li>
  )
}
