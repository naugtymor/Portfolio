import style from "./SkillsList.module.css"


const SkillsList = () => {
    return (
        <div className={style.listBlock}>
            <div className={style.listContainer}>
                <div className={style.title}>
                    <h2>MY SKILLS</h2>
                </div>
                <div className={style.list}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
            </div>
        </div>
    )
}

export default SkillsList;