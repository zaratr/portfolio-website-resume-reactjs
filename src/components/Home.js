import React from "react";
import '../style/home.css'
import {Element} from 'react-scroll'
import proImage from './../img/raultemp.jpg'
class Home extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        // console.log('HERE2', this.props.basicInfo);
        return(
            <Element className='home' id='home'>
                <div className='layout'>
                    <p className='intro-paragraph'>
                        Hi! I'm Raul, a Fullstack Developer with a Mathematics Degree. Projects below demonstrate some of
                        my skills on my journey in becoming a Computer Scientist.
                    </p>
                    <img className='proImage avatar-wobble' src={proImage} alt=""/>
                </div>
                <div className='wave'></div>
            </Element>
        );
    }
}

export default Home;
