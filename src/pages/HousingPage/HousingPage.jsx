import { useParams } from 'react-router-dom';
import { useState, useEffect, Navigate } from 'react';

import './HousingPage.css';
import CarouselComponent from '../../components/CarouselComponent/CarouselComponent';
import TagComponent from '../../components/TagComponent/TagComponent';
import RatingComponent from '../../components/RatingComponent/RatingComponent';
import HostComponent from '../../components/HostComponent/HostComponent';
import DropdownComponent from '../../components/DropdownComponent/DropdownComponent';

function HousingPage() {
    const { id } = useParams();

    const [locationData, setLocationData] = useState({});
    useEffect(() => {
        fetch('/location.json')
            .then((resp) => resp.json())
            .then((responseData) => {
                const housingFound = responseData.find((para) => {
                    return para.id === id;
                });
                return setLocationData(housingFound);
            })
            .catch((error) => console.log(error));
    });

    return (
        <>
            {locationData ? (
                <div>
                    {Object.entries(locationData).length !== 0 ? (
                        <CarouselComponent
                            locationImgArr={locationData.pictures}
                        />
                    ) : null}
                    <main className="housingMain">
                        <h1 className="housingTitle">{locationData.title}</h1>
                        <p className="housingLocation">
                            {locationData.location}
                        </p>

                        <div className="housingPageTags">
                            {Object.entries(locationData).length !== 0
                                ? locationData.tags.map((elTag, index) => {
                                      return (
                                          <TagComponent
                                              tag={elTag}
                                              key={`${elTag}-${index}`}
                                          />
                                      );
                                  })
                                : null}
                        </div>
                        <div className="ratingHostCont">
                            <RatingComponent
                                starNb={parseInt(locationData.rating)}
                            />

                            {Object.entries(locationData).length !== 0 ? (
                                <HostComponent
                                    renterName={locationData.host.name}
                                    renterImg={locationData.host.picture}
                                />
                            ) : null}
                        </div>
                    </main>
                    <div>
                        <DropdownComponent
                            heading="Description"
                            content={locationData.description}
                        />
                        <DropdownComponent
                            heading="Équipements"
                            content={locationData.equipments}
                        />
                    </div>
                </div>
            ) : (
                <Navigate path="/404" />
            )}
        </>
    );
}

export default HousingPage;
