import './style/App.css';
import React from "react";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import $ from "jquery";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            portfolioData: {},
            sharedData:{}
        }
    }


    loadProjectsData = (path) =>{
        $.ajax({
            url: path,
            dataTypes: 'json',
            cache: false,
            success: (data) => this.setState({portfolioData: data}),
            error: (xhr, status, err) => alert(err),
        });

    }

    loadSharedData = (path) => {
        $.ajax({
            url: path,
            dataTypes: 'json',
            cache: false,
            success: (data) => this.setState({sharedData: data}),
            error: (xhr, status, err) => alert(err),
        });

    }


    async componentDidMount() {
        this.loadProjectsData('portfolio_website_settings.json');
        this.loadSharedData('portfolio_shared_data.json');
    }

    render() {

        // console.log('HERE1eeeee', this.state.portfolioData);
        return (
            <>
                <Navbar/>
                <Home basicInfo={this.state.portfolioData.basic_info}/>
                <Projects
                    projectsData={this.state.portfolioData.projects}
                    // openPreview={this.openPreview}
                    // setPreviewData={this.setPreviewData}
                />

                <Skills skillsData={this.state.sharedData.skills}/>
                <About/>
                <Footer/>
            </>
        );//return
    }//render
}//class

export default App;
