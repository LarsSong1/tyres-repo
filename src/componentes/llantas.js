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
        descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptatem asperiores blanditiis, consequuntur ratione sed soluta nobis amet. Alias dolore magnam voluptates cum? Pariatur laudantium maiores saepe non sint culpa. ratione sed soluta nobis amet. Alias dolore magnam voluptates cum? Pariatur laudantium maiores saepe non sint culpa"
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