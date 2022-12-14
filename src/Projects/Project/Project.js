import style from "./Project.module.css"

const Project = () => {
    return (
        <div className={style.item}>
            <div className={style.imgBlock}>
                <div className={style.wrapperImg}>
                    <img src={'https://duruthemes.com/demo/html/nils/nils-light/images/portfolio/1.jpg'}/>
                </div>
            </div>
        </div>
    )
}

export default Project;
