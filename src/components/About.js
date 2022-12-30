import React from "react";
import {Link} from "react-router-dom";
import '../style/about.css'
import {Element} from 'react-scroll'
import { Fade } from "react-reveal";
import {Container} from "react-bootstrap";

class About extends React.Component {
    render() {
        return (
            <Element className='about' id='about'>
                <div className={'w-100 m-0 p-0'}>
                    <Container className={'pb-5 unselectable'}>

                        <Fade top cascade>
                            <p className={'fs-1 text-gray fw-bold'}>About Me</p>
                        </Fade>
                        <div className={'fs-3 fw-light'}>
                            <Fade bottom>
                                <p className={'text-justify'}>My name is Raul, I'm currently a Fullstack DevelopmentTeaching Assistant at Codefellows in Seattle. Here, we develop fully immersive websites on Reactjs, JavaScript, Python, and Java.
                                </p>
                                <p className='text-justify'>Before Codefellows I worked at Intel as a Semi Conductor Manufacturing Technician where I lead a team to maintain and repair large equipment. </p>
                                <p className='text-justify'>During these jobs, I self taught few programming languages and wen't to school for mathematics. below are some of the work I've done in Machine Learning, Full Stack, IOT projects, and Android Developement.</p>
                                <p className='text-justify center'>
                                    Contact me at : zarater.raul@gmail.com <a href={'https://mail.google.com'}>on gmail!</a>
                                    (424) 344-8286

                                </p>
                            </Fade>
                        </div>
                    </Container>
                </div>
            </Element>
        );
    }
}
export default About;
