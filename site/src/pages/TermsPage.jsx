import React, { Component, Fragment } from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from '../components/PageTop/PageTop';
import Footer from "../components/Footer/Footer";
import TermsDescription from "../components/TermsDescription/TermsDescription";

class TermsPage extends Component {

    componentDidMount(){
        window.scroll(0,0)
    }
    
    render() {
        return (
            <Fragment>
                <TopNavigation title="Terms And Conditions" /> 
                <PageTop pagetitle="Terms And Conditions" />
                <TermsDescription />
                <Footer />
            </Fragment>
        )
    }
}

export default TermsPage