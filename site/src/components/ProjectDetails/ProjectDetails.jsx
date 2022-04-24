import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PDetailsImg from "../../assets/images/pdetails.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons';

class ProjectDetails extends Component {
  render() {
    return (
        <Fragment>
            <Container className='mt-5'>
                <Row>
                    <Col lg={6} md={12} sm={12} className="mt-5">
                        <div className="about-thumb-wrap after-shape">
                            <img src={PDetailsImg} alt="" />
                        </div>
                    </Col>

                    <Col lg={6} md={12} sm={12} className="mt-5">
                        <div className="detailsRight">
                            <h1 className="detailsTitle">Education is continuing a proud tradition</h1>
                            <p className="detailsText">
                                The quick, brown fox jups over a lazy dogs. DJs flock by when MTV ax quiz prog.
                                Junk MTV quiz graced by fow whelps. Badws jog, flick quartz, vex nypmhs. Wlatz, bad nypmh.
                            </p>
                            <p>
                                <FontAwesomeIcon className="iconBullet" icon={faCheckSquare} style={{marginRight:"5px"}} />
                                Metus  interdum metus
                            </p>
                            <p>
                                <FontAwesomeIcon className="iconBullet" icon={faCheckSquare} style={{marginRight:"5px"}} />
                                ligula cur maercenaa
                            </p>
                            <p>
                                <FontAwesomeIcon className="iconBullet" icon={faCheckSquare} style={{marginRight:"5px"}} />
                                Metus  interdum metus
                            </p>
                            <p>
                                <FontAwesomeIcon className="iconBullet" icon={faCheckSquare} style={{marginRight:"5px"}} />
                                munk MTV quiz graced by fow whelps
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
  }
}

export default ProjectDetails