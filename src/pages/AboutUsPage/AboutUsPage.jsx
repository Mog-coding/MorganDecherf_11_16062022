import Banner from "../../components/Banner/Banner"
import imgBanAbout from "../../assets/aboutUs_banner.jpg"
import './AboutUsPage.css'
import DropDownComponent from "../../components/DropdownComponent/DropdownComponent"

const aboutUsData = [
    {
        heading: "Fiabilité",
        description: "Lorem ipsum",
    },
    {
        heading: "Respect",
        description: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme",
    },
    {
        heading: "Service",
        description: "Lorem ipsum"
    },
    {
        heading: "Responsabilité",
        description: "Lorem ipsum"
    }
]


function AboutUsPage() {
    
    return (
        <main>
            <Banner title="" image={imgBanAbout} height="195px" />
            {aboutUsData.map((el, index) => {
                return (<DropDownComponent heading={el.heading} 
                    content={el.description} 
                    key={`${el.heading}-${index}`}
                    />)
            }
            )}
        </main>
    )
}

export default AboutUsPage