import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

export default function Navigation(){ return(
  <Navbar variant="dark" expand="lg" className=" navbar sticky-top">
  <Container>
    <Navbar.Brand href="#home">FunAI</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <NavDropdown title="Prompts" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Tagline</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Poem</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Short Story</NavDropdown.Item>
          <NavDropdown.Divider />
          
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
)

}