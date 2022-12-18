import style from "./Footer.module.css"
import styleContainer from "../common/styles/Container.module.css";
import {SlSocialInstagram, SlSocialFacebook, SlSocialLinkedin, SlSocialGithub, SlPaperPlane} from "react-icons/sl";


const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={styleContainer.container}>
                <div className={style.items}>
                    <div className={style.item}>
                        <h5>Get in touch</h5>
                        <p>znaknikita.it@gmail.com<br/>
                            +375445316892</p>
                    </div>
                    <div className={style.item}>
                        <h5>Locations</h5>
                        <p>Minsk - Belarus</p>
                    </div>
                    <div className={style.item}>
                        <div className={style.icons}>
                            <div className={style.iconBlock}>
                                <a href={''}>
                                    <div className={style.icon}><SlSocialFacebook/></div>
                                </a>
                            </div>
                            <div className={style.iconBlock}>
                                <a href={''}>
                                    <div className={style.icon}><SlSocialInstagram/></div>
                                </a>
                            </div>
                            <div className={style.iconBlock}>
                                <a href={''}>
                                    <div className={style.icon}><SlSocialLinkedin/></div>
                                </a>
                            </div>
                            <div className={style.iconBlock}>
                                <a href={''}>
                                    <div className={style.icon}><SlSocialGithub/></div>
                                </a>
                            </div>
                            <div className={style.iconBlock}>
                                <a href={''}>
                                    <div className={style.icon}><SlPaperPlane/></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;