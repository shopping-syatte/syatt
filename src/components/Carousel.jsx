import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

// eslint-disable-next-line react/prop-types
export default function Carousel({ children, slides, color }) {
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const NextArrow = ({ currentSlide, slideCount, ...props }) => {
    return <MdArrowForwardIos {...props} color={color} />;
  };
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const PrevArrow = ({ currentSlide, slideCount, ...props }) => {
    return <MdArrowBackIosNew {...props} color={color} />;
  };

  console.log(color);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    autoplay: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return <Slider {...settings}>{children}</Slider>;
}
