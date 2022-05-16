import React from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import { FaQuestion } from "react-icons/fa";

export default function Navigation() {
  return (
    <header className="header">
      <Navbar bg="primary" variant="dark" expand="lg" className=" navbar sticky-top">
        <Container>
          <Navbar.Brand href="#home" className="fs-3 fw-bold"> inspirAItion</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">
                <FaQuestion />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
