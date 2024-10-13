import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../img/logo.webp";
import "./Nav.css"; // Archivo de estilos donde definimos el modo oscuro y claro

export default function Navegador({ toggleDarkMode, darkMode }) {
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Navbar expand="lg" className="nav bg-transparent shadow-md transition duration-300 ease-in-out">
        <Container>
          <Navbar.Brand href="#home" className="flex items-center">
            <img src={logo} alt="Logo" className="logo" />
            <span className="font-bold text-xl hover:text-blue-800 transition duration-200">
              CRS
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
            <span className="navbar-toggler-icon" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mx-auto space-x-4">
              <Nav.Link href="#Descripcion" className="font-bold text-gray-700 hover:text-blue-600 transition duration-200">
                Inicio
              </Nav.Link>
              <Nav.Link href="#Busqueda" className="font-bold text-gray-700 hover:text-blue-600 transition duration-200">
                Productos y servicios
              </Nav.Link>
              <Nav.Link href="#Acerca-de" className="font-bold text-gray-700 hover:text-blue-600 transition duration-200">
                Acerca de
              </Nav.Link>
              <NavDropdown title={<span className="text">Más</span>} id="basic-nav-dropdown" className="font-bold" menuVariant="dark">
                <NavDropdown.Item as={Link} to="/Contacto" className="hover:bg-gray-700 transition duration-200 font-bold text-white">
                  Contacto
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <button onClick={toggleDarkMode} className="dark-mode-toggle-btn">
              {darkMode ? "Modo Claro" : "Modo Oscuro"}
            </button>
            <Nav.Link as={Link} to="/Iniciar_sesión" className="font-bold text-gray-700 hover:text-blue-600 transition duration-200">
              Iniciar sesión
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
