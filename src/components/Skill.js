import React from 'react';
import {Col, Row, Image} from "react-bootstrap";

class Skill extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Col>
                <Row className="m-2 p-2 skill-hover-Jump">
                    <Image className="mb-2" src={this.props.url}></Image>
                    <p className="mx-0 px-0 fs-6 fw-normal">{this.props.title}</p>
                </Row>
            </Col>
        )
    }


}

export default Skill;
