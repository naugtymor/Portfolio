import style from "./Bar.module.scss"

const Bar = (props) => {
    return (
        <div className={style.item}>
            <p className={style.barTitle}>{props.title} <span>{props.percent}</span></p>
            <div className={style.bar}>
                <div className={props.barClass}></div>
            </div>
        </div>
    )
}

export default Bar;
