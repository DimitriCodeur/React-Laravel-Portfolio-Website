import React, { Component, Fragment } from 'react';
import TopBanner from "../components/TopBanner/TopBanner";
import Services from "../components/Services/Services";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Analysis from "../components/Analysis/Analysis";
import Summary from "../components/Summary/Summary";
import RecentProject from "../components/RecentProject/RecentProject";
import Course from "../components/Course/Course";
import Video from "../components/Video/Video";
import ClientReview from "../components/ClientReview/ClientReview";
import AboutMe from "../components/AboutMe/AboutMe";
import Footer from "../components/Footer/Footer";

class HomePage extends Component {

    componentDidMount(){
        window.scroll(0,0)
    }
    
    render() {
        return (
            <Fragment>
                <TopNavigation title="Hight Technology" /> 
                <TopBanner />
                <Services />
                <Analysis />
                <Summary />
                <RecentProject />
                <Course />
                <Video />
                <ClientReview />
                <AboutMe />
                <Footer />
            </Fragment>
        )
    }
}

export default HomePage;