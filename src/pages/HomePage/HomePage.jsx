import { useState, useEffect } from 'react'
import './HomePage.css'
import Banner from '../../components/Banner/Banner'
import LocationCard from '../../components/LocationCard/LocationCard'
import imgBanHome from '../../assets/homePage_banner.jpg'
import { locaData} from '../../data/locaData'

function HomePage() {

    const [locationData, setLocationData] = useState({});
    useEffect(() => {
     fetch("src/data/location.json")
        .then((resp) => resp.json()
        .then(({ locationData }) => setLocationData(locationData))
        .catch((error) => console.log(error))
        )
    }, [])
    console.log(locationData)

    return (
        <main>
            <Banner image={imgBanHome} title="Chez vous, partout et ailleurs" />
            
            {locaData.map(({id, cover, title})=>{   
                return <LocationCard key={id} imgCardUrl={cover} title={title} />
            })}

        </main>
    )
}

export default HomePage