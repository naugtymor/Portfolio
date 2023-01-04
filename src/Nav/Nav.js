import style from "./Nav.module.scss"
import Slide from 'react-reveal/Slide';
import { GrClose } from "react-icons/gr";


const Nav = (props) => {
    return (
        <div className={style.navBlock} onClick={() => props.setActive(false)}>
            <Slide right>
                <div className={style.nav} onClick={e => e.stopPropagation()}>
                    <div className={style.closeButton} onClick={() => props.setActive(false)}><GrClose/></div>
                    <h5>HOME</h5>
                    <h5>SERVICES</h5>
                    <h5>ABOUT ME</h5>
                    <h5>FEEDBACK</h5>
                    <h5>PORTFOLIO</h5>
                    <h5>SKILLS</h5>
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