import style from "./SkillIcon.module.scss";

const SkillIcon = (props) => {
    return (
        <div className={style.iconBlock}>
            {props.icon ?
                <div className={style.icon}>{props.icon}</div>
                :
                <img src={props.svg} alt={'skillIcon'} className={style.svgIcon}/>
            }
            <h3>{props.name}</h3>
        </div>
    )
}

export default SkillIcon;