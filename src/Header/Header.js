import style from "./Header.module.scss"
import Nav from "../Nav/Nav";
import styleContainer from "../common/styles/Container.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = (props) => {
    return (
        <div className={style.headerBlock}>
            <div className={`${style.headerContainer} ${styleContainer.container}`}>
                <div className={style.burgerButton} onClick={() => props.setActive(true)}><GiHamburgerMenu/></div>
            </div>
        </div>
    )
}

export default Header;

// <div className={style.headerBlock}>
//     <div className={`${style.headerContainer} ${styleContainer.container}`}>
//         <Nav/>
//     </div>
// </div>