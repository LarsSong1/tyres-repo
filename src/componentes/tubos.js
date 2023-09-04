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
    descripcion="En Tyres&M, entendemos que los tubos desempeñan un papel esencial en una amplia variedad de aplicaciones industriales y comerciales. Por eso, ofrecemos una extensa gama de tubos de alta calidad que cumplen con los más altos estándares de durabilidad, resistencia y rendimiento."
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