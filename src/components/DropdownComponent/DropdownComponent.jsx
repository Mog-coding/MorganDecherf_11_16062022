import './DropdownComponent.css';
import chevronUp from '../../assets/icon/chevron_haut.svg';

function toggleDropdown(para) {
    // sélection contenu et icon du dropdown
    const dropContent = para.parentElement.nextElementSibling;
    const dropIcon = para.previousElementSibling;

    if (dropContent.classList.contains('hide')) {
        dropContent.classList.remove('hide');
        dropContent.classList.add('appear');
        dropIcon.classList.add('rotate');
    } else {
        dropContent.classList.remove('appear');
        dropContent.classList.add('hide');
        dropIcon.classList.remove('rotate');
    }
}

function DropdownComponent({ heading, content }) {
    return (
        <section className="dropdownSection">
            <div
                onClick={(e) => toggleDropdown(e.target)}
                className="dropdownHeading"
            >
                <img className="chevronUp" src={chevronUp} alt="" />
                <h2>{heading}</h2>
            </div>
            <div className="dropdownContent hide">
                {Array.isArray(content) ? (
                    <ul>
                        {content.map((elLi, index) => {
                            return <li key={`${elLi}-${index}`}>{elLi}</li>;
                        })}
                    </ul>
                ) : (
                    <p>{content}</p>
                )}
            </div>
        </section>
    );
}

export default DropdownComponent;
