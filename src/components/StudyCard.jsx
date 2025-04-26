


const StudiesCard = (id, img, title, institution, year, description) => {

    return (

        <article className="CardStudies" tabIndex={id}>
            <picture><img src={img}/></picture>
            <div className="Studies-info">            
                <h2>{title}</h2>
                <h3>{institution}</h3>
                <h3>{year}</h3>
                <p>{description}</p>
            </div>

        </article>
    )
}

export default StudiesCard;