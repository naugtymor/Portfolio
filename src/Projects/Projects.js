import style from "./Projects.module.scss";
import Project from "./Project/Project";
import Title from "../common/components/Title/Title";
import firstImage from "../assets/images/first.jpg";
import secondImage from "../assets/images/second.jpg";
import thirdImage from "../assets/images/third.jpg";

const Projects = () => {
    return (
        <div className={style.projectsBlock} id={'projects'}>
            <div className={style.projectsContainer}>
               <Title mainTitle={"Portfolio"} secondTitle={"OUR WORKS"} description={'Here you can see the projects I have been working on since I started learning how to create a SPA.'}/>
            </div>
            <div className={style.projects}>
                <Project image={firstImage}/>
                <Project image={secondImage}/>
                <Project image={thirdImage}/>
            </div>
        </div>
    )
}

export default Projects;
