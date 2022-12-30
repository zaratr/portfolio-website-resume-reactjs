import React from 'react';
import {Card, Row, Col, Image, Container, Button, Badge} from 'react-bootstrap';
import {PulseLoader} from "react-spinners";
import ButtonLink from './ButtonLink';
import ProgressiveImage from "react-progressive-graceful-image";
import async from "async";

class ProjectCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            touched : false,
            previewData : []
        }
    }
    openModal = () =>{
        this.props.openPreview();
        this.setState({
            previewData : []
        });
    };
    onCardClicked = (event) =>{
        event.stopPropagation();
        this.openModal();
    };

    onLinkedClicked = (event, url) => {
        event.stopPropagation();
        window.open(url, "blank").focus();
    };

    render(){
        // console.log('pcard1', this.state.previewData.images[0])
        // console.log('pcard2', this.props.projectsData)
        // console.log('pcard3', this.state.previewData)
        if(this.props.projectsData) {
            var projects =  this.props?.projectsData.map((elem) =>(
                <Card
                    className={`mb-4 project-card shadow rounded-0 ${this.state.touched? 'project-card-focus': ''}`}
                    onClick={(event) => this.onCardClicked(event)}
                    onTouchStart={() => this.state.touched(true)}
                    onTouchEnd={() => setTimeout(() => {this.state.touched(false);},200)}
                    onMouseEnter={() => this.setState({touched : true})}
                    onMouseLeave={() => this.setState({touched : false})}
                >
                    <ProgressiveImage
                        placeholder={`https://via.placeholder.com/30x20/a334d2/ffffff/&text=TinyPlaceholder`}
                        src={`${elem.images[0]}`}>
                        {(src, loading) =>
                            !loading ? (
                                <div className="img-hover-zoom position-relative">
                                    <Badge
                                        className="position-absolute top-0 start-0 m-3 rounded-0"
                                        style={{ zIndex: 200 }}
                                        bg="purple"
                                    >
                                        {'words'}
                                    </Badge>
                                    <img
                                        className="card-img-top project-avatar"
                                        style={{ opacity: loading ? 0.1 : 1 }}
                                        src={src}
                                        alt={src}
                                        sizes="10"
                                    />
                                </div>
                            ) : (
                                <Container className="text-center project-avatar-spinner">
                                    <PulseLoader
                                        color="#9d16bf"
                                        loading={true}
                                        size={20}
                                    />
                                </Container>
                            )
                        }

                    </ProgressiveImage>
                    {/*))//map func*/}


                    {/*var details = this.props.projectsData.map((elem) =>(*/}

                    <Card.Body className={'projects-bg-image text-white pb-1'}>
                        <Card.Title className={'fs-3}'}>{elem.title}</Card.Title>
                        <Card.Text>{elem.description}</Card.Text>
                        <Row className={"border-top align-items-center"}>
                            <Col className={'border-end mt-2 pt-1 mb-1'}>
                                <Row className={'row-cols'}>
                                    <Col>
                                        {elem.technologies?.map((techs, i) => (
                                            <Image
                                                key={i}
                                                width={'25rem'}
                                                className={'shadow me-2 mb-2'}
                                                title={techs}
                                                src={`${techs['class']}`}
                                            >
                                            </Image>
                                        ))}

                                    </Col>
                                </Row>
                            </Col>
                            <Col className={''}>
                                <Row className={'justify-content-evenly'}>
                                    {elem.url !== undefined ?
                                        (
                                            <Col className={'col-12 col-md-6 my-2'}>
                                                <ButtonLink
                                                projectUrl={elem.url}
                                                liveText={'live page'}
                                                linkIcon={'fa-github'}>

                                                </ButtonLink>
                                            </Col>
                                        ):("")}
                                </Row>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            ))//mapfunc

        }//ifEnd

        if(this.props.projectData){
            var project = <Card
                className={`mb-4 project-card shadow rounded-0 ${this.state.touched? 'project-card-focus': ''}`}
                onClick={(event) => this.onCardClicked(event)}
                onTouchStart={() => this.state.touched(true)}
                onTouchEnd={() => setTimeout(() => {this.state.touched(false);},200)}
                onMouseEnter={() => this.setState({touched : true})}
                onMouseLeave={() => this.setState({touched : false})}
            >
                <ProgressiveImage
                    placeholder={`https://via.placeholder.com/30x20/a334d2/ffffff/&text=TinyPlaceholder`}
                    src={`${this.props.projectData.images[0]}`}>
                    {(src, loading) =>
                        !loading ? (
                            <div className="img-hover-zoom position-relative">
                                <Badge
                                    className="position-absolute top-0 start-0 m-3 rounded-0"
                                    style={{ zIndex: 200 }}
                                    bg="purple"
                                >
                                    {'words'}
                                </Badge>
                                <img
                                    className="card-img-top project-avatar"
                                    style={{ opacity: loading ? 0.1 : 1 }}
                                    src={src}
                                    alt={src}
                                    sizes="10"
                                />
                            </div>
                        ) : (
                            <Container className="text-center project-avatar-spinner">
                                <PulseLoader
                                    color="#9d16bf"
                                    loading={true}
                                    size={20}
                                />
                            </Container>
                        )
                    }

                </ProgressiveImage>
                {/*))//map func*/}


                {/*var details = this.props.projectsData.map((elem) =>(*/}

                <Card.Body className={'projects-bg-image text-white pb-1'}>
                    <Card.Title className={'fs-3}'}>{this.props.projectData.title}</Card.Title>
                    <Card.Text>{this.props.projectData.description}</Card.Text>
                    <Row className={"border-top align-items-center"}>
                        <Col className={'border-end mt-2 pt-1 mb-1'}>
                            <Row className={'row-cols'}>
                                <Col>
                                    {this.props.projectData.technologies?.map((techs, i) => (
                                        <Image
                                            key={i}
                                            width={'25rem'}
                                            className={'shadow me-2 mb-2'}
                                            title={techs}
                                            src={`${techs['class']}`}
                                        >
                                        </Image>
                                    ))}

                                </Col>
                            </Row>
                        </Col>
                        <Col className={''}>
                            <Row className={'justify-content-evenly'}>
                                {this.props.projectData.url !== undefined ?
                                    (
                                        <Col className={'col-12 col-md-6 my-2'}>
                                            <ButtonLink
                                                projectUrl={this.props.projectData.url}
                                                liveText={'live page'}
                                                linkIcon={'fa-github'}>

                                            </ButtonLink>
                                        </Col>
                                    ):("")}
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        }//if end


        return(
            <div className={'bottom-fade'}>
                    {/*{projects}*/}
                {project}
            </div>
        );
    }

}

export default ProjectCard;
