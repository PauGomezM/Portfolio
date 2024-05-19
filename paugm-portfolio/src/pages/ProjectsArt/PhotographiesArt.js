import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Photography1 from '../art-images/p01.png';
import Photography2 from '../art-images/p02.png';
import Photography3 from '../art-images/p03.png';
import Photography4 from '../art-images/p04.png';
import Photography5 from '../art-images/p05.png';
import Photography6 from '../art-images/p06.png';
import Photography7 from '../art-images/p07.png';
import Photography8 from '../art-images/p08.png';
import Photography9 from '../art-images/p09.png';
import Photography10 from '../art-images/p10.png';
import Photography11 from '../art-images/p11.png';
import Photography12 from '../art-images/p12.png';
import Photography13 from '../art-images/p13.png';
import Photography14 from '../art-images/p14.png';
import Photography15 from '../art-images/p15.png';
import Photography16 from '../art-images/p16.png';
import Photography17 from '../art-images/p17.png';
import Photography18 from '../art-images/p18.png';
import Photography19 from '../art-images/p19.png';
import Photography20 from '../art-images/p20.png';
import Photography21 from '../art-images/p21.png';
import Photography22 from '../art-images/p22.png';
import Photography23 from '../art-images/p23.png';
import Photography24 from '../art-images/p24.png';
import Photography25 from '../art-images/p25.png';
import Photography26 from '../art-images/p26.png';
import Photography27 from '../art-images/p27.png';
import Photography28 from '../art-images/p28.png';
import Photography29 from '../art-images/p29.png';
import Photography30 from '../art-images/p30.png';
import Photography31 from '../art-images/p31.png';
import Photography32 from '../art-images/p32.png';

export default function PhotographiesArt() {
    const photographies = [
        Photography1, Photography2, Photography3, Photography4, Photography5,
        Photography6, Photography7, Photography8, Photography9, Photography10,
        Photography11, Photography12, Photography13, Photography14, Photography15,
        Photography16, Photography17, Photography18, Photography19, Photography20,
        Photography21, Photography22, Photography23, Photography24, Photography25,
        Photography26, Photography27, Photography28, Photography29, Photography30,
        Photography31, Photography32,
    ];

    return (
        <div>
            <div className="projects-section">
                <h4>Photographies</h4>
            </div>
            <Carousel>
                {photographies.map((photography, index) => (
                    <Carousel.Item key={index}>
                        <div className='img-slide'>
                            <img src={photography} alt={`Img ${index + 1}`} />
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}
