import React from 'react';
import { Link } from "react-router-dom";
import { Navbar as NavbarBoostrap, Container, Nav } from 'react-bootstrap';
import Logo from '../../assets/images/logo_h.png';
const {
  Brand,
  Toggle,
  Collapse
} = NavbarBoostrap;

const {
  Link: LinkNav
} = Nav;

export default function Navbar() {
  return (
    <NavbarBoostrap collapseOnSelect expand="lg">
      <Container>
        <Brand><Link to="/"><img src={Logo} alt="logo" /></Link></Brand>
        <Toggle aria-controls="responsive-navbar-nav" />
        <Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <LinkNav >
              <Link className="menu_link" to="/">Nosotros</Link>
            </LinkNav>
            <LinkNav >
              <Link className="menu_link" to="/servicios">Servicios</Link>
            </LinkNav>
            <LinkNav >
              <Link className="menu_link" to="/testimonios">Testimonios</Link>
            </LinkNav>
            <LinkNav >
              <Link className="menu_link" to="/equipo">Equipo</Link>
            </LinkNav>
            <LinkNav >
              <Link className="menu_link" to="/contactos">Contactos</Link>
            </LinkNav>
          </Nav>
        </Collapse>
      </Container>
    </NavbarBoostrap>
  );
}
