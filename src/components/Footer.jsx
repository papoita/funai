import React from "react";
import { Card } from "react-bootstrap";
import { FaGithub, FaCoffee } from "react-icons/fa";

export default function Footer() {
  return (
    <Card bg="primary" variant="light">
      <Card.Footer className="d-flex text-muted justify-content-center  ">
        <a href={"https://github.com/papoita/funai"}>
          <FaGithub style={{ color: "#96BF45", margin: "0 20px" }} />
        </a>
        <div style={{ margin: "0 20px" }}>
          Want to chat about awesome ideas? let's connect
        </div>
        <a href="https://www.linkedin.com/in/perezleivapaola/">
          <FaCoffee style={{ color: "#96BF45", margin: "0 20px" }} />
        </a>
      </Card.Footer>
    </Card>
  );
}
