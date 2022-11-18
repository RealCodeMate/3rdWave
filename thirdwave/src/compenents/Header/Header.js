import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

import "../../sass/components/_header.scss";

export default function Header() {
  return (
    <div>
      <div className="nav-container">
        <div className="navbar">
          <Nav.Link as={NavLink} to="/" className="logo">
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
      </div>
    </div>
  );
}
