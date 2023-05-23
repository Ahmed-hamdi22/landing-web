import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Nav.css"
const Navb = () => {
  return (
    <Navbar bg="light" expand="lg">
      
    <Container >
    
      <Navbar.Brand href="#home">Dorsin</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" >
          <Nav.Link  href="#home">Home</Nav.Link>
          <Nav.Link href="#Serices">Serices</Nav.Link>
          <Nav.Link href="#Features">Features</Nav.Link>
          <Nav.Link href="#pricing"> pricing</Nav.Link>
          <Nav.Link href="#Tearm">Tearm</Nav.Link>
          <Nav.Link href="#Blog">Blog</Nav.Link>
          <Nav.Link href="#Contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
     
    </Container>
    
  </Navbar>
  )
}

export default Navb
