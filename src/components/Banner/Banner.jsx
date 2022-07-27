import './Banner.css';

function Banner({ title, image, description, height }) {
    return (
        <section className="banner" style={{ height: height }}>
            <h1 className="bannerText">{title}</h1>
            <img src={image} alt={description} />
        </section>
    );
}

export default Banner;
