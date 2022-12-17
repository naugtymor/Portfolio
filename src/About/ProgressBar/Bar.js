import style from "./Bar.module.scss"

const Bar = (props) => {
    return (
        <div className={style.item}>
            <p className={style.barTitle}>{props.title} <span>{props.percent}</span></p>
            <div className={style.bar}>
                <div style={{width: props.percent}} className={style.barFill}></div>
            </div>
        </div>
    )
}

export default Bar;
