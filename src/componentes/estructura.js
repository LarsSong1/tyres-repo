import React from 'react'
import '../css/estructura.css'

function Estructurap({ llanta, titulo, descripcion, marca, precio, distribuidor, llanta2 }) {
  return (
    <div className='col-12 mx-auto contendor-estructura mt-5 mb-5 '>
      <div className='d-flex col-11 justify-content-center aling-items-center flex-wrap mx-auto'>
        <div className='col-12 col-md-6 col-lg-6'>
          <img className='img-fluid img-llantas' src={llanta} alt="llantas" />
        </div>
        <div className='col-12 col-md-6 col-lg-6 llantas-texto'>
          <h1>{titulo}</h1>
          <p>{descripcion}</p>
        </div>
      </div>
      <div className='d-flex col-11 justify-content-center align-items-center flex-wrap mt-5 mb-5 mx-auto'>
        <div className='col-12 col-md-6 col-lg-6 llantas-subtexto'>
          <h1>Mejor Adquisición</h1>
          <p>Marca: {marca}</p>
          <p>Precio: {precio}</p>
          <p>Distribuidor:  {distribuidor}</p>
        </div>
        <div className='col-12 col-md-6 col-lg-6 d-flex justify-content-end'>
          <img className='img-fluid img-llantas2' src={llanta2} alt="llantas2" />
        </div>
      </div>
    </div>
  );
};

export default Estructurap;