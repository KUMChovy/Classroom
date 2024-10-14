import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../img/logo.webp";
import "./Nav.css"; // Asegúrate de tener el archivo CSS con las clases .dark-mode y .light-mode

// Función para obtener los datos del usuario
const getUsers = () => {
  return [
    {
      id: 1,
      nombre: 'Gabriel Orba Carvente',
      email: 'Gabrielprofe@hotmail.com',
      image: 'https://cdn3.iconfinder.com/data/icons/cat-pattern-colored/94/cat3-1024.png',
    },
  ];
};

// Componente UserDropdown para mostrar el modal de usuario
function UserDropdown() {
  const user = getUsers()[0];
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Button
        variant="transparent"
        className="cat"
        onClick={handleShowModal}
      >
        <img
          src={user.image}
          alt={user.nombre}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
          }}
        />
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Opciones de Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src={user.image}
            alt="User"
            style={{
              width: '90px',
              height: '90px',
              borderRadius: '60%',
              marginBottom: '10px',
            }}
          />
          <p className="font-weight-bold">{user.nombre}</p>
          <p>{user.email}</p>
          <p className="font-weight-bold">¿Deseas cerrar sesión?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className='bg-danger' onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button as={Link} to="/" variant="danger" className='bg-success' href="#/cerrar-sesion">
            Cerrar sesión
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// Componente principal NavIni
export default function NavIni({ toggleDarkMode, darkMode }) {
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
              <Nav.Link as={Link} to="/Iniciar_sesión" className="font-bold text-gray-700 hover:text-blue-600 transition duration-200">
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
            {/* Botón de alternar entre Modo Oscuro/Claro */}
            <button onClick={toggleDarkMode} className="dark-mode-toggle-btn">
              {darkMode ? "Modo Claro" : "Modo Oscuro"}
            </button>
            {/* Dropdown de usuario */}
            <UserDropdown />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
