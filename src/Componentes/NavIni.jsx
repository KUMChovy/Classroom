import logo from '../img/logo.webp';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import '../Componentes/Nav.css';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'; // Importar Modal y Button

// Función para simular la recuperación de datos
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

function UserDropdown() {
  const user = getUsers()[0]; // Solo un usuario
  const [showModal, setShowModal] = useState(false); // Estado para controlar la apertura del modal

  // Funciones para manejar la apertura y cierre del modal
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Button
        variant="transparent"
        className="border-0 rounded-circle" // Hacer el botón circular
        onClick={handleShowModal} // Abrir modal al hacer clic
      >
        <img
          src={user.image}
          alt={user.nombre} // Corregir el atributo alt
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%', // Hacer la imagen circular
          }}
        />
      </Button>

      {/* Modal para mostrar la información del usuario */}
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
          <Button variant="secondary" className='bg-danger' onClick={handleCloseModal}>Cancelar</Button>
          <Button variant="danger" className='bg-success' href="#/cerrar-sesion">Cerrar sesión</Button>
        </Modal.Footer>
      </Modal>
    </>
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
          <UserDropdown />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
