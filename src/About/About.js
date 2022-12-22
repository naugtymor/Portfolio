import style from "./About.module.scss"
import styleContainer from "../common/styles/Container.module.css"
import Title from "../common/components/Title/Title";
import Bar from "./ProgressBar/Bar";


const About = () => {
    return (
        <div className={style.aboutBlock}>
            <div className={`${style.aboutContainer} ${styleContainer.container}`}>
                <Title mainTitle={'I Develop & Create Digital Future.'} secondTitle={'I MAKE THE FUTURE'}/>
                <div className={style.experience}>
                    <div className={style.info}>
                        <p>Hi! I am a front-end developer.
                            Now I am improve my skills in this direction and expanding them with new technologies.
                            I plan to further study the framework.
                            In my spare time i solve CodeWars and improve my English.</p>
                        <p>I have experience in creating SPA with React/Redux/TypeScript. Recently, I have been actively
                            involved in the following areas like: React, Rest API, Javascript, HTML&CSS.</p>
                    </div>
                    <div className={style.progressBar}>
                        <Bar title={'React'} percent={'90%'}/>
                        <Bar title={'Rest API'} percent={'80%'}/>
                        <Bar title={'JAVASCRIPT'} percent={'85%'}/>
                        <Bar title={'HTML&CSS'} percent={'75%'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
