import './Footer.css'
import logoKasaFooter from '../../assets/logoKasaFooter.svg'

function Footer(){

    return(
        <footer>
            <img src={logoKasaFooter} alt="logo Kasa footer" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer