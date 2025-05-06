import "../styles/SectionStudy.css"


const StudiesCard = ({id, title, institution, year, description}) => {

    return (

        <article className="card-studies" tabIndex={id}>
            <div className="Studies-info">            
                <h2>{title}</h2>
                <h3>{institution} ({year})</h3>
                <p>{description}</p>
            </div>

        </article>
    )
}

export default StudiesCard;