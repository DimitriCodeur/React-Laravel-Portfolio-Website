import React, { Component, Fragment } from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import AllServicesPage from '../pages/AllServicesPage';
import AllCoursePage from '../pages/AllCoursePage';
import PortfolioPage from '../pages/PortfolioPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import RefundPage from '../pages/RefundPage';
import TermsPage from '../pages/TermsPage';
import PrivacyPage from '../pages/PrivacyPage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';
import CourseDetailsPage from '../pages/CourseDetailsPage';

class AppRouter extends Component {
    render() {
        return (
            <Fragment>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/service" element={<AllServicesPage />}/>
                    <Route exact path="/course" element={<AllCoursePage />} />
                    <Route exact path="/portfolio" element={<PortfolioPage />} />
                    <Route exact path="/about" element={<AboutPage />} />
                    <Route exact path="/contact" element={<ContactPage />} />
                    <Route exact path="/refund" element={<RefundPage />} />
                    <Route exact path="/terms" element={<TermsPage/>} />
                    <Route exact path="/privacy" element={<PrivacyPage/>} />
                    <Route exact path="/projectdetails" element={<ProjectDetailsPage />} />
                    <Route exact path="/coursedetails" element={<CourseDetailsPage />} />
                </Routes>
            </Fragment>
        )
    }
}

export default AppRouter