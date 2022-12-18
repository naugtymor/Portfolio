import style from "./SocialIcon.module.scss";

const SocialIcon = (props) => {
    return (
        <div className={style.iconBlock}>
            <a href={props.link}>
                <div className={style.icon}>{props.icon}</div>
            </a>
        </div>
    )
}

export default SocialIcon;