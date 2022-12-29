import style from "./Nav.module.scss"

const Nav = (props) => {
    return (
        <div className={style.navBlock} onClick={() => props.setActive(false)}>
            <div className={style.nav} onClick={e => e.stopPropagation()}>

            </div>
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