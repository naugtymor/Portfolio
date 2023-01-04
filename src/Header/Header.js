import style from "./Header.module.scss"
import Nav from "../Nav/Nav";
import styleContainer from "../common/styles/Container.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {useEffect} from "react";

const Header = (props) => {
    // useEffect(() => {
    //     props.setActive(!props.navActive)
    // }, [props.navActive])

    return (
        <div className={style.headerBlock}>
            <div className={`${style.headerContainer} ${styleContainer.container}`}>
                <div className={style.burgerButton} onClick={() => props.setActive(!props.navActive)}>
                    <div className={style.menu}>

                    </div>
                </div>
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