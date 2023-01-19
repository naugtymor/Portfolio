import style from "./SkillsList.module.scss"
import styleContainer from "../common/styles/Container.module.css"
import { FaReact, FaGitAlt } from "react-icons/fa";
import { SiRedux, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiStorybook, SiJest } from "react-icons/si";
import SkillIcon from "./SkillIcon/SkillIcon";
import restApi from '../assets/images/restApi.png'

const skills = [
    {
        name: 'REACT',
        icon: <FaReact/>
    },
    {
        name: 'REDUX',
        icon: <SiRedux/>
    },
    {
        name: 'TYPESCRIPT',
        icon: <SiTypescript/>
    },
    {
        name: 'JAVASCRIPT',
        icon: <SiJavascript/>
    },
    {
        name: 'HTML5',
        icon: <SiHtml5/>
    },
    {
        name: 'CSS3',
        icon: <SiCss3/>
    },
    {
        name: 'RESTAPI',
        svg: restApi
    },
    {
        name: 'STORYBOOK',
        icon: <SiStorybook/>
    },
    {
        name: 'GIT',
        icon: <FaGitAlt/>
    },
    {
        name: 'TDD-JEST',
        icon: <SiJest/>
    }
]

const SkillsList = () => {
    return (
        <div className={style.listBlock} id={'skills'}>
            <div className={`${styleContainer.container} ${style.listContainer}`}>
                <div className={style.title}>
                    <h2>MY SKILLS</h2>
                </div>
                <div className={style.list}>
                    {
                        skills.map((s, index) =>
                            <SkillIcon key={index} name={s.name} icon={s.icon} svg={s.svg}/>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default SkillsList;