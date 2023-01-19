import './App.module.scss';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import About from "./About/About";
import DistantWork from "./DistantWork/DistantWork";
import SkillsList from "./SkillsList/SkillsList";
import Projects from "./Projects/Projects";
import Footer from "./Footer/Footer";
import Modal from "./Modal/Modal";
import {useState} from "react";
import Snowfall from 'react-snowfall'
import Nav from "./Nav/Nav";
import style from "./App.module.scss"


const App = () => {
    const [modalActive, setModalActive] = useState(false);
    const [navActive, setNavActive] = useState(false);

    return (
        <div className={style.app}>
            <Snowfall color="#868a9b" style={{ height: '100%' }} snowflakeCount={100}
                      className={style.snowFalls}/>
            <Header setActive={setNavActive} navActive={navActive}/>
            <Main setActive={setModalActive}/>
            <Skills/>
            <About/>
            <DistantWork setActive={setModalActive}/>
            <Projects/>
            <SkillsList />
            <Footer/>
            {modalActive && <Modal setActive={setModalActive}/>}
            {navActive && <Nav setActive={setNavActive} />}
        </div>
    );
}

export default App;
