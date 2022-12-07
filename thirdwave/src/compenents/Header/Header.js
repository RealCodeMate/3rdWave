import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";

import "../../sass/components/_header.scss";

export default function Header() {
  return (
    <>
      <Navbar key="lg" expand="lg" bg="light" sticky="top">
        <Container fluid>
          <Navbar.Brand>
            <h1>
              <span>Dt.</span> Mustafa Akyılmaz
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                Menü
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={NavLink} to="/">
                  <h5>Anasayfa</h5>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/treatments">
                  <h5>Tedaviler</h5>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/gallery">
                  <h5>Galeri</h5>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/about">
                  <h5>Hakkimda</h5>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/faq">
                  <h5>SSS</h5>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/contact">
                  <h5>İletişim</h5>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
