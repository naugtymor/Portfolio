import style from "./Footer.module.css"
import styleContainer from "../common/styles/Container.module.css";


const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${style.footerContainer} ${styleContainer.container}`}>
                <div className={style.items}>
                    <div>
                        <h5>Get in touch</h5>
                        <p>info@gmail.com</p>
                    </div>
                    <div>
                        <h5>Locations</h5>
                        <p>SanFrancisco - California</p>
                    </div>
                    <div className={style.icons}>
                        <div className={style.icon}></div>
                        <div className={style.icon}></div>
                        <div className={style.icon}></div>
                        <div className={style.icon}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;