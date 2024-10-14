import React, { useState, useEffect } from 'react';
import { Container, OverlayTrigger, Popover } from 'react-bootstrap';
import './Descripcion.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Testimonio from './Testimonios';
import Nav from '../Componentes/Nav';
import Busqueda from './Productos';
import Hvm from '../Inicio/Hvm';
import Valores from './Valores';
import Footer from '../Componentes/Footer';

const Inicio = () => {
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

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Nav toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      <section id="Descripcion">
        <div className="fondo">
          <Container className="text-start" style={{ maxWidth: '95%', margin: 'auto', marginTop: '0' }}>
            <br />
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
                  <Popover.Body className="text">
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

      <section id="Comentarios">
        <Testimonio darkMode={darkMode}/> {/* Pasamos darkMode al componente Testimonio */}
      </section>

      <section id="Busqueda">
        <Busqueda  darkMode={darkMode}/>
      </section>

      <section id="Acerca-de">
        <Hvm  darkMode={darkMode}/>
      </section>

      <section id="Acerc">
        <Valores  darkMode={darkMode} />
      </section>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Inicio;
