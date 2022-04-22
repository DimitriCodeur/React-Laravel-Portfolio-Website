import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { faCheckSquare, faGlobe, faLaptop, faStar } from '@fortawesome/free-solid-svg-icons';

class Summary extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className='summaryBanner p-0'>
                    <div className='summaryBannerOverlay'>
                        <Container className='text-center'>
                            <Row>

                                <Col lg={8} md={6} sm={12}>
                                    <Row className='countSection'>

                                        <Col>
                                            <FontAwesomeIcon className='iconProject' icon={faGlobe} /> 
                                            <h1 className='countNumber'>35000+</h1>
                                            <h4 className='countTitle'>Students WorlWide</h4>
                                            <hr className='bg-white w-25' style={{margin: "0 auto"}} />
                                        </Col>

                                        <Col>
                                            <FontAwesomeIcon className='iconProject' icon={faLaptop} /> 
                                            <h1 className='countNumber'>22+</h1>
                                            <h4 className='countTitle'>Courses Published</h4>
                                            <hr className='bg-white w-25' style={{margin: "0 auto"}} />
                                        </Col>

                                        <Col>
                                            <FontAwesomeIcon className='iconProject' icon={faStar} /> 
                                            <h1 className='countNumber'>3000+</h1>
                                            <h4 className='countTitle'>Student Reviews</h4>
                                            <hr className='bg-white w-25' style={{margin: "0 auto"}} />
                                        </Col>

                                    </Row>
                                </Col>

                                <Col lg={4} md={6} sm={12} >
                                    <Card className="workCard">
                                        <Card.Body>
                                            <Card.Title className="cardTitle" >What I Have Achieved</Card.Title>
                                            <Card.Text>
                                                <p className='cardSubTitle' style={{textAlign: "justify"}}>
                                                    <FontAwesomeIcon className='iconBullent' icon={faCheckSquare} /> Requirement Gathering
                                                </p>
                                                <p className='cardSubTitle' style={{textAlign: "justify"}}>
                                                    <FontAwesomeIcon className='iconBullent' icon={faCheckSquare} /> System Analysis
                                                </p>
                                                <p className='cardSubTitle' style={{textAlign: "justify"}}>
                                                    <FontAwesomeIcon className='iconBullent' icon={faCheckSquare} /> Coding Testing
                                                </p>
                                                <p className='cardSubTitle' style={{textAlign: "justify"}}>
                                                    <FontAwesomeIcon className='iconBullent' icon={faCheckSquare} /> Impementation
                                                </p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        )
    }
}

export default Summary