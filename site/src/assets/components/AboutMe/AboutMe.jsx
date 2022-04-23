import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FaceImg from '../../images/face.png';
import Typed from 'react-typed';

class AboutMe extends Component {

    componentDidMount() {
        
    }

    render() {
        return (
            <Fragment>
                <Container className='text-center'>

                    <h1 className='serviceMainTitle text-uppercase'>About Me</h1>
                    <div className='bottom'></div>

                    <Row>
                        
                        <Col lg={6} md={12} sm={12}>
                            <div className="aboutMeImg">
                                <img className="aboutImg" src={FaceImg} alt="user picture" />
                            </div>
                        </Col>
                        
                        <Col lg={6} md={12} sm={12}>
                            <div className='aboutMeBody'>
                                <h2 className='aboutMeDetails'>Hi There, I'm </h2>
                                <h2 className='aboutMeTitle'>Foppa Dimitri</h2>
                                <h3 className='aboutMeDetails'>Work as <span id='myElement'>
                                    <Typed
                                        strings={['Web Developer', 'Web Designer']}
                                        typeSpeed={100}
                                        backSpeed={100}
                                        loop 
                                    />
                                </span>
                                </h3>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default AboutMe