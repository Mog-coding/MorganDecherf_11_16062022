import { useState } from 'react';

import './CarouselComponent.css';
import vectorLeft from '../../assets/icon/vectorLeft.svg';
import vectorRight from '../../assets/icon/vectorRight.svg';

export default function CarouselComponent({ locationImgArr }) {
    const [locationImg, updatelocationImg] = useState(locationImgArr[0]);

    return (
        <section className="carouselSection">
            <img className="carouselImg" src={locationImg} alt={locationImg} />
            <div
                className="vectorLeft"
                onClick={() =>
                    updatelocationImg(
                        locationImgArr.indexOf(locationImg) === 0
                            ? locationImgArr[locationImgArr.length - 1]
                            : locationImgArr[
                                  locationImgArr.indexOf(locationImg) - 1
                              ]
                    )
                }
            >
                <img src={vectorLeft} alt="" />
            </div>
            <div
                className="vectorRight"
                onClick={() =>
                    updatelocationImg(
                        locationImgArr.indexOf(locationImg) ===
                            locationImgArr.length - 1
                            ? locationImgArr[0]
                            : locationImgArr[
                                  locationImgArr.indexOf(locationImg) + 1
                              ]
                    )
                }
            >
                <img src={vectorRight} alt="" />
            </div>
        </section>
    );
}
