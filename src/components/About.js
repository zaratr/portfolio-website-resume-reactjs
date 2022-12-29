import React from "react";
import {Link} from "react-router-dom";
import '../style/about.css'
import {Element} from 'react-scroll'
class About extends React.Component {
    render() {
        return (
            <Element className='about' id='about'>
                <p className='aboutme1'>My name is Raul, I'm currently a Fullstack DevelopmentTeaching Assistant at Codefellows in Seattle. Here, we develop fully immersive websites on Reactjs, JavaScript, Python, and Java.
                </p>
                <p className='aboutme2'>Before Codefellows I worked at Intel as a Semi Conductor Manufacturing Technician where I lead a team to maintain and repair large equipment. </p>
                <p className='aboutme3'>During these jobs, I self taught few programming languages and wen't to school for mathematics. below are some of the work I've done in Machine Learning, Full Stack, IOT projects, and Android Developement.</p>
            </Element>
        );
    }
}
export default About;
