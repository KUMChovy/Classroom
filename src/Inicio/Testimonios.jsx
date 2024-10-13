import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Descripcion.css'; 

const comments = [
  {
    name: 'Juan Pérez',
    text: '¡Me encanta este producto! Definitivamente lo recomendaría.',
    img: 'https://via.placeholder.com/50',
  },
  {
    name: 'María Gómez',
    text: 'Excelente servicio y atención al cliente.',
    img: 'https://via.placeholder.com/50',
  },
  {
    name: 'Carlos Fernández',
    text: 'La calidad es excepcional, volveré a comprar.',
    img: 'https://via.placeholder.com/50',
  },
];

const Testimonio = ({ darkMode }) => {
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Carousel indicators={false}>
        {comments.map((comment, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex align-items-center p-3 comentarios">
              <img
                src={comment.img}
                alt={comment.name}
                className="rounded-circle me-3"
                style={{ width: '50px', height: '50px', margin: '0 0 0 10%' }}
              />
              <div className='Contenido'>
                <h5>{comment.name}</h5>
                <p>{comment.text}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonio;
