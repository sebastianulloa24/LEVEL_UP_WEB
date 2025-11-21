import React from 'react';

// 1. Recibe las props como un objeto y desestructúralas
function CarritoCompraItem({ idProducto, nombreProducto, categoriaProducto, valorProducto,cantidadProducto }) {
  return (
    // 2. El componente solo retorna la fila
    <tr>
      {/* 3. se usa <td> (table data) para las celdas y llaves {} para los valores */}
      <td>{idProducto}</td>
      <td>{nombreProducto}</td>
      <td>{categoriaProducto}</td>
      <td>{cantidadProducto}</td>

      {/* 4. se puede formatear el valor */}
      <td>${valorProducto.toLocaleString('es-CL')}</td>
    </tr>
  );
}

export default CarritoCompraItem;

/*
muestra el valor de valorProducto formateado según el estilo chileno (con puntos de miles).
Ejemplo: si valorProducto = 59990, se verá como 59.990 en la tabla.
En resumen:

${...} → inserta el valor en el HTML.

.toLocaleString('es-CL') → da formato numérico local (Chile).

*/