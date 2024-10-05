import React, { useState } from 'react';
import { Button, Modal, Form, Carousel } from 'react-bootstrap';

const MasComentarios = () => {
  const [comments, setComments] = useState([
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
  ]);

  // Estado para controlar la visibilidad del modal
  const [showModal, setShowModal] = useState(false);

  // Estado para manejar los valores del formulario
  const [newComment, setNewComment] = useState({ name: '', text: '', img: 'https://via.placeholder.com/50' });

  // Función para abrir el modal
  const handleShow = () => setShowModal(true);
  
  // Función para cerrar el modal
  const handleClose = () => setShowModal(false);

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Añadir el nuevo comentario a la lista de MasComentarios
    setComments([...comments, newComment]);

    // Limpiar el formulario
    setNewComment({ name: '', text: '', img: 'https://via.placeholder.com/50' });

    // Cerrar el modal
    handleClose();
  };

  // Función para manejar los cambios en el formulario
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewComment((prevComment) => ({ ...prevComment, [name]: value }));
  };

  return (
    <div>
      {/* Carousel para mostrar los MasComentarios */}
      <Carousel>
        {comments.map((comment, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex align-items-center p-3">
              <img
                src={comment.img}
                alt={comment.name}
                className="rounded-circle me-3"
                style={{ width: '50px', height: '50px', margin: '0% 0% 0% 10%' }}
              />
              <div className='Contenido' style={{ color: '#b3b6b7 ' }}>
                <h5>{comment.name}</h5>
                <p>{comment.text}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Botón para abrir el modal */}
      <Button variant="primary" onClick={handleShow} style={{ marginTop: '20px' }}>
        Añadir Comentario
      </Button>

      {/* Modal con el formulario */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Añadir un Comentario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Ingresa tu nombre"
                value={newComment.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formComment">
              <Form.Label>Comentario</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="text"
                placeholder="Escribe tu comentario"
                value={newComment.text}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MasComentarios;
