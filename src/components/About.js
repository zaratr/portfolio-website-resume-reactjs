import React from "react";
import {Link} from "react-router-dom";
import '../style/about.css'
import {Element} from 'react-scroll'
class About extends React.Component {
    render() {
        return (
            <Element className='about' id='about'>
                About
            </Element>
        );
    }
}
export default About;
