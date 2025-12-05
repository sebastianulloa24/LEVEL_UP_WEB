import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { FaShoppingCart } from 'react-icons/fa';
import '../styles/css/home.css';

function NavBar() {
  return (
    <Navbar expand="lg" className="custom-navbar" fixed='top'>
      <Container>
        {/* === LOGO O NOMBRE === */}
        <Navbar.Brand as={Link} to="/">
          LEVEL APP
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-gamer" />
        <Navbar.Collapse id="navbar-gamer">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/iniciosesion">Iniciar Sesion</Nav.Link>
            <Nav.Link as={Link} to="/registrarse">Registrarse</Nav.Link>

            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Productos">Computadores y Tablets</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Productos">Partes y Componentes</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Productos">Gamer / Poder Grafico</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Productos">Accesorios y Prefisfericos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Productos">Monitores</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Productos">Electronica y Robotica</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/Productos">
                Ofertas
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos">
                Todos los productos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* === ÍCONOS Y BOTONES === */}
          <Nav className="align-items-center">
            <Nav.Link as={Link} to="/carritocompra">
              <FaShoppingCart className="fa-shopping-cart" />
              <span className="badge">2</span>
            </Nav.Link>

            <Nav.Link as={Link} to="/perfil">
              <Button variant="success" className="ms-2"> Perfil </Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/Admin">
              <Button variant="success" className="ms-2"> Admin </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;



/*
Se hace npm install react-icons para 


*/
