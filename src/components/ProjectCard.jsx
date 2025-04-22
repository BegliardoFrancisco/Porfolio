
import "../styles/ProjectCard.css";
const ProjectCard = ({id, img, title, description, link})=> {

    return (
        <article className="projects-section" tabIndex={id}>
            <picture className="project-img"><img src={img}/></picture>
            <div className="project-info">
                <h2>{title}</h2>
                <p>{description}</p>
                <a href={link}>Go Code</a>
            </div>
        </article>
    )
}

export default ProjectCard;