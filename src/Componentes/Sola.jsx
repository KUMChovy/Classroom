import logo from '../img/logo.webp';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Componentes/Nav.css';
import { Link } from 'react-router-dom';




export default function Sola() {
  return (
    <Navbar expand="lg" className="nav bg-transparent shadow-md transition duration-300 ease-in-out">
      <Container>
        <Navbar.Brand as={Link} to="/Inicio" className="flex items-center">
          <img src={logo} alt="Logo" className="logo" />
          <span className="text-blue-600 font-bold text-xl hover:text-blue-800 transition duration-200">
            CRS
          </span>
        </Navbar.Brand>
        
      </Container>
    </Navbar>
  );
}