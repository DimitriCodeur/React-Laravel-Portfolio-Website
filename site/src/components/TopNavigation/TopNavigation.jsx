import React, { Component, Fragment } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import whiteLogo from '../../assets/images/logo_white.png';
import blackLogo from '../../assets/images/logo_black.png';
import { NavLink } from 'react-router-dom';

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

                            <Nav.Link>
                                <NavLink to="/" className={this.state.navBarItem}>Home</NavLink>
                            </Nav.Link>

                            <Nav.Link>
                                <NavLink to="/about" className={this.state.navBarItem}>About</NavLink>
                            </Nav.Link>

                            <Nav.Link>
                                <NavLink to="/service" className={this.state.navBarItem}>Service</NavLink>
                            </Nav.Link>

                            <Nav.Link>
                                <NavLink to="/course" className={this.state.navBarItem}>Course</NavLink>
                            </Nav.Link>

                            <Nav.Link>
                                <NavLink to="/portfolio" className={this.state.navBarItem}>Portfolio</NavLink>
                            </Nav.Link>
                            
                            <Nav.Link>
                                <NavLink to="/contact" className={this.state.navBarItem}>Contact Us</NavLink>
                            </Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Fragment>
    )
  }
}

export default TopNavigation