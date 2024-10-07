import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './productos.css';

function Busqueda() {
    const [showSearch, setShowSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');  // Estado para el término de búsqueda
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedCategories, setSelectedCategories] = useState([]);  // Estado para las categorías seleccionadas

    const productos = [
        {
            id: 1,
            nombre: 'Lector de barras GM65',
            categoria: 'Asistencia',
            descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos incidunt tenetur, ut voluptas, autem expedita porro vitae vel facere perferendis ipsum maxime quaerat tempore voluptate illum dolorem cupiditate. Veritatis, repudiandae.',
            img: 'https://m.media-amazon.com/images/I/51Q9e2ERABL.jpg',
        },
        {
            id: 2,
            nombre: 'Sensor De Temperatura Y Humedad DHT22',
            categoria: 'Ambiental',
            descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos incidunt tenetur, ut voluptas, autem expedita porro vitae vel facere perferendis ipsum maxime quaerat tempore voluptate illum dolorem cupiditate. Veritatis, repudiandae.',
            img: 'https://http2.mlstatic.com/D_NQ_NP_2X_683016-MLM32008041177_082019-F.webp',
        },
        {
            id: 3,
            nombre: 'ESP32-CAM',
            categoria: 'Asistencia',
            descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos incidunt tenetur, ut voluptas, autem expedita porro vitae vel facere perferendis ipsum maxime quaerat tempore voluptate illum dolorem cupiditate. Veritatis, repudiandae.',
            img: 'https://m.media-amazon.com/images/I/71+DwdZbPML._AC_SX679_.jpg',
        },
        {
            id: 4,
            nombre: 'Buzzer',
            categoria: 'Ambiental',
            descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos incidunt tenetur, ut voluptas, autem expedita porro vitae vel facere perferendis ipsum maxime quaerat tempore voluptate illum dolorem cupiditate. Veritatis, repudiandae.',
            img: 'https://www.steren.com.mx/media/catalog/product/cache/bb0cad18a6adb5d17b0efd58f4201a2f/image/20313c1b1/buzzer-pasivo.jpg',
        },
        {
            id: 5,
            nombre: 'ESP32-WROOM-32 Dev Kit V1',
            categoria: 'Control de dispositivos',
            descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos incidunt tenetur, ut voluptas, autem expedita porro vitae vel facere perferendis ipsum maxime quaerat tempore voluptate illum dolorem cupiditate. Veritatis, repudiandae.',
            img: 'https://m.media-amazon.com/images/I/61lUJLwpCZL._AC_SX679_.jpg',
        }
    ];

    const handleSearchClick = () => {
        setShowSearch(!showSearch);
    };

    const handleCardClick = (id) => {
        if (selectedProduct === id) {
            setSelectedProduct(null);
        } else {
            setSelectedProduct(id);
        }
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value); 
    };

    
    const handleCategoryChange = (e) => {
        const { id, checked } = e.target;
        if (checked) {
            setSelectedCategories([...selectedCategories, id]);  
        } else {
            setSelectedCategories(selectedCategories.filter(cat => cat !== id));  
        }
    };


    const filteredProductos = productos.filter(producto => {
        const matchesSearch = producto.nombre.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(producto.categoria);
        return matchesSearch && matchesCategory;
    });

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
                                value={searchTerm}
                                onChange={handleSearchChange}  
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
                                label="Ambiental"
                                id="Ambiental"
                                onChange={handleCategoryChange}  
                            />
                        </Col>
                        <Col xs="auto">
                            <Form.Check
                                type="checkbox"
                                label="Asistencia"
                                id="Asistencia"
                                onChange={handleCategoryChange}  
                            />
                        </Col>
                        <Col xs="auto">
                            <Form.Check
                                type="checkbox"
                                label="Control de dispositivos"
                                id="Control de dispositivos"
                                onChange={handleCategoryChange}  
                            />
                        </Col>
                    </Row>
                </Form>
            </div>

            <div className="productos d-flex flex-wrap justify-content-center">
                {filteredProductos.map((producto) => (
                    <Card 
                        className={`product-card ${selectedProduct === producto.id ? 'show-info' : ''}`} 
                        key={producto.id} 
                        onClick={() => handleCardClick(producto.id)}
                    >
                        <Card.Img variant="top" src={producto.img} className="product-img" />
                        <div className="product-info">
                            <Card.Body>
                                <Card.Title>{producto.nombre}</Card.Title>
                                <Card.Text>{producto.descripcion}</Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Busqueda;
