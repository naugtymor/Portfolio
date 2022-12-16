import style from "./Projects.module.scss";
import Project from "./Project/Project";
import Title from "../common/components/Title/Title";
import firstImage from "../assets/images/first.jpg";
import secondImage from "../assets/images/second.jpg";
import thirdImage from "../assets/images/third.jpg";

const Projects = () => {

    return (
        <div className={style.projectsBlock}>
            <div className={style.projectsContainer}>
               <Title mainTitle={"Portfolio"} secondTitle={"OUR WORKS"} description={'Phasellus et lacus suscipit congue nisl the volutpat\n' +
                   '                    magna. donec miss the drana risus tincidunt convallis velit orci congue tortor eu dignissim\n' +
                   '                    ipsum suam non odio. Pellenta esuntion miss the imperdiet metus ornare. '}/>
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
