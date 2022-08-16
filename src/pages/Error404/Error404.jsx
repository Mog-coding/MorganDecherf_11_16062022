import { Link } from 'react-router-dom';

import './Error404.css';
import errorIcon from '../../assets/icon/404.svg';

function Error404() {
    return (
        <>
            <div className="contError">
                <main className="main404">
                    <img className="errorIcon" src={errorIcon} alt="" />
                    <p>Oups! La page que vous demandez n'existe pas.</p>
                </main>
                <section className="errorSection">
                    <Link to="/">Retourner sur la page d'accueil </Link>
                </section>
            </div>
        </>
    );
}

export default Error404;
