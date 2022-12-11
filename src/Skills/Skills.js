import style from "./Skills.module.css"
import styleContainer from "../common/styles/Container.module.css"

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${style.skillsContainer} ${styleContainer.container}`}>
                <div>
                    <div>
                        <h6>SERVICES THAT I PROVIDE</h6>
                        <h1>Services</h1>
                    </div>
                    <div>
                        <p>Phasellus et lacus suscipit congue nisl the volutpat magna. donec miss the drana risus
                            tincidunt convallis velit orci congue tortor </p>
                    </div>
                </div>
                <div className={style.skills}>

                </div>
            </div>
        </div>
    )
}

export default Skills;
