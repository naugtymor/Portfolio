import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import About from "./About/About";
import DistantWork from "./DistantWork/DistantWork";

const App = () => {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <About/>
        <DistantWork/>
    </div>
  );
}

export default App;
