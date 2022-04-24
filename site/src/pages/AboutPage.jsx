import React, { Component, Fragment } from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from '../components/PageTop/PageTop';
import Footer from "../components/Footer/Footer";
import AboutDescription from '../components/AboutDescription/AboutDescription';
import AboutMe from '../components/AboutMe/AboutMe';

class AboutPage extends Component {

    componentDidMount(){
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="About Us" /> 
                <PageTop pagetitle="About Us" />
                <AboutMe />
                <AboutDescription />
                <Footer />
            </Fragment>
        )
    }
}

export default AboutPage