import React from 'react'
import Estructurap from './estructura'
import tubo from '../img/tubos.svg'
import tubo2 from '../img/tubos2.svg'
import TubosEstructura from './tubos-estructura';
function Tubos() {
  return (
    <section>
    <Estructurap
    llanta={tubo}
    titulo="TUBOS"
    descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptatem asperiores blanditiis, consequuntur ratione sed soluta nobis amet. Alias dolore magnam voluptates cum? Pariatur laudantium maiores saepe non sint culpa. ratione sed soluta nobis amet. Alias dolore magnam voluptates cum? Pariatur laudantium maiores saepe non sint culpa"
    marca="Barum"
    precio="$18"
    distribuidor="Barum"
    llanta2={tubo2}
    />
    <TubosEstructura/>
    </section>
  
    
  );
};

export default Tubos