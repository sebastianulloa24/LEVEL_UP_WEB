import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/css/registrarse.css'
import { Link } from 'react-router-dom';

function RegistrarseItem() {
  return (
    <div className='register-card'>
      <Card>
        <Card.Body>
          <Card.Title className="text-center mb-4">Crea tu Cuenta</Card.Title>

          <Form className="text-start">
            {/* Campo de Nombre */}
            <Form.Group className="mb-3" controlId="formNOMBRE">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="nombre" placeholder="Nombre" />
            </Form.Group>
            {/* Campo de Apellido Paterno */}
            <Form.Group className="mb-3" controlId="formAPPATERNO">
              <Form.Label>Apellido Paterno</Form.Label>
              <Form.Control type="nombre" placeholder="Apellido Paterno" />
            </Form.Group>
            {/* Campo de Apellido Materno */}
            <Form.Group className="mb-3" controlId="formAPMATERNO">
              <Form.Label>Apellido Materno</Form.Label>
              <Form.Control type="nombre" placeholder="Apellido Materno" />
            </Form.Group>
            {/* Campo de correo electrónico */}
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="email@example.com" />
            </Form.Group>

            {/* Campo de contraseña */}
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            {/* Confirmación de contraseña */}
            <Form.Group className="mb-4" controlId="formConfirmPassword">
              <Form.Label>Confirmar Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>

            {/* Botones alineados lado a lado */}
            <div className="d-flex justify-content-center gap-3 mt-4">
              <Button as={Link} to="/" variant="success">
                Registrarse
              </Button>
              <Button as={Link} to="/" variant="secondary">
                Volver al Home
              </Button>
              
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default RegistrarseItem;

/*
OBSERVACIONES:

1. Se removieron los componentes Row y Col para alinear los campos a la izquierda.
2. Se usa "text-start" en el <Form> para que todo el contenido se justifique a la izquierda.
3. Las etiquetas (labels) están sobre cada input para un diseño más clásico y limpio.
4. Los inputs mantienen su tamaño completo dentro de la card.
5. Los botones siguen centrados y lado a lado gracias a "d-flex justify-content-center gap-3".
*/
