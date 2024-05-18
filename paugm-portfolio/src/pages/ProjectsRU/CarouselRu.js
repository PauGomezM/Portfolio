
import Carousel from 'react-bootstrap/Carousel';
import BannerOne from '../ru-images/banner1.png';
import BannerTwo from '../ru-images/banner2.png';
import BannerThree from '../ru-images/banner3.png';
import BannerFour from '../ru-images/banner4.png';
import BannerFive from '../ru-images/banner5.png';
import BannerSix from '../ru-images/banner6.png';
import BannerSeven from '../ru-images/banner7.png';
import BannerEight from '../ru-images/str-banner.png';

export default function CarrouselRu() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className='img-slide'>
          <img src={BannerOne} />
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='img-slide'>
          <img src={BannerTwo} />
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='img-slide'>
          <img src={BannerThree} />
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='img-slide'>
          <img src={BannerFour} />
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='img-slide'>
          <img src={BannerFive} />
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='img-slide'>
          <img src={BannerSix} />
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='img-slide'>
          <img src={BannerSeven} />
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='img-slide'>
          <img src={BannerEight} />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}