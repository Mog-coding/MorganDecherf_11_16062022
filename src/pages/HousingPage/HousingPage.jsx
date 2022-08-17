import { useParams, Redirect } from 'react-router-dom';
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
    // utilisation custom hook useFetch
    const { data, isLoading, error } = useFetch('/location.json');

    // si chargement fetch terminé, sélection location via id de l'url
    let locationData;

    if (data && data.length) {
        locationData = data.find((para) => {
            return para.id === id;
        });
    }
    console.log("data:", locationData)

    if (error) {
        return <div> Erreur fetch </div>;
    }

    return (
        <>
            {
                isLoading ? (
                    <Loader />
                ) : locationData ? (
                    <div>
                        <CarouselComponent locationImgArr={locationData.pictures} />

                        <main className="housingMain">
                            <div>
                                <h1 className="housingTitle">
                                    {locationData.title}
                                </h1>
                                <p className="housingLocation">
                                    {locationData.location}
                                </p>

                                <div className="housingPageTags">
                                    {
                                        locationData.tags.map((elTag, index) => {
                                            return (
                                                <TagComponent
                                                    tag={elTag}
                                                    key={`${elTag}-${index}`}
                                                />
                                            );
                                        })
                                    }
                                </div>
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
                        <section className="housingContDropdown">
                            <div className="housingDropdown">
                                <DropdownComponent
                                    heading="Description"
                                    content={locationData.description}
                                />
                            </div>
                            <div className="housingDropdown">
                                <DropdownComponent
                                    heading="Équipements"
                                    content={locationData.equipments}
                                />
                            </div>
                        </section>
                    </div>
                ) : (
                    <Redirect to="/404" />
                )
            }
        </>
    );
}

export default HousingPage;
