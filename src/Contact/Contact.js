import style from "./Contact.module.css"
import styleContainer from "../common/styles/Container.module.css";


const Contact = () => {
    return (
        <div className={style.contactBlock}>
            <div className={style.contactContainer}>
                <div className={style.contactDescription}>
                    <div className={style.itemContainer}>
                        <h2>CONTACT ADDRESS</h2>
                        <div>Republic of Belarus, Minsk, st. Makaenka 12B</div>
                        <div>+375(44)5316892</div>
                        <div>znaknikita.it@gmail.com</div>
                        <div className={style.icons}>
                            <div className={style.icon}></div>
                            <div className={style.icon}></div>
                            <div className={style.icon}></div>
                            <div className={style.icon}></div>
                        </div>
                    </div>
                </div>
                <div className={style.contactForm}>
                    <div className={style.itemContainer}>
                        <form className={style.contactData}>
                            <div>
                                <input type={"text"} placeholder={'Full Name'}/>
                                <input type={"text"} placeholder={'E-mail'}/>
                            </div>
                            <input type={"text"} placeholder={'Phone Number'}/>
                            <textarea/>
                            <button type={"submit"} placeholder={'Message'}>SEND</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
