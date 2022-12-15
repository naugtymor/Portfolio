import style from "./Skills.module.css"
import styleContainer from "../common/styles/Container.module.css"
import Skill from "./Skill/Skill";
import Title from "../common/components/Title/Title";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${style.skillsContainer} ${styleContainer.container}`}>
                <Title mainTitle={"Services"} secondTitle={"SERVICES THAT I PROVIDE"}/>
                <div className={style.skills}>
                    <Skill title={"Website Design"} num={'01'}/>
                    <Skill title={"SEO Marketing"} num={'02'}/>
                    <Skill title={"eCommerce"} num={'03'}/>
                </div>
            </div>
        </div>
    )
}

export default Skills;
