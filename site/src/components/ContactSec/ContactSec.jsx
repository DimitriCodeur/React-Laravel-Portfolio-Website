import { faEnvelope, faMapLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

class ContactSec extends Component {
    render() {
        return (
            <Fragment>
                <Container className='mt-5'>
                    <Row>
                        
                        <Col lg={6} md={6} sm={12}>
                            <h1 className='serviceName'>Quick Connect</h1>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email" />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter your password" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Enter your password" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        
                        <Col lg={6} md={6} sm={12}>
                            <h1 className='serviceName'>Discuss Now</h1>
                            <p className='serviceDescription'>
                                <FontAwesomeIcon className='footerAddressIcon' icon={faMapLocation} />2035 Yaoundé MBankolo, Cameroon <br/>
                                <FontAwesomeIcon className='' icon={faEnvelope} /> Email: dimitriromaric864@gmail.com  <br/>
                                <FontAwesomeIcon className='footerAddressIcon' icon={faPhone} /> Phone: 692258005 <br/>
                            </p>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default ContactSec