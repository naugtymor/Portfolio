import style from "./Skill.module.scss"

const Skill = (props) => {
    return (
        <div className={style.item}>
            <div className={style.skill}>
                <span>
                    <div className={style.icon}>{props.icon}</div>
                    <h5>{props.title}</h5>
                    <p className={style.description}>{props.description}</p>
                    <div className={style.numb}>{props.num}</div>
                </span>
            </div>
        </div>
    )
}

export default Skill;
