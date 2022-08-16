import { Link } from 'react-router-dom';
import { useFetch } from '../../utils/customHook/useFetch/useFetch';
import { Loader } from '../../utils/style/Loader/Loader';

import './HomePage.css';
import Banner from '../../components/Banner/Banner';
import LocationCard from '../../components/LocationCard/LocationCard';
import imgBanHome from '../../assets/homePage_banner.jpg';

function HomePage() {
    const { data, isLoading, error } = useFetch('/location.json');
    console.log('homePage data', data);

    if (error) {
        return <div> Erreur fetch </div>;
    }

    return (
        <>
            <div className="homeBanner">
                <Banner
                    image={imgBanHome}
                    title="Chez vous, partout et ailleurs"
                    description="Rochers en bord de mer"
                    height="111px"
                />
            </div>
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <main className="homeMain">
                        {
                            data.map(({ id, cover, title }) => {
                                return (
                                    <Link
                                        key={id}
                                        to={`/housing/${id}`}
                                        className="homeCard"
                                    >
                                        <LocationCard
                                            imgCardUrl={cover}
                                            title={title}
                                        />
                                    </Link>
                                );
                            })
                        }
                    </main>
                )
            }
        </>
    );
}

export default HomePage;
