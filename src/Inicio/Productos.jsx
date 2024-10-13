import React from "react";
import './Descripcion.css'; 
import panel from "../img/dasboard.webp";
import esp32 from "../img/espe32.webp";
import asistencia from "../img/asistencia.webp";
import reporte from "../img/reporte.webp";

const Productos = () => {
  const productos = [
    {
      id: 1,
      nombre: "Panel de control",
      descripcion:
        "Ofrecemos un Panel de control limpio y donde se puede visualizar toda la información como (la cantidad de estudiantes, el tiempo de la clase, temperatura, etc.) del aula de clases, así como le permitirá al docente interactuar con las distintas funciones que tiene el sistema.",
      img: panel,
    },
    {
      id: 2,
      nombre: "Control de dispositivos",
      descripcion:
        "El sistema permitirá controlar dispositivos como el proyector y ventiladores a través de distintos procesos del panel de control.",
      img: esp32,
    },
    {
      id: 3,
      nombre: "Toma de asistencia Automatizada",
      descripcion:
        "Se ofrece un pase de lista totalmente automatizado a través de una credencial de estudiante. El profesor podrá visualizar en el panel de control los estudiantes que ya están dentro de clase y los que no.",
      img: asistencia,
    },
    {
      id: 4,
      nombre: "Reportes de asistencia",
      descripcion:
        "Con el pase de lista automatizado se da la oportunidad al docente de generar reportes personalizados de todas las asistencias de la clase en cualquier momento del período.",
      img: reporte,
    },
  ];

  return (
    <div>
      <h2 className="titulo">Servicios</h2>
      <section className="conteudo__geral">
        <div className="conteudo__cartoes-grid">
          {productos.map((producto) => (
            <a className="elemento__cartao" href="#" key={producto.id}>
              <div
                className="elemento__cartao--fundo"
                style={{
                  backgroundImage: `url(${producto.img})`,
                }}
              ></div>
              <div className="elemento__cartao--conteudo">
              <p class="elemento__cartao--texto-categoria">Servicio</p>
                <h3 className="elemento__cartao--texto-titulo">
                  {producto.nombre}
                </h3>
                <p className="elemento__cartao--descripcion">
                  {producto.descripcion}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Productos;
