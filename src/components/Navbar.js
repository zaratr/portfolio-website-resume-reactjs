import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../logo.svg"
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import '../style/navbar.css'

class Navbar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            setClick : false
        }
    }
    render() {
        // const setClick = this.state.useState(false);
        const closeMenu = () => this.state.setClick = false;
        return(
                <nav className='nav' id='navbar'>

                        <img
                            src={logo}
                            className='nav-logo'
                            alt='Logo'
                            onClick={scroll.scrollToTop}/>

                        <ul className="nav-items">
                            <li className='nav-items'>

                                <Link to='home' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link>
                            </li>
                            <li className='nav-items'>
                                <Link to='projects' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Projects</Link>
                            </li>
                            <li className='nav-items'>
                                <Link to='about' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>About</Link>
                            </li>
                        </ul>
                </nav>


        );
    }
}

export default Navbar;
