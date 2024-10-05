import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './Descripcion.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';


const Inicio = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore); 
  };

  return (
    <body>
      <div className='fondo'>
        <Container className="text-start" style={{ maxWidth: '70%', margin: 'auto', marginTop: '50px' }}>
          <h1 className="text-primary">Classroom Security</h1>
          <p className="text-justify">
            Este sitio web está diseñado para automatizar las aulas, facilitando el control de ventiladores y proyectores.
          </p>
          <button className="outline-light" onClick={handleToggle}>
            {showMore ? 'Ver menos' : 'Ver más'}
          </button>

          {showMore && (
            <div className="mt-3">
              <p className="no2 text-justify ">
                También optimiza el pase de lista digitalmente y utiliza sensores inteligentes para adaptar las condiciones del aula según la cantidad de personas o el clima, mejorando la eficiencia y comodidad para docentes y estudiantes.
              </p>
            </div>
          )}
        </Container>
      </div>
    </body>
  );
};

export default Inicio; 
