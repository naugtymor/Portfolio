import style from "./Main.module.scss"
import styleContainer from "../common/styles/Container.module.css"
import avatar from "../assets/images/avatar.jpg"
import Fade from 'react-reveal/Fade';


const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.photo}>
                    <div className={style.imgContainer}>
                        <img src={avatar} alt={"avatar"}/>
                    </div>
                </div>
                <Fade>
                    <div className={style.text}>
                        <div className={style.textContainer}>
                            <h1>
                                <span>ZNAK</span>
                                <span> </span>
                                <span>NIKITA</span>
                            </h1>
                            <h6>
                                Front-end Developer
                            </h6>
                            <span>Hi, I’m Znak Nikita and I am front-end developer who dream making the world better.</span>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Main;