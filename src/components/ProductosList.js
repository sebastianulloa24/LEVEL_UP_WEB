import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProductos } from '../services/productosService';

//importacion de imagenes
import img1 from '../assets/imagenes/ProductosTienda/catan.avif';
import imgCarcassonne from '../assets/imagenes/ProductosTienda/Carcassonne.jpg';
import imgControlador from '../assets/imagenes/ProductosTienda/Controlador Inalámbrico Xbox Series X.jpg';
import imgAuriculares from '../assets/imagenes/ProductosTienda/Auriculares Gamer HyperX Cloud II.webp';
import imgPlayStation5 from '../assets/imagenes/ProductosTienda/PlayStation_5.jpeg';
import imgPCGamer from '../assets/imagenes/ProductosTienda/PC Gamer ASUS ROG Strix.jpg';
import imgSilla from '../assets/imagenes/ProductosTienda/Silla Gamer Secretlab Titan.webp';
import imgMouse from '../assets/imagenes/ProductosTienda/Mouse Gamer Logitech G502 HERO.jpg';
import imgMousePad from '../assets/imagenes/ProductosTienda/Mousepad Razer.webp';
import imgPolera from '../assets/imagenes/ProductosTienda/Polera Gamer Personalizada.jpg';


function ProductosList() {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();

  // Mapeo de nombres a imágenes
  const imagenes = {
    img1,
    imgCarcassonne,
    imgControlador,
    imgAuriculares,
    imgPlayStation5,
    imgPCGamer,
    imgSilla,
    imgMouse,
    imgMousePad,
    imgPolera
  };

  useEffect(() => {
    getProductos()
      .then(res => {
        setProductos(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Lista de Productos</h2>

      <div className="row justify-content-center">
        {Array.isArray(productos) && productos.map((p) => (
          <div key={p.idProducto} className="col-lg-4 col-md-6 mb-4">
            <div className="card p-3 text-center">

              <img
                src={imagenes[p.image]}  
                alt={p.nombreProducto}
                style={{ width: "100%", height: "250px", objectFit: "cover" }}
              />

              <h4 className="mt-3">{p.nombreProducto}</h4>
              <p className="text-muted">{p.categoriaProducto}</p>
              <p className="fw-bold">${p.valorProducto}</p>

              <button
                className="btn btn-primary mt-2"
                onClick={() => navigate(`/productos/${p.idProducto}`)}
              >
                Ver detalle
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductosList;