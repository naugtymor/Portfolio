import style from "./Project.module.css"

const Project = (props) => {
    return (
        <div className={style.item}>
            <a href={''}>
                <div className={style.imgBlock}>
                    <div className={style.wrapperImg}>
                        <img src={props.image}/>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Project;
