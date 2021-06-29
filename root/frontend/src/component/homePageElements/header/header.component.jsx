import React from 'react';
import {Nav, NavDropdown, Navbar} from 'react-bootstrap';

//


const Header = () => (
    <div className='header'>
        <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#home">
            <img
                alt=""
                src= {'https://lh3.googleusercontent.com/proxy/yL2NM8laiFiVLuChgZy35YZn30wJKhEPGMQRFYFJwj8-EaZANgiRDSoGeGyfwHxB11c8ni3tWo2djiFXf1Hc'}
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            ICAF Conference 2021
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#features">Home</Nav.Link>
                    <Nav.Link href="#pricing">Keynotes</Nav.Link>
                    <NavDropdown title="Authors" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Call for Authors</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Conference Tracks</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Important Dates</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Submission Guidelines</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Workshops" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Workshops</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Call for workshops</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link href="/registration">Registration</Nav.Link>

                    <Nav.Link href="/template" >Downloads</Nav.Link>

                    <Nav.Link href="#features">Past Proceedings</Nav.Link>
                    <Nav.Link href="#pricing">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    </div>
  );
  
  export default Header;