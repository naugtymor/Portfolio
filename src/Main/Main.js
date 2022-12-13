import style from "./Main.module.css"
import styleContainer from "../common/styles/Container.module.css"

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                    <div className={style.photo}>
                        <img src={''} alt={"avatar"}/>
                    </div>
                    <div className={style.text}>
                        <h1>
                            <span>NILSA</span>
                            <span> </span>
                            <span>BROWN</span>
                        </h1>
                        <h6>
                            Creative Web & App Developer
                        </h6>
                        <span>Hi, I’m Nilsa Brown and I am creative web & app developer who dream making the world better place by creating captivating products.</span>
                    </div>
            </div>
        </div>
    )
}

export default Main;
