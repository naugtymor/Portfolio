import style from "./Skill.module.scss"

const Skill = (props) => {
    return (
        <div className={style.item}>
            <div className={style.skill}>
                <a href={''}>
                    <span className={style.icon}></span>
                    <h5>{props.title}</h5>
                    <p className={style.description}>Website ravida surna eveti semen the conse tusio anivite dianne one
                        nivam
                        acestion vue artin
                        dictum.
                    </p>
                    <div className={style.numb}>{props.num}</div>
                </a>
            </div>
        </div>
    )
}

export default Skill;
