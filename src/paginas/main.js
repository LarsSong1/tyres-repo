import React from 'react'
import Marcas from '../componentes/marcas';
import Carrusel from '../componentes/carrusel';
import Servicio from '../componentes/servicio';



function Main() {
    return (
        <article>
            <Carrusel />
            <Servicio />
            <Marcas/>
        </article>
    )
}

export default Main