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
            fix : false,
            dur : 1000,
            offset: -75,
            burgerClass : 'burgerBar unClicked',
            menuClass : 'menu hidden',
            isMenuClicked: false
        }
    }


    scrollerToTop(){
        scroll.scrollToTop({
            //TODO: not sure why this isn't working yet - url(https://github.com/fisshy/react-scroll/tree/master/examples). Possible fix : use scrollTO(options:) function
            // duration: 10000,
            // delay: 0,
        });
    }
    render() {
        const updateMenu = () => {
            !this.state.isMenuClicked?
                this.setState({
                    burgerClass : 'burgerBar clicked',
                    menuClass : 'menu visible'
                })
                :
                this.setState({
                    burgerClass : 'burgerBar unClicked',
                    menuClass : 'menu hidden'
                });
            this.setState({ isMenuClicked : !this.state.isMenuClicked })
        }
        const closeMenu = () => this.state.setClick = false;
        const setFixed = () => {
            window.scrollY >= 100? this.setState({fix:true}) : this.setState({fix:false})
        }

        window.addEventListener("scroll", setFixed);
        return(
            <nav className={ this.state.fix ? 'nav fixed':'nav'} id='navbar'>

                <div className='logo-anime'
                     style={!this.state.fix?{paddingLeft: (window.innerWidth/250)*window.scrollY} : {paddingLeft: (window.innerWidth - 300)/2}}
                >

                    <img
                        src={logo}
                        className='nav-logo'
                        alt='Logo'
                        onClick={scroll.scrollToTop}
                    />
                </div>
                <p className={`p fixed ${this.state.fix?'' : 'hide'}`} onClick={scroll.scrollToTop}>Back To Top</p>

                <ul className={`nav-content hide `}>
                    <li className={`nav-items` } >
                        <Link to='home'
                              className={this.state.fix?'hide':''}
                              activeClass='active' spy={true}
                              smooth={true} offset={this.state.offset}
                              duration={this.state.dur}
                              onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-items'>
                        <Link to='projects'
                              className={this.state.fix?'hide':''}
                              activeClass='active' spy={true}
                              smooth={true} offset={this.state.offset}
                              duration={this.state.dur}
                              onClick={closeMenu}>Projects</Link>
                    </li>
                    <li className='nav-items'>
                        <Link to='about'
                              className={this.state.fix?'hide':''}
                              activeClass='active' spy={true}
                              smooth={true} offset={this.state.offset}
                              duration={this.state.dur}
                              onClick={closeMenu}>About</Link>
                    </li>
                </ul>
                <div className={`burgerMenu` } onClick={updateMenu}>
                    <div className={this.state.burgerClass} onClick={updateMenu}></div>
                    <div className={this.state.burgerClass} onClick={updateMenu}></div>
                    <div className={this.state.burgerClass} onClick={updateMenu}></div>
                </div>
                <div className={this.state.menuClass}>

                    <ul className={`nav-content side `}>
                        <li className={`nav-items` } >
                            <Link to='home'

                                  activeClass='active' spy={true}
                                  smooth={true} offset={this.state.offset}
                                  duration={this.state.dur}
                                  onClick={closeMenu}>Home</Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='projects'
                                  activeClass='active' spy={true}
                                  smooth={true} offset={this.state.offset}
                                  duration={this.state.dur}
                                  onClick={closeMenu}>Projects</Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='about'
                                  activeClass='active' spy={true}
                                  smooth={true} offset={this.state.offset}
                                  duration={this.state.dur}
                                  onClick={closeMenu}>About</Link>
                        </li>
                    </ul>

                </div>
            </nav>


        );//return
    }//render
}//class

export default Navbar;
