import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles/css/iniciosesion.css';

function InicioSesionItem() {
    return (
        <div className='ajuste-card'>
            <Card>
                <Card.Img
                    variant="top"
                    src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
                />
                <Card.Body>
                    <Card.Title className="text-center mb-4">Iniciar Sesión</Card.Title>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese su correo" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Ingrese su contraseña" />
                        </Form.Group>

                        <div className="d-grid">
                            <Button variant="primary" type="submit">
                                Entrar
                            </Button>
                        </div>

                        <div className="text-center mt-3"></div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default InicioSesionItem;


/*
https://www.flaticon.com/ de aqui sacamos el icono

Observaciones:

1. import React from 'react'
   - Importa React, necesario para crear componentes funcionales.

2. import Card from 'react-bootstrap/Card'
   - Trae el componente Card de React Bootstrap para crear tarjetas con estilo predefinido.

3. import Form from 'react-bootstrap/Form'
   - Trae el componente Form y sus subcomponentes para manejar formularios de manera estilizada.

4. import Button from 'react-bootstrap/Button'
   - Trae el componente Button de React Bootstrap para usar botones con estilo consistente.

5. import '../../styles/css/iniciosesion.css'
   - Importa tu CSS personalizado para ajustar el diseño, centrar la Card y dar estilos adicionales.

6. <Card className='ajuste-card'>
   - Crea una tarjeta que contendrá todo el formulario de inicio de sesión.
   - La clase 'ajuste-card' se usa para aplicar estilos CSS propios.

7. <Card.Img variant="top" src="..."/>
   - Muestra un icono o imagen en la parte superior de la Card.
   - En este caso, un icono de usuario desde Flaticon.

8. <Card.Body>
   - Contenedor para el contenido principal del Card (título y formulario).

9. <Card.Title className="text-center mb-4">
   - Título de la Card, centrado y con margen inferior.

10. <Form>
    - Contenedor del formulario de inicio de sesión.

11. <Form.Group className="mb-3" controlId="formBasicEmail">
    - Agrupa etiqueta y campo de entrada para el email.
    - 'mb-3' agrega margen inferior.

12. <Form.Label>Correo electrónico</Form.Label>
    - Etiqueta visible para el campo de correo.

13. <Form.Control type="email" placeholder="Ingrese su correo" />
    - Campo de entrada tipo email, con placeholder.

14. <Form.Group className="mb-3" controlId="formBasicPassword">
    - Agrupa etiqueta y campo de entrada para la contraseña.

15. <Form.Control type="password" placeholder="Ingrese su contraseña" />
    - Campo de entrada tipo contraseña, oculta los caracteres.

16. <div className="d-grid">
    - Contenedor que hace que el botón ocupe todo el ancho de la Card.

17. <Button variant="primary" type="submit">Entrar</Button>
    - Botón de envío del formulario con estilo Bootstrap 'primary'.

18. <div className="text-center mt-3"></div>
    - Espacio opcional para links o mensajes debajo del botón.

19. export default InicioSesionItem;
    - Exporta el componente para poder usarlo en otras partes de la app.
*/
