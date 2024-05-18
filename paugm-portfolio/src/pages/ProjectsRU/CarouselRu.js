import Carousel from 'react-bootstrap/Carousel';
import BannerOne from '../ru-images/banner1.png';
import BannerTwo from '../ru-images/banner2.png';
import BannerThree from '../ru-images/banner3.png';
import BannerFour from '../ru-images/banner4.png';
import BannerFive from '../ru-images/banner5.png';
import BannerSix from '../ru-images/banner6.png';
import BannerSeven from '../ru-images/banner7.png';
import BannerEight from '../ru-images/str-banner.png';

const banners = [
  BannerOne,
  BannerTwo,
  BannerThree,
  BannerFour,
  BannerFive,
  BannerSix,
  BannerSeven,
  BannerEight,
];

export default function CarrouselRu() {
  return (
    <Carousel>
      {banners.map((banner, index) => (
        <Carousel.Item key={index}>
          <div className='img-slide'>
            <img src={banner} alt={`Banner ${index + 1}`} />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
