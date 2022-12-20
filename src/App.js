import './style/App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {

  return (
    <>
        <Header/>
        <Home/>
        <Projects/>
        <About/>
        <Footer/>
    </>
  );//return
}//function

export default App;
