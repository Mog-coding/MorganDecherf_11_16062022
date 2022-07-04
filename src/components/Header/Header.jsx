import { Link } from 'react-router-dom'

import './Header.css'
import logoKasa from '../../assets/logoKasa.svg'


function Header() {

    return (
        <header>
            <div className='logoKasa'>
                <img src={logoKasa} alt='logo Kasa' />
            </div>

            <nav>
                <Link className="linkAccueil" to="/">Accueil</Link>
                <Link to="/aboutus">A propos</Link>
            </nav>
        </header>
    )
}

export default Header