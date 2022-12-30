import React from 'react';
import {Button} from "react-bootstrap";

class ButtonLink extends React.Component{

    onLinkClicked = (event, url) => {
        event.stopPropagation();
        window.open(url, '_blank').focus();
    }
    render() {
        return(
            <Button
                variant="link"
                className="p-0 px-1 link-pink"
                onClick={(e) => this.onLinkClicked(e, this.props.projectUrl)}
                target="_blank"
                rel="noreferrer"
                title="Open website with live project"
            >
                {this.props.linkText} <i className={`ms-1 fa ${this.props.LinkIcon}`}></i>
            </Button>
        )//return
    }//render
}//class

export default ButtonLink;
