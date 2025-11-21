import React from 'react';
import fondo from '../../src/backgrounds/gif-fondo-paisaje.gif'
import RegistrarseItem from '../components/RegistrarseItem';

function Registrarse() {
  return (
    // Usamos un div contenedor para el fondo y centrado
    <div style={{
      backgroundImage: `url(${fondo})`,
      backgroundSize: 'cover',
      minHeight: '100vh',
      paddingTop: '80px'
    }}>

      <RegistrarseItem />
    </div>
  );
}

export default Registrarse;


/*
OBSERVACIONES:

*/
