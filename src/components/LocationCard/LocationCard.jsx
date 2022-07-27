import './LocationCard.css';

function LocationCard({ imgCardUrl, title }) {
    return (
        <article>
            <p>{title}</p>
            <img src={imgCardUrl} alt={title} />
        </article>
    );
}

export default LocationCard;
