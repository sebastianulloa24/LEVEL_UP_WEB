import React, { useEffect, useState } from "react";
import { getProductos } from "../../services/productosService";
import { Link } from "react-router-dom";

function ProductosLista() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductos()
      .then((res) => {
        setProductos(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener productos:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Productos Registrados</h3>
      </div>
      <div className="card-body">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Código</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Categoría</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.idProducto}>
                <td>{producto.idProducto}</td>
                <td>{producto.nombreProducto}</td>
                <td>${producto.valorProducto}</td>
                <td>{producto.categoriaProducto}</td>
                <td>
                  <Link
                    to={`/admin/productos/${producto.idProducto}`}
                    className="btn btn-sm btn-info"
                  >
                    Ver detalles
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductosLista;
