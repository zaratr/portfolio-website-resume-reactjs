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
        //if(this.props.basicInfo){console.log("HERE", this.props.basicInfo);}
        //console.log('HERE2', this.props.basicInfo['intro']);
        return(
            <Element className='home' id='home'>
                <div className='layout text-white text fs-1'>
                    <p className='intro-paragraph'>
                        {this.props.basicInfo?this.props.basicInfo['intro']:''}
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
