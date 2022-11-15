import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./style.css";

export default function Header() {
  return (
    <div className="navbar">
      <Nav.Link as={NavLink} to="/">
        3rd Wave
      </Nav.Link>

      <div className="navItems">
        <Nav.Link as={NavLink} to="/" className="menuItems">
          Home
        </Nav.Link>

        <Nav.Link as={NavLink} to="/about" className="menuItems">
          About
        </Nav.Link>

        <Nav.Link as={NavLink} to="/contact" className="menuItems">
          Contact
        </Nav.Link>
      </div>
    </div>
  );
}
