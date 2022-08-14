import { useParams } from 'react-router-dom';
import { Navigate } from 'react';
import { useFetch } from '../../utils/customHook/useFetch/useFetch';
import { Loader } from '../../utils/style/Loader/Loader';

import './HousingPage.css';
import CarouselComponent from '../../components/CarouselComponent/CarouselComponent';
import TagComponent from '../../components/TagComponent/TagComponent';
import RatingComponent from '../../components/RatingComponent/RatingComponent';
import HostComponent from '../../components/HostComponent/HostComponent';
import DropdownComponent from '../../components/DropdownComponent/DropdownComponent';

function HousingPage() {
    const { id } = useParams();

    const { data, isLoading, error } = useFetch('/location.json');

    let locationData = data;

    if (!isLoading) {
        locationData = data.find((para) => {
            return para.id === id;
        });
    }
    if (error) {
        return <div> Erreur fetch </div>;
    }

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div>
                    <CarouselComponent locationImgArr={locationData.pictures} />

                    <main className="housingMain">
                        <h1 className="housingTitle">{locationData.title}</h1>
                        <p className="housingLocation">
                            {locationData.location}
                        </p>

                        <div className="housingPageTags">
                            {locationData.tags.map((elTag, index) => {
                                return (
                                    <TagComponent
                                        tag={elTag}
                                        key={`${elTag}-${index}`}
                                    />
                                );
                            })}
                        </div>
                        <div className="ratingHostCont">
                            <RatingComponent
                                starNb={parseInt(locationData.rating)}
                            />

                            <HostComponent
                                renterName={locationData.host.name}
                                renterImg={locationData.host.picture}
                            />
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
            )}
        </>
    );
}

export default HousingPage;

// {Object.entries(locationData).length !== 0 ? (
//     <HostComponent
//         renterName={locationData.host.name}
//         renterImg={locationData.host.picture}
//     />
// ) : null}
