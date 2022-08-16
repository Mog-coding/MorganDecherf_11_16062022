import './DropdownComponent.css';
import chevron from '../../assets/icon/chevron.svg';

function DropdownComponent({ heading, content }) {
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

    return (
        <section className="dropdownSection">
            <div
                onClick={(e) => toggleDropdown(e.target)}
                className="dropdownHeading"
            >
                <img className="chevron" src={chevron} alt="" />
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
