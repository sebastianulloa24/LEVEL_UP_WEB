import React from 'react'
import fondo from '../backgrounds/fondo-nintendo.jpg'
import ProductosList from '../components/ProductosList'



export default function Producto() {
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
                    
                    <ProductosList />
                </div>
            </div>

        </div>
    )
}
