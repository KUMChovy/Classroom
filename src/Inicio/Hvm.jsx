import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import './Descripcion.css'; 

function Hvm() {
  return (
    <div style={{ margin: '20px' }}>
      <h2 className="text-center mb-4 title">Cody Go: Historia, Visión y Misión</h2>
      <Carousel interval={4000} fade>
        <Carousel.Item>
          <div className="carousel-content">
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2022/05/19/00/01/technology-7206358_1280.jpg"
              alt="Historia"
            />
            <Carousel.Caption>
              <h3 className="fade-in">Historia</h3>
              <p className="fade-in delay content">
                Cody Go es un proyecto creado por seis estudiantes apasionados por la tecnología y la educación, 
                con el objetivo de desarrollar soluciones innovadoras que optimicen la experiencia educativa 
                mediante la automatización de tareas.
              </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-content">
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2022/05/19/00/01/technology-7206358_1280.jpg"
              alt="Visión"
            />
            <Carousel.Caption>
              <h3 className="fade-in">Visión</h3>
              <p className="fade-in delay content">
                Convertirse en un referente en soluciones tecnológicas que transformen la educación 
                tradicional en un sistema más eficiente e interactivo, empoderando a instituciones educativas.
              </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-content">
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2022/05/19/00/01/technology-7206358_1280.jpg"
              alt="Misión"
            />
            <Carousel.Caption>
              <h3 className="fade-in">Misión</h3>
              <p className="fade-in delay content">
                Desarrollar herramientas que faciliten la enseñanza y gestión educativa, mejorando 
                la interacción entre docentes y estudiantes y optimizando la administración de recursos.
              </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Hvm;
