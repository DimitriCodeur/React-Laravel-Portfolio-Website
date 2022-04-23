import React, { Component, Fragment } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import whiteLogo from '../../images/logo_white.png';
import blackLogo from '../../images/logo_black.png';

class TopNavigation extends Component {

    constructor(){
        super();
        this.state = {
            navBarTitle : "navTitle",
            navBarLogo : [whiteLogo], // [] Est utilisé pour les objets
            navBarBlack : "navBackground",
            navBarItem: "navItem",
            navVariant: "dark"
        }
    }

    onScroll = () => {
        if(window.scrollY > 100){
            this.setState({
                navBarTitle: "navTitleScroll", 
                navBarLogo: [blackLogo],
                navBarBlack: "navBackgroundScroll",
                navBarItem: "navItemScroll",
                navVariant: "light"
            });
        }else if(window.scrollY < 100){
            this.setState({
                navBarTitle: "navTitle", 
                navBarLogo: [whiteLogo],
                navBarBlack: "navBackground",
                navBarItem: "navItem",
                navVariant: "dark"
            });
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.onScroll);
    }

    render() {
    return (
        <Fragment>

            <Navbar className={this.state.navBarBlack} fixed='top' expand="lg" variant={this.state.navVariant}>
                <Container>
                    <Navbar.Brand href="#home" className={this.state.navBarTitle}>
                        <img src={this.state.navBarLogo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav className="ml-auto">
                            <Nav.Link href="#home" className={this.state.navBarItem}>Home</Nav.Link>
                            <Nav.Link href="#link" className={this.state.navBarItem}>About</Nav.Link>
                            <Nav.Link href="#link" className={this.state.navBarItem}>Service</Nav.Link>
                            <Nav.Link href="#link" className={this.state.navBarItem}>Course</Nav.Link>
                            <Nav.Link href="#link" className={this.state.navBarItem}>Portfolio</Nav.Link>
                            <Nav.Link href="#link" className={this.state.navBarItem}>Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Fragment>
    )
  }
}

export default TopNavigation