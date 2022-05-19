import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default function Navigation() {
  return (
    <header className="header mb-5">
      <Navbar
        bg="primary"
        variant="dark"
        expand="lg"
        className="navbar "
      >
        <Container className="justify-content-center">
          <Navbar.Brand href="#home" className="fs-3 fw-bold">
            {" "}
            inspirAItion
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
}
