import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './productos.css';

function Busqueda() {
    const [showSearch, setShowSearch] = useState(false);

    // Función para manejar el clic en el botón de la lupa
    const handleSearchClick = () => {
        setShowSearch(!showSearch); // Alterna el estado de visibilidad del campo de búsqueda
    };

    return (
        <div className="d-flex justify-content-center align-items-center">
            <Form inline className="d-flex">
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
                        <Button type="button" onClick={handleSearchClick}>
                            <i className="fas fa-search"></i>
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default Busqueda;
