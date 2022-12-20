import React from "react";
import {NavLink, Link, BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

class Navbar extends React.Component{
    render() {
        return(
            <>
                    <nav>
                        <NavLink to=''>Home</NavLink>
                        <NavLink to='about'>About</NavLink>
                        <NavLink to='projects'>Projects</NavLink>
                    </nav>

            </>

        );
    }
}

export default Navbar;
