import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductoById } from "../../../services/productosService";

function ProductoDetalleAdmin() {
  // Usamos el parámetro de la URL que definimos como :idProducto
  const { idProducto } = useParams(); 
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 1. Mostrar qué ID estamos buscando
    console.log(`Buscando producto con ID: ${idProducto}`);

    if (!idProducto) {
        setError("Error: El ID del producto no está en la URL.");
        setLoading(false);
        return;
    }
    
    getProductoById(idProducto) 
      .then((res) => {
        setProducto(res.data);
        setLoading(false);
        // 2. Mostrar los datos recibidos de la API
        console.log("Datos del producto recibidos:", res.data);
      })
      .catch((err) => {
        console.error("Error al obtener producto:", err);
        setError("No se pudo cargar el producto. Verifique si JSON Server está activo y si la clave de ID en sus datos es 'idProducto'.");
        setLoading(false);
      });
  }, [idProducto]);

  if (loading) return <p className="text-gray-500 italic">Cargando producto...</p>;
  if (error) return <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg"><p className="font-bold">Error:</p><p>{error}</p></div>;
  if (!producto) return <p className="text-gray-500">Producto no encontrado</p>;

  return (
    <div className="card shadow-lg p-6 bg-white rounded-xl">
      <div className="card-header border-b pb-4 mb-4">
        <h3 className="text-3xl font-bold text-gray-800">{producto.nombreProducto}</h3>
      </div>
      <div className="card-body space-y-3">
        {/* CORRECCIÓN: Usamos producto.idProducto, que es la clave real en tus datos */}
        <p className="text-lg"><strong className="font-semibold">Código:</strong> {producto.idProducto}</p> 
        <p className="text-lg"><strong className="font-semibold">Nombre:</strong> {producto.nombreProducto}</p>
        <p className="text-lg"><strong className="font-semibold">Precio:</strong> ${producto.valorProducto}</p>
        <p className="text-lg"><strong className="font-semibold">Categoría:</strong> {producto.categoriaProducto}</p>

        <Link 
          to="/admin/productos/lista" 
          className="inline-block px-6 py-2 mt-6 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md"
        >
          Volver a la lista
        </Link>
      </div>
      <div className="mt-6 pt-4 border-t text-sm text-gray-500">
        <p>Nota: La clave 'idProducto' se utiliza aquí para asegurar la compatibilidad con los datos de tu API mockeada.</p>
      </div>
    </div>
  );
}

export default ProductoDetalleAdmin;