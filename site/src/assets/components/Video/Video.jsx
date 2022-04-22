import { faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';

class Video extends Component {

    constructor(){
        super();
        this.state = {
            show: false
        }
    }

    modalClose = () => {
        this.setState({show: false});
    }

    modalOpen = () => {
        this.setState({show: true});
    }

    render() {
        return (
            <Fragment>
                <Container className='text-center'>

                    <h1 className='serviceMainTitle text-uppercase'>Our Videos</h1>
                    <div className='bottom'></div>

                    <Row>

                        <Col lg={6} md={6} sm={12} className="videoText">
                            {/* <h1 className='serviceName' style={{textAlign:"justify"}}>Ecommerce</h1> */}
                            <p className='serviceDescription' style={{textAlign:"justify"}}>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.
                            <br/><br/>
                            Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié.
                            <br/><br/>
                            Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
                        </Col>

                        <Col lg={6} md={6} sm={12} className="videoCard">
                            <FontAwesomeIcon className='iconProject' icon={faVideoSlash} onClick={this.modalOpen} />
                        </Col>

                    </Row>
                </Container>

                <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.modalClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </Fragment>
        )
    } 
}

export default Video;