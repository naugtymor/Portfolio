import style from "./Skills.module.scss"
import styleContainer from "../common/styles/Container.module.css"
import Skill from "./Skill/Skill";
import Title from "../common/components/Title/Title";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${style.skillsContainer} ${styleContainer.container}`}>
                <Title mainTitle={"Services"} secondTitle={"SERVICES THAT I PROVIDE"} description={'Phasellus et lacus suscipit congue nisl the volutpat\n' +
                    '                    magna. donec miss the drana risus tincidunt convallis velit orci congue tortor eu dignissim\n' +
                    '                    ipsum suam non odio. Pellenta esuntion miss the imperdiet metus ornare. '}/>
                <div className={style.skills}>
                    <Skill title={"WEB Development"} num={'01'}/>
                    <Skill title={"Application Design"} num={'02'}/>
                    <Skill title={"SPA maintenance"} num={'03'}/>
                </div>
            </div>
        </div>
    )
}

export default Skills;
