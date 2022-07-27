import Banner from '../../components/Banner/Banner';
import imgBanAbout from '../../assets/aboutUs_banner.jpg';
import './AboutUsPage.css';
import DropDownComponent from '../../components/DropdownComponent/DropdownComponent';

const aboutUsData = [
    {
        heading: 'Fiabilité',
        description:
            'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
        heading: 'Respect',
        description:
            'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
        heading: 'Service',
        description:
            "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
        heading: 'Sécurité',
        description:
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
];

function AboutUsPage() {
    return (
        <div>
            <Banner title="" image={imgBanAbout} height="223px" />
            <main className="aboutUsDropdowns">
                {aboutUsData.map((el, index) => {
                    return (
                        <DropDownComponent
                            heading={el.heading}
                            content={el.description}
                            key={`${el.heading}-${index}`}
                        />
                    );
                })}
            </main>
        </div>
    );
}

export default AboutUsPage;
