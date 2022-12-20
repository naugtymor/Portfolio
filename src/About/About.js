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
                        <p>Pellentesque magna magna semper dapibus felis necatin aliuen risus. Pellentesque habitant
                            morbi senectus dictum.</p>
                        <p>Web design magna magna semper dapibus felis necatin aliuen risus. Pellentesque habitant morbi
                            tristique senectus the neuse malesuada nullam ac lorem miss the duru.</p>
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
