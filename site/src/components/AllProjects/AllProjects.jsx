import React, { Component, Fragment } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Course1 from "../../assets/images/page1.png";
import Course2 from "../../assets/images/page2.png";
import Course3 from "../../assets/images/page3.png";

class AllProjects extends Component {
    render() {
        return (
            <Fragment>
                <Container className='text-center'>

                    <h1 className='serviceMainTitle text-uppercase'>Recent Projects</h1>
                    <div className='bottom'></div>

                    <Row>
                        
                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src={Course1} />
                                <Card.Body>
                                    <Card.Title class="serviceName">Project Name 1</Card.Title>
                                    <Card.Text className="serviceDescription">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button>
                                        <Link to="/projectdetails" className='link-style' variant="primary">View More</Link>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src={Course2} />
                                <Card.Body>
                                    <Card.Title class="serviceName">Project Name 2</Card.Title>
                                    <Card.Text className="serviceDescription">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button>
                                        <Link to="/projectdetails" className='link-style' variant="primary">View More</Link>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src={Course3} />
                                <Card.Body>
                                    <Card.Title class="serviceName">Project Name 3</Card.Title>
                                    <Card.Text className="serviceDescription">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button>
                                        <Link to="/projectdetails" className='link-style' variant="primary">View More</Link>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default AllProjects;