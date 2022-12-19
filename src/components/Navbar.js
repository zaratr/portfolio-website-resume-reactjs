import React from "react";
import {Routes, Route, Link} from "react-router-dom";

class Navbar extends React.Component{
    render() {
        return(
            <nav>
                <Link to='../App'>Home</Link>
                {/*<Link to='Re'>Resume</Link>*/}
                {/*<Link to='/projects'>Projects</Link>*/}
            </nav>
        );
    }
}

export default Navbar;
