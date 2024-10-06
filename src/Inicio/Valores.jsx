import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import './Valores.css';

function Valores() {
  return (
    <Row className="valores-grid">
      <Col xs={12} md={6} lg={3} className="valores-item">
        <Card className="text-center valores-card">
          <Card.Body>
            <Card.Title>Innovación</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      
      <Col xs={12} md={6} lg={3} className="valores-item">
        <Card className="text-center valores-card">
          <Card.Body>
            <Card.Title>Colaboración</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      
      <Col xs={12} md={6} lg={3} className="valores-item">
        <Card className="text-center valores-card">
          <Card.Body>
            <Card.Title>Calidad</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      
      <Col xs={12} md={6} lg={3} className="valores-item">
        <Card className="text-center valores-card">
          <Card.Body>
            <Card.Title>Simplicidad</Card.Title>
          </Card.Body>
        </Card>
      </Col>

      <Col xs={12} md={6} lg={3} className="valores-item">
        <Card className="text-center valores-card">
          <Card.Body>
            <Card.Title>Responsabilidad</Card.Title>
          </Card.Body>
        </Card>
      </Col>

      <Col xs={12} md={6} lg={3} className="valores-item">
        <Card className="text-center valores-card">
          <Card.Body>
            <Card.Title>Sostenibilidad</Card.Title>
          </Card.Body>
        </Card>
      </Col>

      <Col xs={12} md={6} lg={3} className="valores-item">
        <Card className="text-center valores-card">
          <Card.Body>
            <Card.Title>Adaptabilidad</Card.Title>
          </Card.Body>
        </Card>
      </Col>

      <Col xs={12} md={6} lg={3} className="valores-item">
        <Card className="text-center valores-card">
          <Card.Body>
            <Card.Title>Empatía</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Valores;
