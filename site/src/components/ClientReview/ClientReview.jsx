import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class ClientReview extends Component {
  render() {
    const settings = {
        autoPlay: true,
        autoPlaySpeed: 3000,
        dots: true,
        infinite: true,
        speed: 3000,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    return (
        <Fragment>
            <Container fluid={true} className="siderBack text-center">

                <h1 className='reviewMainTitle text-uppercase p-3'>Testimonial</h1>
                <div className='reviewbottom'></div>

                <Slider {...settings}>

                    <div>
                        <Row className="text-center">

                            <Col lg={12} md={12} sm={12}>
                                <img className='cirCleImg' src="https://img.freepik.com/photos-gratuite/heureux-gars-joyeux-montrant-geste-ok_74855-3502.jpg?t=st=1650660755~exp=1650661355~hmac=438c3980b62c5b7e4c8cb8b4b405f8b2357bf8d896805fdff55f87ddd89a4f7e&w=900" alt="review 1" />
                                <h5 className='reviewName'>Elon Musk</h5>
                                <p className='reviewDescription'>
                                    Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire.
                                </p>
                            </Col>

                        </Row>
                    </div>

                    <div>
                        <Row className="text-center">

                            <Col lg={12} md={12} sm={12}>
                                <img className='cirCleImg' src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-male-employee-in-office-picture-id1309328823?b=1&k=20&m=1309328823&s=170667a&w=0&h=a-f8vR5TDFnkMY5poQXfQhDSnK1iImIfgVTVpFZi_KU=" alt="review 2" />
                                <h5 className='reviewName'>Jack Ma</h5>
                                <p className='reviewDescription'>
                                L'avantage du Lorem Ipsum sur un texte générique comme Du texte.
                                </p>
                            </Col>

                        </Row>
                    </div>
                        
                </Slider>

            </Container>
        </Fragment>
    )
  }
}

export default ClientReview