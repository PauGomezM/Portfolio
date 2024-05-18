import BannerOne from '../ru-images/banner1.png';
import BannerTwo from '../ru-images/banner2.png';
import BannerThree from '../ru-images/banner3.png';
import BannerFour from '../ru-images/banner4.png';
import BannerFive from '../ru-images/banner5.png';
import BannerSix from '../ru-images/banner6.png';
import BannerSeven from '../ru-images/banner7.png';
import BannerEight from '../ru-images/str-banner.png';
import UncontrolledExample from './ExampleCarouselImage';

export default function Banners() {
    return (
        <div>
            {/*<div className="projects-section">
                <h4>Banners & Mockups</h4>
                <div className="projects-banners">
                    <img src={BannerOne} alt='banner' className="banner"/>
                    <img src={BannerTwo} alt='banner' className="banner"/>
                    <img src={BannerThree} alt='banner' className="banner"/>
                    <img src={BannerFour} alt='banner' className="banner"/>
                    <img src={BannerFive} alt='banner' className="banner"/>
                    <img src={BannerSix} alt='banner' className="banner"/>
                    <img src={BannerSeven} alt='banner' className="banner"/>
                    <img src={BannerEight} alt='banner' className="banner"/>
                </div>
            </div>*/}
            <UncontrolledExample/>
        </div>
    )
}