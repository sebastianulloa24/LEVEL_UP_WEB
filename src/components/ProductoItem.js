import React from 'react'
import Card from 'react-bootstrap/Card';
import '../styles/css/productos.css';


function ProductoItem({image,idProducto, nombreProducto, categoriaProducto, valorProducto}) {
  return (
    <Card className='card img'>
      <Card.Body>
        <Card.Img variant="top" src={image} />
        <Card.Title>codigo:{idProducto}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{nombreProducto}</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">{categoriaProducto}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">${valorProducto.toLocaleString('es-CL')}</Card.Subtitle>
        <Card.Link href="#">Comprar</Card.Link>
        <Card.Link href="/carritocompra">Agregar al Carrito</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default ProductoItem


/*
muestra el valor de valorProducto formateado según el estilo chileno (con puntos de miles).
Ejemplo: si valorProducto = 59990, se verá como 59.990 en la tabla.
En resumen:

${...} → inserta el valor en el HTML.

.toLocaleString('es-CL') → da formato numérico local (Chile).

*/