import { useState, useEffect } from 'react';
import './HomePage.css';
import Banner from '../../components/Banner/Banner';
import LocationCard from '../../components/LocationCard/LocationCard';
import imgBanHome from '../../assets/homePage_banner.jpg';
import { Link } from 'react-router-dom';

function HomePage() {
    const [locationData, setLocationData] = useState([]);
    useEffect(() => {
        fetch('/location.json')
            .then((resp) => resp.json())
            .then((responseData) => setLocationData(responseData))
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <Banner
                image={imgBanHome}
                title="Chez vous, partout et ailleurs"
                description="Rochers en bord de mer"
                height="111px"
            />
            <main className="homeMain">
                {locationData.map(({ id, cover, title }) => {
                    return (
                        <Link
                            key={id}
                            to={`/housing/${id}`}
                            className="homeCard"
                        >
                            <LocationCard imgCardUrl={cover} title={title} />
                        </Link>
                    );
                })}
            </main>
        </>
    );
}

export default HomePage;

// const [locationData, setLocationData] = useState([]);
// useEffect(() => {
//  fetch("/location.json")
//     .then((resp) => resp.json()
//     .then(( responseData ) => setLocationData(responseData))
//     .catch((error) => console.log(error))
//     )
// }, [])
