import React from 'react';
import './Header.css'
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {

 const [user]= useAuthState(auth)


 const handleSignout= ()=>{
   signOut(auth)
 }

    return (
       <>
<Navbar collapseOnSelect expand="lg" sticky='top'  bg='success'  className='p-4  ' variant="dark">
  <Container className=' nav-container'>
  <Navbar.Brand  className='fs-1 fw-bold ' as={Link}  to="/">WAREHOUSE BD</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="newhome#inventoryitems"  className='text-white  fs-5 fw-bold  '  >INVENTORY ITEM</Nav.Link>
      <Nav.Link href="newhome#services"  className='text-white fs-5 fw-bold'      >SERVICES</Nav.Link>
      <Nav.Link href="#services" as={Link} to="/blogs"  className='text-white fs-5 fw-bold'      >BLOGS</Nav.Link>
    
    </Nav>

    <Nav>
      
     
    {

      user  ?
      <button onClick={handleSignout} className='btn' >SIGN OUT</button>
      :
      <Nav.Link as={Link} to="login"  className='fs-4 text-warning  login '>
      LOG IN
    </Nav.Link>}
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
       </>
    );
};

export default Header;