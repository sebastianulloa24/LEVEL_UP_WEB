import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductoById } from "../../../services/productosService";

function ProductoDetalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductoById(id)
      .then((res) => {
        setProducto(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener producto:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando producto...</p>;
  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{producto.nombre}</h3>
      </div>
      <div className="card-body">
        <p><strong>Precio:</strong> {producto.precio}</p>
        <p><strong>Categoría:</strong> {producto.categoria}</p>
        <p><strong>Stock:</strong> {producto.stock}</p>
        <p><strong>Descripción:</strong> {producto.descripcion}</p>
      </div>
    </div>
  );
}

export default ProductoDetalle;
