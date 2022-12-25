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
                // The color of the snowflake, can be any valid CSS color.
                color="#fff"
                // Applied to the canvas element.
                // style={{ background: '#fff' }}
                // Controls the number of snowflakes that are created (defaults to 150).
                snowflakeCount={200}
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
