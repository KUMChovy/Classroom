import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Presentation = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg">
            <Card.Body>
              <Card.Title className="text-center text-primary font-weight-bold">
                Automatización de Aulas
              </Card.Title>
              <Card.Text className="text-center">
                Este sitio web está diseñado para automatizar las aulas, facilitando el control de ventiladores, proyectores y sistemas de climatización, con ajuste automático o manual de temperatura.
              </Card.Text>
              <Card.Text className="text-center">
                También optimiza el pase de lista digitalmente y utiliza sensores inteligentes para adaptar las condiciones del aula según la cantidad de personas o el clima, mejorando la eficiencia y comodidad para docentes y estudiantes.
              </Card.Text>
              <Card.Text className="font-weight-bold">
                Características:
              </Card.Text>
              <ul className="list-unstyled">
                <li>🔹 Control de ventiladores y proyectores</li>
                <li>🔹 Ajuste automático o manual de temperatura</li>
                <li>🔹 Pase de lista digital optimizado</li>
                <li>🔹 Sensores inteligentes para adaptación del aula</li>
              </ul>
              <div className="text-center">
                <Button variant="primary" href="#features">
                  Descubre más
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Presentation;
