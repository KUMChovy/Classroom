import React, { useState, useEffect } from 'react';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaEnvelope } from 'react-icons/fa';
import './Descripcion.css'; 
import Footer from '../Componentes/Footer';
import Sola from "../Componentes/Sola"
import Nav from '../Componentes/Nav';

export default function Contacto() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    const newTheme = !darkMode ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    document.body.classList.toggle('dark-mode', newTheme === 'dark');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nombre:', name);
    console.log('Correo:', email);
    console.log('Teléfono:', phone);
  };
  

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Sola toggleDarkMode={toggleDarkMode} darkMode={darkMode}  />
      <div className="contacto-valores-nueva-container">
      <Row className="contacto-valores-nueva-row justify-content-center">
        <Col xs={12} sm={6} md={4} className="d-flex justify-content-center">
          <Card className="contacto-tarjeta-personalizada contacto-card1">
            <Card.Body>
              <Card.Title className="contacto-titulo-tarjeta">Información de Contacto</Card.Title>
              <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/256/5722/5722116.png" alt="Imagen de Contacto" />
              <p className="contacto-texto-tarjeta">
                <Button className="contacto-boton-facebook" href="https://www.facebook.com/profile.php?id=61560458833662&mibextid=LQQJ4d&rdid=fEpgGAt0kxHOrrK7&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fn8c8rE4fJ2y1C4NM%2F%3Fmibextid%3DLQQJ4d" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={20} /> Facebook
                </Button>
              </p>
              <p className="contacto-texto-tarjeta">
                <Button className="contacto-boton-gmail" href="mailto:cody_go@gmail.com" target="_blank" rel="noopener noreferrer">
                  <FaEnvelope size={20} /> Gmail
                </Button>
              </p>
              <p className="contacto-texto-tarjeta">Teléfono: +52 55 3728 2899</p>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} className="d-flex justify-content-center">
          <Card className="contacto-tarjeta-personalizada contacto-card2">
            <Card.Body>
              <Card.Title className="contacto-titulo-tarjeta">Formulario</Card.Title>
              <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/256/15133/15133114.png" alt="Imagen de Formulario" />
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Control 
                    type="text" 
                    placeholder="Nombre" 
                    className="contacto-input-linea" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                  />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Control 
                    type="email" 
                    placeholder="Correo Electrónico" 
                    className="contacto-input-linea" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                  />
                </Form.Group>
                <Form.Group controlId="formPhone">
                  <Form.Control 
                    type="tel" 
                    placeholder="Teléfono" 
                    className="contacto-input-linea" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                  />
                </Form.Group>
                <Button variant="primary" type="submit">Enviar</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </div>
      <Footer />
    </div>
  );
}
