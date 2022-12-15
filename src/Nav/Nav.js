import style from "./Nav.module.scss"

const Nav = () => {
    return (
        <div className={style.nav}>
            <a href={'Home'}>Home</a>
            <a href={'Skills'}>Skills</a>
            <a href={'Portfolio'}>Portfolio</a>
            <a href={'Contact'}>Contact</a>
        </div>
    )
}

export default Nav;
