import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import './Valores.css';

const valores = [
  {
    id: 1,
    title: 'Innovación',
    img: 'https://media.istockphoto.com/id/1531567283/es/vector/conceptos-de-soluciones-innovatios-sobre-fondo-blanco.jpg?s=612x612&w=is&k=20&c=7coyDSFA7Ryd8fM84aUtenWjN_9HCWMKD2-s1Bn7Pjw=',
  },
  {
    id: 2,
    title: 'Colaboración',
    img: 'https://cdn.pixabay.com/photo/2015/11/03/09/12/puzzle-1020221_1280.jpg',
  },
  {
    id: 3,
    title: 'Calidad',
    img: 'https://cdn.pixabay.com/photo/2020/02/18/11/02/rating-4859132_640.png',
  },
  {
    id: 4,
    title: 'Simplicidad',
    img: 'https://cdn.pixabay.com/photo/2024/06/18/13/21/hands-8838044_640.jpg',
  },
  {
    id: 5,
    title: 'Responsabilidad',
    img: 'https://cdn.pixabay.com/photo/2017/01/19/00/33/insurance-1991274_640.jpg',
  },
  {
    id: 6,
    title: 'Sostenibilidad',
    img: 'https://cdn.pixabay.com/photo/2017/04/29/02/38/cloud-2269890_640.png',
  },
];

const Valores = () => {
  const [focusedCard, setFocusedCard] = useState(null);

  return (
    <Container className="valores-nueva-container">
      <h2 className="titulo-valores">Valores de la Empresa</h2>
      <div className="valores-nueva-row">
        {valores.map((valor) => (
          <Card
            key={valor.id}
            className={`tarjeta-personalizada ${focusedCard === valor.id ? 'focused' : ''}`}
            onMouseEnter={() => setFocusedCard(valor.id)}
            onMouseLeave={() => setFocusedCard(null)}
            style={{ width: '18rem' }}
          >
            <Card.Img variant="top" src={valor.img} />
            <Card.Body>
              <Card.Title className="titulo-tarjeta">{valor.title}</Card.Title>
              <Card.Text className="texto-tarjeta">{valor.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Valores;
