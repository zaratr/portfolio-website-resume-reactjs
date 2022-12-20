import React from "react";
import Navbar from "./Navbar";
import '../style/header.css'

class Header extends React.Component {
    render() {
        return(
            <div className='header'>
            <Navbar/>
                <p>Header</p>
            </div>

        );//return
    }//render
}//class

export default Header;
