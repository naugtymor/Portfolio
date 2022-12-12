import style from "./Projects.module.css"
import styleContainer from "../common/styles/Container.module.css"
import Project from "./Project/Project";

const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={style.projectsContainer}>
                <div className={style.title}>
                    <div>
                        <h6>MY WORKS</h6>
                        <h1>Portfolio</h1>
                    </div>
                    <div>
                        <p className={style.titleDescription}>Phasellus et lacus suscipit congue nisl the volutpat
                            magna. donec miss the drana risus tincidunt convallis velit orci congue tortor eu dignissim
                            ipsum suam non odio. Pellenta esuntion miss the imperdiet metus ornare. </p>
                    </div>
                </div>
                {/*<div className={style.projects}>*/}
                {/*    <Project/>*/}
                {/*    <Project/>*/}
                {/*    <Project/>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default Projects;
