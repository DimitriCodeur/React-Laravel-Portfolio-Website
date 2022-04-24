import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';

export class TopBanner extends Component {

  componentDidMount(){

    axios.get('http://127.0.0.1:8000/api/homepage/title')
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

  }

  render() {
    return (
      <Fragment>

        <Container fluid={true} className='topFixedBanner p-0'>
            <div className='topBannerOverlay'>
                <Container className='topContent'>
                    <Row>
                        <Col className='text-center'>
                            <h1 className='topTitle'>EASY LEARNING</h1>
                            <h4 className='topSubTitle'>Learn Professionnaly</h4>
                            <Button variant="primary">Learn More</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>

      </Fragment>
    )
  }
}

export default TopBanner