import React from "react";
import {Container, Row, Col } from 'react-bootstrap';
// import {Fade} from 'react-reveal';
import {Element} from 'react-scroll';
import ProjectCard from "./ProjectCard";
import '../style/projects.css';
import ModalPreview from "./ModalPreview";

class Projects extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showPreview : false,
            previewData : {},
        }//state
    }//constructor
    setPreviewData = (data) => {
        this.setState({
            previewData : data
        });
    }
    openPreview = () => {
        this.setState({
            showPreview:true
        })
    }

    closePreview = () =>{
        this.setState({
            showPreview : false
        })
    }


    render() {

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
                                            openPreview={this.openPreview}
                                            // previewData={this.props.previewData}
                                        />
                                    {/*))}*/}
                                </Col>

                            </Row>
                            <Row className={'text-center'}>
                                {this.props.projectsData?.map((project, i) => (
                                    <>
                                        {i > 1?
                                            <Col className={'col-12 col-lg-6'}>
                                                <ProjectCard
                                                    // projectsData={this.props.projectsData}
                                                    openPreview={this.openPreview}
                                                    projectData={project}
                                                    setPreviewData = {this.setPreviewData}
                                                />
                                            </Col>
                                            :
                                            <Col className={'col-12 col-lg-6 mt-0 mt-lg-5'}>
                                                <ProjectCard
                                                    // projectsData={this.props.projectsData}
                                                    openPreview={this.openPreview}
                                                    projectData={project}
                                                    setPreviewData = {this.setPreviewData}
                                                />
                                            </Col>
                                        }
                                    </>
                                    )
                                )
                                }

                            </Row>
                        </div>
                    </Container>
                    <ModalPreview
                        showPreview={this.state.showPreview}
                        previewData={this.state.previewData}
                        closePreview={this.closePreview}/>
                </div>
            </Element>

        )//return

    }//render
}//class

export default Projects;
