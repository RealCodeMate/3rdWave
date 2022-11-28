import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from "react-router-dom";


import "../../sass/components/_header.scss";

export default function Header() {
  return (
    <>
      <Navbar key="lg" expand="lg" bg="light" sticky="top">
        <Container fluid>
          <Navbar.Brand >Dt. Mustafa Akyılmaz</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={NavLink} to="/">Anasayfa</Nav.Link>
                <Nav.Link as={NavLink} to="/about">Tedaviler</Nav.Link>
                <Nav.Link as={NavLink} to="/about">Galeri</Nav.Link>
                <Nav.Link as={NavLink} to="/about">Hakkimda</Nav.Link>
                <Nav.Link as={NavLink} to="/about">SSS</Nav.Link>
                <Nav.Link as={NavLink} to="/about">İletişim</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );

}
