import React from 'react'
import ProductoItem from './ProductoItem';
import img1 from '../assets/imagenes/ProductosTienda/catan.avif'
import imgCarcassonne from '../assets/imagenes/ProductosTienda/Carcassonne.jpg'
import imgControlador from '../assets/imagenes/ProductosTienda/Controlador Inalámbrico Xbox Series X.jpg'
import imgPlayStation5 from '../assets/imagenes/ProductosTienda/PlayStation_5.jpeg'
import imgPCGamer from '../assets/imagenes/ProductosTienda/PC Gamer ASUS ROG Strix.jpg'
import imgSilla from '../assets/imagenes/ProductosTienda/Silla Gamer Secretlab Titan.webp'
import imgMouse from '../assets/imagenes/ProductosTienda/Mouse Gamer Logitech G502 HERO.jpg'
import imgMousePad from '../assets/imagenes/ProductosTienda/Mousepad Razer.webp'
import imgPolera from '../assets/imagenes/ProductosTienda/Polera Gamer Personalizada.jpg'
import imgAuriculares from '../assets/imagenes/ProductosTienda/Auriculares Gamer HyperX Cloud II.webp'



function ProductosList() {
  const productosData = [
    {
      image: img1,
      idProducto: "JM001",
      nombreProducto: "Catan",
      categoriaProducto: "Juegos de Mesa",
      valorProducto: 29990
    },
    {
      image: imgCarcassonne,
      idProducto: "JM002",
      nombreProducto: "Carcassonne",
      categoriaProducto: "Juegos de Mesa",
      valorProducto: 24990
    },
    {
      image: imgControlador,
      idProducto: "AC001",
      nombreProducto: "Controlador Inalámbrico Xbox Series X",
      categoriaProducto: "Accesorios",
      valorProducto: 59990
    },
    {
      image: imgAuriculares,
      idProducto: "AC002",
      nombreProducto: "Auriculares Gamer HyperX Cloud II",
      categoriaProducto: "Accesorios",
      valorProducto: 79990
    },
    {
      image: imgPlayStation5,
      idProducto: "CO001",
      nombreProducto: "PlayStation 5",
      categoriaProducto: "Consolas",
      valorProducto: 549990
    },
    {
      image: imgPCGamer,
      idProducto: "CG001",
      nombreProducto: "PC Gamer ASUS ROG Strix",
      categoriaProducto: "Computadores Gamers",
      valorProducto: 1299990
    },
    {
      image: imgSilla,
      idProducto: "SG001",
      nombreProducto: "Silla Gamer Secretlab Titan",
      categoriaProducto: "Sillas Gamers",
      valorProducto: 349990
    },
    {
      image: imgMouse,
      idProducto: "MS001",
      nombreProducto: "Mouse Gamer Logitech G502 HERO",
      categoriaProducto: "Mouse",
      valorProducto: 49990
    },
    {
      image: imgMousePad,
      idProducto: "MP001",
      nombreProducto: "Mousepad Razer Goliathus Extended Chroma",
      categoriaProducto: "Mousepad",
      valorProducto: 29990
    },
    {
      image: imgPolera,
      idProducto: "PP001",
      nombreProducto: "Polera Gamer Personalizada 'Level-Up'",
      categoriaProducto: "Poleras Personalizadas",
      valorProducto: 14990
    }
  ];

  return (
    <div className="cards-container">
      <div className="row justify-content-center">
        {productosData.map((producto) => (
          <div key={producto.id} className="col-lg-4 col-md-6 mb-4">
            <ProductoItem {...producto} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductosList;

/*
Observaciones de ProductosList

1.-Importaciones:
Trae React, el componente ProductoItem y las imágenes de los productos.

2.-Datos de productos (productosData):
Arreglo de objetos con la informacón de cada producto: imagen, id, nombre, categoría y precio.
Sirve como fuente de datos para generar las tarjetas dinámicamente.

3.-Renderizado del componente:
Se crea un contenedor general con filas (row) y se centra con Bootstrap.
Se recorre productosData con .map() para generar un ProductoItem por producto.
Cada ProductoItem recibe sus datos mediante props ({...producto}).
Cada tarjeta tiene un key único para que React gestione correctamente el renderizado.
Clases de Bootstrap (col-lg-4, col-md-6, mb-4) hacen que las tarjetas sean responsivas y estén separadas.

4.-Exportación:
Se exporta como componente por defecto para poder usarlo en otras partes de la app.

5.-Cómo funciona todo junto:
Los datos se mapean en componentes visuales (ProductoItem) que muestran la imagen, nombre, categoría y precio.
Bootstrap organiza las tarjetas en filas y columnas adaptables a distintos tamaños de pantalla.
React gestiona la actualización eficiente del DOM usando key.



actúa como un ciclo for en JavaScript, pero usando el método .map(). Te lo explico de manera simple:
productosData.map((producto) => ( ... )) recorre cada elemento del arreglo productosData.
Por cada producto, React genera un bloque de JSX, en este caso un div con un ProductoItem.

{productosData.map((producto) => (
          <div key={producto.id} className="col-lg-4 col-md-6 mb-4">
            <ProductoItem {...producto} />
          </div>
Es como hacer un for que dice:

for (let producto of productosData) {
   // crear un div con ProductoItem usando los datos de producto
}
*/