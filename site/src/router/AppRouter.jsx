import React, { Component, Fragment } from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import AllServicesPage from '../pages/AllServicesPage';
import AllCoursePage from '../pages/AllCoursePage';
import PortfolioPage from '../pages/PortfolioPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';

class AppRouter extends Component {
    render() {
        return (
            // <Fragment>
                 <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/service" element={<AllServicesPage />}/>
                    <Route exact path="/course" element={<AllCoursePage />} />
                    <Route exact path="/portfolio" element={<PortfolioPage />} />
                    <Route exact path="/about" element={<AboutPage />} />
                    <Route exact path="/contact" element={<ContactPage />} />
                </Routes>
            // </Fragment>
        )
    }
}

export default AppRouter