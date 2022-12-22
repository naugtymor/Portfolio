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
import {useState} from "react";


const App = () => {
    const [modalActive, setModalActive] = useState(true);

    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <About/>
            <DistantWork/>
            <Projects/>
            <SkillsList/>
            <Footer/>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    );
}

export default App;
