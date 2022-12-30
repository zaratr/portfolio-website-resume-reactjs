import React from "react";
import '../style/skills.css'
import {Element} from 'react-scroll';
import {Container, Row} from "react-bootstrap";
import Skill from './Skill';
import { Fade } from "react-reveal";

class Skills extends React.Component{
    constructor(props){
        super(props);
    }
    skillList = [
        "React",
        "HTML5",
        "CSS3",
        "Nextjs",
        "jQuery",
        "NodeJs",
        "MongoDb",
        "PostgreSQL",
        "Amazon-Web-Services",
        "C++",
        "Python",
        "C",
        "Javascript",
        "Java",
        "Google-Cloud",
        "Android-Studio"
    ]

    render() {
        return(
            <Element className='skills' id='skills'>

                <div  className="text-white w-100 m-0 p-0">
                    <Container className="py-5 unselectable">
                        <Fade top cascade>
                            <p className="fs-1 fw-bold">My Skills</p>
                        </Fade>

                        <Row className="row row-cols-3 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 text-center">
                            <Fade bottom>

                                {this.skillList?.map((item, i) => {
                                    return (
                                        <Skill
                                            key={i}
                                            url={`/images/icon/${item}.png`}
                                            title={item}
                                        />

                                    );
                                })}
                            </Fade>
                        </Row>
                    </Container>
                </div>
            </Element>
        );
    }
}

export default Skills;
