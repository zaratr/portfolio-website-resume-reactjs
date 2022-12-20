import './style/App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {

  return (
    <>
        <Navbar/>
        <Home/>
        <Projects/>
        <About/>
        <Footer/>
    </>
  );//return
}//function

export default App;
