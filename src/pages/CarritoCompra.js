import React from 'react'
import fondo from '../backgrounds/gif-fondo-paisaje.gif'
import CarritoCompraList from '../components/CarritoCompraList'



function CarritoCompra() {
  return (

    //Aqui se agrega un style en bruto para el fondo de pantalla fijo
    <div style={{
      backgroundImage: `url(${fondo})`,
      backgroundSize: 'cover',
      minHeight: '100vh',
      paddingTop: '80px'
    }}>

    <div className='container'>
      <div className='row col-lg-12'>
        <CarritoCompraList/>
      </div>
    </div>
    
    </div>
  )
}

export default CarritoCompra