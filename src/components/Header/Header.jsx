import { Link } from 'react-router-dom'

import './Header.css'
import logoKasaMobile from '../../assets/logoKasaMobile.svg'


function Header() {

    return (
        <header>
            <div className='logoKasa'>
                <img src={logoKasaMobile} alt='logo Kasa' />
            </div>

            <nav>
                <Link className="linkAccueil" to="/">ACCUEIL</Link>
                <Link to="/aboutus">A PROPOS </Link>
            </nav>
        </header>
    )
}

export default Header