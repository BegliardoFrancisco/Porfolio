import CuradorDeDatos from "../cursoQR/CuradorDeDatos.png"
import UTNLogo from "../cursoQR/UTNLogo.jpeg"
import AdmDeBaseDeDatos from "../cursoQR/AdmDeBaseDeDatos.png"
import DevBackend from "../cursoQR/DesarrolladorBackend.png"
import DevFrontEnd from "../cursoQR/FrontEnd.png"
import ProgPOO from "../cursoQR/ProgramadorPoo.png"
import AdmDeServidores from "../cursoQR/AdmDeServidores.png"

import StudiesCard from "./StudyCard.jsx"
import "../styles/SectionStudy.css"

const SectionStudy = () => {
    const studies = [
        {
            id:1,
            img: UTNLogo,
            title: "Analista en sistemas de información",
            institution: "Universidad Tecnológica Nacional - Facultad Regional Cordoba UTN-FRC",
            year: "2019 - 2025",
            description: "Algoritmos y estructuras de datos, programacion orientada a objetos, programacion web, bases de datos, redes de computadoras, sistemas operativos, Analisis & Diseño de sistemas, arquitectura de computadoras"		
        },
        {
            id:2,
            img : AdmDeBaseDeDatos, 
            title: "Administrador de Base de datos",
            institution: "Capacitate para el empleo - Fundación Carlos Slim",
            year: "2020",
            description:"Crear,consultar y adminitrar de base datos relaciones SQL "
        },
        {
            id:3,
            img: AdmDeServidores,
            title: "Administrador de Servidores",
            institution: "Capacitate para el empleo - Fundación Carlos Slim",
            year: "2020",
            description: "Sistemas operativos, bashScripting, Instalacion y configuracion de servidores (web, BDD, impresion,correo, Raids)"
        }
    ]

    return (
        <section className="section-studies">
            <h1>EDUCATION</h1>
            {studies.map((study) => (
                <StudiesCard
                key={study.id}
                id={study.id}
                img={study.img}
                title={study.title}
                institution={study.institution}
                year={study.year}
                description={study.description}
                />
            ))}

        </section>
    )
}

export default SectionStudy;