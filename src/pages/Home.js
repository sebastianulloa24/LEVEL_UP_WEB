import React from 'react';
import BannerInicio from '../components/Banner';
import fondo from '../../src/backgrounds/fondo-nintendo.jpg';
import CardsList from '../components/CardsList';
import NavBarPublic from "../components/NavBar";

function Home() {
  return (

    //Aqui se agrega un style en bruto para el fondo de pantalla fijo
    <div style={{
      backgroundImage: `url(${fondo})`,
      backgroundSize: 'cover',
      minHeight: '100vh',
      paddingTop: '80px'
    }}>

      <NavBarPublic />
      <div className='col-lg-12'>
        <BannerInicio />
      </div>
      <div className='row'>
        <div className='col-lg-12'>
          <CardsList/>
        </div>
      </div>
      {/* <Link to="/registrarse" className="btn btn-success btn-lg mt-3">
        ¡Regístrate Ahora!
      </Link> */}
    </div>



  )
}

export default Home;