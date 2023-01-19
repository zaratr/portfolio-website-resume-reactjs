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
        //<Skill
    //key={i}
    //url={`/images/icon/${item}.png`}
//title={item}
///>

    render() {
        //console.log("SKILLS", this.props.skillsData.icons);
        //console.log(typeof ("SKILLS arr", this.props.skillsData.icons));
        //{console.log("HERE:", item['class']? item['class']:"")}
        return(
            <Element className='skills' id='skills'>

                <div  className="text-white w-100 m-0 p-0">
                    <Container className="py-5 unselectable">
                        <Fade top cascade>
                            <p className="fs-1 fw-bold">My Skills</p>
                        </Fade>

                        <Row className="row row-cols-3 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 text-center">
                            <Fade bottom>

                                {this.props.skillsData?
                                    this.props.skillsData.icons?.map((item, i) => {
                                        return(
                                            <Skill
                                                key={i}
                                                url={`/images/icon/${item['class']}.png`}
                                                title={item['name']}
                                                />
                                        )//map return
                                })//map end
                                    : ""//else do nothing
                                    }
                            </Fade>
                        </Row>
                    </Container>
                </div>
            </Element>
        );
    }
}

export default Skills;
