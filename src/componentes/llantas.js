import React from 'react'
import Estructurap from './estructura'
import llanta1 from '../img/llantas.svg'
import llanta2 from '../img/llantas 2.svg'
import ProductosLLantas from './llantas-estructura';



function Llantas() {
  return (
    <article>
      <Estructurap
        llanta={llanta1}
        titulo="LLANTAS"
        descripcion="En Tyres&M, entendemos que las llantas son mucho más que simples ruedas. Son la conexión vital entre tu vehículo y el camino, y desempeñan un papel crucial en tu seguridad, rendimiento y comodidad al conducir. Es por eso que ofrecemos una amplia selección de llantas de la más alta calidad para satisfacer todas tus necesidades y preferencias."
        marca="Barum"
        precio="$18"
        distribuidor="Barum"
        llanta2={llanta2}
      />
      <ProductosLLantas/>
     
    </article>

  );
};

export default Llantas;