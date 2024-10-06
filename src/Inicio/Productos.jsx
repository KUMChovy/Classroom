import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './productos.css';

function Busqueda() {
    const [showSearch, setShowSearch] = useState(false);
    const [showImage, setShowImage] = useState(true);

    const productos= [
        {
            id: 1,
            nombre: 'Lector de barras GM65',
            categoria: 'Ambiental',
            descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos incidunt tenetur, ut voluptas, autem expedita porro vitae vel facere perferendis ipsum maxime quaerat tempore voluptate illum dolorem cupiditate. Veritatis, repudiandae.',
            img: 'https://m.media-amazon.com/images/I/51Q9e2ERABL.jpg',
        },
        {
            id: 2,
            nombre: 'Sensor humedad YL-69',
            categoria: 'Ambiental',
            descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos incidunt tenetur, ut voluptas, autem expedita porro vitae vel facere perferendis ipsum maxime quaerat tempore voluptate illum dolorem cupiditate. Veritatis, repudiandae.',
        },
        {
            id: 3,
            nombre: 'Sensor humedad YL-69',
            categoria: 'Ambiental',
            descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos incidunt tenetur, ut voluptas, autem expedita porro vitae vel facere perferendis ipsum maxime quaerat tempore voluptate illum dolorem cupiditate. Veritatis, repudiandae.',
        },
        {
            id: 4,
            nombre: 'Sensor humedad YL-69',
            categoria: 'Ambiental',
            descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos incidunt tenetur, ut voluptas, autem expedita porro vitae vel facere perferendis ipsum maxime quaerat tempore voluptate illum dolorem cupiditate. Veritatis, repudiandae.',
        }
    ];

    const handleSearchClick = () => {
        setShowSearch(!showSearch);
    };

    const handleCardClick = () => {
        setShowImage(false); // Oculta la imagen al hacer clic en la card
    };
    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            <Form inline className="d-flex mb-3">
                <Row className="align-items-center">
                    <Col xs="auto">
                        {showSearch && (
                            <Form.Control
                                type="text"
                                placeholder="Buscar"
                                className="mr-sm-2 caja"
                            />
                        )}
                    </Col>
                    <Col xs="auto">
                        <Button className='boton' type="button" onClick={handleSearchClick}>
                            <i className="fas fa-search"></i>
                        </Button>
                    </Col>
                </Row>
            </Form>

            <div className="checkbox-section">
                <h5 className="text-center categorias-title">Categorías</h5>
                <Form>
                    <Row className="justify-content-center opciones">
                        <Col xs="auto">
                            <Form.Check
                                type="checkbox"
                                label="Ambientales"
                                id="ambientales"
                            />
                        </Col>
                        <Col xs="auto">
                            <Form.Check
                                type="checkbox"
                                label="Asistencia"
                                id="asistencia"
                            />
                        </Col>
                        <Col xs="auto">
                            <Form.Check
                                type="checkbox"
                                label="Control de dispositivos"
                                id="control-dispositivos"
                            />
                        </Col>
                    </Row>
                </Form>
            </div>

            <div>
                
            </div>
        </div>
    );
}

export default Busqueda;
