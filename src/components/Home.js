import React from "react";
import '../style/home.css'
import {Element} from 'react-scroll'
class Home extends React.Component{
    render() {
        return(
            <Element className='home' id='home'>
                Homes
            </Element>
        );
    }
}

export default Home;
