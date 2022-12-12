import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import About from "./About/About";

const App = () => {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <About/>
    </div>
  );
}

export default App;
