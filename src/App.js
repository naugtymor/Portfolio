import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import About from "./About/About";
import DistantWork from "./DistantWork/DistantWork";
import SkillsList from "./SkillsList/SkillsList";
import Projects from "./Projects/Projects";
import Footer from "./Footer/Footer";
import Contact from "./Contact/Contact";

const App = () => {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <Projects/>
        <About/>
        <DistantWork/>
        {/*<SkillsList/>*/}
        {/*<Contact/>*/}
        {/*<Footer/>*/}
    </div>
  );
}

export default App;
