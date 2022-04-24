import React, { Component, Fragment } from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from '../components/PageTop/PageTop';
import Footer from "../components/Footer/Footer";
import RefundDesccription from '../components/RefundDescription/RefundDesccription';

class RefundPage extends Component {
    
    componentDidMount(){
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="Refund Policy" /> 
                <PageTop pagetitle="Refund Policy" />
                <RefundDesccription />
                <Footer />
            </Fragment>
        )
    }
}

export default RefundPage