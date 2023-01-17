import React from "react";
import '../style/home.css'
import {Element} from 'react-scroll'
import proImage from './../img/raultemp.jpg'
import { Fade } from "react-reveal";
import { Container, Row, Col, Image } from "react-bootstrap";

class Home extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        // console.log('HERE2', this.props.basicInfo);
        return(
            <Element className='home' id='home'>
                <div className='layout text-white text fs-1'>
                    <p className='intro-paragraph'>
                        Hi!  I'm Raul, a Fullstack Developer with a Mathematics Degree. Projects below demonstrate some of
                        my skills on my journey in becoming a Computer Scientist.
                    </p>

                    <Fade delay={500}>
                        <Image className='proImage avatar-wobble m-2' src={proImage} alt=""/>
                    </Fade>
                </div>
                <div className='wave'></div>
            </Element>
        );
    }
}

export default Home;
