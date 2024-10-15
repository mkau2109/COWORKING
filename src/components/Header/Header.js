import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link'; // Import HashLink for smooth scrolling
import './Header.css';

function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="/images/logo.jpg" 
              alt="Mithra Cowork Logo"
              className="logo"
            />{' '}
            Mithra Cowork
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/#about">About</Nav.Link>
              <Nav.Link as={Link} to="/career">Career</Nav.Link>
              <Nav.Link as={Link} to="/#contact">Contact Us</Nav.Link> {/* Updated to hash link */}
              <Nav.Link as={Link} to="/#get-quote" className="get-quote-btn">Get Quote</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
