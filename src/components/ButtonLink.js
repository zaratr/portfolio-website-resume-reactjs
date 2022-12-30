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
                <img src={this.props.linkIcon} className={'ms-1 w-25'} alt="icon-link"/>
                {this.props.linkText}
            </Button>
        )//return
    }//render
}//class

export default ButtonLink;
