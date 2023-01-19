import style from "./DistantWork.module.scss"
import styleContainer from "../common/styles/Container.module.css"


const DistantWork = (props) => {
    return (
        <div className={style.workBlock} id={'feedback'}>
            <div className={styleContainer.container}>
                <div className={style.workContainer}>
                    <div className={style.title}>
                        <h2>CONSIDERING REMOTE WORK OPTIONS</h2>
                    </div>
                    <div className={style.button} onClick={() => props.setActive(true)}>
                        <span>HIRE ME</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DistantWork;