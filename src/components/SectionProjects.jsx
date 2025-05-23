import ProjectCard from './ProjectCard.jsx';


const SectionProjects = () => {

    const projects = [
        {
            id: 1,
            title: 'Ejercicos Algoritmicos',
            description: 'Ejercicios de algoritmos y estructuras de datos en python',	
            link: 'https://github.com/BegliardoFrancisco/EjerciciosAlgoritmicos',
            img: 'https://wallpapercave.com/wp/wp8583820.jpg',
        },
        {
            id: 2,
            title: 'GroupsTracks',
            description: 'Dessarrollo de un backend en python utlizando DDD, sqlalchemy,fastapi',
            link: 'https://github.com/BegliardoFrancisco/GroupsTracks',
            img: 'https://miro.medium.com/v2/resize:fit:1200/1*L6Eaowb7nHrLSiH41Tp4sA.png'
        },
        {
            id: 3,
            title: 'ExampleFlaskRestAPI',
            description: 'API REST con flask muy basica orietnada para ver la estructura del framework',
            link: 'https://github.com/BegliardoFrancisco/ExampleFlaskRestAPI-',
            img: 'https://nordicapis.com/wp-content/uploads/How-to-Create-an-API-Using-The-Flask-Framework-1024x576.png',
        },
        {
            id: 4,
            title: 'PPAI_DSI',
            description: 'Desarrollo de nuestra propuesta de diseño de un CU asignado',
            link: 'https://github.com/BegliardoFrancisco/PPAI_DSI',
            img: 'https://miro.medium.com/v2/resize:fit:670/0*muNHqR0MMu2CjRbv.png',
        }
    ]


    return (
        <section id='projects'>
            <h1>PROJECTS</h1>
            {projects.map((project) => (
                <ProjectCard
                key={project.id}
                    id={project.id}
                    img={project.img}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                />
            ))}         
        </section>

    )
}

export default SectionProjects;