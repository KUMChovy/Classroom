import React, { useState } from 'react';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaEnvelope } from 'react-icons/fa';
import './Contacto.css';

export default function Contacto() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nombre:', name);
    console.log('Correo:', email);
    console.log('Teléfono:', phone);
  };

  return (
    <Container className="valores-nueva-container">
      <Row className="valores-nueva-row justify-content-center">
        <Col xs={12} sm={6} md={4} className="d-flex justify-content-center">
          <Card className="tarjeta-personalizada card1">
            <Card.Body>
              <Card.Title className="titulo-tarjeta">Información de Contacto</Card.Title>
              <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/256/5722/5722116.png" alt="Imagen de Contacto" />
              <p className="texto-tarjeta">
                <Button className="boton-facebook" href="tu_enlace_facebook" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={20} /> Facebook
                </Button>
              </p>
              <p className="texto-tarjeta">
                <Button className="boton-gmail" href="mailto:cody_go@gmail.com" target="_blank" rel="noopener noreferrer">
                  <FaEnvelope size={20} /> Gmail
                </Button>
              </p>
              <p className="texto-tarjeta">Teléfono: +52 55 3728 2899</p>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} className="d-flex justify-content-center">
          <Card className="tarjeta-personalizada card2">
            <Card.Body>
              <Card.Title className="titulo-tarjeta">Formulario</Card.Title>
              <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/256/15133/15133114.png" alt="Imagen de Formulario" />
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Control 
                    type="text" 
                    placeholder="Nombre" 
                    className="input-linea" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                  />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Control 
                    type="email" 
                    placeholder="Correo Electrónico" 
                    className="input-linea" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                  />
                </Form.Group>
                <Form.Group controlId="formPhone">
                  <Form.Control 
                    type="tel" 
                    placeholder="Teléfono" 
                    className="input-linea" 
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
    </Container>
  );
}
