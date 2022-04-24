import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Course extends Component {
  render() {
    return (
        <Fragment>
            <Container className='text-center'>

                <h1 className='serviceMainTitle text-uppercase'>My Courses</h1>
                <div className='bottom'></div>

                <Row>

                    <Col lg={6} md={12} sm={12} className="p-2">
                        <Row>

                            <Col lg={6} md={6} sm={12}>
                                <img className="courseImg" src="https://img.freepik.com/psd-gratuit/modele-banniere-concept-ee-learning_23-2148688189.jpg?t=st=1650654299~exp=1650654899~hmac=b75f557bfd913c0c276d94c3d3a86d0d60734533dd2783f6a5151b77b842ce69&w=900" alt="" />
                            </Col>

                            <Col lg={6} md={6} sm={12}>
                                <h5 className='serviceName' style={{textAlign:"justify"}}>Laravel 8</h5>
                                <p className='serviceDescription' style={{textAlign:"justify"}}>In This Course, You Will Build Three Different Project With Laravel 8 Include Advance Professional Ecommerce Site A-Z</p>
                                <Link to="/coursedetails" className='courseViewMore' style={{float:"left"}}>View Details</Link>
                            </Col>

                        </Row>
                    </Col >

                    <Col lg={6} md={12} sm={12} className="p-2">
                        <Row>

                            <Col lg={6} md={6} sm={12}>
                                <img className="courseImg" src="https://img.freepik.com/vecteurs-libre/boostez-modele-page-destination-votre-entreprise_79603-1143.jpg?w=900" alt="" />
                            </Col>

                            <Col lg={6} md={6} sm={12}>
                            <h5 className='serviceName' style={{textAlign:"justify"}}>ReactJs With Laravel </h5>
                                <p className='serviceDescription' style={{textAlign:"justify"}}>Learn React.js for Frontend and Use Laravel for Backend. Become Full Stack Web Developer By Build Complete Project</p>
                               <Link to="/coursedetails" className='courseViewMore' style={{float:"left"}}>View Details</Link>
                            </Col>

                        </Row>
                    </Col>

                    <Col lg={6} md={12} sm={12} className="p-2">
                        <Row>

                            <Col lg={6} md={6} sm={12}>
                                <img className="courseImg" src="https://img.freepik.com/vecteurs-libre/concept-isometrique-seo-surveillance-symboles-trafic-isoles_1284-32006.jpg?t=st=1650656239~exp=1650656839~hmac=78f82400724db1b4c534a19fbe3882bf65899f7e601e19ee20604b527454aabb&w=900" alt="" />
                            </Col>

                            <Col lg={6} md={6} sm={12}>
                            <h5 className='serviceName' style={{textAlign:"justify"}}>The Ultimate SEO Training </h5>
                                <p className='serviceDescription' style={{textAlign:"justify"}}>SEO Training From An SEO Agency Owner: Step By Step Process To Rank #1 on Google. Keyword Research, Technical SEO & More</p>
                               <Link to="/coursedetails" className='courseViewMore' style={{float:"left"}}>View Details</Link>
                            </Col>

                        </Row>
                    </Col>

                    <Col lg={6} md={12} sm={12} className="p-2">
                        <Row>

                            <Col lg={6} md={6} sm={12}>
                                <img className="courseImg" src="https://img.freepik.com/photos-gratuite/concepts-conception-web-arriere-plan-flou_1134-82.jpg?t=st=1650655867~exp=1650656467~hmac=83e196ee7791790409ec75efa7bd4219bfbc01e900566ada18a3af1a2c900764&w=900" alt="" />
                            </Col>

                            <Col lg={6} md={6} sm={12}>
                            <h5 className='serviceName' style={{textAlign:"justify"}}>Web Design</h5>
                                <p className='serviceDescription' style={{textAlign:"justify"}}>Become a Designer in 2022! Master Mobile and Web Design, User Interface + User Experience (UI/UX Design), HTML, and CSS</p>
                                <Link to="/coursedetails" className='courseViewMore' style={{float:"left"}}>View Details</Link>
                            </Col>

                        </Row>
                    </Col>

                </Row>
            </Container>
        </Fragment>
    )
  }
}

export default Course