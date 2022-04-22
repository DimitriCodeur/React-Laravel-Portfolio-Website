import React, { Component, Fragment } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

class TopNavigation extends Component {

    constructor(){
        super();
        this.state = {
            navBarTitle : "navTitle"
        }
    }

    onScroll = () => {
        if(window.scrollY > 100){
            this.setState({navBarTitle: "navTitleScroll"});
        }else if(window.scrollY < 100){
            this.setState({navBarTitle: "navTitle"});
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.onScroll);
    }

    render() {
    return (
        <Fragment>

            <Navbar fixed='top' bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className={this.state.navBarTitle}>Easy Learning</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav className="ml-auto">
                            <Nav.Link href="#home" className='text-uppercase navLink'>Home</Nav.Link>
                            <Nav.Link href="#link" className='text-uppercase'>About</Nav.Link>
                            <Nav.Link href="#link" className='text-uppercase'>Service</Nav.Link>
                            <Nav.Link href="#link" className='text-uppercase'>Course</Nav.Link>
                            <Nav.Link href="#link" className='text-uppercase'>Portfolio</Nav.Link>
                            <Nav.Link href="#link" className='text-uppercase'>Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Fragment>
    )
  }
}

export default TopNavigation