import { useState, useRef, useEffect } from 'react';

import './CarouselComponent.css';
import chevronLeft from '../../assets/icon/vectorLeft.svg';
import chevronRight from '../../assets/icon/vectorRight.svg';

export default function CarouselComponent({ locationImgArr }) {
    
    const [locationImg, updatelocationImg] = useState(locationImgArr[0]);

    // si une seule image, supression chevrons next, previous, compteur
    const chevronL = useRef();
    const chevronR = useRef();
    const count = useRef();

    useEffect(() => {
        const elChevronL = chevronL.current;
        const elChevronR = chevronR.current;
        const elCount = count.current;

        if (locationImgArr.length === 1) {
            elChevronL.classList.add('hide');
            elChevronR.classList.add('hide');
            elCount.classList.add('hide');
        }
    });

    return (
        <section className="carouselSection">
            <img className="carouselImg" src={locationImg} alt={locationImg} />
            <div
                ref={chevronL}
                className="chevronLeft"
                onClick={() =>
                    updatelocationImg(
                        locationImgArr.indexOf(locationImg) === 0
                            ? locationImgArr[locationImgArr.length - 1]
                            : locationImgArr[locationImgArr.indexOf(locationImg) - 1]
                    )
                }
            >
                <img src={chevronLeft} alt="" />
            </div>
            <div
                ref={chevronR}
                className="chevronRight"
                onClick={() =>
                    updatelocationImg(
                        locationImgArr.indexOf(locationImg) === locationImgArr.length - 1
                            ? locationImgArr[0]
                            : locationImgArr[locationImgArr.indexOf(locationImg) + 1]
                    )
                }
            >
                <img src={chevronRight} alt="" />
            </div>
            <div className="locationCount" ref={count}>
                    {
                        (locationImgArr.indexOf(locationImg) + 1) + "/" + locationImgArr.length
                    }
                </div>
        </section>
    );
}
