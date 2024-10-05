import logo from '../img/logo.webp';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Componentes/Nav.css';
import { Link } from 'react-router-dom';



export default function Navegador(){
  return (
    <Navbar expand="lg" className="nav bg-transparent shadow-md transition duration-300 ease-in-out">
      <Container>
    <Navbar.Brand href="#home" className="flex items-center">
      <img
        src={logo} 
        alt="Logo"
        className="logo"
      />
      <span className="text-blue-600 font-bold text-xl hover:text-blue-800 transition duration-200">
        CRS
      </span>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
      <span className="navbar-toggler-icon" />
    </Navbar.Toggle>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto mx-auto space-x-4"> 
        <Nav.Link as={Link} to = "/" className="font-bold text-gray-700 hover:text-blue-600 transition duration-200">Inicio</Nav.Link>
        <Nav.Link as={Link} to="/Productos-servicios" className="font-bold text-gray-700 hover:text-blue-600 transition duration-200">Productos y servicios</Nav.Link>
        <Nav.Link href="#link" className="font-bold text-gray-700 hover:text-blue-600 transition duration-200">Acerca de</Nav.Link>
        <NavDropdown 
  title={<span className="text-white">Más</span>} 
  id="basic-nav-dropdown" 
  className="font-bold"
  menuVariant="dark" 
>
  <NavDropdown.Item 
    href="#action/3.1" 
    className="hover:bg-gray-700 transition duration-200 font-bold text-white" // Fondo gris oscuro y texto blanco
  >
    Contacto
  </NavDropdown.Item>
  <NavDropdown.Item 
    href="#action/3.2" 
    className="hover:bg-gray-700 transition duration-200 font-bold text-white"
  >
    Comentarios
  </NavDropdown.Item>
</NavDropdown>
      </Nav>
      <Nav.Link href="#link" className="font-bold text-gray-700 hover:text-blue-600 transition duration-200">Iniciar sesión</Nav.Link> 
    </Navbar.Collapse>
  </Container>
    </Navbar>
  );
};