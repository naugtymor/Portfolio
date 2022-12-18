import style from "./Footer.module.scss"
import styleContainer from "../common/styles/Container.module.css";
import {SlSocialInstagram, SlSocialFacebook, SlSocialLinkedin, SlSocialGithub, SlPaperPlane} from "react-icons/sl";
import SocialIcon from "./SocialIcon/SocialIcon";

const socials = [
    {
        link: 'https://www.facebook.com/profile.php?id=100005681837956&mibextid=ZbWKwL',
        icon: <SlSocialFacebook/>
    },
    {
        link: 'https://instagram.com/naughty_mor?igshid=ZmVmZTY5ZGE=',
        icon: <SlSocialInstagram/>
    },
    {
        link: 'https://www.linkedin.com/in/nikita-znak-91328925a',
        icon: <SlSocialLinkedin/>
    },
    {
        link: 'https://github.com/naugtymor',
        icon: <SlSocialGithub/>
    },
    {
        link: 'https://t.me/naughty_mor',
        icon: <SlPaperPlane/>
    }
]

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
                            {
                                socials.map((s, index) =>
                                    <SocialIcon key={index} link={s.link} icon={s.icon}/>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;