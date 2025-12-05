import React, { useEffect, useState } from "react";
import { getProductos } from "../../services/productosService";
import '../../styles/css/cards.css';

function ProductosCards() {
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
    <div className="row">
      {productos.map((producto) => (
        <div key={producto.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="small-box bg-info ajuste-cards">
            <div className="inner">
              <h5>{producto.nombre}</h5>
              <p>Precio: ${producto.precio}</p>
              <p>Categoría: {producto.categoria}</p>
              <p>Stock: {producto.stock}</p>
            </div>
            <div className="icon">
              <i className="ion ion-bag" />
            </div>
            <a href="/admin/productos/:id" className="small-box-footer">
              Ver detalles <i className="fas fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductosCards;
