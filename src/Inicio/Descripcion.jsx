import React, { useState } from 'react';
import { Container, OverlayTrigger, Popover } from 'react-bootstrap';
import './Descripcion.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Testimonio from './Testimonios';
import Nav from '../Componentes/Nav'
import Acerca from './Acerca'
import Busqueda from './Busqueda';

const Inicio = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore); 
  };

  return (
  
    <body>
      <Nav />
      <section id="Descripcion">
  <div className='fondo'>
    
    <Container className="text-start" style={{ maxWidth: '95%', margin: 'auto', marginTop: '0' }}>
      <br></br> 
      <h1 className="text-primary">Classroom security</h1>
      <p className="text-justify">
        Este sitio web automatiza el control de ventiladores y proyectores en las aulas.
      </p>

      <OverlayTrigger
        trigger="hover"
        placement="right"
        overlay={
          <Popover id="popover-basic">
            <Popover.Header as="h3">Más Info</Popover.Header>
            <Popover.Body className='text'>
              Optimiza el pase de lista y utiliza sensores para adaptar las condiciones del aula, mejorando la eficiencia y comodidad.
            </Popover.Body>
          </Popover>
        }
      >
        <span className="text-primary" style={{ cursor: 'pointer' }}>
          Ver más info
        </span>
      </OverlayTrigger>

    </Container>
  </div>
</section>

        <section id='busqueda'>
          <Busqueda />
        </section>

      <section id='Comentarios'>
          <Testimonio />
      </section>




      <section id='Acerca-de'>
          <Acerca />
      </section>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>

    </body>
  );
};

export default Inicio; 
