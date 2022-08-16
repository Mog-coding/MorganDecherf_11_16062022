import { useState, useRef, useEffect } from 'react';

import './CarouselComponent.css';
import vectorLeft from '../../assets/icon/vectorLeft.svg';
import vectorRight from '../../assets/icon/vectorRight.svg';

export default function CarouselComponent({ locationImgArr }) {
    const [locationImg, updatelocationImg] = useState(locationImgArr[0]);
    const chevronL = useRef();
    const chevronR = useRef();

    // si une seule image, supression chevrons next, previous
    useEffect(() => {
        const elChevronL = chevronL.current;
        const elChevronR = chevronR.current;
        if (locationImgArr.length === 1) {
            elChevronL.classList.add('hide');
            elChevronR.classList.add('hide');
        }        
    });

    return (
        <section className="carouselSection">
            <img className="carouselImg" src={locationImg} alt={locationImg} />
            <div
                ref={chevronL}
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
                ref={chevronR}
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
