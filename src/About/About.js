import style from "./About.module.css"
import styleContainer from "../common/styles/Container.module.css"


const About = () => {
    return (
        <div className={style.aboutBlock}>
            <div className={`${style.aboutContainer} ${styleContainer.container}`}>
                <div className={style.title}>
                    <h6>I MAKE THE FUTURE</h6>
                    <h1>I Develop & Create Digital Future.</h1>
                </div>
                <div className={style.experience}>
                    <div className={style.info}>
                        <p>Pellentesque magna magna semper dapibus felis necatin aliuen risus. Pellentesque habitant
                            morbi senectus dictum.</p>
                        <p>
                            Web design magna magna semper dapibus felis necatin aliuen risus. Pellentesque habitant
                            morbi tristique senectus the neuse malesuada nullam ac lorem miss the duru.</p>
                        <div>
                            info@gmail.com
                        </div>
                    </div>
                    <div className={style.progressBar}>
                        <p>Design <span>90%</span></p>
                        <p>Branding <span>80%</span></p>
                        <p>Web Design <span>95%</span></p>
                        <p>Social Media <span>85%</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
