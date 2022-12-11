import style from "./Main.module.css"

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.photo}></div>
                <div className={style.text}>
                    <h1>
                        <span>NILSA</span>
                        <span> </span>
                        <span>BROWN</span>
                    </h1>
                    <h6>
                        Creative Web & App Developer
                    </h6>
                </div>
            </div>
        </div>
    )
}

export default Main;
