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
            setClick : false,
            fix : false
        }
    }
    render() {
        const closeMenu = () => this.state.setClick = false;
        const setFixed = () => {
            console.log("fix : ", window.scrollY, window.scrollY > 100);
            if(window.scrollY >= 100)
            {
                this.setState({fix:true})
            }
            else{
                this.setState({fix:false})
            }

            console.log("fix", this.state);
        }
        window.addEventListener("scroll", setFixed);
        return(
                <nav className={ this.state.fix ? 'nav fixed':'nav'} id='navbar'>

                        <img
                            src={logo}
                            className='nav-logo'
                            alt='Logo'
                            onClick={scroll.scrollToTop}/>
                    {this.state.fix?
                        <p className='p fixed'>Back To Top</p>
                        :<ul className="nav-items">
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
                    }
                </nav>


        );//return
    }//render
}//class

export default Navbar;
