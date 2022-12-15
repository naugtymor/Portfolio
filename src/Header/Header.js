import style from "./Header.module.scss"
import Nav from "../Nav/Nav";
import styleContainer from "../common/styles/Container.module.css";
import logoImg from "../assets/images/logo.png"


const Header = () => {
    return (
        <div className={style.headerBlock}>
            <div className={`${style.headerContainer} ${styleContainer.container}`}>
                <Nav/>
            </div>
        </div>
    )
}

export default Header;
