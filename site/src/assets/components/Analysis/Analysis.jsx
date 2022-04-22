import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

class Analysis extends Component {

    constructor(){
        super();
        this.state = {
            data: [
                {Technology: 'PHP', Projects: 40},
                {Technology: 'MySql', Projects: 80},
                {Technology: 'Laravel', Projects: 70},
                {Technology: 'React', Projects: 25},
                {Technology: 'Jquery', Projects: 50},
                {Technology: 'Javascript', Projects: 40},
                {Technology: 'Bootstrap', Projects: 65},
            ]
        }
    }

    render() {

        var blue = "#051b35";

        return (
            <Fragment>
                <Container className='text-center'>

                    <h1 className='serviceMainTitle text-uppercase'>Technology Used</h1>
                    <div className='bottom'></div>

                    <Row>

                        <Col lg={6} md={12} sm={12}>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart width={100} height={30} data={this.state.data}>                        
                                    <XAxis dataKey="Technology" />
                                    <Tooltip />
                                    <Bar dataKey="Projects" fill={blue}></Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </Col>

                        <Col lg={6} md={12} sm={12}>
                            <p className="text-justify serviceDescription" style={{ textAlign: "justify" }}>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.<br></br> <br></br> Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié.<br></br> <br></br>  Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Analysis