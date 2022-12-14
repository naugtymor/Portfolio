import style from "./Projects.module.css"
import Project from "./Project/Project";
import Title from "../common/components/Title/Title";

const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={style.projectsContainer}>
               <Title/>
            </div>
            <div className={style.projects}>
                <Project/>
                <Project/>
                <Project/>
            </div>
        </div>
    )
}

export default Projects;
