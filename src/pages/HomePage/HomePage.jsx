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
        <div>
            <Banner
                image={imgBanHome}
                title="Chez vous, partout et ailleurs"
                description="Rochers en bord de mer"
                height="111px"
            />
            <main>
                {locationData.map(({ id, cover, title }) => {
                    return (
                        <Link key={id} to={`/housing/${id}`}>
                            <LocationCard imgCardUrl={cover} title={title} />
                        </Link>
                    );
                })}
            </main>
        </div>
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
