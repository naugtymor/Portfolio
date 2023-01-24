import style from "./Skills.module.scss"
import styleContainer from "../common/styles/Container.module.css"
import Skill from "./Skill/Skill";
import Title from "../common/components/Title/Title";
import { BsClockHistory, BsCodeSquare, BsLayoutWtf} from "react-icons/bs";

const skills = [
    {
        title: 'WEB Development',
        description: 'Web development services involve everything related to building a web-based solution – whether it is a simple text page or a complex web application. Many people think of “web development” as just using a variety of programming languages to create the web app code. ',
        num: '01',
        icon: <BsCodeSquare/>
    },
    {
        title: 'Application Design',
        description: 'No matter how complex your product is, I know how to make its UX and UI design a web interface and experience that your users will love and want to buy. You can come to us with a detailed vision and requirements or let our designers fulfill your ideas from scratch.',
        num: '02',
        icon: <BsLayoutWtf/>
    },
    {
        title: 'SPA maintenance',
        description: 'SPA is a web application or website that interacts with the web browser by dynamically rewriting the current web page with new data from the web server, instead of the default method of the browser loading entire new pages. SPA is a perfect solution.',
        num: '03',
        icon: <BsClockHistory/>
    },
]

const Skills = () => {
    return (
        <div className={style.skillsBlock} id={'services'}>
            <div className={`${style.skillsContainer} ${styleContainer.container}`}>
                <Title mainTitle={"Services"} secondTitle={"SERVICES THAT I PROVIDE"} description={'Here you can see the range of services and skills that I can provide you with accompanying your commercial project. '}/>
                <div className={style.skills}>
                    {
                        skills.map((s, index) => <Skill key={index} title={s.title} num={s.num} icon={s.icon} description={s.description}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills;
