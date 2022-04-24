import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class AboutDescription extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>

                        <Col lg={12} md={12} sm={12}>
                            <h1 className='serviceName'>Who I Am</h1>
                            <hr/>
                            <p className='serviceDescription'>
                            this a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a <br/> <br/> more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for <br/> <br/> 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour .<br/> <br/>
                            </p>
                        </Col>

                        <Col lg={12} md={12} sm={12}>
                            <h1 className='serviceName'>Our Mission</h1>
                            <hr/>
                            <p className='serviceDescription'>
                            this a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a <br/> <br/> more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for <br/> <br/> 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour .<br/> <br/>
                            </p>
                        </Col>

                        <Col lg={12} md={12} sm={12}>
                            <h1 className='serviceName'>Our Vision</h1>
                            <hr/>
                            <p className='serviceDescription'>
                            this a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a <br/> <br/> more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for <br/> <br/> 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour .<br/> <br/>
                            </p>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default AboutDescription;