import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import "../../sass/components/_header.scss";
import LngBtn from "../Buttons/lngBtn";
import { useTranslation } from 'react-i18next';


export default function Header() {
  const { t } = useTranslation();
  return (
    <>
      <Navbar key="lg" expand="lg" bg="light" sticky="top">
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/">
            <h1>
              <span>Dt.</span> Mustafa Akyılmaz
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                Menü
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={NavLink} to="/">
                  <h5>{t('header.home')}</h5>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/treatments">
                  <h5>{t('header.treatments')}</h5>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/gallery">
                  <h5>{t('header.gallery')}</h5>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/about">
                  <h5>{t('header.about')}</h5>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/faq">
                  <h5>{t('header.faq')}</h5>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/contact">
                  <h5>{t('header.contact')}</h5>
                </Nav.Link>
                <Nav.Link >
                  <LngBtn />
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
