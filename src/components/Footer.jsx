import React from "react";
import { FaGithub, FaCoffee } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-100 bg-primary d-flex justify-content-center fixed-bottom p-2 ">
      <a href="https://github.com/papoita/funai">
        <FaGithub className="text-secondary mx-3" />
      </a>
      <p className="mx-3 text-light">
        Want to chat about awesome ideas? let's connect
      </p>
      <a href="https://www.linkedin.com/in/perezleivapaola/">
        <FaCoffee className="text-secondary mx-3" />
      </a>
    </div>
  );
}
