import React, { Component, Fragment } from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from '../components/PageTop/PageTop';
import Footer from "../components/Footer/Footer";
import AllCourses from '../components/AllCourses/AllCourses';

class AllCoursePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation /> 
                <PageTop pagetitle="All Courses" />
                <AllCourses />
                <Footer />
            </Fragment>
        )
    }
}

export default AllCoursePage