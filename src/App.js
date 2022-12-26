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
import Snowfall from 'react-snowfall'



const App = () => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <div className="App">
            <Snowfall
                color="#868a9b"
                // Applied to the canvas element.
                style={{ height: '110%' }}
                // Controls the number of snowflakes that are created (defaults to 150).
                snowflakeCount={100}
            />
            <Header/>
            <Main/>
            <Skills/>
            <About/>
            <DistantWork/>
            <Projects/>
            <SkillsList/>
            <Footer/>
            {/*<Modal active={modalActive} setActive={setModalActive}/>*/}
        </div>
    );
}

export default App;
