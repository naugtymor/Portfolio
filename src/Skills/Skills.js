import style from "./Skills.module.css"
import styleContainer from "../common/styles/Container.module.css"
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${style.skillsContainer} ${styleContainer.container}`}>
                <div className={style.title}>
                    <div>
                        <h6>SERVICES THAT I PROVIDE</h6>
                        <h1>Services</h1>
                    </div>
                    <div>
                        <p className={style.titleDescription}>Phasellus et lacus suscipit congue nisl the volutpat
                            magna. donec miss the drana risus tincidunt convallis velit orci congue tortor eu dignissim
                            ipsum suam non odio. Pellenta esuntion miss the imperdiet metus ornare. </p>
                    </div>
                </div>
                <div className={style.skills}>
                    <Skill title={"Website Design"}/>
                    <Skill title={"SEO Marketing"}/>
                    <Skill title={"eCommerce"}/>
                </div>
            </div>
        </div>
    )
}

export default Skills;
