import React from "react";
import {Link} from "react-router-dom";
import '../style/about.css'
import {Element} from 'react-scroll'
import { Fade } from "react-reveal";
import {Container} from "react-bootstrap";

class About extends React.Component {
    render() {
        //console.log("HERE", this.props.about[0])
        return (
            <Element className='about' id='about'>
                <div className={'w-100 m-0 p-0'}>
                    <Container className={'pb-5 unselectable'}>

                        <Fade top cascade>
                            <p className={'fs-1 text-gray fw-bold'}>About Me</p>
                        </Fade>
                        <div className={'fs-3 fw-light'}>
                            <Fade bottom>
                                {this.props.about !== undefined?
                                    (
                                        <div>
                                            <p className={'text-justify'}>
                                                {this.props.about.description1}
                                            </p>
                                            <p className='text-justify'>
                                                {this.props.about.description2}
                                            </p>
                                            <p className='text-justify'>
                                                {this.props.about.description3}
                                            </p>
                                            <p className='text-justify center'>
                                                Contact Me :&nbsp;
                                                <a href={'https://mail.google.com'}>{`${this.props.about.email}`}</a>
                                                 &nbsp;on Gmail!
                                                {this.props.about.contactphone}
                                            </p>
                                        </div>
                                    ):""}
                            </Fade>
                        </div>
                    </Container>
                </div>
            </Element>
        );
    }
}
export default About;
