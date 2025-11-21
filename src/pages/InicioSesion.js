import React from 'react'
//import de imagen fondo
import fondo from '../backgrounds/gif-fondo-paisaje.gif'
import InicioSesionItem from '../components/InicioSesionItem'

function InicioSesion() {
    return (
        <div style={{
            backgroundImage: `url(${fondo})`,
            backgroundSize: 'cover',
            minHeight: '100vh',
            paddingTop: '80px'
        }}>
            <div>
                <InicioSesionItem/>
            </div>
        </div>
    )
}

export default InicioSesion