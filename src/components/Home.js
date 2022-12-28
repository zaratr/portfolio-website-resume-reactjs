import React from "react";
import '../style/home.css'
import {Element} from 'react-scroll'
import proImage from './../img/raultemp.jpg'
class Home extends React.Component{
    render() {
        return(
            <Element className='home' id='home'>
                <div className='layout'>
                    <p className='intro-paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam architecto cum distinctio
                        earum et hic minus nihil, numquam officia porro quisquam velit veniam, veritatis voluptate? Corporis
                        minus recusandae veritatis!
                    </p>

                    <img className='proImage' src={proImage} alt=""/>
                </div>
                <div className='wave'></div>
            </Element>
        );
    }
}

export default Home;
