import style from "./Main.module.scss"
import styleContainer from "../common/styles/Container.module.css"
import avatar from "../assets/images/avatar.jpg"

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.photo}>
                    <img src={avatar} alt={"avatar"}/>
                </div>
                <div className={style.text}>
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
        </div>
    )
}

export default Main;