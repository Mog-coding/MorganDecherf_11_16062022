import './Banner.css'

function Banner({title, image}){
    return(
        <section className="banner">
            <h1 className='bannerText'>{title}</h1>
            <img src={image} alt="Rochers en bord de mer" />
        </section>
    )
}

export default Banner