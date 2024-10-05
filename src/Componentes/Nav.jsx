import logo from '../img/logo.webp';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Componentes/Nav.css';


export default function Navegador(){
  return (
    <Navbar expand="lg" className="bg-transparent shadow-md transition duration-300 ease-in-out">
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
      <Nav className="me-auto mx-auto space-x-4"> {/* mx-auto para centrar */}
        <Nav.Link Link to = "Inicio" className="font-bold text-gray-700 hover:text-blue-600 transition duration-200">Inicio</Nav.Link>
        <Nav.Link href="#link" className="font-bold text-gray-700 hover:text-blue-600 transition duration-200">Productos y servicios</Nav.Link>
        <Nav.Link href="#link" className="font-bold text-gray-700 hover:text-blue-600 transition duration-200">Acerca de</Nav.Link>
        <NavDropdown title="Más" id="basic-nav-dropdown" className="font-bold text-gray-700 hover:text-blue-600 transition duration-200">
          <NavDropdown.Item href="#action/3.1" className="hover:bg-blue-100 transition duration-200 font-bold">Contacto</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2" className="hover:bg-blue-100 transition duration-200 font-bold">Comentarios</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav.Link href="#link" className="font-bold text-gray-700 hover:text-blue-600 transition duration-200">Iniciar sesión</Nav.Link> {/* Alineación a la derecha */}
    </Navbar.Collapse>
  </Container>
    </Navbar>
  );
};