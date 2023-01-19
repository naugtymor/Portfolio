import style from "./Nav.module.scss"
import Slide from "react-reveal/Slide";
import { Link } from "react-scroll"

const Nav = (props) => {
    return (
        <div className={style.navBlock} onClick={() => props.setActive(false)}>
            <Slide right>
                <div className={style.nav} onClick={e => e.stopPropagation()}>
                    {/*<div className={style.closeButton} onClick={() => props.setActive(false)}><GrClose/></div>*/}
                    <Link onClick={() => props.setActive(false)} activeClass={style.active} to={"main"} spy={true} smooth={true} offset={1} duration={1000}>
                        HOME
                    </Link>
                    <Link onClick={() => props.setActive(false)} activeClass={style.active} to={"services"} spy={true} smooth={true} offset={1} duration={1000}>
                        SERVICES
                    </Link>
                    <Link onClick={() => props.setActive(false)} activeClass={style.active} to={"aboutMe"} spy={true} smooth={true} offset={1} duration={1000}>
                        ABOUT ME
                    </Link>
                    <Link onClick={() => props.setActive(false)} activeClass={style.active} to={"feedback"} spy={true} smooth={true} offset={1} duration={1000}>
                        FEEDBACK
                    </Link>
                    <Link onClick={() => props.setActive(false)} activeClass={style.active} to={"projects"} spy={true} smooth={true} offset={1} duration={1000}>
                        PORTFOLIO
                    </Link>
                    <Link onClick={() => props.setActive(false)} activeClass={style.active} to={"skills"} spy={true} smooth={true} offset={0} duration={500}>
                        SKILLS
                    </Link>
                </div>
            </Slide>
        </div>
    )
}

export default Nav;
// <div className={style.nav}>
//     <a href={'Home'}>Home</a>
//     <a href={'Skills'}>Skills</a>
//     <a href={'Portfolio'}>Portfolio</a>
//     <a href={'Contact'}>Contact</a>
// </div>