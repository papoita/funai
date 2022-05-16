import React from "react";
import { Navbar, Container} from "react-bootstrap";

export default function Navigation() {
  return (
    <header className="header">
      <Navbar bg="primary" variant="dark" expand="lg" className=" navbar sticky-top">
        <Container className="justify-content-center">
          <Navbar.Brand href="#home" className="fs-3 fw-bold"> inspirAItion</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
}
