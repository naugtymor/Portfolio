import style from "./Title.module.scss"

const Title = (props) => {
    return (
        <div className={style.title}>
            <div className={style.mainTitle}>
                <h6>{props.secondTitle}</h6>
                <h1>{props.mainTitle}</h1>
            </div>
            <div className={style.titleDescription}>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Title;
