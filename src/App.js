import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import About from "./About/About";
import DistantWork from "./DistantWork/DistantWork";
import SkillsList from "./SkillsList/SkillsList";
import Projects from "./Projects/Projects";
import Footer from "./Footer/Footer";
import Modal from "./Modal/Modal";
import {useEffect, useState} from "react";
import Snowfall from 'react-snowfall'

const App = () => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <div className="App">
            <Snowfall color="#868a9b" style={{ height: '100%' }} snowflakeCount={100}/>
            {/*<Header/>*/}
            <Main setActive={setModalActive}/>
            <Skills/>
            <About/>
            <DistantWork/>
            <Projects/>
            <SkillsList />
            <Footer/>
            {modalActive && <Modal setActive={setModalActive}/>}
        </div>
    );
}

export default App;
