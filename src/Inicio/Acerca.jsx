import React from 'react';
import { Card } from 'react-bootstrap'; 
import Islas from '../img/Islas.jpeg'; 
import Choby from '../img/Choby.jpeg'; 
import Jose from '../img/Jose.jpeg';
import './Acerca.css';



const registros = [
  {
    id: 1,
    name: 'Islas Cabrera Erick Uriel',
    title: 'Lider',
    img: Islas,
  },
  {
    id: 2,
    name: 'Guzman Sanchez Luiz Enrique',
    title: 'Analista en Base de datos',
    img: 'https://via.placeholder.com/150', 
  },
  {
    id: 3,
    name: 'Carvente Miguel Isai',
    title: 'Desarrollador',
    img: Choby,
  },
  {
    id: 4,
    name: 'Martínez Ramírez Dessire Sheresada',
    title: 'Desarrollador',
    img: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Castañeda Castillo Jose Manuel',
    title: 'Tester',
    img: Jose,
  },
  {
    id: 6,
    name: 'Lopez Alcantara Yaneth Berenice',
    title: 'Tester',
    img: 'https://via.placeholder.com/150',
  },
];

// Componente para mostrar los registros
function Otros() {
  return (
    <>
    
      <section className="mt-4"> {/* Margen superior para esta sección */}
        <div className="d-flex justify-content-center flex-wrap">
          {registros.map((registro) => (
            <Card key={registro.id} className="m-3 custom-card" style={{ width: '10rem', position: 'relative' }}>
              <Card.Img variant="top" src={registro.img} className="img" />
              <div className="details">
                <Card.Body>
                  <Card.Title>{registro.name}</Card.Title>
                  <Card.Text>
                    {registro.title}
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}

export default Otros;
