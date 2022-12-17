import style from "./DistantWork.module.scss"
import styleContainer from "../common/styles/Container.module.css"


const DistantWork = () => {
    return (
        <div className={style.workBlock}>
            <div className={styleContainer.container}>
                <div className={style.workContainer}>
                    <div className={style.title}>
                        <h2>CONSIDERING REMOTE WORK OPTIONS</h2>
                    </div>
                    <div className={style.button}>
                        <a href={''}>HIRE ME</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DistantWork;