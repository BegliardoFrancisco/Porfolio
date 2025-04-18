
import "../styles/ProjectCard.css";
const ProjectCard = ({key, img, title, description, link})=> {

    return (
        <article className="projects-section">
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