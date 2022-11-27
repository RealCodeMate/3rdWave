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
            Dt. Mustafa <span className="life-header">Akyılmaz</span>
          </Nav.Link>

          <div className="navItems">
            <Nav.Link as={NavLink} to="/" className="menuItems">
              Anasayfa
            </Nav.Link>
            <Nav.Link as={NavLink} to="/" className="menuItems">
              Tedaviler
            </Nav.Link>
            <Nav.Link as={NavLink} to="/" className="menuItems">
              Galeri
            </Nav.Link>

            <Nav.Link as={NavLink} to="/about" className="menuItems">
              Hakkımda
            </Nav.Link>
            <Nav.Link as={NavLink} to="/" className="menuItems">
              SSS
            </Nav.Link>

            <Nav.Link as={NavLink} to="/contact" className="menuItems">
              İletişim
            </Nav.Link>
          </div>
        </div>
      </div>
    </div>
  );
}
