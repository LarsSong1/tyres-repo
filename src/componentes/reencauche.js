import React from 'react'
import Estructurap from './estructura'
import reencauche from '../img/reencauche.svg'
import reencauche2 from '../img/reencauche2.svg'
import ReencaucheEstructura from './reencauche-estructura'

function Reencauche() {
  return (
    <section>
      <Estructurap
        llanta={reencauche}
        titulo="REENCAUCHE Y MÁS"
        descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptatem asperiores blanditiis, consequuntur ratione sed soluta nobis amet. Alias dolore magnam voluptates cum? Pariatur laudantium maiores saepe non sint culpa. ratione sed soluta nobis amet. Alias dolore magnam voluptates cum? Pariatur laudantium maiores saepe non sint culpa"
        marca="Barum"
        precio="$18"
        distribuidor="Barum"
        llanta2={reencauche2}
      />
      <ReencaucheEstructura/>

    </section>

  );
};

export default Reencauche