import style from "./DistantWork.module.css"
import styleContainer from "../common/styles/Container.module.css"


const DistantWork = () => {
    return (
        <div className={style.workBlock}>
            <div className={`${style.workContainer} ${styleContainer.container}`}>
                <div className={style.title}>
                    <h2>CONSIDERING REMOTE WORK OPTIONS</h2>
                </div>
                <div className={style.button}>
                    <p>HIRE ME</p>
                </div>
            </div>
        </div>
    )
}

export default DistantWork;