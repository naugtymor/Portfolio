import style from "./Skill.module.css"

const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h5>{props.title}</h5>
            <p className={style.description}>Website ravida surna eveti semen the conse tusio anivite dianne one nivam
                acestion vue artin
                dictum.</p>
        </div>
    )
}

export default Skill;
