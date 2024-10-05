import Badge from 'react-bootstrap/Badge';
import React from 'react';
import { Container } from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';


export default function Inicio(){
    return (
        <Container>
            <h1>
                Classroom Security yo estuve aqui <Badge bg="secondary">New</Badge>
            </h1>
        </Container>
    );
};
