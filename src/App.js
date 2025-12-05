import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// STYLES
import './styles/css/home.css';
import './styles/css/footer.css';
import './App.css';

// PAGES PÚBLICAS
import Home from './pages/Home';
import Registrarse from './pages/Registrarse';
import Iniciosesion from './pages/InicioSesion';
import CarrtitoCompra from './pages/CarritoCompra';
import Perfil from './pages/Perfil';
import Producto from "./pages/Producto";
import ProductoDetalle from "./Dashboard/pages/Productos/ProductoDetalle";

// COMPONENTES
import Footer from "./components/Footer";

// ADMIN
import HomeAdmin from "./Dashboard/pages/HomeAdmin";
import ProductosLista from "./Dashboard/components/ProductosLista"; 
// FIX: Corregida la ruta de importación para que sea consistente con el nombre del componente
import ProductoDetalleAdmin from "./Dashboard/pages/Productos/ProductoDetalleAdmin"; 

// LAYOUTS
import PublicLayout from "./Layouts/PublicLayout";
import AdminLayout from "./Layouts/AdminLayout";

function App() {
  return (
    <div>
      <Router>
        <Routes>

          {/* RUTAS PÚBLICAS */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/registrarse" element={<Registrarse />} />
            <Route path="/iniciosesion" element={<Iniciosesion />} />
            <Route path="/carritoCompra" element={<CarrtitoCompra />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/productos" element={<Producto />} />
            <Route path="/productos/:idProducto" element={<ProductoDetalle />} />
          </Route>

          {/* RUTAS ADMIN */}
          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<HomeAdmin />} />
            <Route path="/admin/productos/lista" element={<ProductosLista />} />
            {/* CORREGIDO: Usamos :idProducto para ser consistentes con el componente */}
            <Route path="/admin/productos/:idProducto" element={<ProductoDetalleAdmin />} />
          </Route>

        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;