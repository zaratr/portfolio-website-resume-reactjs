import './style/App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Home from './components/Home';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom";
import {useRef} from "react";

function App() {
    let ref = useRef();
  return (
    <>
        <Router>
            <Header/>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/projects' element={<Projects/>}/>
            </Routes>
        </Router>
        <Projects/>
        <About/>
        <Footer/>
    </>
  );//return
}//function

export default App;
