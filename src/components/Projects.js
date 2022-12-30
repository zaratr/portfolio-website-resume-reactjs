import React from "react";
import {Container, Row, Col } from 'react-bootstrap';
// import {Fade} from 'react-reveal';
import {Element} from 'react-scroll';
import ProjectCard from "./ProjectCard";
import '../style/projects.css';

class Projects extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         projects : []
    //     }//state
    // }//constructor
    //
    // componentDidMount() {
    //     this.setState({
    //         projects : this.props.projectsData
    //     })
    // }


    render() {
        // console.log('HERE2', this.props.projectsData);
        // console.log('HERE3', this.props.openPreview);
        // console.log('HERE4', this.props.previewData);
        // console.log("hereadf" , this.state.projects);
        // console.log("hereadfnum2" , this.state.projects[0].type);
        // console.log("hereadfnum3" , this.state.projects[0].images[0]);

        return(
            <Element
                id='projects'
                className='projects'
                style={{minHeight: '35rem'}}
            >

                <div id='projects' className={'w-100 m-0 p-0 unselectable'}>
                    <Container className={'py-5'}>
                        <div className={'fw-light'}>
                            <div className={'top-fade cascade-fade'}>
                                <p className={'fs-1 text-gray fw-bold'}>Recent Projects</p>
                            </div>
                            <Row className={'text-center'}>
                                <Col className={'col-12 col-lg-6'}>
                                    {/*{this.state.projects?.map((project) => (*/}
                                        <ProjectCard
                                            projectsData={this.props.projectsData}
                                            openPreview={this.props.openPreview}
                                            // previewData={this.props.previewData}
                                        />
                                    {/*))}*/}
                                </Col>

                            </Row>
                            <Row className={'text-center'}>
                                <Col className={'col-12 col-lg-6'}>
                                    {this.props.projectsData?.map((project, i) => (
                                    <ProjectCard
                                        projectsData={this.props.projectsData}
                                        openPreview={this.props.openPreview}
                                        projectData={project}
                                        // previewData={this.props.previewData}
                                    />
                                    ))}
                                </Col>

                            </Row>
                        </div>
                    </Container>
                </div>
            </Element>
        )//return

    }//render
}//class

export default Projects;
