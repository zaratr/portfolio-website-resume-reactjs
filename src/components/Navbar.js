import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../img/logo.svg";
import backimg from "../img/back-to-top.gif";
import '../style/navbar.css';
import '../style/rain.css';

class Navbar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            setClick : false,
            fix : false,
            dur : 0,
            offset: -75,
            burgerClass : 'burgerBar unClicked',
            menuClass : 'menu hidden',
            isMenuClicked: false
        }
    }

    scrollerToTop = () => {
        scroll.scrollTo(0, {
            duration: 0,
            delay: 100,
            smooth: true,
            // containerId: 'ContainerElementID',
            offset: 50, // Scrolls to element + 50 pixels down the page
        })
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
                     style={!this.state.fix?{paddingLeft: (window.innerWidth/250)*window.scrollY} : {}}
                >

                    <img
                        src={logo}
                        className='nav-logo'
                        alt='Logo'
                        onClick={this.scrollerToTop}
                    />
                    <img
                        src={backimg}
                        className={`back-button-image ${window.innerWidth }`}
                        alt={'back-btn'}
                        onClick={this.scrollerToTop}
                        style={ {display:`${window.innerWidth < 771 ? 'block': 'none'}`}}
                    />
                </div>
                <p className={`p fixed ${this.state.fix?'' : 'hide'}`} onClick={this.scrollerToTop}>Back To Top</p>

                <ul className={`nav-content ${this.state.fix ?'hide':'shift' } rain`}>
                    <li className={`nav-items` } >
                        <Link to='home'
                              className={this.state.fix?'hide':''}
                              activeClass='active' spy={true}
                              smooth={true} offset={this.state.offset}
                              duration={this.state.dur}
                              style={{color: 'unset', textDecoration:'unset'}}
                              onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-items'>
                        <Link to='projects'
                              className={this.state.fix?'hide':''}
                              activeClass='active' spy={true}
                              smooth={true} offset={this.state.offset}
                              duration={this.state.dur}
                              style={{color: 'unset', textDecoration:'unset'}}
                              onClick={closeMenu}>Projects</Link>
                    </li>
                    <li className='nav-items'>
                        <Link to='skills'
                              className={this.state.fix?'hide':''}
                              activeClass='active' spy={true}
                              smooth={true} offset={this.state.offset}
                              duration={this.state.dur}
                              style={{color: 'unset', textDecoration:'unset'}}
                              onClick={closeMenu}>Skills</Link>
                    </li>
                    <li className='nav-items'>
                        <Link to='about'
                              className={this.state.fix?'hide':''}
                              activeClass='active' spy={true}
                              smooth={true} offset={this.state.offset}
                              duration={this.state.dur}
                              style={{color: 'unset', textDecoration:'unset'}}
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
                                  style={{color: 'unset', textDecoration:'unset'}}
                                  onClick={closeMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-items' >
                            <Link to='projects'
                                  activeClass='active' spy={true}
                                  smooth={true} offset={this.state.offset}
                                  duration={this.state.dur}
                                  style={{color: 'unset', textDecoration:'unset'}}
                                  onClick={closeMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='skills'
                                  activeClass='active' spy={true}
                                  smooth={true} offset={this.state.offset}
                                  duration={this.state.dur}
                                  style={{color: 'unset', textDecoration:'unset'}}
                                  onClick={closeMenu}>
                                Skills
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='about'
                                  activeClass='active' spy={true}
                                  smooth={true} offset={this.state.offset}
                                  duration={this.state.dur}
                                  style={{color: 'unset', textDecoration:'unset'}}
                                  onClick={closeMenu}>
                                About
                            </Link>
                        </li>
                    </ul>

                </div>

            </nav>


        );//return
    }//render
}//class

export default Navbar;
