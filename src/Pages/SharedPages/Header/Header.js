import React from 'react';
import './Header.css'
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
       <>
<Navbar collapseOnSelect expand="lg" sticky='top'   className='p-4 m-4 ' variant="dark">
  <Container className=' nav-container'>
  <Navbar.Brand  className='fs-1 fw-bold ' as={Link}  to="/">WAREHOUSE BD</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    
    </Nav>
    <Nav>
      
      <Nav.Link as={Link} to="login"  className='fs-4 text-warning'>
        Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
       </>
    );
};

export default Header;