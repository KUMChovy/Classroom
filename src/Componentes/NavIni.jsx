import logo from '../img/logo.webp';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Componentes/Nav.css';
import { Link } from 'react-router-dom';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

// Función para simular la recuperación de datos
const getUsers = () => {
  return [
    { id: 1, name: 'Usuario 1', image: 'url_imagen_1' },
    { id: 2, name: 'Usuario 2', image: 'url_imagen_2' },
    { id: 3, name: 'Usuario 3', image: 'url_imagen_3' },
  ];
};

function UserDropdown() {
  const users = getUsers(); // Recupera la lista de usuarios

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Seleccionar Usuario
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {users.map((user) => (
          <Dropdown.Item key={user.id} href={`#/action-${user.id}`}>
            <img
              src={user.image}
              alt={user.name}
              style={{ width: '30px', height: '30px', marginRight: '10px' }}
            />
            {user.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default function Navegador() {
  return (
    <Navbar expand="lg" className="nav bg-transparent shadow-md transition duration-300 ease-in-out">
      <Container>
        <Navbar.Brand href="#home" className="flex items-center">
          <img src={logo} alt="Logo" className="logo" />
          <span className="text-blue-600 font-bold text-xl hover:text-blue-800 transition duration-200">
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
            <NavDropdown
              title={<span className="text-white">Más</span>}
              id="basic-nav-dropdown"
              className="font-bold"
              menuVariant="dark"
            >
              <NavDropdown.Item
                href="#action/3.1"
                className="hover:bg-gray-700 transition duration-200 font-bold text-white"
              >
                Contacto
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <UserDropdown /> {/* Componente Dropdown de usuarios */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
