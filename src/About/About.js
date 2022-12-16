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
                        {/*<Bar title={'Design'} percent={'90%'} barClass={'barFillDesign'}/>*/}
                        {/*<Bar title={'Branding'} percent={'80%'} barClass={'barFillBranding'}/>*/}
                        {/*<Bar title={'Web Design'} percent={'95%'} barClass={'barFillWeb'}/>*/}
                        {/*<Bar title={'Social Media'} percent={'85%'} barClass={'barFillMedia'}/>*/}
                        <p className={style.barTitle}>Design <span>90%</span></p>
                        <div className={style.bar}>
                            <div className={style.barFillDesign}></div>
                        </div>
                        <p className={style.barTitle}>Branding <span>80%</span></p>
                        <div className={style.bar}>
                            <div className={style.barFillBranding}></div>
                        </div>
                        <p className={style.barTitle}>Web Design <span>95%</span></p>
                        <div className={style.bar}>
                            <div className={style.barFillMedia}></div>
                        </div>
                        <p className={style.barTitle}>Social Media <span>85%</span></p>
                        <div className={style.bar}>
                            <div className={style.barFillDesign}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
