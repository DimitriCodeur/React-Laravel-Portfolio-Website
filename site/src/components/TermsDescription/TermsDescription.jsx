import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export class TermsDescription extends Component {
  render() {
    return (
       <Fragment>
            <Container className='mt-5'>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <h1 className='serviceName'>Data Protection Principle</h1>
                        <p className='serviceDescription'>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br/><br/> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.  <br/><br/>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. <br/><br/>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. <br/><br/> The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                            5
                                paragraphs
                                words
                                bytes
                                lists
                                Start with 'Lorem
                            ipsum dolor sit amet...'
                        </p>
                    </Col>
                </Row>
            </Container>      
       </Fragment>
    )
  }
}

export default TermsDescription