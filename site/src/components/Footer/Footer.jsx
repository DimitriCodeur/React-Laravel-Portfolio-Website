import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLaptop, faLocation, faMapLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
        <Fragment>
            <Container fluid={true} className="footerSection">
                <Row>

                    <Col lg={3} md={6} sm={12} className="p-5" style={{textAlign:"justify"}}>
                        <h2 className="footerName">Follow Us </h2>
                        <div className='socialContainer'>
                            <a className='facebook social' href="#"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                            <a className='youtube social' href="#"><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
                            <a className='twitter social' href="#"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={12} className="p-5" style={{textAlign:"justify"}}>
                        <h2 className="footerName">Address</h2>
                        <p className='footerDescription'>
                            <FontAwesomeIcon className='footerAddressIcon' icon={faMapLocation} />2035 Yaoundé MBankolo, Cameroon <br/>
                            <FontAwesomeIcon className='' icon={faEnvelope} /> Email: dimitriromaric864@gmail.com  <br/>
                            <FontAwesomeIcon className='footerAddressIcon' icon={faPhone} /> Phone: 692258005 <br/>
                        </p>
                    </Col>

                    <Col lg={3} md={6} sm={12} className="p-5" style={{textAlign:"justify"}}>
                        <h2 className="footerName">Information</h2>
                        <Link className='footerLink' to="/about">About Me</Link> <br/>
                        <Link className='footerLink' to="/about">Company Profile</Link> <br/>
                        <Link className='footerLink' to="/contact">Contact Us</Link> <br/>
                    </Col>

                    <Col lg={3} md={6} sm={12} className="p-5" style={{textAlign:"justify"}}>
                        <h2 className="footerName">Policy</h2>
                        <Link className='footerLink' to="/refund">Refund Policy</Link> <br/>
                        <Link className='footerLink' to="/terms">Terms And Condition</Link> <br/>
                        <Link className='footerLink' to="/privacy">Privacy Policy</Link> <br/>
                    </Col>

                </Row>
            </Container>

            <Container fluid={true} className="text-center copyrightSection" >
                <Row>
                    <a href="#">© Copyright by Hight Technology, All Rights Reserved</a>
                </Row>
            </Container>

        </Fragment>
    )
  }
}

export default Footer