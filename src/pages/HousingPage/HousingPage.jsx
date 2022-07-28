import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './HousingPage.css';
import TagComponent from '../../components/TagComponent/TagComponent';

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
    }, []);

    return (
        <>
            <img className="imgHousing" src={locationData.cover} alt="" />
            <h1>{locationData.title}</h1>
            <p>{locationData.location}</p>
            {console.log('return fetchdata ds composant:', locationData)}

            {/* <div className="housingPageTags">
                {locationData.tags.map((elTag) => {
                    return <TagComponent tag={elTag} />;
                })}
            </div> */}
        </>
    );
}

export default HousingPage;

// key={`${elTag}-${index}`
