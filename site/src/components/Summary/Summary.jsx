import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { faCheckSquare, faGlobe, faLaptop, faStar } from '@fortawesome/free-solid-svg-icons';
import CountUp, { countUpRef } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

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
                                            <h1 className='countNumber'>
                                            <CountUp start={0} end={ 35000}>
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <span ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                                </CountUp>
                                            </h1>
                                            <h4 className='countTitle'>Students WorlWide</h4>
                                            <hr className='bg-white w-25' style={{margin: "0 auto"}} />
                                        </Col>

                                        <Col>
                                            <FontAwesomeIcon className='iconProject' icon={faLaptop} /> 
                                            <h1 className='countNumber'>
                                                <CountUp start={0} end={22}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className='countTitle'>Courses Published</h4>
                                            <hr className='bg-white w-25' style={{margin: "0 auto"}} />
                                        </Col>

                                        <Col>
                                            <FontAwesomeIcon className='iconProject' icon={faStar} /> 
                                            <h1 className='countNumber'>
                                                <CountUp start={0} end={3000}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
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